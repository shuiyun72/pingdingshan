<template>
    <div class="duty_log_container">
        <div class="filter_container">
            <el-input
                clearable
                placeholder="姓名"
                v-model="filterName"
                style="width: 30%;"
            ></el-input>
            <el-date-picker
                v-model="filterStartDate"
                ref="startDatePicker"
                name="startDatePicker"
                placeholder="开始时间"
                :prefix-icon="'-'"
                :editable="false"
                format="yyyy-MM-dd"
                value-format="yyyy-MM-dd"
                style="width: 33%;"
                class="date_picker_padding_left_5"
            >
            </el-date-picker>
            <el-date-picker
                v-model.lazy="filterEndDate"
                ref="endDatePicker"
                name="endDatePicker"
                placeholder="结束时间"
                :prefix-icon="'-'"
                :editable="false"
                format="yyyy-MM-dd"
                value-format="yyyy-MM-dd"
                style="width: 33%;"
                class="date_picker_padding_left_5"
            >
            </el-date-picker>
        </div>
        <div class="button_group_container">
            <el-button icon="el-icon-delete" class="action_button custom_bgcolor_dark" @click="onSearchResetButtonClick">重 置</el-button>
            <el-button icon="el-icon-search" class="action_button custom_bgcolor_light" @click="onSearchButtonClick">搜 索</el-button>
        </div>
        <div class="record_table_container">
            <el-table
                :data="recordTableData"
                class="record_table"
                stripe                
                border
                height="65vh"
                :header-cell-style="styleTextCenter"
                :cell-style="styleTextCenter"
                v-loading="logTableLoading"
            >
                <el-table-column
                    prop="name"
                    label="生产调度记录"
                    sortable
                    min-width="130"
                >
                </el-table-column>
                <el-table-column
                    prop="worker"
                    label="值班人员"
                >
                </el-table-column>
                <el-table-column
                    fixed="right"
                    label="查看编辑"
                >
                    <template slot-scope="scope">
                        <el-button @click="onViewClick(scope.row)" type="text" size="medium">查看</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <div class="pagination_container">
            <!-- 第一行 -->
            <el-pagination
                :current-page.sync="currentPageNumber"
                :page-sizes="[5, 10, 20, 50, 100, 200]"
                :page-size="currentPageSize"
                :pager-count="5"
                layout="prev, pager, next"
                :total="logRecordTotal"
                class="log_table_paginator wrap"
            >
            </el-pagination>
            <!-- 第二行 -->
            <el-pagination
                :current-page.sync="currentPageNumber"
                @size-change="onPageSizeChange"
                :page-size="currentPageSize"
                :page-sizes="[5, 10, 20, 50, 100, 200]"
                layout="total, sizes, jumper"
                :total="logRecordTotal"
                class="log_table_paginator wrap"
            >
            </el-pagination>
        </div>
        <!-- 日志详情弹出框 -->
        <el-dialog
            title="供水生产调度记录"
            :visible.sync="viewLogDialogVisible"
            fullscreen
            center
        >
            <div class="log_detail_container">
                <div class="period_container">
                    <span class="gray">请选择值班时段</span>
                    <el-select v-model="pickedViewPeriod" placeholder="请选择时段" style="width: 100%;">
                        <el-option
                            v-for="item in periodSelectorOptions"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                        >
                        </el-option>
                    </el-select>
                </div>
                <div class="date_and_worker_container">
                    <div class="date">
                        <span class="gray date_text">日 期：</span><span>{{currentViewLogData.createTime}}</span>
                    </div>
                    <div class="worker">
                        <span class="gray worker_name">值班人员：</span><span>{{currentViewLogData[`c${pickedViewPeriod}Worker`] || '无值班人员'}}</span>
                    </div>
                </div>
                <div class="detail_text_container">
                    <span class="gray">生产调度记录详情</span>
                    <el-input
                        type="textarea"
                        readonly
                        :autosize="{ minRows: 5, maxRows: 10}"
                        :value="currentViewLogData[`c${pickedViewPeriod}Record`] || '无记录信息'"
                    >
                    </el-input>
                </div>
            </div>
            <span slot="footer">
                <el-button type="primary" style="width: 100%;" @click="viewLogDialogVisible = false">关 闭</el-button>
            </span>
        </el-dialog> 
    </div>    
</template>

