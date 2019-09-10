<template>
    <div class="order_detail_container">
        <div class="order_detail_info">
            <!-- 事件内容 -->
            <el-card>
              <div slot="header" class="clearfix card_header">
                <span class="header_text">事件编号： {{orderInfo.EventCode}}</span>
              </div>
              <div class="card_body">
                <div class="left">
                  <li><span class="list_item_label">上报时间： </span><span class="list_item_content">{{orderInfo.OrderTime}}</span></li>
                  <li><span class="list_item_label">所属部门： </span><span class="list_item_content">{{orderInfo.DeptId}}</span></li>
                  <li><span class="list_item_label">派单人： </span><span class="list_item_content">{{orderInfo.DispatchPerson}}</span></li>
                  <li>
                      <span class="list_item_label"><el-button :type="orderInfo.UrgencyId | urgencyButtonType">{{orderInfo.UrgencyId}}</el-button></span>
                      <span class="list_item_content"><el-button :type="orderInfo.HandlerLevelId | levelButtonType">{{orderInfo.HandlerLevelId}}</el-button></span>
                  </li>
                  <li @tap="onAddrRowClick">
                    <!-- 点击位置信息，可以唤起手机上第三方地图app -->
                    <span class="list_item_label addr_span">
                      <span class="list_item_icon fas fa-map-marker-alt position_icon" style="color: lightgreen;"></span>
                      <span class="address_info" :style="{color: orderInfo.EventAddress ? '#001d26' : '#aaa'}">{{orderInfo.EventAddress || '暂无位置信息'}}</span>
                    </span>
                    <span class="list_item_content"></span>
                  </li>
                  <li><span class="list_item_label">事件来源： </span><span class="list_item_content">{{orderInfo.EventFrom}}</span></li>
                  <li><span class="list_item_label">事件类型： </span><span class="list_item_content">{{orderInfo.EventType}}</span></li>
                  <li><span class="list_item_label">事件内容： </span><span class="list_item_content">{{orderInfo.EventContent}}</span></li>
                </div>
              </div>
            </el-card>
            <!-- 事件描述 -->
            <el-card>
              <div slot="header" class="clearfix card_header">
                <span class="header_text">事件描述</span>
              </div>
              <div class="card_body">
                {{orderInfo.EventDesc}}
              </div>
            </el-card>
            <!-- 现场图片 -->
            <el-card>
              <div slot="header" class="clearfix card_header">
                <span class="header_text">现场图片</span>
              </div>
              <div class="card_body picture_list">
                <img 
                    v-for="(pic, index) in pictureList" 
                    :key="pic" 
                    :src="pictureBasePath + pic"
                    @tap="onImageClick(index)"
                >
              </div>
            </el-card>
        </div>
        <!-- 底部按钮组 -->
        <div class="fixed_footer">
            <button 
                v-if="orderOperState == 6" 
                class="button button-primary button-rounded  button-large full_width_button"
            >审 核 中</button>
            <button 
                v-if="orderOperState == 7" 
                class="button button-rounded button-action button-large full_width_button"
            >已 完 成</button>
            <button 
                v-if="orderOperState == 2" 
                class="button button-rounded button-action button-large full_width_button custom_bgcolor_dark"
                @click="onTakeOrderClick"
            >接 单</button>
            <div class="button-group" v-if="orderOperState >= 3">
                <!-- tap事件在PC端测试的时候，会有一点bug -->
                <button 
                    type="button" 
                    class="button custom_bgcolor_light" 
                    :key="action.name"
                    :disabled="action.index > 2 && !(action.index === orderOperState)"
                    v-for="action in actionList" 
                    @click="onActionClick(action)"
                >{{action.name}}</button>
            </div>
        </div>
        <!-- 操作弹出框 -->
        <el-dialog
          :title="activeAction.actionName"
          :visible.sync="actionDialogVisible"
          width="80%"
          @close="onActionDialogClose"
          center
        >
          <OrderActionsDialog :actionType="activeAction.actionTypeIndex" ref="actionDialogContent"></OrderActionsDialog>
          <div slot="footer">
            <el-button @click="onActionDialogCancel">取 消</el-button>
            <el-button @click="onActionDialogConfirm" type="primary">提 交</el-button>
          </div>
        </el-dialog>
    </div>
