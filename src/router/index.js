import Vue from 'vue'
import Router from 'vue-router'
import Index from '@pages/Index'
import Login from '@pages/Login'
import Test from '@pages/Test'
import FeaturePage from '@pages/FeaturePage'

import {
  StateSummary,
  ProcessMonitor,
  DutyLog,
  StatisticIndex,
  StatisticQuery,
  StatisticDetail,
  PressureMonitorIndex,
  PressureMonitorList,
  PressureMonitorDetail,
  FlowMonitorIndex,
  FlowMonitorList,
  FlowMonitorDetail,
  WaterQualityMonitorIndex,
  WaterQualityMonitorList,
  WaterQualityMonitorDetail,
  DMAMonitorIndex,
  DMAMonitorList,
  DMAStatistic,
  Map,
  Attendance,
  RepairOrders,
  OrderDetail,
  OrderAssignment,
  OrderHandler,
  PatrolMission,
  ConservationMission,
  EventSubmission,
  AccountCenter,
  Setting
} from '@pages/features'

import {
  setSessionItem,
  getSessionItem,
  setLocalItem,
} from '@common/util'

// import _ from "lodash";
import apiInspection from "@api/inspection";
import apiMaintain from "@api/maintain";
import Timer from "@common/timer";
import dateHelper from "@common/dateHelper";

import PositionUploader from "@JS/position-uploader/PositionUploader";

Vue.use(Router)


let fetchRepairOrdersTaskId = 'fetch_repair_orders'
// 初始化定时上传定位任务
function initUploadPositionTask(cb) {
  let currentUser = JSON.parse(getSessionItem('currentUser'))
  // 发送请求
  apiInspection
    .GetAttendanceRecords({
      PersonId: currentUser.PersonId,
      DateStartStr: dateHelper.format(new Date(), "yyyy-MM") + "-01",
      DateEndStr: dateHelper.format(new Date(), "yyyy-MM") + "-31"
    })
    .then(res => {
      if (res.data.result === true) {
        let records = res.data.Data;
        console.log("gaga", records);
        let mappedRecords = records.map(record => {
          return {
            date: record.Lwr_Date,
            startTime: record.Lwr_StartTime.split(" ")[1],
            endTime: record.Lwr_EndTime.split(" ")[1],
            personStatus: record.Lwr_PersonStatus,
            comments: record.Lwr_BeiZhu
          };
        });

        // 计算当前的考勤状态
        // if (dateHelper.format(new Date(), "yyyy-MM-dd") === mappedRecords[0].date) {
        //   if (mappedRecords[0].startTime === mappedRecords[0].endTime) {
        //     // if (true) {
        //     // 已签到
        //     window.SIGN_STATUS = 1
        //     console.log("重启开启！");
        //     PositionUploader.start()
        //     cb(true)
        //   } else {
        //     window.SIGN_STATUS = 2
        //     // 已签退
        //     cb(false)
        //   }
        // } else {
        //   window.SIGN_STATUS = 0
        //   // 未签到
        //   cb(false)
        // }
      } else {
        cb(false)
      }
    }).catch(err => {
      console.log('router api err!!', err)
      cb(false)
    });
}


