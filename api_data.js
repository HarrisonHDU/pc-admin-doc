define({ "api": [
  {
    "type": "post",
    "url": "/api/account/login",
    "title": "用户登录",
    "name": "Login",
    "group": "Account",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "login",
            "description": "<p>账号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../admin/frontend/account.py",
    "groupTitle": "Account"
  },
  {
    "type": "get",
    "url": "/api/account/login",
    "title": "判断登录状态",
    "name": "LoginStatus",
    "group": "Account",
    "version": "0.0.0",
    "filename": "../admin/frontend/account.py",
    "groupTitle": "Account"
  },
  {
    "type": "get",
    "url": "/api/account/profile",
    "title": "当前登录用户信息",
    "name": "LoginUserProfile",
    "group": "Account",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"id\": 12,\n    \"name\": \"孙谷宇\",\n    \"role\": 1           # 角色 0:普通, 1:管理员, 2:运营管理员, 3:数据管理员, 4:财务管理员\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../admin/frontend/account.py",
    "groupTitle": "Account"
  },
  {
    "type": "post",
    "url": "/api/account/logout",
    "title": "注销",
    "name": "Logout",
    "group": "Account",
    "description": "<p>用户注销</p>",
    "version": "0.0.0",
    "filename": "../admin/frontend/account.py",
    "groupTitle": "Account"
  },
  {
    "type": "get",
    "url": "/api/banners",
    "title": "banner页",
    "name": "banner_list",
    "group": "Banner",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "hide",
            "description": "<p>是否隐藏1:是, 0:否</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[{\n    \"id\": 12,\n    \"image\": \"http://dsadsadsa.png\",\n    \"link\": \"http://www.baidu.com\",     # 跳转地址\n    \"order_no\": 33,\n    \"hide\": true\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../admin/frontend/banner.py",
    "groupTitle": "Banner"
  },
  {
    "type": "post",
    "url": "/api/banners",
    "title": "创建banner",
    "name": "create_banner",
    "group": "Banner",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "id",
            "description": "<p>id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "image",
            "description": "<p>图片地址</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "link",
            "description": "<p>跳转地址</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "[{\n    \"id\": 1,\n    \"image\": \"http://www.baidu.com\",\n    \"link\": \"http://www.baidu.com\",     # 跳转地址\n    \"order_no\": 33,\n    \"hide\": true\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../admin/frontend/banner.py",
    "groupTitle": "Banner"
  },
  {
    "type": "delete",
    "url": "/api/banners/:id",
    "title": "删除banner",
    "name": "delete_banner",
    "group": "Banner",
    "version": "0.0.0",
    "filename": "../admin/frontend/banner.py",
    "groupTitle": "Banner"
  },
  {
    "type": "patch",
    "url": "/api/certifications/:id",
    "title": "认证审核",
    "name": "Certificate",
    "group": "Certification",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "bool",
            "optional": false,
            "field": "pass",
            "description": "<p>是否通过</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "org_id",
            "description": "<p>机构ID</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "company_name",
            "description": "<p>机构名称</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../admin/frontend/certification.py",
    "groupTitle": "Certification"
  },
  {
    "type": "get",
    "url": "/api/certifications",
    "title": "认证申请",
    "name": "certificateList",
    "group": "Certification",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "status",
            "description": "<p>状态,0:待处理，1：通过， 2：拒绝</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "page",
            "description": "<p>第几页</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "per_page",
            "description": "<p>每页数量</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[{\n    \"id\": 100377,\n    \"name\": \"小明\",\n    \"mobile\": \"150679876523\",\n    \"created_time\": \"2016-12-23T12:23:33\", # 申请时间\n    \"company_name\": \"机构名称\",\n    \"position\": \"职位理财师\",\n    \"work_year\": 1,     # 工作年限(1:1~3年, 2:3~5年, 3:5~10年, 4:10年以上)\n    \"industry\": 3,      # 行业(1:银行, 2:信托, 3:资管, 4:保险, 5:证券, 6:基金, 7:P2P, 8:三方)\n    \"business_card_pic\": \"dsadsadsakdjlsak\"     # 名片\n    \"is_modified\": true    # 是否是修改认证\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../admin/frontend/certification.py",
    "groupTitle": "Certification"
  },
  {
    "type": "get",
    "url": "/api/channel/advisers/:id",
    "title": "投顾详情",
    "name": "adviser_detail",
    "group": "Channel",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"id\": 12,\n    \"name\": \"姓名\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../admin/frontend/channel.py",
    "groupTitle": "Channel"
  },
  {
    "type": "get",
    "url": "/api/channel/advisers",
    "title": "投顾列表",
    "name": "adviser_list",
    "group": "Channel",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[{\n    \"id\": 12,\n    \"name\": \"姓名\",\n    \"referrers\": 12,    # 推荐人数\n    \"pusers\": 12,   # 理财师数\n    \"orders\": 99,   # 交易数\n    \"amounts\": {    # 成交金额\n        \"rmb\": 199,\n        \"dollar\": 299\n    }\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../admin/frontend/channel.py",
    "groupTitle": "Channel"
  },
  {
    "type": "post",
    "url": "/api/channel/pusers",
    "title": "绑定理财师",
    "name": "bound_puser",
    "group": "Channel",
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"mobile\": \"1506554645\",\n    \"source\": 1,    # 来源，1：来自公司,2:来自投顾\n    \"adviser_id\": 100133,   # 投顾ID\n    \"referrer_id\": 100198,  # 推荐人ID\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../admin/frontend/channel.py",
    "groupTitle": "Channel"
  },
  {
    "type": "post",
    "url": "/api/channel/introducers/bound_user",
    "title": "绑定兼职投顾/推荐人",
    "name": "bound_user",
    "group": "Channel",
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"type\": 1,  # 1:推荐人,2:兼职投顾\n    \"id\": 33,\n    \"introducer_id\": 23 # 介绍人ID\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../admin/frontend/channel.py",
    "groupTitle": "Channel"
  },
  {
    "type": "post",
    "url": "/api/channel/introducers",
    "title": "创建介绍人",
    "name": "create_introducer",
    "group": "Channel",
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"name\": \"真实姓名\",\n    \"mobile\": \"1506554645\",\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../admin/frontend/channel.py",
    "groupTitle": "Channel"
  },
  {
    "type": "post",
    "url": "/api/channel/referrers",
    "title": "创建推荐人",
    "name": "create_referrer",
    "group": "Channel",
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"real_name\": \"真实姓名\",\n    \"mobile\": \"1506554645\",\n    \"org_name\": \"机构名称\",\n    \"type\": 1,  # 类型，1:内部，2：外部\n    \"remark\": \"备注\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../admin/frontend/channel.py",
    "groupTitle": "Channel"
  },
  {
    "type": "DELETE",
    "url": "/api/channel/introducers/:id",
    "title": "删除介绍人",
    "name": "delete_introducer",
    "group": "Channel",
    "version": "0.0.0",
    "filename": "../admin/frontend/channel.py",
    "groupTitle": "Channel"
  },
  {
    "type": "get",
    "url": "/api/channel/introducers",
    "title": "介绍人列表",
    "name": "introducer_list",
    "group": "Channel",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[{\n    \"id\": 12,\n    \"name\": \"真实姓名\",\n    \"investors\": 12,    # 投顾人数\n    \"referrers\": 1,  # 推荐人数\n    \"mobile\": \"1412312312\"\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../admin/frontend/channel.py",
    "groupTitle": "Channel"
  },
  {
    "type": "get",
    "url": "/api/channel/introducers/:id/members",
    "title": "介绍人介绍的人员列表",
    "name": "introducer_members",
    "group": "Channel",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[{\n    \"id\": 12,\n    \"name\": \"真实姓名\",\n    \"role\": 1,  # 1：推荐人，2：兼职投顾\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../admin/frontend/channel.py",
    "groupTitle": "Channel"
  },
  {
    "type": "get",
    "url": "/api/channel/parttime_advisers",
    "title": "兼职投顾列表",
    "name": "parttime_adviser_list",
    "group": "Channel",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "no_introducer_name",
            "description": "<p>姓名</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[{\n    \"id\": 12,\n    \"name\": \"姓名\"\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../admin/frontend/channel.py",
    "groupTitle": "Channel"
  },
  {
    "type": "get",
    "url": "/api/channel/pusers/:id",
    "title": "理财师详情",
    "name": "puser_detail",
    "group": "Channel",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"id\": 12,\n    \"name\": \"姓名\",\n    \"org\": {\n        \"id\": 1,\n        \"name\": \"机构名\",\n    },\n    \"mobile\": \"1506712321\",\n    \"referrer_name\": \"推荐人\",\n    \"orders\": 199,  # 交易数\n    \"amounts\": {    # 成交金额\n        \"rmb\": 199,\n        \"dollar\": 299\n    },\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../admin/frontend/channel.py",
    "groupTitle": "Channel"
  },
  {
    "type": "get",
    "url": "/api/channel/pusers",
    "title": "理财师列表",
    "name": "puser_list",
    "group": "Channel",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "adviser_id",
            "description": "<p>投顾ID</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "referrer_id",
            "description": "<p>推荐人ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[{\n    \"id\": 12,\n    \"name\": \"姓名\",\n    \"org\": {\n        \"id\": 1,\n        \"name\": \"机构名\",\n    },\n    \"source\":1,\n    \"mobile\": \"1506712321\",\n    \"orders\": 199,  # 交易数\n    \"amounts\": {    # 成交金额\n        \"rmb\": 199,\n        \"dollar\": 299\n    },\n    \"referrer\": {   # 推荐人\n        \"id\": 12,\n        \"type\": 1   # 类型\n    }\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../admin/frontend/channel.py",
    "groupTitle": "Channel"
  },
  {
    "type": "get",
    "url": "/api/channel/referrers/:id",
    "title": "推荐人详情",
    "name": "referrer_detail",
    "group": "Channel",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "adviser_id",
            "description": "<p>投顾ID</p>"
          },
          {
            "group": "Parameter",
            "type": "bool",
            "optional": true,
            "field": "base",
            "description": "<p>是否只显示基本信息（即不包含统计类数据）</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[{\n    \"id\": 12,\n    \"real_name\": \"真实姓名\",\n    \"org_name\": \"机构名称\",\n    \"type\": 1,  # 类型，1:内部，2：外部\n    \"mobile\": \"1545435435\",\n    \"remark\": \"备注\",\n    \"pusers\": {\n        \"total\": 99,    # 总计人数\n        \"valid\": 33,    # 有成交订单的\n    },\n    \"orders\": 199,  # 推荐交易数\n    \"amounts\": {    # 成交金额\n        \"rmb\": 199,\n        \"dollar\": 299\n    },\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../admin/frontend/channel.py",
    "groupTitle": "Channel"
  },
  {
    "type": "get",
    "url": "/api/channel/referrers",
    "title": "推荐人列表",
    "name": "referrer_list",
    "group": "Channel",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "adviser_id",
            "description": "<p>投顾ID</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "no_introducer_name",
            "description": "<p>姓名</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[{\n    \"id\": 12,\n    \"real_name\": \"真实姓名\",\n    \"introducer\": {\n        \"id\": 335,\n        \"name\": \"介绍人\"\n    },\n    \"type\": 1,  # 类型，1:内部，2：外部\n    \"pusers\": {   # 推荐理财师数\n        \"total\": 12,\n    },\n    \"orders\": 199,  # 推荐交易数\n    \"amounts\": {    # 成交金额\n        \"rmb\": 199,\n        \"dollar\": 299\n    },\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../admin/frontend/channel.py",
    "groupTitle": "Channel"
  },
  {
    "type": "get",
    "url": "/api/channel/stats/base",
    "title": "数据统计",
    "name": "stats_base",
    "group": "Channel",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "adviser_id",
            "description": "<p>投顾ID</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "source",
            "description": "<p>来源，1：来自投顾自身，2：来自推荐人</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"amounts\": {\n        \"dollar\": 0,\n        \"rmb\": 0\n    },\n    \"orders\": 0,    # 单量\n    \"pusers\": {     # 理财师\n        \"total\": 9,\n        \"valid\": 0\n    },\n    \"referrer\": {   # 推荐人\n        \"total\": 6,\n        \"valid\": 0\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../admin/frontend/channel.py",
    "groupTitle": "Channel"
  },
  {
    "type": "get",
    "url": "/api/channel/stats/graph",
    "title": "占比统计",
    "name": "stats_graph",
    "group": "Channel",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "adviser_id",
            "description": "<p>投顾ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"adviser\": [],\n    \"channel\": [    # 渠道\n        {\n            \"name\": \"adviser\",  # 投顾\n            \"value\": 0\n        },\n        {\n            \"name\": \"company\",  # 来自公司\n            \"value\": 0\n        },\n        {\n            \"name\": \"internal_referrer\",    # 内部\n            \"value\": 0\n        },\n        {\n            \"name\": \"external_referrer\",    # 外部\n            \"value\": 0\n        }\n    ],\n    \"puser\": [{\"name\": \"dsadsa\", \"value\": 0.13}],   # 理财师\n    \"referrer\": [{\"name\": \"dsadsa\", \"value\": 0.13}],    # 推荐人\n    \"rate\": {\n        \"date\": \"2017-09-20\",\n        \"value\": 6.5666\n    },\n\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../admin/frontend/channel.py",
    "groupTitle": "Channel"
  },
  {
    "type": "get",
    "url": "/api/channel/stats/trend",
    "title": "趋势统计",
    "name": "stats_trend",
    "group": "Channel",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "adviser_id",
            "description": "<p>投顾ID</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "source",
            "description": "<p>来源，1：来自投顾自身，2：来自推荐人</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "target",
            "description": "<p>数据对象,1:人民币，2：美元,3:有效推荐人,4:推荐人总数，5：成交理财师，6：理财师总数，7：总交易</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "interval",
            "description": "<p>间隔,day:天,week:周,month:月</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[{\n    \"date\": \"2017-12-11\",\n    \"value\": 12\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../admin/frontend/channel.py",
    "groupTitle": "Channel"
  },
  {
    "type": "post",
    "url": "/api/channel/pusers/:user_id/unbound",
    "title": "解绑理财师",
    "name": "unbound_puser",
    "group": "Channel",
    "version": "0.0.0",
    "filename": "../admin/frontend/channel.py",
    "groupTitle": "Channel"
  },
  {
    "type": "delete",
    "url": "/api/channel/referrers/:id",
    "title": "解绑推荐人",
    "name": "unbound_referrer",
    "group": "Channel",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "adviser_id",
            "description": "<p>投顾ID</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../admin/frontend/channel.py",
    "groupTitle": "Channel"
  },
  {
    "type": "put",
    "url": "/api/channel/introducers/:id",
    "title": "修改介绍人",
    "name": "update_introducer",
    "group": "Channel",
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"name\": \"真实姓名\",\n    \"mobile\": \"1506554645\",\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../admin/frontend/channel.py",
    "groupTitle": "Channel"
  },
  {
    "type": "put",
    "url": "/api/channel/referrers/:id",
    "title": "修改推荐人",
    "name": "update_referrer",
    "group": "Channel",
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"real_name\": \"真实姓名\",\n    \"mobile\": \"1506554645\",\n    \"org_name\": \"机构名称\",\n    \"type\": 1,  # 类型，1:内部，2：外部\n    \"remark\": \"备注\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../admin/frontend/channel.py",
    "groupTitle": "Channel"
  },
  {
    "type": "get",
    "url": "/",
    "title": "后台权限",
    "name": "AdminRole",
    "group": "Constant",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "1",
            "description": "<p>系统管理员</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "2",
            "description": "<p>用户管理</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "3",
            "description": "<p>产品管理</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "4",
            "description": "<p>订单管理</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "5",
            "description": "<p>运营配置</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "6",
            "description": "<p>数据统计</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "7",
            "description": "<p>渠道管理</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "8",
            "description": "<p>投顾</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "9",
            "description": "<p>兼职投顾</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "10",
            "description": "<p>费用管理</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "11",
            "description": "<p>产品部</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "12",
            "description": "<p>推荐管理</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../admin/apidoc.py",
    "groupTitle": "Constant"
  },
  {
    "type": "get",
    "url": "/",
    "title": "错误码",
    "name": "ErrorCode",
    "group": "Constant",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "0",
            "description": "<p>成功</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "100001",
            "description": "<p>未知错误</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "100002",
            "description": "<p>参数错误</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "100003",
            "description": "<p>用户未登录</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "100004",
            "description": "<p>无权限访问</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "100005",
            "description": "<p>资源不存在</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "100006",
            "description": "<p>注册验证码短信发送太频繁</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "100007",
            "description": "<p>验证码错误</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "100008",
            "description": "<p>手机格式错误</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "100009",
            "description": "<p>身份证号不合法</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "100010",
            "description": "<p>非认证用户，无法访问</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "110001",
            "description": "<p>产品节点无法参与</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "120001",
            "description": "<p>产品无法购买</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "120002",
            "description": "<p>产品状态无法改变</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "120003",
            "description": "<p>无法删除存在订单的产品</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "130001",
            "description": "<p>预约额度超过产品剩余额度</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "130002",
            "description": "<p>最迟打款日期晚于产品的最迟打款日期</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "130003",
            "description": "<p>存在未完成订单</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "130004",
            "description": "<p>不是订单管理员</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "130005",
            "description": "<p>订单初始化失败</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "130006",
            "description": "<p>订单预约额度不正确</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "130007",
            "description": "<p>订单流程错误</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "130008",
            "description": "<p>分成金额不能大于剩余待打款金额</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "130009",
            "description": "<p>订单存续份额不足</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "140001",
            "description": "<p>手机号已被注册</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "140002",
            "description": "<p>初始化账户失败</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "140003",
            "description": "<p>账号被冻结</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "140004",
            "description": "<p>登录密码错误</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "140005",
            "description": "<p>账号不存在</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "140006",
            "description": "<p>当前有待处理的认证审核</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "140007",
            "description": "<p>不是管理员</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "140008",
            "description": "<p>管理员无法退出机构</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "140009",
            "description": "<p>用户已加入机构</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "140010",
            "description": "<p>不能重复邀请</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "140011",
            "description": "<p>无法邀请管理员</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "140012",
            "description": "<p>无法邀请自己的旗下理财师</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "140013",
            "description": "<p>无法邀请其他机构的旗下理财师</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "140014",
            "description": "<p>邀请已取消</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "140015",
            "description": "<p>无法删除非在职人员</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "150001",
            "description": "<p>无法删除存在订单的客户</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../admin/apidoc.py",
    "groupTitle": "Constant"
  },
  {
    "type": "get",
    "url": "/",
    "title": "日志类型",
    "name": "LogType",
    "group": "Constant",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "101",
            "description": "<p>页面访问</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "201",
            "description": "<p>登陆</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "202",
            "description": "<p>注册</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "301",
            "description": "<p>关注产品</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "302",
            "description": "<p>浏览产品</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "303",
            "description": "<p>查看附件</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../admin/apidoc.py",
    "groupTitle": "Constant"
  },
  {
    "type": "get",
    "url": "/",
    "title": "产品费中的各类角色",
    "name": "ProductExpenseRole",
    "group": "Constant",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "1",
            "description": "<p>理财师</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "2",
            "description": "<p>理财师推荐人</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "3",
            "description": "<p>推荐人介绍人</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "4",
            "description": "<p>投顾介绍人</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "5",
            "description": "<p>投顾</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "6",
            "description": "<p>兼职投顾</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "7",
            "description": "<p>产品部</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "8",
            "description": "<p>公司</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../admin/apidoc.py",
    "groupTitle": "Constant"
  },
  {
    "type": "get",
    "url": "/",
    "title": "产品费用类型",
    "name": "ProductExpensesType",
    "group": "Constant",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "1",
            "description": "<p>代理</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "2",
            "description": "<p>包销</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "3",
            "description": "<p>裸</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../admin/apidoc.py",
    "groupTitle": "Constant"
  },
  {
    "type": "get",
    "url": "/",
    "title": "产品费用结算类型",
    "name": "ProductSettlementType",
    "group": "Constant",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "1",
            "description": "<p>销售</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "2",
            "description": "<p>发行</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "4",
            "description": "<p>开发</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "8",
            "description": "<p>包销</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "16",
            "description": "<p>管理</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "32",
            "description": "<p>业绩</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../admin/apidoc.py",
    "groupTitle": "Constant"
  },
  {
    "type": "get",
    "url": "/",
    "title": "用户角色",
    "name": "Role",
    "group": "Constant",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "20",
            "description": "<p>创始人</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "21",
            "description": "<p>管理员</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "22",
            "description": "<p>产品管理员</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "23",
            "description": "<p>理财师</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "24",
            "description": "<p>合伙人</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../admin/apidoc.py",
    "groupTitle": "Constant"
  },
  {
    "type": "get",
    "url": "/",
    "title": "用户标签",
    "name": "Tag",
    "group": "Constant",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "1",
            "description": "<p>内部用户</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "2",
            "description": "<p>外部用户</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "4",
            "description": "<p>推荐人</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../admin/apidoc.py",
    "groupTitle": "Constant"
  },
  {
    "type": "get",
    "url": "/api/customers",
    "title": "客户列表",
    "name": "Customers",
    "group": "Customer",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "name",
            "description": "<p>客户姓名</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "user_id",
            "description": "<p>理财师ID</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "page",
            "description": "<p>第几页</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "per_page",
            "description": "<p>每页数量</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[{\n    \"name\": \"张东\",\n    \"no\": \"3213kj21l3k21j321j\",\n    \"real_name\": \"张东\",\n    \"id_card_no\": \"dsa9dsa98d9sa809dsa\",\n    \"mobile\": \"321809382180\"\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../admin/frontend/customer.py",
    "groupTitle": "Customer"
  },
  {
    "type": "patch",
    "url": "/api/events/:id",
    "title": "审核活动报名",
    "name": "CheckEvent",
    "group": "Event",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "status",
            "description": "<p>状态 1:通过 -1:不通过</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../admin/frontend/event.py",
    "groupTitle": "Event"
  },
  {
    "type": "get",
    "url": "/api/events",
    "title": "活动报名列表",
    "name": "EventList",
    "group": "Event",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "status",
            "description": "<p>状态0:待处理 1:通过 -1:不通过</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "product_id",
            "description": "<p>产品ID</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "page",
            "description": "<p>第几页</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "per_page",
            "description": "<p>每页数量</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[{\n    \"id\": 12,\n    \"product_id\": 33,\n    \"event_name\": \"XXX产品活动\",\n    \"name\": \"XXX\",\n    \"mobile\": \"321321312\",\n    \"register_mobile\": \"321321321312\",\n    \"status\": 1\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../admin/frontend/event.py",
    "groupTitle": "Event"
  },
  {
    "type": "get",
    "url": "/api/expense/committed_order_settlement",
    "title": "已提交的订单结算记录",
    "name": "CommittedOrderSettlements",
    "group": "Expense",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "product_settlement_id",
            "description": "<p>产品结算记录ID</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "status",
            "description": "<p>状态, 1:结算中，2：已结算</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "role",
            "description": "<p>角色</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "user_id",
            "description": "<p>用户ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[{\n    \"id\": 3,\n    \"order_no\": \"80932138092183091\",\n    \"amount\": 99,   # 结算金额\n    \"tax_rate\": 12,   # 税率\n    \"tax\": 8888,   # 税费\n    \"actual_amount\": 8888,    # 实际到手金额\n    \"status\": 1,    # 状态, 1:结算中，2：已结算\n    \"name\": \"姓名\",\n    \"type\": 1,  # 费用类型\n    \"currency\": 1\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../admin/frontend/expense.py",
    "groupTitle": "Expense"
  },
  {
    "type": "get",
    "url": "/api/expense/committed_order_settlement/detail",
    "title": "结算中费用明细列表",
    "name": "CommittedOrderSettlementsDetail",
    "group": "Expense",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "role",
            "description": "<p>角色</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "user_id",
            "description": "<p>用户ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[{\n    \"id\": 3,\n    \"order_no\": \"32139129321912\",\n    \"product_name\": \"产品名\",\n    \"processing_expense\": 8888,    # 结算中费用\n    \"tax\": 8888,   # 税费\n    \"actual_amount\": 9888,   # 到手,\n    \"currency\": 1,\n    \"type\": 1,\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../admin/frontend/expense.py",
    "groupTitle": "Expense"
  },
  {
    "type": "get",
    "url": "/api/expense/committed_order_settlement/grouped_by_user",
    "title": "根据用户分组的结算中费用列表",
    "name": "CommittedOrderSettlementsGroupByUser",
    "group": "Expense",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[{\n    \"name\": \"姓名\",\n    \"role\": 3,\n    \"user_id\": 100094,\n    \"processing_expense\": {\"rmb\":8888, \"dollar\": 9888},    # 结算中费用\n    \"tax\": {\"rmb\":8888, \"dollar\": 9888},   # 税费\n    \"actual_amount\": {\"rmb\":8888, \"dollar\": 9888},   # 到手\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../admin/frontend/expense.py",
    "groupTitle": "Expense"
  },
  {
    "type": "post",
    "url": "/api/expense/committed_order_settlement",
    "title": "提交订单结算",
    "name": "CreateCommittedOrderSettlements",
    "group": "Expense",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "product_settlement_id",
            "description": "<p>产品结算记录ID</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "role",
            "description": "<p>角色</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "user_id",
            "description": "<p>用户ID</p>"
          },
          {
            "group": "Parameter",
            "type": "float",
            "optional": false,
            "field": "total",
            "description": "<p>总金额</p>"
          },
          {
            "group": "Parameter",
            "type": "float",
            "optional": false,
            "field": "amount",
            "description": "<p>结算金额</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "invoice_type",
            "description": "<p>发票类型,1:专票,2:普票,3:走账</p>"
          },
          {
            "group": "Parameter",
            "type": "float",
            "optional": true,
            "field": "tax_rate",
            "description": "<p>税率</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../admin/frontend/expense.py",
    "groupTitle": "Expense"
  },
  {
    "type": "post",
    "url": "/api/expense/product_settlement",
    "title": "创建产品结算记录",
    "name": "CreateProductSettlement",
    "group": "Expense",
    "version": "1.0.0",
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"product_id\": 13,\n    \"type\": [1,4,8],  # 结算费用类型\n    \"amount\": 122,  # 金额\n    \"remark\": \"备注\",\n    \"date\": \"2015-12-01\",\n    \"percent\": 33.33,  # 比例\n    \"start_date\": \"2017-12-11\"  # 成立日\n    \"duration\": 3,  # 期限\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../admin/frontend/expense.py",
    "groupTitle": "Expense"
  },
  {
    "type": "delete",
    "url": "/api/expense/committed_order_settlement/:id",
    "title": "删除提交订单结算",
    "name": "DeleteCommittedOrderSettlements",
    "group": "Expense",
    "version": "0.0.0",
    "filename": "../admin/frontend/expense.py",
    "groupTitle": "Expense"
  },
  {
    "type": "delete",
    "url": "/api/expense/product_settlement/:id",
    "title": "删除产品结算记录",
    "name": "DeleteProductSettlement",
    "group": "Expense",
    "version": "1.0.0",
    "filename": "../admin/frontend/expense.py",
    "groupTitle": "Expense"
  },
  {
    "type": "get",
    "url": "/api/expense",
    "title": "费用列表",
    "name": "ExpenseList",
    "group": "Expense",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "role",
            "description": "<p>角色</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "user_id",
            "description": "<p>用户ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[{\n    \"user_name\": \"理财师名\"\n    \"product_name\": \"产品名\"\n    \"order_no\": \"809d809sa809dsa\",  # 订单号\n    \"currency\": 1,  # 币种\n    \"total_expense\": 8888,   # 总计费用\n    \"finished_expense\": 8888,   # 已结算费用\n    \"wait_expense\": 8888,    # 待结算费用\n    \"processing_expense\": 8888,    # 结算中费用\n    \"tax\": 3,   # 税费\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../admin/frontend/expense.py",
    "groupTitle": "Expense"
  },
  {
    "type": "get",
    "url": "/api/expense/statistic",
    "title": "费用统计详情(用户/订单/角色等维度)",
    "name": "ExpenseStatistic",
    "group": "Expense",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "order_no",
            "description": "<p>订单号</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "user_id",
            "description": "<p>用户ID</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "roles",
            "description": "<p>用户角色</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "单币种:",
          "content": "{\n    \"total_expense\": 8888,   # 总计费用\n    \"finished_expense\": 8888,   # 已结算费用\n    \"wait_expense\": 8888,    # 待结算费用\n    \"processing_expense\": 8888,    # 结算中费用\n    \"tax\": 3,   # 税费\n}",
          "type": "json"
        },
        {
          "title": "多币种:",
          "content": "{\n    \"total_expense\": {\"rmb\":8888, \"dollar\": 9888},   # 总计费用\n    \"finished_expense\": {\"rmb\":8888, \"dollar\": 9888},   # 已结算费用\n    \"wait_expense\": {\"rmb\":8888, \"dollar\": 9888},    # 待结算费用\n    \"processing_expense\": {\"rmb\":8888, \"dollar\": 9888},    # 结算中费用\n    \"tax\": {\"rmb\":8888, \"dollar\": 9888},   # 税费\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../admin/frontend/expense.py",
    "groupTitle": "Expense"
  },
  {
    "type": "get",
    "url": "/api/expense/product_settlement/:id",
    "title": "产品结算记录明细",
    "name": "GetProductSettlementDetail",
    "group": "Expense",
    "version": "1.0.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"id\": 1,\n    \"profit_type\": 1,\n    \"currency\": 2,\n    \"type\": 1,  # 结算费用类型\n    \"duration\": 3,\n    \"date\": \"2015-12-01\",\n    \"created_time\": \"2015-12-33T16:20:20\",\n    \"percent\": 33.33,\n    \"start_date\": \"2017-12-11\",\n    \"amount\": 3\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../admin/frontend/expense.py",
    "groupTitle": "Expense"
  },
  {
    "type": "get",
    "url": "/api/expense/grouped_order_settlement",
    "title": "订单结算计算记录组",
    "name": "GroupedOrderSettlements",
    "group": "Expense",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "product_settlement_id",
            "description": "<p>产品结算记录ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[{\n    \"name\": \"小明\",\n    \"user_id\": 100898,\n    \"role\": 3,\n    \"order_amount\": 99,   # 订单成交金额\n    \"total_expense\": 8888,   # 总计费用\n    \"finished_expense\": 8888,   # 已结算费用\n    \"wait_expense\": 8888,    # 待结算费用\n    \"processing_expense\": 8888,    # 结算中费用\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../admin/frontend/expense.py",
    "groupTitle": "Expense"
  },
  {
    "type": "get",
    "url": "/api/expense/order/:order_no",
    "title": "订单费用列表",
    "name": "OrderExpense",
    "group": "Expense",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[{\n    \"name\": \"小明\",\n    \"user_id\": 333,\n    \"role\": 3,\n    \"type\": 3,      # 费用类型\n    \"total_expense\": 8888,   # 总计费用\n    \"finished_expense\": 8888,   # 已结算费用\n    \"wait_expense\": 8888,    # 待结算费用\n    \"processing_expense\": 8888,    # 结算中费用\n    \"tax\": 3,   # 税费\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../admin/frontend/expense.py",
    "groupTitle": "Expense"
  },
  {
    "type": "get",
    "url": "/api/expense/order/:order_no/grouped_by_user",
    "title": "订单费用列表(根据用户角色分组)",
    "name": "OrderExpenseGroupedByUser",
    "group": "Expense",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[{\n    \"name\": \"小明\",\n    \"user_id\": 333,\n    \"role\": 3,\n    \"total_expense\": 8888,   # 总计费用\n    \"finished_expense\": 8888,   # 已结算费用\n    \"wait_expense\": 8888,    # 待结算费用\n    \"processing_expense\": 8888,    # 结算中费用\n    \"tax\": 3,   # 税费\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../admin/frontend/expense.py",
    "groupTitle": "Expense"
  },
  {
    "type": "get",
    "url": "/api/expense/order_settlement",
    "title": "订单结算计算记录明细",
    "name": "OrderSettlements",
    "group": "Expense",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "product_settlement_id",
            "description": "<p>产品结算记录ID</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "role",
            "description": "<p>角色</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "user_id",
            "description": "<p>用户ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[{\n    \"id\": 3,\n    \"order_no\": \"739821398217\",\n    \"order_amount\": 99,   # 订单成交金额\n    \"total_expense\": 8888,   # 总计费用\n    \"finished_expense\": 8888,   # 已结算费用\n    \"wait_expense\": 8888,    # 待结算费用\n    \"processing_expense\": 8888,    # 结算中费用\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../admin/frontend/expense.py",
    "groupTitle": "Expense"
  },
  {
    "type": "get",
    "url": "/expense/product/<int:pid>/grouped_by_role",
    "title": "产品费用列表(根据角色分组)",
    "name": "ProductExpenseGroupedByUser",
    "group": "Expense",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[{\n    \"role\": 3,\n    \"total_expense\": 8888,   # 总计费用\n    \"finished_expense\": 8888,   # 已结算费用\n    \"wait_expense\": 8888,    # 待结算费用\n    \"processing_expense\": 8888,    # 结算中费用\n    \"tax\": 3,   # 税费,\n    \"actual_amount\": 8888,    # 实际到手金额\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../admin/frontend/expense.py",
    "groupTitle": "Expense"
  },
  {
    "type": "get",
    "url": "/api/expense/product_statistic",
    "title": "产品费用统计(列表/单条)",
    "name": "ProductExpenseStatistic",
    "group": "Expense",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "product_id",
            "description": "<p>产品ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[{\n    \"id\": 3,\n    \"name\": \"产品名称\",\n    \"maximum_size\": 1,  # 总额度\n    \"current_precontract_size\": 1,  # 已募集\n    \"surplus_size\": 99, # 剩余\n    \"currency\": 1,\n    \"profit_type\": 1,\n    \"total_expense\": 8888,   # 总计费用\n    \"finished_expense\": 8888,   # 已结算费用\n    \"wait_expense\": 8888,    # 待结算费用\n    \"processing_expense\": 8888,    # 结算中费用\n    \"tax\": 3,   # 税费\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../admin/frontend/expense.py",
    "groupTitle": "Expense"
  },
  {
    "type": "get",
    "url": "/api/expense/product_settlement",
    "title": "产品结算记录列表",
    "name": "ProductSettlements",
    "group": "Expense",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "product_id",
            "description": "<p>产品ID</p>"
          },
          {
            "group": "Parameter",
            "type": "date",
            "optional": true,
            "field": "start_date",
            "description": "<p>成立日</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[{\n    \"id\": 1,\n    \"type\": 1,  # 结算费用类型\n    \"start_date\": \"2015-12-33T16:20:20\",    # 成立日\n    \"date\": \"2015-12-01\",\n    \"duration\": 3,\n    \"amount\": 9999,\n    \"created_time\": \"2015-12-33T16:20:20\",\n    \"committed\": true,      # 是否已有提交记录\n    \"percent\": 33.33\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../admin/frontend/expense.py",
    "groupTitle": "Expense"
  },
  {
    "type": "get",
    "url": "/api/expense/roles",
    "title": "角色费用统计列表",
    "name": "RoleExpenseList",
    "group": "Expense",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[{\n    \"user_id\": 100034,\n    \"name\": \"姓名\",\n    \"role\": 3,  # 角色\n    \"total_expense\": {\"rmb\":8888, \"dollar\": 9888},   # 总计费用\n    \"finished_expense\": {\"rmb\":8888, \"dollar\": 9888},   # 已结算费用\n    \"wait_expense\": {\"rmb\":8888, \"dollar\": 9888},    # 待结算费用\n    \"processing_expense\": {\"rmb\":8888, \"dollar\": 9888},    # 结算中费用\n    \"tax\": {\"rmb\":8888, \"dollar\": 9888},   # 税费\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../admin/frontend/expense.py",
    "groupTitle": "Expense"
  },
  {
    "type": "get",
    "url": "/api/expense/total",
    "title": "费用总计",
    "name": "TotalExpense",
    "group": "Expense",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"total_expense\": {\"rmb\":8888, \"dollar\": 9888},   # 总计费用\n    \"finished_expense\": {\"rmb\":8888, \"dollar\": 9888},   # 已结算费用\n    \"wait_expense\": {\"rmb\":8888, \"dollar\": 9888},    # 待结算费用\n    \"processing_expense\": {\"rmb\":8888, \"dollar\": 9888},    # 结算中费用\n    \"tax\": {\"rmb\":8888, \"dollar\": 9888},   # 税费\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../admin/frontend/expense.py",
    "groupTitle": "Expense"
  },
  {
    "type": "put",
    "url": "/api/expense/committed_order_settlement/:id",
    "title": "修改提交订单结算",
    "name": "UpdateCommittedOrderSettlements",
    "group": "Expense",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "float",
            "optional": false,
            "field": "amount",
            "description": "<p>结算金额</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "invoice_type",
            "description": "<p>发票类型,1:专票,2:普票,3:走账</p>"
          },
          {
            "group": "Parameter",
            "type": "float",
            "optional": true,
            "field": "tax_rate",
            "description": "<p>税率</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../admin/frontend/expense.py",
    "groupTitle": "Expense"
  },
  {
    "type": "post",
    "url": "/api/expense/update_order_expense_params",
    "title": "修改订单费用",
    "name": "UpdateOrderExpenseParams",
    "group": "Expense",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "product_settlement_id",
            "description": "<p>产品结算记录ID</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "role",
            "description": "<p>角色</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "user_id",
            "description": "<p>用户ID</p>"
          },
          {
            "group": "Parameter",
            "type": "float",
            "optional": false,
            "field": "sales",
            "description": "<p>销售费</p>"
          },
          {
            "group": "Parameter",
            "type": "float",
            "optional": false,
            "field": "manage_sales",
            "description": "<p>管理销售费</p>"
          },
          {
            "group": "Parameter",
            "type": "float",
            "optional": false,
            "field": "performance_sales",
            "description": "<p>业绩销售费</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../admin/frontend/expense.py",
    "groupTitle": "Expense"
  },
  {
    "type": "put",
    "url": "/api/expense/product_settlement/:id",
    "title": "修改产品结算记录",
    "name": "UpdateProductSettlement",
    "group": "Expense",
    "version": "1.0.0",
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "参数同创建",
          "type": "json"
        }
      ]
    },
    "filename": "../admin/frontend/expense.py",
    "groupTitle": "Expense"
  },
  {
    "type": "get",
    "url": "/api/expense/users",
    "title": "理财师费用列表",
    "name": "UserExpenseList",
    "group": "Expense",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[{\n    \"user_id\": 100034,\n    \"name\": \"姓名\",\n    \"total_expense\": {\"rmb\":8888, \"dollar\": 9888},   # 总计费用\n    \"finished_expense\": {\"rmb\":8888, \"dollar\": 9888},   # 已结算费用\n    \"wait_expense\": {\"rmb\":8888, \"dollar\": 9888},    # 待结算费用\n    \"processing_expense\": {\"rmb\":8888, \"dollar\": 9888},    # 结算中费用\n    \"tax\": {\"rmb\":8888, \"dollar\": 9888},   # 税费\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../admin/frontend/expense.py",
    "groupTitle": "Expense"
  },
  {
    "type": "post",
    "url": "/api/expense/committed_order_settlement/verify",
    "title": "确认费用结算",
    "name": "VerifySettlement",
    "group": "Expense",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>结算记录ID</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "role",
            "description": "<p>角色</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "user_id",
            "description": "<p>用户ID</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../admin/frontend/expense.py",
    "groupTitle": "Expense"
  },
  {
    "type": "patch",
    "url": "/api/feedback/:id",
    "title": "反馈处理",
    "name": "feedback_handle",
    "group": "Feedback",
    "version": "0.0.0",
    "filename": "../admin/frontend/feedback.py",
    "groupTitle": "Feedback"
  },
  {
    "type": "get",
    "url": "/api/feedback",
    "title": "反馈列表",
    "name": "feedback_list",
    "group": "Feedback",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "status",
            "optional": true,
            "field": "name",
            "description": "<p>状态,0:待处理,1:已处理</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "page",
            "description": "<p>第几页</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "per_page",
            "description": "<p>每页数量</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[{\n    \"id\": 12,\n    \"name\": \"小明\",\n    \"mobile\": \"15062131212\",\n    \"resource_type\": 29,    # 关联类型, 0:无, 29:联合采购订单\n    \"resource_id\": \"898d0sa8dsa809dsa\",\n    \"content\": \"问题描述\",\n    \"status\": 0,\n    \"created_time\": \"2016-12-11T16:00:00\"\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../admin/frontend/feedback.py",
    "groupTitle": "Feedback"
  },
  {
    "type": "get",
    "url": "/api/file/:fid",
    "title": "访问文件",
    "name": "AccessFile",
    "group": "File",
    "version": "1.0.0",
    "filename": "../admin/frontend/file.py",
    "groupTitle": "File"
  },
  {
    "type": "get",
    "url": "/api/file/token",
    "title": "获取OSS授权token",
    "name": "GetOssToken",
    "group": "File",
    "version": "1.0.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"ec\": 0,\n    \"message\": \"Success\",\n    \"data\": {\n        \"token\": \"9ksadd9dsdsaf9a=s9\",\n        \"access_key_id: \"STS.16IIP1f43HeTD93kZV6a\",\n        \"access_key_secret\": \"aipzne684tZdwAE2jd3J8LSdPwqsu9ccl7bFjdr1\",\n        \"private_bucket_name\": \"purchasing-consortia-pri-test\",\n        \"public_bucket_name\": \"purchasing-consortia-pub-test\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../admin/frontend/file.py",
    "groupTitle": "File"
  },
  {
    "type": "post",
    "url": "/api/file",
    "title": "上传文件",
    "name": "UploadFile",
    "group": "File",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>文件名</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "md5",
            "description": "<p>OSS上的文件的md5值</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "size",
            "description": "<p>文件大小</p>"
          },
          {
            "group": "Parameter",
            "type": "bool",
            "optional": false,
            "field": "is_pub",
            "defaultValue": "false",
            "description": "<p>是否公开访问</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "access_permission",
            "defaultValue": "1",
            "description": "<p>访问权限 1:仅自己, 2:仅自己的管理员, 3:自己和自己的管理员, 4:所有机构成员</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"ec\": 0,\n    \"message\": \"Success\",\n    \"data\": {\n        \"url\": \"http://dasjlkjlk21j3kjlkdsaj.png\",\n        \"id\": 33\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../admin/frontend/file.py",
    "groupTitle": "File"
  },
  {
    "type": "get",
    "url": "/api/logs/channel",
    "title": "渠道日志",
    "name": "ChannelLogList",
    "group": "Log",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[{\n    \"id\": 1,\n    \"created_time\": \"2015-12-11T13:00:00\",\n    \"name\": \"xiaom1\"，\n    \"operate_type\": 1,  # 操作类型,2:增加，5:删除，15：更新，16：绑定，17：解绑\n    \"operate_target\": 2,    # 操作对象, 30:推荐人,31:理财师\n    \"operate_content\": \"内容\"\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../admin/frontend/log.py",
    "groupTitle": "Log"
  },
  {
    "type": "get",
    "url": "/api/logs/details",
    "title": "日志详情列表",
    "name": "LogDetails",
    "group": "Log",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "type",
            "description": "<p>类型: 1-新增用户,2-登陆,3-产品操作，4-浏览</p>"
          },
          {
            "group": "Parameter",
            "type": "date",
            "optional": false,
            "field": "date",
            "description": "<p>日期</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[{\n    \"ip\": \"201.33.33.198\",\n    \"user\": {\n        \"id\": 100094,\n        \"name\": \"姓名\",\n        \"mobile\": \"1323421321\",\n        \"certificate\": true\n    },\n    \"created_time\": \"2017-12-11T16:00:00\",\n    \"action\": 101,  # 日志类型\n    \"content\": \"日志内容\",\n    \"channel\": 1,   # 渠道,1网页,2公众号,3群聊,4:私聊，5朋友圈,6后台,7移动端\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../admin/frontend/log.py",
    "groupTitle": "Log"
  },
  {
    "type": "get",
    "url": "/api/logs",
    "title": "日志列表",
    "name": "LogList",
    "group": "Log",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "date",
            "optional": true,
            "field": "date",
            "description": "<p>日期</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[{\n    \"date\": \"2017-12-11\",\n    \"new_user\": 0,  #新用户\n    \"logging_user\": 0,  # 登陆\n    \"product_operation\": 0, # 产品操作\n    \"access\": 0,    # ；浏览\n    \"precontract_order_amount\": {   # 预约\n        \"rmb\": 0,\n        \"dollar\": 0,\n    },\n    \"order_amount\": {   # 成交\n        \"rmb\": 0,\n        \"dollar\": 0\n    }\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../admin/frontend/log.py",
    "groupTitle": "Log"
  },
  {
    "type": "post",
    "url": "/api/orders",
    "title": "创建订单",
    "name": "CreateOrder",
    "group": "Order",
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"user_id\": 100460,\n    \"product_id\": 334,\n    \"customer_name\": \"客户姓名\",\n    \"customer_real_name\": \"客户真是姓名\",\n    \"customer_no\": \"客户编号\",\n    \"customer_mobile\": \"1503213123\",    # 客户电话\n    \"customer_id_card_no\": \"身份证号\"\n    \"amount\": 300,  # 认购金额\n    \"pay_time\": \"2017-05-28\",    # 打款日期\n    \"attachment_id\": 12     # 相关文件ID\n    \"buy_time\": \"2017-05-28T16:00:00\",  # 计息日\n    \"remark\": \"备注\",\n    \"prospective_earning\": 1.3, # 预期年化收益\n    \"buy_duration\": 3,\n    \"expire_time\": \"2017-05-28T16:00:00\"    # 到期时间\n    \"buy_value\": 1.33,  # 购买时净值\n    \"buy_share\": 13,    # 份额(万份)\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../admin/frontend/order.py",
    "groupTitle": "Order"
  },
  {
    "type": "post",
    "url": "/api/orders/:order_no/bonus",
    "title": "创建订单分红记录",
    "name": "CreateOrderBONUS",
    "group": "Order",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "amount",
            "description": "<p>金额</p>"
          },
          {
            "group": "Parameter",
            "type": "datetime",
            "optional": false,
            "field": "bonus_time",
            "description": "<p>赎回生效日期</p>"
          }
        ]
      }
    },
    "filename": "../admin/frontend/order.py",
    "groupTitle": "Order"
  },
  {
    "type": "post",
    "url": "/api/orders/:order_no/distributions",
    "title": "创建订单分配记录",
    "name": "CreateOrderDistribution",
    "group": "Order",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "amount",
            "description": "<p>金额</p>"
          },
          {
            "group": "Parameter",
            "type": "datetime",
            "optional": false,
            "field": "bonus_time",
            "description": "<p>赎回生效日期</p>"
          }
        ]
      }
    },
    "filename": "../admin/frontend/order.py",
    "groupTitle": "Order"
  },
  {
    "type": "post",
    "url": "/api/orders/:order_no/dividends",
    "title": "订单打款",
    "name": "CreateOrderDividends",
    "group": "Order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "date",
            "optional": false,
            "field": "actual_time",
            "description": "<p>实际打款日期</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"amount\": 1,\n    \"actual_time\": \"2017-12-1\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../admin/frontend/order.py",
    "groupTitle": "Order"
  },
  {
    "type": "post",
    "url": "/api/orders/:order_no/redeem",
    "title": "创建订单赎回记录",
    "name": "CreateOrderRedeem",
    "group": "Order",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "amount",
            "description": "<p>金额（元）/份额（份）</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "remark",
            "description": "<p>备注</p>"
          },
          {
            "group": "Parameter",
            "type": "datetime",
            "optional": false,
            "field": "redemption_time",
            "description": "<p>赎回生效日期</p>"
          },
          {
            "group": "Parameter",
            "type": "float",
            "optional": true,
            "field": "redeem_value",
            "description": "<p>赎回日净值</p>"
          },
          {
            "group": "Parameter",
            "type": "float",
            "optional": true,
            "field": "fee",
            "description": "<p>手续费</p>"
          }
        ]
      }
    },
    "filename": "../admin/frontend/order.py",
    "groupTitle": "Order"
  },
  {
    "type": "post",
    "url": "/api/orders/:order_no/share_change",
    "title": "创建份额变更记录",
    "name": "CreateOrderShareChange",
    "group": "Order",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "amount",
            "description": "<p>金额（元）/份额（份）</p>"
          },
          {
            "group": "Parameter",
            "type": "datetime",
            "optional": false,
            "field": "update_time",
            "description": "<p>变更生效日期</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "remark",
            "description": "<p>备注</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "direction",
            "description": "<p>1:增加,-1减少</p>"
          }
        ]
      }
    },
    "filename": "../admin/frontend/order.py",
    "groupTitle": "Order"
  },
  {
    "type": "delete",
    "url": "/api/orders/:order_no",
    "title": "删除订单",
    "name": "DeleteOrder",
    "group": "Order",
    "version": "0.0.0",
    "filename": "../admin/frontend/order.py",
    "groupTitle": "Order"
  },
  {
    "type": "delete",
    "url": "/api/orders/:order_no/bonus/:id",
    "title": "删除订单分红记录",
    "name": "DeleteOrderBonus",
    "group": "Order",
    "version": "1.0.0",
    "filename": "../admin/frontend/order.py",
    "groupTitle": "Order"
  },
  {
    "type": "delete",
    "url": "/api/orders/:order_no/distributions/:id",
    "title": "删除订单分配记录",
    "name": "DeleteOrderDistribution",
    "group": "Order",
    "version": "1.0.0",
    "filename": "../admin/frontend/order.py",
    "groupTitle": "Order"
  },
  {
    "type": "delete",
    "url": "/api/orders/:order_no/dividends/:id",
    "title": "删除订单打款",
    "name": "DeleteOrderDividends",
    "group": "Order",
    "version": "0.0.0",
    "filename": "../admin/frontend/order.py",
    "groupTitle": "Order"
  },
  {
    "type": "delete",
    "url": "/api/orders/:order_no/redeem/:id",
    "title": "删除订单赎回记录",
    "name": "DeleteOrderRedeem",
    "group": "Order",
    "version": "1.0.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "1.34    # 剩余份额",
          "type": "json"
        }
      ]
    },
    "filename": "../admin/frontend/order.py",
    "groupTitle": "Order"
  },
  {
    "type": "delete",
    "url": "/api/orders/:order_no/share_change/:id",
    "title": "删除份额变更记录",
    "name": "DeleteOrderShareChange",
    "group": "Order",
    "version": "1.0.0",
    "filename": "../admin/frontend/order.py",
    "groupTitle": "Order"
  },
  {
    "type": "patch",
    "url": "/api/orders/:order_no/finish",
    "title": "完成订单",
    "name": "FinishOrder",
    "group": "Order",
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"customer_name\": \"客户姓名\",\n    \"customer_mobile\": \"1504342323\",\n    \"amount\": 300,  # 认购金额\n    \"pay_time\": \"2017-05-28\",    # 打款日期\n    \"customer_id_card_no\": \"身份证号\",\n    \"attachment_id\": 12     # 相关文件ID\n    \"buy_time\": \"2017-05-28T16:00:00\",  # 计息日\n    \"remark\": \"备注\",\n    \"prospective_earning\": 1.3, # 预期年化收益\n    \"buy_duration\": 3,\n    \"expire_time\": \"2017-05-28T16:00:00\"    # 到期时间\n    \"buy_value\": 1.33,  # 购买时净值\n    \"buy_share\": 13,    # 份额(万份)\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../admin/frontend/order.py",
    "groupTitle": "Order"
  },
  {
    "type": "get",
    "url": "/api/orders/:order_no/bonus",
    "title": "订单分红记录",
    "name": "OrderBonus",
    "group": "Order",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"id\": 1,\n    \"amount\": 13,   # 金额\n    \"bonus_time\": \"2017-01-01T17:00:00\",   # 分配时间\n    \"remark\": \"备注\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../admin/frontend/order.py",
    "groupTitle": "Order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "page",
            "description": "<p>第几页</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "per_page",
            "description": "<p>每页数量</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/api/orders/:order_no",
    "title": "订单详情",
    "name": "OrderDetails",
    "group": "Order",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"product_name\": \"产品名称\",\n    \"customer_name\": \"客户名称\",\n    \"customer_id_card_no\": \"客户证件号\",\n    \"customer_mobile\": \"客户手机号\",\n    \"pay_time\": \"2017-12-21\",   # 打款日期\n    \"amount\": 12,   # 认购金额\n    \"persistent_share\": 100,    # 存续份额\n    \"buy_share\": 100,       # 认购份额\n    \"prospective_earning\": 0.11,    # 预期年化收益\n    \"buy_duration\": 12, # 期限\n    \"start_date\": \"2017-11-11T17:00:00\",    # 成立日\n    \"buy_time\": \"2017-11-11T17:00:00\",    # 认购日\n    \"last_redemption_time\": \"2017-11-11T17:00:00\",    # 最后赎回日\n    \"expire_time\": \"2017-11-11T17:00:00\",    # 到期日\n    \"user_name\": \"理财师\",\n    \"remark\": \"备注\",\n    \"book_profit\": \"133\",   # 账面收益\n    \"currency\": 1,\n    \"distribution\": 999,    # 分配金额\n    \"book_profit_percent\": 0.12,    # 账面收益率\n    \"buy_value\": 1, # 认购日净值\n    \"last_redemption_value\": 1.33,  # 最后赎回净值\n    \"last_value_update_time\": \"2017-11-11T17:00:00\",    # 最新净值日\n    \"last_value\": 1.33,    # 最新净值\n    \"persistent_amount\": 933,    # 存续金额 / 万\n    \"bonus\": 933,    # 分红金额\n    \"survival\": true,   # 是否存续中\n    \"profit_type\": 1,\n    \"attachment\": {\n        \"id\": 1,\n        \"name\": \"xxx',\n        \"url\": 地址\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../admin/frontend/order.py",
    "groupTitle": "Order"
  },
  {
    "type": "get",
    "url": "/api/orders/:order_no/distributions",
    "title": "订单分配记录",
    "name": "OrderDistribution",
    "group": "Order",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"id\": 1,\n    \"amount\": 13,   # 金额 / 元\n    \"bonus_time\": \"2017-01-01T17:00:00\",   # 分配时间\n    \"finished\": true,   # 已分配\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../admin/frontend/order.py",
    "groupTitle": "Order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "page",
            "description": "<p>第几页</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "per_page",
            "description": "<p>每页数量</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/api/orders/:order_no/dividends",
    "title": "订单打款记录",
    "name": "OrderDividends",
    "group": "Order",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[{\n    \"id\": 1\n    \"amount\": 1,\n    \"actual_time\": \"2017-12-1\",\n    \"currency\": 1\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../admin/frontend/order.py",
    "groupTitle": "Order"
  },
  {
    "type": "get",
    "url": "/api/orders/:order_no/redeem",
    "title": "订单赎回记录",
    "name": "OrderRedeem",
    "group": "Order",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[{\n    \"id\": 1,\n    \"amount\": 13,   # 金额/元\n    \"redeem_value\": 1.4,    # 赎回时净值（浮动）\n    \"fee\": 13.31,   # 手续费\n    \"redemption_time\": \"2017-01-01T17:00:00\",   # 赎回生效日\n    \"remark\": \"备注\",\n    \"status\": 1,    # 状态1:等待，2：成功, 3:失败\n    \"market_value_change\": 1.33,    #市值变化\n    \"actual_profit\": 999,   # 实际收益\n    \"absolute_profit\": 999, # 绝对收益\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../admin/frontend/order.py",
    "groupTitle": "Order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "page",
            "description": "<p>第几页</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "per_page",
            "description": "<p>每页数量</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/api/orders/:order_no/share_change",
    "title": "订单份额变更记录",
    "name": "OrderShareChange",
    "group": "Order",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[{\n    \"id\": 1,\n    \"amount\": 13,   # 金额\n    \"update_time\": \"2017-01-01T17:00:00\",\n    \"remark\": \"备注\"\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../admin/frontend/order.py",
    "groupTitle": "Order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "page",
            "description": "<p>第几页</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "per_page",
            "description": "<p>每页数量</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/api/orders",
    "title": "订单列表",
    "name": "Orders",
    "group": "Order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "status",
            "description": "<p>状态1:预约中,2:已完成,3:已关闭</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "name",
            "description": "<p>产品名</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "channel_user_id",
            "description": "<p>渠道查询时的理财师ID</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "channel_adviser_id",
            "description": "<p>渠道查询时的投顾ID</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "channel_referrer_id",
            "description": "<p>渠道查询时的推荐人ID</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "user_id",
            "description": "<p>理财师ID</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "product_id",
            "description": "<p>产品ID</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "page",
            "description": "<p>第几页</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "per_page",
            "description": "<p>每页数量</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[{\n    \"order_no\": \"201708123301\",\n    \"user\": {\n        \"id\": 100094,\n        \"name\": \"理财师A\"\n    },\n    \"product\": {\n        \"id\": 1000001,\n        \"name\": \"产品名称\"\n    },\n    \"currency\": 1,\n    \"profit_type\": 1,\n    \"customer_name\": \"客户名称\",\n    \"is_confirmed\": true,                     # 是否已完成\n    \"precontract_amount\": 300,          # 金额\n    \"pay_time\": \"2017-03-01\",  # 打款时间\n    \"buy_time\": \"2017-03-01\",   # 计息确认日\n    \"closed\": true,     # 是否已关闭\n    \"persistent_share\": 100,    # 存续份额\n    \"created_time\": \"2017-03-01T17:33:21\"\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../admin/frontend/order.py",
    "groupTitle": "Order"
  },
  {
    "type": "get",
    "url": "/api/orders/:order_no/distributions/:id",
    "title": "上次订单分配记录",
    "name": "PriorOrderDistribution",
    "group": "Order",
    "success": {
      "examples": [
        {
          "title": "Success-Response: (返回None就是没有)",
          "content": "{\n    \"amount\": 13,   # 金额/元\n    \"bonus_time\": \"2017-01-01T17:00:00\",   # 赎回生效日\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../admin/frontend/order.py",
    "groupTitle": "Order"
  },
  {
    "type": "get",
    "url": "/api/users/reserve_list",
    "title": "用户预约列表",
    "name": "ReserveList",
    "group": "Order",
    "version": "0.0.0",
    "filename": "../admin/frontend/order.py",
    "groupTitle": "Order"
  },
  {
    "type": "post",
    "url": "/api/orders/subscribe",
    "title": "预约订单",
    "name": "SubscribeOrder",
    "group": "Order",
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"user_id\": 100460,\n    \"product_id\": 334,\n    \"customer_name\": \"客户姓名\",\n    \"customer_no\": \"客户编号\"\n    \"precontract_amount\": 300,  # 额度\n    \"pay_time\": \"2015-12-23\"    # 打款日期\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../admin/frontend/order.py",
    "groupTitle": "Order"
  },
  {
    "type": "patch",
    "url": "/api/orders/:order_no",
    "title": "修改订单",
    "name": "UpdateOrder",
    "group": "Order",
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"customer_name\": \"客户姓名\",\n    \"customer_mobile\": \"1504342323\",\n    \"amount\": 300,  # 认购金额\n    \"pay_time\": \"2017-05-28\",    # 打款日期\n    \"customer_id_card_no\": \"身份证号\",\n    \"attachment_id\": 12     # 相关文件ID\n    \"buy_time\": \"2017-05-28T16:00:00\",  # 计息日\n    \"remark\": \"备注\",\n    \"prospective_earning\": 1.3, # 预期年化收益\n    \"buy_duration\": 3,\n    \"expire_time\": \"2017-05-28T16:00:00\"    # 到期时间\n    \"buy_value\": 1.33,  # 购买时净值\n    \"buy_share\": 13,    # 份额(万份)\n    \"closed\": true,     # 是否关闭\n    \"attachment_id\": 3, # 相关文件ID\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../admin/frontend/order.py",
    "groupTitle": "Order"
  },
  {
    "type": "put",
    "url": "/api/orders/:order_no/bonus/:id",
    "title": "更新订单分红记录",
    "name": "UpdateOrderBonus",
    "group": "Order",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "amount",
            "description": "<p>金额</p>"
          },
          {
            "group": "Parameter",
            "type": "datetime",
            "optional": false,
            "field": "bonus_time",
            "description": "<p>分红日期</p>"
          }
        ]
      }
    },
    "filename": "../admin/frontend/order.py",
    "groupTitle": "Order"
  },
  {
    "type": "put",
    "url": "/api/orders/:order_no/distributions/:id",
    "title": "更新订单分配记录",
    "name": "UpdateOrderDistribution",
    "group": "Order",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "amount",
            "description": "<p>金额</p>"
          },
          {
            "group": "Parameter",
            "type": "datetime",
            "optional": false,
            "field": "bonus_time",
            "description": "<p>赎回生效日期</p>"
          }
        ]
      }
    },
    "filename": "../admin/frontend/order.py",
    "groupTitle": "Order"
  },
  {
    "type": "put",
    "url": "/api/orders/:order_no/dividends/:id",
    "title": "修改订单打款",
    "name": "UpdateOrderDividends",
    "group": "Order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "date",
            "optional": false,
            "field": "actual_time",
            "description": "<p>实际打款日期</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"amount\": 1,\n    \"actual_time\": \"2017-12-1\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../admin/frontend/order.py",
    "groupTitle": "Order"
  },
  {
    "type": "put",
    "url": "/api/orders/:order_no/redeem/:id",
    "title": "更新订单赎回记录",
    "name": "UpdateOrderRedeem",
    "group": "Order",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "amount",
            "description": "<p>金额（元）/份额（份）</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "remark",
            "description": "<p>备注</p>"
          },
          {
            "group": "Parameter",
            "type": "datetime",
            "optional": false,
            "field": "redemption_time",
            "description": "<p>赎回生效日期</p>"
          },
          {
            "group": "Parameter",
            "type": "float",
            "optional": true,
            "field": "redeem_value",
            "description": "<p>赎回日净值</p>"
          },
          {
            "group": "Parameter",
            "type": "float",
            "optional": true,
            "field": "fee",
            "description": "<p>手续费</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "1.34    # 剩余份额",
          "type": "json"
        }
      ]
    },
    "filename": "../admin/frontend/order.py",
    "groupTitle": "Order"
  },
  {
    "type": "put",
    "url": "/api/orders/:order_no/share_change/:id",
    "title": "更新份额变更记录",
    "name": "UpdateOrderShareChange",
    "group": "Order",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "amount",
            "description": "<p>金额（元）/份额（份）</p>"
          },
          {
            "group": "Parameter",
            "type": "datetime",
            "optional": false,
            "field": "update_time",
            "description": "<p>变更生效日期</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "remark",
            "description": "<p>备注</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "direction",
            "description": "<p>1:增加,-1减少</p>"
          }
        ]
      }
    },
    "filename": "../admin/frontend/order.py",
    "groupTitle": "Order"
  },
  {
    "type": "get",
    "url": "/api/org",
    "title": "机构列表",
    "name": "OrgList",
    "group": "Org",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "company_name",
            "description": "<p>机构名称</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[{\n    \"id\": 1,\n    \"company_name\": \"dsadasd\"  #机构名\n    \"created_time\": \"2015-12-12\"  #机构创建时间\n    \"owner_name\": \"maice\"  #机构创始人\n    \"member_count\": 8  #机构成员数\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../admin/frontend/org.py",
    "groupTitle": "Org"
  },
  {
    "type": "get",
    "url": "/api/org/:org_id",
    "title": "机构详情",
    "name": "OrgList",
    "group": "Org",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[{\n    \"id\": 1,\n    \"company_name\": \"dsadasd\"  #机构名\n    \"created_time\": \"2015-12-12\"  #机构创建时间\n    \"owner_name\": \"maice\"  #机构创始人\n    \"member_count\": 8  #机构成员数\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../admin/frontend/org.py",
    "groupTitle": "Org"
  },
  {
    "type": "post",
    "url": "/api/products",
    "title": "创建产品",
    "name": "CreateProduct",
    "group": "Product",
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"name\": \"产品A\"，\n    \"dim_name\": \"麦策产品A\",    # 未登录用户看到的产品名\n    \"status\": 1,    # 产品状态 0: 待上架 ，1：筹备中,2:众筹中,3:已完成, 4:募集结束\n    \"profit_type\": 1,   # 产品类型 0：固定， 1：浮动\n    \"type\": 1,\n    \"minimum_size\": 12,     # 最小募集规模/万\n    \"maximum_size\": 33,     # 最大募集规模/万\n    \"minimum_subscription_size\": 10,    # 起够金额\n    \"last_pay_time\": \"2017-12-3\",   # 最迟打款时间 日期或时间格式字符串都行\n    \"strategy\": {\n        \"value\": \"101010\",\n        \"text\": \"\"\n    },\n    \"fund_manager\": \"管理人\",\n    \"start_date\": \"2017-12-16T16:00:00\",    # 产品成立日\n    \"end_date\": \"2017-12-16T16:00:00\",    # 产品结束日\n    \"first_open_date\": \"2017-12-16\":     # 首次开放日\n    \"current_open_date\": \"2017-12-16\":     # 本期开放日\n    \"dividend_type\": 1, # 分红方式\n    \"close_time\": \"封闭期\",\n    \"other_time_point\": \"其他时间节点\",\n    \"collect_account_name\": \"募集账户名\",\n    \"collect_account\": \"募集账号\",\n    \"bank_name\": \"开户行\",\n    \"remit_remark\": \"打款备注\",\n    \"invest_info\": \"投资方向\",\n    \"risk_info\": \"风控措施\",\n    \"fee_info\": \"产品费用\",\n    \"fee_sale\": \"销售费用\",\n    \"max_fee_sale\": \"最高销售费用\",\n    \"currency\": 1,      # 1:人民币, 2:美元\n    \"contract_file_id\": 33,    # 合同文件\n    \"images\": [\"http://address1\", \"http://address2\"],   # 配图\n    \"relevant_files\": [{\"id\": 23, \"type\": 1}], # 相关文件\n    \"remark\": \"备注\",\n    \"hide\": true,\n    \"top\": true,\n    \"profit_interval\": [{       # 收益区间\n        \"condition_ceiling\": 133,   # 金额上限\n        \"condition_floor\": 21,      # 金额下线\n        \"prospective_earning\": 0.02 # 预期年化收益\n        \"duration\": 23,             # 期限\n        \"sales_expense\": 0.33,      # 销售费用比例\n    }],\n    \"distribution_period\": 3,   # 分配周期\n    \"first_distribution_date\": \"2017-12-11\",    # 首次分配日\n    \"estimated_dividends_time_description\": \"预计打款时间描述\",\n    \"increment_size\": 3,        # 递增金额\n    \"period_type\": 1,           # 定期开放类型,1:自动,2:手动\n    \"period\": 3,                # 开放周期\n    \"period_unit\": 1,           # 开放周期单位,1:月，2：周\n    \"distributions\": [{         # 手动分配记录\n        \"date\": \"2017-12-11\",   # 分配日\n        \"redeem_percent\": 3.11  # 本金分配比例\n    }],\n    \"expenses_type\": 1,         # 产品费用类型\n    \"tax_rate\": 12,             # 税率\n    \"expenses\": [{              # 费用\n        \"condition_floor\": 12,  # 金额下限/万\n        \"condition_ceiling\": 33,# 金额上限/万\n        \"total\": 3,             # 总费用\n        \"exploit\": 4,           # 开发费\n        \"underwrite\":1,         # 包销费\n        distribution: 3,        # 发行费\n        sales: 3,               # 销售费\n        management: 1,          # 管理费\n        management_sales: 3.9,  # 管理销售费用\n        management_exploit: 1,  # 管理开发费用\n        management_underwrite: 3,   # 管理包销费用\n        management_distribution: 1, # 管理发行费用\n        performance:3,          # 业绩费\n        performance_sales: 1,   # 业绩销售费用\n        performance_exploit: 9, # 业绩开发费用\n        performance_underwrite: 9,  # 业绩包销费用\n        performance_distribution: 1 # 业绩发行费用\n    }]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../admin/frontend/product.py",
    "groupTitle": "Product"
  },
  {
    "type": "post",
    "url": "/api/products/:pid/distributions",
    "title": "创建临时分配记录",
    "name": "CreateProductDistributions",
    "group": "Product",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "float",
            "optional": false,
            "field": "redeem_percent",
            "description": "<p>比例</p>"
          },
          {
            "group": "Parameter",
            "type": "datetime",
            "optional": false,
            "field": "date",
            "description": "<p>时间</p>"
          }
        ]
      }
    },
    "filename": "../admin/frontend/product.py",
    "groupTitle": "Product"
  },
  {
    "type": "post",
    "url": "/api/products/:pid/news",
    "title": "创建产品动态/创建活动",
    "name": "CreateProductNews",
    "group": "Product",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "content",
            "description": "<p>动态内容</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "allowedValues": [
              "1",
              "2"
            ],
            "optional": true,
            "field": "type",
            "defaultValue": "1",
            "description": "<p>动态类型 1: 普通, 2: 活动</p>"
          },
          {
            "group": "Parameter",
            "type": "date",
            "optional": true,
            "field": "deadline",
            "description": "<p>开放截止日期</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../admin/frontend/product.py",
    "groupTitle": "Product"
  },
  {
    "type": "post",
    "url": "/api/products/:pid/raises",
    "title": "创建产品募集记录",
    "name": "CreateProductRaise",
    "group": "Product",
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"start_date\": \"2017-12-11\", # 产品成立日\n    \"first_distribution_date\": \"2017-12-11\",    # 首次分配日\n    \"distribution_period\": 3,   # 分配周期\n    \"profit_interval\": [{       # 收益区间\n        \"condition_ceiling\": 133,   # 金额上限\n        \"condition_floor\": 21,      # 金额下线\n        \"prospective_earning\": 0.02 # 预期年化收益\n        \"duration\": 23,             # 期限\n        \"expire_time\": \"2017-12-16T16:00:00\",   # 过期时间\n        \"description\": \"收益描述\",\n        \"sales_expense\": 0.33,      # 销售费用比例\n        \"percent\": 3.3,     # 计算比例\n        \"calc_date\": \"2017-12-11\"   # 计算日期\n    }]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../admin/frontend/product.py",
    "groupTitle": "Product"
  },
  {
    "type": "post",
    "url": "/api/products/:pid/values",
    "title": "创建产品净值",
    "name": "CreateProductValues",
    "group": "Product",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "float",
            "optional": false,
            "field": "total_value",
            "description": "<p>累计净值</p>"
          },
          {
            "group": "Parameter",
            "type": "datetime",
            "optional": false,
            "field": "update_time",
            "description": "<p>更新时间</p>"
          }
        ]
      }
    },
    "filename": "../admin/frontend/product.py",
    "groupTitle": "Product"
  },
  {
    "type": "delete",
    "url": "/api/products/:pid/distributions/:id",
    "title": "删除临时分配记录",
    "name": "DeleteProductDistributions",
    "group": "Product",
    "version": "1.0.0",
    "filename": "../admin/frontend/product.py",
    "groupTitle": "Product"
  },
  {
    "type": "delete",
    "url": "/api/products/news/:id",
    "title": "删除产品动态",
    "name": "DeleteProductNews",
    "group": "Product",
    "version": "0.0.0",
    "filename": "../admin/frontend/product.py",
    "groupTitle": "Product"
  },
  {
    "type": "delete",
    "url": "/api/products/:pid/raises/:id",
    "title": "删除募集记录",
    "name": "DeleteProductRaise",
    "group": "Product",
    "version": "0.0.0",
    "filename": "../admin/frontend/product.py",
    "groupTitle": "Product"
  },
  {
    "type": "get",
    "url": "/api/products/:pid/raises/:id",
    "title": "获取募集记录明细",
    "name": "GetProductRaiseDetail",
    "group": "Product",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"id\": 33,\n    \"start_date\": \"2017-12-11\",\n    \"profit_intervals\": [{  # 收益区间\n        \"condition_ceiling\": 133,   # 金额上限\n        \"condition_floor\": 21,      # 金额下线\n        \"prospective_earning\": 0.02 # 预期年化收益\n        \"duration\": 23,             # 期限\n        \"expire_time\": \"2017-12-16T16:00:00\",   # 过期时间\n        \"description\": \"收益描述\",\n        \"sales_expense\": 0.33      # 销售费用比例\n        \"first_distribution_date\": \"2018-01-01\",    # 首次分配日\n        \"distribution_period\": 3,       # 分配周期\n    }]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../admin/frontend/product.py",
    "groupTitle": "Product"
  },
  {
    "type": "get",
    "url": "/api/products/:pid/raises",
    "title": "获取募集记录列表",
    "name": "GetProductRaiseList",
    "group": "Product",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[{\n    \"id\": 33,\n    \"start_date\": \"2017-12-11\"\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../admin/frontend/product.py",
    "groupTitle": "Product"
  },
  {
    "type": "get",
    "url": "/api/products/:pid",
    "title": "联合采购产品详情",
    "name": "ProductDetail",
    "group": "Product",
    "version": "0.0.0",
    "filename": "../admin/frontend/product.py",
    "groupTitle": "Product",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"id\": 1,\n    \"name\": \"产品名称\"\n    \"profit_type\": 1,       # 收益类型 0：固定， 1：浮动,\n    \"type\": 1,              # 产品类型, 1:普通, 2:定期开放\n    \"status\": 1,            # 产品状态 0: 待上架 ，1:筹备中,2:众筹中,3:已完成,-1:项目失败\n    \"minimum_size\": 12,     # 最小募集规模/万\n    \"maximum_size\": 33,     # 最大募集规模/万\n    \"current_precontract_size\": 12, # 当前预约额度/万\n    \"last_pay_time\": \"2017-12-16T16:00:00\",   # 最迟打款时间\n    \"minimum_subscription_size\": 10,    # 起够金额\n    \"strategy\": {\n        \"value\": \"101001\",\n        \"text\": \"市场中性\"\n    },\n    \"fund_manager\": \"管理人\",\n    \"start_date\": \"2017-12-16T16:00:00\",    # 产品成立日\n    \"end_date\": \"2017-12-16T16:00:00\",    # 产品结束日\n    \"open_date\": \"2017-12-16T16:00:00\",\t\t# 产品开放日\n    \"open_date_description\": \"产品开放日描述\",\n    \"first_open_date\": \"2017-12-16\":     # 首次开放日\n    \"current_open_date\": \"2017-12-16\":     # 本期开放日\n    \"dividend_type\": 1, # 分红方式: 1份额2金额\n    \"close_time\": \"封闭期\",\n    \"other_time_point\": \"其他时间节点\",\n    \"collect_account_name\": \"募集账户名\",\n    \"collect_account\": \"募集账号\",\n    \"bank_name\": \"开户行\",\n    \"remit_remark\": \"打款备注\",\n    \"invest_info\": \"投资方向\",\n    \"risk_info\": \"风控措施\",\n    \"fee_info\": \"产品费用\",\n    \"fee_sale\": \"销售费用\",\n    \"max_fee_sale\": \"最高销售费用\",\n    \"currency\": 1,      # 1:人民币, 2:美元\n    \"estimated_dividends_time_description\": \"预计打款时间描述\",\n    \"images\": [\"http://address1\", \"http://address2\"],   # 配图\n    \"tags\": \"tag1,tag2\",    # 标签\n    \"relevant_files\": [{\n        \"id\": 1777,\n        \"name\": \"相关文件1\",\n        \"url\": \"/api/file/3\",\n        \"type\": 1,      # 文件类型, 1推荐,2合同,3:信息披露\n    }]\n    \"remark\": \"备注\",\n    \"max_prospective_earning\": 0.334,   # 最高预期年化收益\n    \"surplus_time\": 2344444,    # 剩余时间/sec\n    \"surplus_size\": 23,         # 剩余额度/万\n    \"followed\": false,          # 是否关注\n    \"repayment_source\": \"还款来源\",\n    \"hide\": true,       # 是否隐藏\n    \"increment_size\": 3,        # 递增金额\n    \"duration\": \"3 - 18 个月\",    # 期限\n    \"profit_interval\": [{       # 收益区间\n        \"condition_ceiling\": 133,   # 金额上限\n        \"condition_floor\": 21,      # 金额下线\n        \"prospective_earning\": 0.02 # 预期年化收益\n        \"duration\": 23,             # 期限\n        \"expire_time\": \"2017-12-16T16:00:00\",   # 过期时间\n        \"description\": \"收益描述\",\n        \"settlement_days\": 33,      # 结算天数\n        \"sales_expense\": 0.33,      # 销售费用比例\n    }],\n    \"expenses\": [{       # 费用区间\n        \"condition_ceiling\": 133,   # 金额上限\n        \"condition_floor\": 21,      # 金额下线\n        \"total\": 0.02 # 总费用\n        \"exploit\": 23,              # 开发\n        \"distribution\": 33,   # 发行\n        \"underwrite\": 9,    # 包销\n        \"sales\": 33,      # 销售费\n        \"management\": 0.33,      # 管理费\n        \"management_sales\": 0.33,      # 管理销售费用\n        \"management_exploit\": 0.33,      # 管理开发费用\n        \"management_underwrite\": 0.33,      # 管理包销费用\n        \"management_distribution\": 0.33,      # 管理发行费用\n        \"performance\": 0.33,      # 业绩费\n        \"performance_sales\": 0.33,      # 业绩销售费用\n        \"performance_exploit\": 0.33,      # 业绩开发费用\n        \"performance_underwrite\": 0.33,      # 业绩包销费用\n        \"performance_distribution\": 0.33,      # 业绩发行费用\n    }],\n    \"major_timeline\": [             # 产品流程\n          {\n            \"cnt\": 0,               # 子流程数量\n            \"name\": \"项目完成\",     # 进度名称\n            \"nodes\": [],            # 子流程\n            \"status\": 0             # 进度状态 0:待进行,1:进行中,2:已结束,3:失败\n          },\n          {\n            \"cnt\": 0,\n            \"name\": \"开始采购\",\n            \"nodes\": [],\n            \"status\": 0\n          },\n          {\n            \"cnt\": 0,\n            \"name\": \"尽调研究\",\n            \"nodes\": [],\n            \"status\": 0\n          },\n          {\n            \"cnt\": 0,\n            \"name\": \"项目录入\",\n            \"nodes\": [\n              {\n                \"content\": \"gCBO8i4aj3fk\",      # 进度内容\n                \"created_time\": \"2017-03-22T17:08:20\",\n                \"id\": 2,\n                \"type\": 1,              # 节点类型, 1:普通, 2:可参与\n                \"participation_status\": 0       # 用户参与状态, 0:待审核，1:审核通过, 2:未参与\n                \"status\": 0             # 进度状态 0:待进行,1:进行中,2:已结束,3:失败\n              }\n            ],\n            \"status\": 1,\n            \"time\": \"2017-03-22T17:08:20\"       # 时间\n          }\n    ],\n    \"sell_status\": 1,       # 1:停售, 2:在售\n    \"count_day_num\": 365,   # 计息规则\n    \"distribution_period\": 3,   # 分配周期\n    \"open_date_info\": \"开放日说明\"\n    \"period_type\": 1,           # 定期开放类型,1:自动,2:手动\n    \"period\": 3,                # 开放周期\n    \"period_unit\": 1,           # 开放周期单位,1:月，2：周\n    \"distributions\": [{         # 手动分配记录\n        \"id\": 1\n        \"date\": \"2017-12-11\",   # 分配日\n        \"redeem_percent\": 3.11  # 本金分配比例\n        \"created_time\": \"2017-03-22T17:08:20\"\n    }],\n    \"expenses_type\": 3, # 费用类型\n    \"tax_rate\": 3.33    # 费率\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/products/:pid/news",
    "title": "产品动态",
    "name": "ProductNews",
    "group": "Product",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[{\n    \"id\": 122,\n    \"content\": \"动态内容\"\n    \"created_time\": \"2017-12-16T16:00:00\",\n    \"type\": 1\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../admin/frontend/product.py",
    "groupTitle": "Product"
  },
  {
    "type": "get",
    "url": "/api/products/:product_id/profit_intervals",
    "title": "产品收益区间",
    "name": "ProductProfitIntervals",
    "group": "Product",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "unique_duration",
            "description": "<p>1:期限去重，0：不去重</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "buy_time",
            "description": "<p>计息日</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[{\n    \"condition_ceiling\": 133,   # 金额上限\n    \"condition_floor\": 21,      # 金额下线\n    \"prospective_earning\": 0.02 # 预期年化收益\n    \"duration\": 23,             # 期限\n    \"expire_time\": \"2017-12-16T16:00:00\",   # 过期时间\n    \"description\": \"收益描述\"\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../admin/frontend/product.py",
    "groupTitle": "Product"
  },
  {
    "type": "get",
    "url": "/api/products/strategies",
    "title": "产品策略",
    "name": "ProductStrategies",
    "group": "Product",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "int",
            "description": "<p>type 1:浮动,2:固定</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[{\n    \"value\": \"101011\",\n    \"text\": \"主观多空\"\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../admin/frontend/product.py",
    "groupTitle": "Product"
  },
  {
    "type": "get",
    "url": "/api/products/:pid/values",
    "title": "产品净值列表",
    "name": "ProductValues",
    "group": "Product",
    "version": "1.0.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"id\": 113,\n    \"update_time\": \"2017-12-16T16:00:00\",\n    \"total_value\": 1.3,        # 净值\n    \"increase\": 0.13,       # 涨幅\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../admin/frontend/product.py",
    "groupTitle": "Product",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "page",
            "description": "<p>第几页</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "per_page",
            "description": "<p>每页数量</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/api/products/:pid/value_graph",
    "title": "产品净值图",
    "name": "ProductValuesGraph",
    "group": "Product",
    "version": "1.0.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"product\": [{\n        \"update_time\": \"2017-12-16T16:00:00\"\n        \"total_value\": 1.34\n    }],\n    \"CSI300\": [{    # 沪深300\n        \"update_time\": \"2017-12-16T16:00:00\"\n        \"total_value\": 1.34\n    }]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../admin/frontend/product.py",
    "groupTitle": "Product"
  },
  {
    "type": "get",
    "url": "/api/products",
    "title": "产品列表",
    "name": "Products",
    "group": "Product",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "name",
            "description": "<p>产品名称</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "fuzzy_match",
            "defaultValue": "1",
            "description": "<p>是否启用模糊匹配</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "page",
            "description": "<p>第几页</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "per_page",
            "description": "<p>每页数量</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[{\n    \"id\": 122,\n    \"name\": \"产品名称\"\n    \"status\": 1,            # 产品状态 0: 待上架 ，1：筹备中,2:众筹中,3:已完成, 4:募集结束, -1:关闭\n    \"minimum_size\": 12,     # 最小募集规模/万\n    \"current_precontract_size\": 12, # 当前募集额度/万\n    \"surplus_size\": 333,    # 剩余募集规模\n    \"top\": true,\n    \"open_date\": \"2015-12-12\",  # 开放日,\n    \"period_type\": 1,       # 开放形式,1:自动，2：手动\n    \"profit_type\": 1,       # 收益类型\n    \"type\": 1,              # 类型\n    \"currency\": 1\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../admin/frontend/product.py",
    "groupTitle": "Product"
  },
  {
    "type": "put",
    "url": "/api/products/:pid",
    "title": "更新产品",
    "name": "UpdateProduct",
    "group": "Product",
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "数据格式参考创建产品接口",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../admin/frontend/product.py",
    "groupTitle": "Product"
  },
  {
    "type": "put",
    "url": "/api/products/:pid/distributions/:id",
    "title": "修改临时分配记录",
    "name": "UpdateProductDistributions",
    "group": "Product",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "float",
            "optional": false,
            "field": "redeem_percent",
            "description": "<p>比例</p>"
          },
          {
            "group": "Parameter",
            "type": "datetime",
            "optional": false,
            "field": "date",
            "description": "<p>时间</p>"
          }
        ]
      }
    },
    "filename": "../admin/frontend/product.py",
    "groupTitle": "Product"
  },
  {
    "type": "patch",
    "url": "/api/products/news/:id",
    "title": "更新产品动态",
    "name": "UpdateProductNews",
    "group": "Product",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "content",
            "description": "<p>动态内容</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../admin/frontend/product.py",
    "groupTitle": "Product"
  },
  {
    "type": "put",
    "url": "/api/products/:pid/raises/:id",
    "title": "更新募集记录",
    "name": "UpdateProductRaise",
    "group": "Product",
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "参数同创建",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../admin/frontend/product.py",
    "groupTitle": "Product"
  },
  {
    "type": "post",
    "url": "/api/products/:product_id/calc_prospective_earning",
    "title": "计算订单年化收益",
    "name": "calcProductProfit",
    "group": "Product",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "float",
            "optional": false,
            "field": "amount",
            "description": "<p>订单金额</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "buy_duration",
            "description": "<p>期限</p>"
          }
        ]
      }
    },
    "filename": "../admin/frontend/product.py",
    "groupTitle": "Product"
  },
  {
    "type": "delete",
    "url": "/api/products/:pid/values/:id",
    "title": "删除产品净值",
    "name": "deleteProductValues",
    "group": "Product",
    "version": "1.0.0",
    "filename": "../admin/frontend/product.py",
    "groupTitle": "Product"
  },
  {
    "type": "put",
    "url": "/api/products/:pid/values/:id",
    "title": "更新产品净值",
    "name": "updateProductValues",
    "group": "Product",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "float",
            "optional": false,
            "field": "total_value",
            "description": "<p>累计净值</p>"
          },
          {
            "group": "Parameter",
            "type": "datetime",
            "optional": false,
            "field": "update_time",
            "description": "<p>更新时间</p>"
          }
        ]
      }
    },
    "filename": "../admin/frontend/product.py",
    "groupTitle": "Product"
  },
  {
    "type": "post",
    "url": "/api/sms",
    "title": "发送短信",
    "name": "SendSms",
    "group": "Sms",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "type",
            "description": "<p>类型,1:推送净值,2:推送产品,3:推送活动</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "product_id",
            "description": "<p>产品ID</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "event_id",
            "description": "<p>活动ID</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "event_name",
            "description": "<p>活动名称</p>"
          },
          {
            "group": "Parameter",
            "type": "date",
            "optional": false,
            "field": "date",
            "description": "<p>日期</p>"
          },
          {
            "group": "Parameter",
            "type": "float",
            "optional": false,
            "field": "product_value",
            "description": "<p>产品净值</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "manager",
            "description": "<p>管理人</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "target",
            "description": "<p>目标群体,1:客户,2:理财师,3:全部</p>"
          }
        ]
      }
    },
    "filename": "../admin/frontend/sms.py",
    "groupTitle": "Sms"
  },
  {
    "type": "get",
    "url": "/api/statistic/order/user/:user_id",
    "title": "用户订单统计",
    "name": "UserOrderStats",
    "group": "Statistic",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"product_count\": {\"total\": 0, \"existence\": 0}   # 产品数量\n    \"order_amount\": {   # 单量\n        \"total\": {\"rmb\": 0, \"dollar\": 0},       # 总计\n        \"existence\": {\"rmb\": 0, \"dollar\": 0}    #  存续\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../admin/frontend/statistic.py",
    "groupTitle": "Statistic"
  },
  {
    "type": "get",
    "url": "/",
    "title": "非分页返回的结构",
    "name": "NormalStructure",
    "group": "Structure",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"data\": {},\n    \"ec\": 0,\n    \"msg\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../admin/apidoc.py",
    "groupTitle": "Structure"
  },
  {
    "type": "get",
    "url": "/",
    "title": "分页返回的结构",
    "name": "PageStructure",
    "group": "Structure",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"data\": {\n        \"has_next\": false,\n        \"has_prev\": false,\n        \"items\": [],\n        \"page\": 1,\n        \"total\": 100\n    },\n    \"ec\": 0,\n    \"msg\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../admin/apidoc.py",
    "groupTitle": "Structure"
  },
  {
    "type": "post",
    "url": "/api/users",
    "title": "创建用户",
    "name": "CreateUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "mobile",
            "description": "<p>手机号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>姓名</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "position",
            "description": "<p>职位</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "work_year",
            "description": "<p>工作年限</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "role",
            "description": "<p>角色</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "industry",
            "description": "<p>行业</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "business_card_pic",
            "description": "<p>名片</p>"
          },
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "org",
            "description": "<p>机构:{&quot;id&quot;: 1, &quot;company_name&quot;: &quot;机构名称&quot;}</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../admin/frontend/user.py",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/api/users/:user_id/freeze",
    "title": "冻结/解冻账号",
    "name": "FreezeUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "bool",
            "optional": false,
            "field": "freeze",
            "description": "<p>是否冻结</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../admin/frontend/user.py",
    "groupTitle": "User"
  },
  {
    "type": "put",
    "url": "/api/users/:id",
    "title": "更新用户",
    "name": "UpdateUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>姓名</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "position",
            "description": "<p>职位</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "work_year",
            "description": "<p>工作年限</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "industry",
            "description": "<p>行业</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "business_card_pic",
            "description": "<p>名片</p>"
          },
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "org",
            "description": "<p>机构:{&quot;id&quot;: 1, &quot;company_name&quot;: &quot;机构名称&quot;}</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../admin/frontend/user.py",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/users",
    "title": "用户列表",
    "name": "UserList",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "name",
            "description": "<p>用户姓名</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "admin_id",
            "description": "<p>管理员ID</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "tag",
            "defaultValue": "2",
            "description": "<p>用户标签 1:内部用户,2:外部用户,3:游客</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "page",
            "description": "<p>第几页</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "per_page",
            "description": "<p>每页数量</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求示例：旗下理财师",
          "content": "/api/users?admin_id=100342",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[{\n    \"user_id\": 100377,\n    \"name\": \"小明\",\n    \"mobile\": \"150679876523\",\n    \"role\": 1,      # 角色, 1:游客, 2:旗下理财师, 3:管理员\n    \"frozen\": true      # 是否已被冻结\n    \"join_time\": \"2016-12-23T12:23:33\", # 加入时间\n    \"certification_info\": {     # 认证信息\n        \"company_name\": \"机构名称\",\n        \"position\": \"职位理财师\",\n        \"work_year\": 1,     # 工作年限(1:1~3年, 2:3~5年, 3:5~10年, 4:10年以上)\n        \"industry\": 3,      # 行业(1:银行, 2:信托, 3:资管, 4:保险, 5:证券, 6:基金, 7:P2P, 8:三方)\n    },\n    \"org\": {\n        \"id\": 1,\n        \"company_name\": \"机构名称\"\n    }\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../admin/frontend/user.py",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/users/:user_id",
    "title": "用户详情",
    "name": "UserProfile",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>用户姓名</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "page",
            "description": "<p>第几页</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "per_page",
            "description": "<p>每页数量</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"user_id\": 100319,\n    \"name\": \"小明\",\n    \"mobile\": \"150432423\",\n    \"created_time\": \"2015-12-22\",   # 注册时间\n    \"role\": 1,      # 角色, 1:游客, 2:旗下理财师, 3:管理员\n    \"business_card_pic\": '/file/1',     # 名片\n    \"certification_info\": {     # 认证信息\n        \"company_name\": \"机构名称\",\n        \"position\": \"职位理财师\",\n        \"work_year\": 1,     # 工作年限(1:1~3年, 2:3~5年, 3:5~10年, 4:10年以上)\n        \"industry\": 3,      # 行业(1:银行, 2:信托, 3:资管, 4:保险, 5:证券, 6:基金, 7:P2P, 8:三方)\n    },\n    \"org\": {\n        \"id\": 1,\n        \"company_name\": \"机构名称\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../admin/frontend/user.py",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/users/statistic",
    "title": "用户统计",
    "name": "UserStats",
    "group": "User",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"internal\": 12, # 内部用户\n    \"external\": 23, # 外部用户\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../admin/frontend/user.py",
    "groupTitle": "User"
  }
] });