</template>
<script>
import config from "@config/config";
import { getSessionItem } from "@common/util";
import apiMaintain from "@api/maintain";
import OrderActionsDialog from "@comp/order-detail/OrderActionsDialog.vue";
export default {
  props: {
    orderInfo: [Object, String]
  },
  beforeRouteEnter(to, from, next) {
    // 进入该路由的钩子函数，可通过next回调函数拿到组件的实例对象引用
    next(instance => {
      /* 
        在本页面直接刷新页面时，路由参数会变成String从而使页面内容无法加载，
        这里判断props的类型正确性，如果不正确，后退到上个页面
      */
      if (typeof instance.orderInfo === "string") {
        // 路由参数类型正确
        instance.$router.go(-1);
      } else {
        // 路由参数类型错误
        // 定制该路由下的设备返回键逻辑
        instance.$defineDeviceBack(defaultFunction => {
          if (instance.actionDialogVisible) {
            // 如果当前有弹出框，则返回键会关闭弹出框
            instance.actionDialogVisible = false;
          } else {
            // 如果当前没有弹出框，则使用默认返回逻辑
            defaultFunction();
          }
        });
      }
    });
  },
  data() {
    return {
      defaultPicture: "./static/images/none.jpg",
      pictureBasePath: config.uploadFilePath.inspection,
      // 本页面的四种操作及其对应调用的restful api
      actionList: [
        { name: "退 单", index: 1, interface: apiMaintain.ChargeBackOrder },
        { name: "延 期", index: 2, interface: apiMaintain.DelayOrder },
        { name: "到 场", index: 3, interface: apiMaintain.ChangeMissionStatus },
        { name: "维 修", index: 4, interface: apiMaintain.ChangeMissionStatus },
        { name: "完 工", index: 5, interface: apiMaintain.ChangeMissionStatus }
      ],
      orderOperState: Number(this.orderInfo.OperId),
      orderStatus: Number(this.orderInfo.OrderStatus),
      // 订单操作弹出框是否弹出
      actionDialogVisible: false,
      // （对于进行中的订单）当前正在进行的操作
      activeAction: {
        // String 操作名称
        actionName: "",
        // Int (1~5: 退单、延期、到场、维修、完工 )
        actionTypeIndex: ""
      }
    };
  },
  computed: {
    // 当前的用户信息
    currentUser() {
      return JSON.parse(getSessionItem("currentUser"));
    },
    // 当前用户id
    currentUserId() {
      return this.currentUser.PersonId;
    },
    // 当前订单id
    currentOrderId() {
      return this.orderInfo.OrderId;
    },
    // 当前订单的事件类型
    currentOrderEventType() {
      return this.orderInfo.EventType;
    },
    pictureList() {
      return this.splitPicturesStr(this.orderInfo.EventPictures);
    }
  },
  methods: {
    splitPicturesStr(str) {
      if (str.length > 0) {
        return str.includes("|") ? str.split("|") : [str];
      } else {
        return [];
      }
    },
    onAddrRowClick() {
      // 调用百度地图app导航
      if (this.orderInfo.EventX && this.orderInfo.EventY) {
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
                Number(this.orderInfo.EventX),
                Number(this.orderInfo.EventY)
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
    },
    onTakeOrderClick() {
      window.mui.confirm(
        "确定接单吗？",
        "提醒：",
        ["取消", "确认"],
        result => {
          if (result.index === 1) {
            // 确认
            let reqData = Object.assign(
              {},
              {
                personId: this.currentUserId,
                orderId: this.currentOrderId,
                operationId: 3,
                description: "",
                pictureList: [],
                speechData: ""
              }
            );
            apiMaintain
              .ChangeMissionStatus(reqData)
              .then(res => {
                if (res.data[0].result === true) {
                  this.orderOperState++;
                  mui.toast("接单成功！");
                } else {
                  mui.toast(`接单失败！${res.data.data[0].message}`);
                }
              })
              .catch(err => {
                mui.toast("服务器异常，请稍后再试");
                console.log(err);
              });
          } else {
            // 取消
          }
        },
        "div"
      );
    },
    onActionClick(action) {
      this.activeAction = {
        actionTypeIndex: action.index,
        actionName: action.name,
        operationId: action.index + 1,
        interface: action.interface
      };
      console.log(this.activeAction);
      this.actionDialogVisible = true;
    },
    onActionDialogClose() {
      // 清空弹出框内组件的输入值
      this.$refs.actionDialogContent.reset();
    },
    onActionDialogConfirm() {
      this.$showLoading();
      let actionData = this.$refs.actionDialogContent.getValue();
      // 发送请求
      let reqData = Object.assign({}, actionData, {
        personId: this.currentUserId,
        orderId: this.currentOrderId,
        eventType: this.currentOrderEventType,
        operationId: this.activeAction.operationId
      });
      console.log(`${this.activeAction.actionName} req:`, reqData);
      this.activeAction
        .interface(reqData)
        .then(res => {
          console.log("req data ", reqData);
          console.log(res);
          this.actionDialogVisible = false;
          this.$hideLoading();
          if (res.data[0].result === true) {
            mui.toast("操作成功！");
            this.orderOperState++;
          } else {
            mui.toast(`操作失败！${res.data.data[0].message}`);
          }
        })
        .catch(err => {
          this.actionDialogVisible = false;
          this.$hideLoading();
          mui.toast("服务器异常，请稍后再试");
          console.log(err);
        });
    },
    onActionDialogCancel() {
      this.actionDialogVisible = false;
    },
    // 预览图片
    onImageClick(index = 0) {
      let list = this.pictureList.map(url => {
        return `${this.pictureBasePath}${url}`;
      });
      plus.nativeUI.previewImage(list, { current: index });
    }
  },
  filters: {
    urgencyButtonType(urgency) {
      let buttonType = "primary";
      switch (urgency) {
        case "一般":
          buttonType = "primary";
          break;
        case "紧急":
          buttonType = "warning";
          break;
        case "加急":
          buttonType = "danger";
          break;
      }
      return buttonType;
    },
    levelButtonType(level) {
      let buttonType = "primary";
      if (typeof level === "string") {
        if (level.startsWith("2小时")) {
          buttonType = "danger";
        } else if (level.startsWith("4小时")) {
          buttonType = "warning";
        }
      }
      return buttonType;
    }
  },
  components: { OrderActionsDialog }
};
</script>

<style lang="less">
.order_detail_container {
  /* 覆盖默认padding */
  div.el-dialog__body {
    padding: 3%;
  }
  .order_detail_info {
    margin-bottom: 10vh;
    .el-card {
      margin-bottom: 1%;
    }
    .card_header {
      font-size: 1.4rem;
    }
    .card_body {
      font-size: 1.2rem;
      .left {
        li {
          list-style-type: none;
          margin: 3% 0;
        }
        .addr_span {
          display: flex;
          .position_icon {
            margin-right: 2%;
          }
        }
        .list_item_label {
          color: #999;
        }
      }
    }
    .picture_list {
      display: flex;
      flex-flow: row wrap;
      justify-content: start;
      img {
        width: 35vw;
        height: 40vw;
        margin-bottom: 4%;
        margin-left: 2%;
        border: 1px solid royalblue;
        border-radius: 10px;
      }
    }
  }
  .fixed_footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 9vh;
    .full_width_button {
      width: 100%;
      height: inherit;
      margin: 0 auto;
    }
    .button-group {
      width: inherit;
      height: inherit;
      button {
        width: 20%;
        height: inherit;
        padding: 0;
      }
    }
  }
}
</style>