const router = new Router({
  routes: [{
      path: '/',
      name: 'Index',
      component: Index,
      meta: {
        // 该页面需要登录才可访问
        requireAuth: true
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }, {
      path: '/test',
      name: 'Test',
      component: Test
    },
    {
      path: '/featurepage',
      component: FeaturePage,
      meta: {
        requireAuth: true
      },
      children: [{
        path: '',
        name: 'FeaturePageIndex',
        redirect: {
          name: 'Index'
        }
      }, {
        path: 'state-summary',
        name: 'StateSummary',
        component: StateSummary,
        meta: {
          requireAuth: true,
          title: '运行总览'
        }
      }, {
        path: 'process-monitor',
        name: 'ProcessMonitor',
        component: ProcessMonitor,
        meta: {
          requireAuth: true,
          title: '过程监控'
        }
      }, {
        path: 'duty-log',
        name: 'DutyLog',
        component: DutyLog,
        meta: {
          requireAuth: true,
          title: '值班日志'
        }
      }, {
        path: 'statistic',
        component: StatisticIndex,
        meta: {
          requireAuth: true,
        },
        children: [{
          path: '',
          name: 'StatisticIndex',
          redirect: {
            name: 'StatisticQuery'
          }
        }, {
          path: 'query',
          name: 'StatisticQuery',
          component: StatisticQuery,
          meta: {
            requireAuth: true,
            title: '数据查询'
          }
        }, {
          path: 'detail',
          name: 'StatisticDetail',
          component: StatisticDetail,
          // props: (route) => ({
          //     pointId: route.query.pointId,
          //     pointName: route.query.pointName
          // }),
          meta: {
            requireAuth: true,
            title: '压力详情'
          }
        }]
      }, {
        path: 'pressure-monitor',
        component: PressureMonitorIndex,
        meta: {
          requireAuth: true,
        },
        children: [{
          path: '',
          name: 'PressureMonitorIndex',
          redirect: {
            name: 'PressureMonitorList'
          }
        }, {
          path: 'list',
          name: 'PressureMonitorList',
          component: PressureMonitorList,
          meta: {
            requireAuth: true,
            title: '压力监测'
          }
        }, {
          path: 'detail',
          name: 'PressureMonitorDetail',
          component: PressureMonitorDetail,
          props: (route) => ({
            pointId: route.query.pointId,
            pointName: route.query.pointName
          }),
          meta: {
            requireAuth: true,
            title: '压力详情'
          }
        }]
      }, {
        path: 'flow-monitor',
        component: FlowMonitorIndex,
        meta: {
          requireAuth: true,
          title: '流量监测'
        },
        children: [{
          path: '',
          name: 'FlowMonitorIndex',
          redirect: {
            name: 'FlowMonitorList'
          }
        }, {
          path: 'list',
          name: 'FlowMonitorList',
          component: FlowMonitorList,
          meta: {
            requireAuth: true,
            title: '流量监测'
          }
        }, {
          path: 'detail',
          name: 'FlowMonitorDetail',
          component: FlowMonitorDetail,
          props: (route) => ({
            pointId: route.query.pointId,
            tableId: route.query.tableId,
            pointName: route.query.pointName
          }),
          meta: {
            requireAuth: true,
            title: '流量详情'
          }
        }]
      }, {
        path: 'water-quality-monitor',
        component: WaterQualityMonitorIndex,
        meta: {
          requireAuth: true,
          title: '水质监测'
        },
        children: [{
          path: '',
          name: 'WaterQualityMonitorIndex',
          redirect: {
            name: 'WaterQualityMonitorList'
          }
        }, {
          path: 'list',
          name: 'WaterQualityMonitorList',
          component: WaterQualityMonitorList,
          meta: {
            requireAuth: true,
            title: '水质监测'
          }
        }, {
          path: 'detail',
          name: 'WaterQualityMonitorDetail',
          component: WaterQualityMonitorDetail,
          props: (route) => ({
            pointId: route.query.pointId,
            pointName: route.query.pointName
          }),
          meta: {
            requireAuth: true,
            title: '水质详情'
          }
        }]
      }, {
        path: 'DMA-monitor',
        component: DMAMonitorIndex,
        meta: {
          requireAuth: true,
          title: 'DMA监测'
        },
        children: [{
          path: '',
          name: 'DMAMonitorIndex',
          redirect: {
            name: 'DMAMonitorList'
          }
        }, {
          path: 'list',
          name: 'DMAMonitorList',
          component: DMAMonitorList,
          meta: {
            requireAuth: true,
            title: '分区总览'
          }
        }, {
          path: 'statistic',
          name: 'DMAStatistic',
          component: DMAStatistic,
          // props: (route) => ({
          //     pointId: route.query.pointId,
          //     pointName: route.query.pointName
          // }),
          meta: {
            requireAuth: true,
            title: 'DMA统计'
          }
        }]
      }, {
        path: 'map',
        name: 'Map',
        component: Map,
        props: (route) => ({
          mode: route.query.mode
        }),
        meta: {
          requireAuth: true,
          title: '移动GIS'
        }
      }, {
        path: 'mission-map',
        name: 'MissionMap',
        component: Map,
        props: (route) => ({
          mode: route.query.mode,
          taskId: route.query.taskId,
          taskName: route.query.taskName,
          taskType: route.query.taskType
        }),
        meta: {
          requireAuth: true,
          title: '任务地图'
        }
      }, {
        path: 'attendance',
        name: 'Attendance',
        component: Attendance,
        meta: {
          requireAuth: true,
          title: '考勤管理'
        }
      }, {
        path: 'orders',
        name: 'RepairOrders',
        component: RepairOrders,
        meta: {
          requireAuth: true,
          title: '维修工单'
        }
      }, {
        path: 'assignment',
        name: 'OrderAssignment',
        component: OrderAssignment,
        meta: {
          requireAuth: true,
          title: '工单分派'
        }
      }, {
        path: 'orderhandler',
        name: 'OrderHandler',
        component: OrderHandler,
        props: (route) => ({
          orderInfo: route.query.orderInfo
        }),
        meta: {
          requireAuth: true,
          title: '工单处理'
        }
      }, {
        path: 'patrol',
        name: 'PatrolMission',
        component: PatrolMission,
        meta: {
          requireAuth: true,
          title: '巡检任务'
        }
      }, {
        path: 'conservation',
        name: 'ConservationMission',
        component: ConservationMission,
        meta: {
          requireAuth: true,
          title: '养护任务'
        }
      }, {
        path: 'OrderDetail',
        name: 'OrderDetail',
        component: OrderDetail,
        props: route => ({
          orderInfo: route.query.orderInfo
        }),
        meta: {
          requireAuth: true,
          title: '任务详情'
        }
      }, {
        path: 'event',
        name: 'EventSubmission',
        component: EventSubmission,
        props: (route) => ({
          isTemp: route.query.isTemp,
          deviceName: route.query.deviceName,
          deviceSmid: route.query.deviceSmid,
          pointType: route.query.pointType,
          taskId: route.query.taskId,
          taskName: route.query.taskName
        }),
        meta: {
          requireAuth: true,
          title: '临时事件上报'
        }
      }, {
        path: 'setting',
        name: 'Setting',
        component: Setting,
        meta: {
          requireAuth: true,
          title: '系统设置'
        }
      }, {
        path: 'account',
        name: 'AccountCenter',
        component: AccountCenter,
        meta: {
          requireAuth: true,
          title: '个人信息'
        }
      }]
    }
  ]
})

router.beforeEach((to, from, next) => {
  // 重置mui的导航条后退逻辑
  Vue.prototype.$revertDefaultDeviceBack()

  // 读取sessionStorage中的token信息
  let token = JSON.parse(getSessionItem('currentUser'))
  // 将要去的url是否需要token？
  if (to.meta.requireAuth === true) { // 需要token
    // 如果token存在， 继续跳转
    if (token) {
      next()
    } else {
      // 否则重定向到Login页面
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      })
    }
  } else { // 将要去的url不需要token，完成跳转
    next()
  }

  // 如果目标路径是登录页，则清空sessionStorage
  if (to.path === '/login' || to.name === 'Login') {
    setSessionItem('currentUser', null)
  }

  // 保存Index页面滚动条状态
  if (from.name === 'Index' && to.name && to.name !== 'Login') {
    let bodyDOM = window.document.body
    window.scrollbarState = [bodyDOM.scrollLeft, bodyDOM.scrollTop]
  }
})