<script>
import _ from "lodash";
import dateHelper from "@common/dateHelper";
import apiMonitor from "@api/monitor";
export default {
  beforeRouteEnter(to, from, next) {
    next(instance => {
      // 改变返回键行为
      instance.$defineDeviceBack(defaultFunction => {
        if (instance.viewLogDialogVisible) {
          // 如果当前有弹出框，则返回键会关闭弹出框
          instance.viewLogDialogVisible = false;
        } else {
          // 如果当前没有弹出框，则使用默认返回逻辑
          defaultFunction();
        }
      });
      // 获取表格数据
      instance.fetchLogRecordList(
        {
          pageNumber: instance.currentPageNumber,
          rowsPerPage: instance.currentPageSize,
          workerName: instance.filterName,
          startTime: instance.filterStartDate,
          endTime: instance.filterEndDate,
          recordId: ""
        },
        (err, data) => {
          if (err) {
            window.mui.toast(err.message);
          } else {
            instance.recordTableData = data.recordList;
            instance.logRecordTotal = data.total;
          }
        }
      );
    });
  },
  data() {
    return {
      styleTextCenter: { "text-align": "center" },

      // 表格数据
      recordTableData: [],
      logTableLoading: false,

      // 顶部姓名过滤器的值
      filterName: "",
      // 顶部日期选择器的值
      filterStartDate: "",
      filterEndDate: "",

      // 分页相关
      // 日志总数
      logRecordTotal: 0,
      // 当前页码
      currentPageNumber: 1,
      // 当前每页条数
      currentPageSize: 5,

      // 查看值班日志详情的弹出框是否可见
      viewLogDialogVisible: false,
      // 当前点击查看的日志数据
      currentViewLogData: {},
      // 当前点击查看的日志的文本域内容
      currentViewLogDetailText: "",

      // 当前选择查看的记录时段
      pickedViewPeriod: "Morning",
      // 选择器select的配置对象
      periodSelectorOptions: [
        {
          label: "上午",
          value: "Morning"
        },
        {
          label: "下午",
          value: "Afternoon"
        },
        {
          label: "夜晚",
          value: "Night"
        }
      ]
    };
  },
  computed: {},
  methods: {
    fetchLogRecordList(
      {
        pageNumber = 1,
        rowsPerPage = 5,
        workerName = "",
        startTime = "",
        endTime = "",
        recordId = ""
      },
      callback
    ) {
      this.logTableLoading = true;
      apiMonitor
        .GetDutyLogData(
          pageNumber,
          rowsPerPage,
          workerName,
          startTime,
          endTime,
          recordId
        )
        .then(res => {
          this.logTableLoading = false;
          if (res.data.ErrCode == 0) {
            let recordList = _.map(res.data.rows, record => {
              return Object.assign(
                {
                  id: record.iDutyRecordID,
                  name: record.dDutyTimeYMD,
                  createTime: record.dDutyTimeYMD,
                  worker: record.cMorningWorker
                },
                record
              );
            });
            // 获取记录总数
            let total = res.data.total;
            if (callback instanceof Function) {
              callback(null, { recordList, total });
            }
          } else {
            if (callback instanceof Function) {
              callback({
                code: res.data.ErrCode,
                message: res.data.ErrInfo
              });
            }
          }
        })
        .catch(err => {
          this.logTableLoading = false;
          window.mui.toast("获取数据失败，请稍后再试");
        });
    },
    onViewClick(row, scope) {
      console.log("点击查看，", row, scope);
      this.currentViewLogData = row;
      this.pickedViewPeriod = "Morning";
      this.viewLogDialogVisible = true;
    },
    onSearchButtonClick() {
      this.fetchLogRecordList(
        {
          pageNumber: this.currentPageNumber,
          rowsPerPage: this.currentPageSize,
          workerName: this.filterName,
          startTime: this.filterStartDate,
          endTime: this.filterEndDate,
          recordId: ""
        },
        (err, data) => {
          if (err) {
            window.mui.toast(err.message);
          } else {
            this.recordTableData = data.recordList;
            this.logRecordTotal = data.total;
          }
        }
      );
    },
    onSearchResetButtonClick() {
      // 清空过滤器控件的值
      this.filterName = "";
      this.filterStartDate = "";
      this.filterEndDate = "";
      // 更新表格数据
      if (this.currentPageNumber == 1 && this.currentPageSize == 5) {
        this.onSearchButtonClick();
      } else {
        // 由于设置了watcher，改变以下两个值的时候就会发送请求
        this.currentPageSize = 5;
        this.currentPageNumber = 1;
      }
    },
    onPageSizeChange(size) {
      this.currentPageSize = size;
      this.fetchLogRecordList(
        {
          pageNumber: this.currentPageNumber,
          rowsPerPage: this.currentPageSize,
          workerName: this.filterName,
          startTime: this.filterStartDate,
          endTime: this.filterEndDate,
          recordId: ""
        },
        (err, data) => {
          if (err) {
            window.mui.toast(err.message);
          } else {
            this.recordTableData = data.recordList;
            this.logRecordTotal = data.total;
          }
        }
      );
    }
  },
  watch: {
    currentPageNumber(newVal) {
      this.fetchLogRecordList(
        {
          pageNumber: this.currentPageNumber,
          rowsPerPage: this.currentPageSize,
          workerName: this.filterName,
          startTime: this.filterStartDate,
          endTime: this.filterEndDate,
          recordId: ""
        },
        (err, data) => {
          if (err) {
            window.mui.toast(err.message);
          } else {
            this.recordTableData = data.recordList;
            this.logRecordTotal = data.total;
          }
        }
      );
    }
  }
};
</script>

<style lang="less">
.duty_log_container {
  div {
    font-size: 1.2rem;
  }
  .gray {
    color: #888;
  }
  div.date_picker_padding_left_5 {
    &.el-input {
      input {
        padding-left: 5px;
        font-size: 14px;
      }
    }
  }
  .filter_container {
    width: 100%;
    text-align: center;
  }
  .button_group_container {
    text-align: center;
    margin: 1vh 0;
    .action_button {
      width: 45%;
    }
  }
  .pagination_container {
    width: 100%;
    .log_table_paginator {
      text-align: center;
      width: 100%;
      &.wrap {
        white-space: pre-wrap;
      }
    }
  }
  .log_detail_container {
    & > div {
      margin-bottom: 10%;
    }
    .date_text,
    .worker_name {
      display: inline-block;
      width: 30%;
    }
  }
}
</style>


