<template>
    <div class="point_detail_table_container" :style="{'top': top}">
        <header>
            <div class="header_left">{{pointType}}</div>
            <div class="header_right">
                <span class="expand_icon" @tap="isFullscreen=!isFullscreen">&harr;</span>
                <span class="close_icon" @tap="onCloseIconClick">X</span>
            </div>
        </header>
        <el-table
            :data="detailDataTab"
            style="width: 100%;"
            :height="isFullscreen ? fullscreenHeight :  defaultHeight"
        >
            <el-table-column
                prop="propertyName"
                label="属性"
                align="left"
            ></el-table-column>
            <el-table-column
                prop="propertyValue"
                label="数值"
                align="left"
            ></el-table-column>
        </el-table>
        <footer @tap="findGeo" v-show="isShowGeo">
          <span class="list_item_icon fas fa-map-marker-alt position_icon" style="color: lightgreen;"></span>
          <span>导航</span>          
        </footer>
    </div>
</template>
<script>
import $ from "jquery";
export default {
  props: {
    detailData: {
      type: Array,
      default: []
    }
  },
  mounted() {
    // 根据不同的设备计算表格的默认高度与全屏高度
    this.defaultHeight = $(window).height() * 0.43 - 62 - 30;
    this.fullscreenHeight =
      $(window).height() -
      $("header.mui-bar").height() -
      $(".gis_action_bar_container").height() - 30;

    this.fullscreenTop = $("header.mui-bar").height() + "px";
  },
  computed: {
    top() {
      return this.isFullscreen ? this.fullscreenTop : this.defaultTop;
    },
    pointType() {
      let obj = _.find(this.detailData, { propertyName: "设备类型" });
      return obj ? obj.propertyValue : "经纬度";
    },
    detailDataTab(){
      let detail = _.reject(this.detailData,res=>{
        return res.propertyName == "Geo";
      })
      return detail
    },
    isShowGeo(){
      console.log(this.detailData)
      let detailGx = _.filter(this.detailData,res=>{
        return res.propertyName == "材质";
      })
      return detailGx.length > 0 ? true : false
    },
    defaultTop(){
      return this.isShowGeo ? "50vh" : "56vh" ;
    }
  },
  data() {
    return {
     
      fullscreenTop: 0,

      defaultHeight: 192,
      fullscreenHeight: 0,

      // 当前表格是否是展开状态
      isFullscreen: false,
    };
  },
  methods: {
    onCloseIconClick() {
      this.$emit("close");
    },
    findGeo(){
      let detail = _.reject(this.detailData,res=>{
        return res.propertyName != "Geo";
      })
      let EventX = detail[0].propertyValue;
      let EventY = detail[1].propertyValue;
      if (EventX && EventY) {
        if (window.plus && window.plus.maps && window.plus.geolocation) {
          this.$showLoading();
          window.plus.geolocation.getCurrentPosition(
            position => {
              let srcPoint = new plus.maps.Point(
                position.coords.longitude,
                position.coords.latitude
              );
              let destDesc = "目标设备";
              let destPoint = new plus.maps.Point(
                Number(EventX),
                Number(EventY)
              );
              window.plus.maps.openSysMap(destPoint, destDesc, srcPoint);
              this.$hideLoading();
            },
            err => {
              this.$hideLoading();
              window.mui.toast("定位失败，无法调起导航");
            },
            {
              enableHighAccuracy: true,
              maximumAge: 10000,
              provider: "system",
              coordsType: "wgs84"
            }
          );
        }
      }
    }
  }
};
</script>

<style lang="less">
.point_detail_table_container {
  position: fixed;
  bottom: 61px;
  left: 0;
  right: 0;
  transition: 0.5s all;
  overflow: hidden;
  .el-table {
    transition: 0.5s height;
  }
  header {
    height: 30px;
    width: 100%;
    padding: 2%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #aaa;
    color: white;
    .header_right {
      display: inline-flex;
      width: 15%;
      justify-content: space-between;
      align-items: center;
    }
  }
  footer{
    height: 40px;
    line-height: 40px;
    width: 100%;
    background: #fff;
    color: #aaa;
  }
}
</style>