router.afterEach((to, from) => {
  console.log('to', to)
  console.log('from', from)

  // 关闭全局loading
  if (Vue.prototype.$hideLoading instanceof Function) {
    Vue.prototype.$hideLoading()
  }

  if (to.name === 'Index' && from.name === 'Login') {
    let currentUser = JSON.parse(getSessionItem("currentUser"))
    let currentUserId = currentUser.PersonId
    let status = 1;
    // 第一次登录
    // 设置定时器轮询维修工单任务数据
    let repairOrdersFetcher = new Timer(fetchRepairOrdersTaskId)
    repairOrdersFetcher.set(() => {
      apiMaintain
        .GetOrderList(currentUserId, status)
        .then(res => {
          //console.log("res", res);
          if (res.data.result) {
            let orderList = res.data.data;
            console.log('查询订单成功！')
            setLocalItem(`RepairOrders${currentUserId}`, JSON.stringify(orderList))
          } else {}
        })
        .catch(err => {
          console.log(`定时请求维修工单出错：`, err)
        });

    }, 5000)
    // 设置定时上传位置任务
    window.plus && initUploadPositionTask((result) => {
      console.log('初始化位置上传任务', result ? '成功' : '失败')
    })
  }

  if (to.name === 'Login' && from.name) {
    // 退出登录
    // 关闭定时器
    Timer.clear(fetchRepairOrdersTaskId)
    PositionUploader.stop()
    console.log('清除成功')
  }


})

export default router
