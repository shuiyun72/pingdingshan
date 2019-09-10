// 项目前端配置
export default {
  apiPath: {
    // 用户相关
    user: 'http://117.158.118.133:5284/asmx/admin.asmx',
    // 巡检养护
    inspection: 'http://117.158.118.133:5284/asmx/Inspection.asmx',
    //inspection: 'http://localhost:1840/asmx/Inspection.asmx',
    maintain: 'http://117.158.118.133:5284/asmx/Mantain.asmx',
    gis: 'http://117.158.118.133:5284/asmx/GIS.asmx',
    monitor: 'http://117.158.118.133:5200/MonitorAPI/api'
  },
  // 上传文件的可访问的静态资源根目录
  uploadFilePath: {
    // 巡检模块中的图片
    inspection: 'http://117.158.118.133:5284/'
  },
  // 地图服务sdk Key
  mapKey: 'bGQKLAdpcE2yP6uALGnMDcOFfnvvs5hV',
  // 超图iServer地址
  superMapIServer: {
    //url: 'http://47.104.3.68:8090/iserver/services/map-PingDingShanGongShuiGuanWang/rest/maps/平顶山供水管网',
    url: 'http://117.158.118.133:8090/iserver/services/map-PingDingShanGuanWangShuJu/rest/maps/平顶山供水管网_全',
    tablesName: {
      '普通给水管线': '普通给水管线@供水设施',
      '阀门': '阀门@供水设施',
      '四通': '四通@供水设施',
      '三通': '三通@供水设施',
      '测压点': '测压点@供水设施',
      '弯头': '弯头@供水设施',
      '消防栓': '消防栓@供水设施',
      '给水井': '给水井@供水设施'
    },
    tableColumnConfig: {
      '普通给水管线': [{
        "field": "SmID",
        "title": "编号",
      },
      {
        "field": "管径",
        "title": "管径",
      },
      {
        "field": "材质",
        "title": "材质",
      },
      {
        "field": "埋深",
        "title": "埋深",
      },
      {
        "field": "起点高程",
        "title": "起点高程",
      },
      {
        "field": "终点高程",
        "title": "终点高程",
      },
      {
        "field": "竣工日期",
        "title": "竣工日期",
      },
      {
        "field": "新增日期",
        "title": "新增日期",
      },
      {
        "field": "新增人",
        "title": "新增人",
      },
      {
        "field": "设备类型",
        "title": "设备类型",
      },
      {
        "field": "所在道路",
        "title": "所在道路",
      },
      {
        "field": "管长",
        "title": "管长",
      }
      ],
      '阀门': [{
        "field": "SmID",
        "title": "编号",
      },
      {
        "field": "材质",
        "title": "材质",
      },
      {
        "field": "埋深",
        "title": "埋深",
      },
      {
        "field": "高程",
        "title": "高程",
      },
      {
        "field": "竣工日期",
        "title": "竣工日期",
      },
      {
        "field": "新增日期",
        "title": "新增日期",
      },
      {
        "field": "埋设方式",
        "title": "埋设方式",
      },
      {
        "field": "新增人",
        "title": "新增人",
      },
      {
        "field": "设备类型",
        "title": "设备类型",
      },
      {
        "field": "更新时间",
        "title": "更新时间",
      },
      {
        "field": "更新人",
        "title": "更新人",
      },
      {
        "field": "设备编号",
        "title": "设备编号",
      },
      {
        "field": "所在道路",
        "title": "所在道路",
      },
      {
        "field": "口径",
        "title": "口径",
      }
      ],
      '四通': [{
        "field": "SmID",
        "title": "编号",
      },
      {
        "field": "设备类型",
        "title": "设备类型",
      }
      /*
      ,
      {
        "field": "设备编号",
        "title": "设备编号",
      },
      {
        "field": "材质",
        "title": "材质",
      },
      {
        "field": "埋深",
        "title": "埋深",
      },
      {
        "field": "高程",
        "title": "高程",
      },
      {
        "field": "竣工日期",
        "title": "竣工日期",
      },
      {
        "field": "新增日期",
        "title": "新增日期",
      },
      {
        "field": "埋设方式",
        "title": "埋设方式",
      },
      {
        "field": "新增人",
        "title": "新增人",
      },
     
      {
        "field": "更新时间",
        "title": "更新时间",
      },
      {
        "field": "更新人",
        "title": "更新人",
      },
      
      {
        "field": "所在道路",
        "title": "所在道路",
      },
      {
        "field": "口径",
        "title": "口径",
      }*/
      ],
      '三通': [{
        "field": "SmID",
        "title": "编号",
      },
      {
        "field": "材质",
        "title": "材质",
      },
      {
        "field": "埋深",
        "title": "埋深",
      },
      {
        "field": "高程",
        "title": "高程",
      },
      {
        "field": "竣工日期",
        "title": "竣工日期",
      },
      {
        "field": "新增日期",
        "title": "新增日期",
      },
      {
        "field": "埋设方式",
        "title": "埋设方式",
      },
      {
        "field": "新增人",
        "title": "新增人",
      },
      {
        "field": "设备类型",
        "title": "设备类型",
      },
      {
        "field": "更新时间",
        "title": "更新时间",
      },
      {
        "field": "更新人",
        "title": "更新人",
      },
      {
        "field": "设备编号",
        "title": "设备编号",
      },
      {
        "field": "所在道路",
        "title": "所在道路",
      },
      {
        "field": "口径",
        "title": "口径",
      }
      ],
      '测压点': [{
        "field": "SmID",
        "title": "编号",
      },
      {
        "field": "材质",
        "title": "材质",
      },
      {
        "field": "埋深",
        "title": "埋深",
      },
      {
        "field": "高程",
        "title": "高程",
      },
      {
        "field": "竣工日期",
        "title": "竣工日期",
      },
      {
        "field": "新增日期",
        "title": "新增日期",
      },
      {
        "field": "埋设方式",
        "title": "埋设方式",
      },
      {
        "field": "新增人",
        "title": "新增人",
      },
      {
        "field": "设备类型",
        "title": "设备类型",
      },
      {
        "field": "更新时间",
        "title": "更新时间",
      },
      {
        "field": "更新人",
        "title": "更新人",
      },
      {
        "field": "设备编号",
        "title": "设备编号",
      },
      {
        "field": "所在道路",
        "title": "所在道路",
      },
      {
        "field": "口径",
        "title": "口径",
      }
      ],
      '弯头': [{
        "field": "SmID",
        "title": "编号",
      },
      {
        "field": "材质",
        "title": "材质",
      },
      {
        "field": "埋深",
        "title": "埋深",
      },
      {
        "field": "高程",
        "title": "高程",
      },
      {
        "field": "竣工日期",
        "title": "竣工日期",
      },
      {
        "field": "新增日期",
        "title": "新增日期",
      },
      {
        "field": "埋设方式",
        "title": "埋设方式",
      },
      {
        "field": "新增人",
        "title": "新增人",
      },
      {
        "field": "设备类型",
        "title": "设备类型",
      },
      {
        "field": "更新时间",
        "title": "更新时间",
      },
      {
        "field": "更新人",
        "title": "更新人",
      },
      {
        "field": "设备编号",
        "title": "设备编号",
      },
      {
        "field": "所在道路",
        "title": "所在道路",
      },
      {
        "field": "口径",
        "title": "口径",
      }
      ],
      '给水井': [{
        "field": "SmID",
        "title": "编号",
      },
      {
        "field": "设备类型",
        "title": "设备类型",
      }
      /*,
      {
        "field": "材质",
        "title": "材质",
      },
      {
        "field": "埋深",
        "title": "埋深",
      },
      {
        "field": "高程",
        "title": "高程",
      },
      {
        "field": "竣工日期",
        "title": "竣工日期",
      },
      {
        "field": "新增日期",
        "title": "新增日期",
      },
      {
        "field": "埋设方式",
        "title": "埋设方式",
      },
      {
        "field": "新增人",
        "title": "新增人",
      },
      
      {
        "field": "更新时间",
        "title": "更新时间",
      },
      {
        "field": "更新人",
        "title": "更新人",
      },
      
      {
        "field": "所在道路",
        "title": "所在道路",
      },
      {
        "field": "口径",
        "title": "口径",
      },
      {
        "field": "设备编号",
        "title": "设备编号",
      }*/
      ],
      '消防栓': [{
        "field": "SmID",
        "title": "编号",
      },
      {
        "field": "管径",
        "title": "管径",
      },
      {
        "field": "材质",
        "title": "材质",
      },
      {
        "field": "埋深",
        "title": "埋深",
      },
      {
        "field": "高程",
        "title": "高程",
      },
      {
        "field": "竣工日期",
        "title": "竣工日期",
      },
      {
        "field": "新增日期",
        "title": "新增日期",
      },
      {
        "field": "埋设方式",
        "title": "埋设方式",
      },
      {
        "field": "新增人",
        "title": "新增人",
      },
      {
        "field": "设备类型",
        "title": "设备类型",
      },
      {
        "field": "更新时间",
        "title": "更新时间",
      },
      {
        "field": "更新人",
        "title": "更新人",
      },
      {
        "field": "设备编号",
        "title": "设备编号",
      }
      ],
      '节点': [{
        "field": "SmID",
        "title": "编号",
      },
      {
        "field": "管径",
        "title": "管径",
      },
      {
        "field": "材质",
        "title": "材质",
      },
      {
        "field": "埋深",
        "title": "埋深",
      },
      {
        "field": "高程",
        "title": "高程",
      },
      {
        "field": "竣工日期",
        "title": "竣工日期",
      },
      {
        "field": "新增日期",
        "title": "新增日期",
      },
      {
        "field": "埋设方式",
        "title": "埋设方式",
      },
      {
        "field": "新增人",
        "title": "新增人",
      },
      {
        "field": "设备类型",
        "title": "设备类型",
      },
      {
        "field": "更新时间",
        "title": "更新时间",
      },
      {
        "field": "更新人",
        "title": "更新人",
      },
      {
        "field": "设备编号",
        "title": "设备编号",
      }
      ]

    }
  },
  locationExtent: {
    longitude: [112.92904586792, 114.399848937988],
    latitude: [32.6729256662872, 34.7889918706452]
  },
  // GIS数据源（在BaseMap初始化地图数据时被引用）
  gisData: {
    //base: 'http://117.158.118.133:9090/iserver/services/map-mongodb/rest/maps/PDS2019DOM',
    base: 'http://117.158.118.133:9090/iserver/services/map-mongodb/rest/maps/PDS_DOM_2019_01',
    route: 'http://117.158.118.133:9090/iserver/services/map-mongodb/rest/maps/PDS2019DLG',
    mark: 'http://117.158.118.133:9090/iserver/services/map-mongodb/rest/maps/IDT',

    //base: 'http://47.104.3.68:8090/iserver/services/map-PingDingShanJieDaoYaoGanDiTu/wmts100',
    //pipe: 'http://47.104.3.68:8090/iserver/services/map-PingDingShanGongShuiGuanWang/wmts100',
    pipe: 'http://117.158.118.133:8090/iserver/services/map-PingDingShanGuanWangShuJu/rest/maps/平顶山供水管网_全',
  },
  // 此项的每一个字段都是必要非空的
  mapInitOption: {
    center: [113.28, 33.75],
    zoom: 14,
    minZoom: 12,
    maxZoom: 20
  }
}
