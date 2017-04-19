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
            "type": "<p>String</p> ",
            "optional": false,
            "field": "login",
            "description": "<p>账号</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p> "
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
    "type": "post",
    "url": "/api/account/logout",
    "title": "注销",
    "name": "Logout",
    "group": "Account",
    "description": "<p>用户注销</p> ",
    "version": "0.0.0",
    "filename": "../admin/frontend/account.py",
    "groupTitle": "Account"
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
            "type": "<p>int</p> ",
            "optional": false,
            "field": "0",
            "description": "<p>成功</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "100001",
            "description": "<p>未知错误</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "100002",
            "description": "<p>参数错误</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "100003",
            "description": "<p>用户未登录</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "100004",
            "description": "<p>无权限访问</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "100005",
            "description": "<p>资源不存在</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "100006",
            "description": "<p>注册验证码短信发送太频繁</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "100007",
            "description": "<p>验证码错误</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "100008",
            "description": "<p>手机格式错误</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "100009",
            "description": "<p>身份证号不合法</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "100010",
            "description": "<p>非认证用户，无法访问</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "110001",
            "description": "<p>产品节点无法参与</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "120001",
            "description": "<p>产品无法购买</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "130001",
            "description": "<p>预约额度超过产品剩余额度</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "130002",
            "description": "<p>最迟打款日期晚于产品的最迟打款日期</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "130003",
            "description": "<p>存在未完成订单</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "130004",
            "description": "<p>不是订单管理员</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "130005",
            "description": "<p>订单初始化失败</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "130006",
            "description": "<p>订单预约额度不正确</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "130007",
            "description": "<p>订单流程错误</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "140001",
            "description": "<p>手机号已被注册</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "140002",
            "description": "<p>初始化账户失败</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "140003",
            "description": "<p>账号被冻结</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "140004",
            "description": "<p>登录密码错误</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "140005",
            "description": "<p>账号不存在</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "140006",
            "description": "<p>当前有待处理的认证审核</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "140007",
            "description": "<p>不是管理员</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "140008",
            "description": "<p>管理员无法退出机构</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "140009",
            "description": "<p>用户已加入机构</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "140010",
            "description": "<p>不能重复邀请</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "140011",
            "description": "<p>无法邀请管理员</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "140012",
            "description": "<p>无法邀请自己的旗下理财师</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "140013",
            "description": "<p>无法邀请其他机构的旗下理财师</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "140014",
            "description": "<p>邀请已取消</p> "
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
    "title": "订单小进度类型",
    "name": "OrderSubType",
    "group": "Constant",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "101",
            "description": "<p>等待管理员审核</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "102",
            "description": "<p>管理员审核不通过</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "103",
            "description": "<p>等待麦策审核</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "104",
            "description": "<p>麦策审核不通过</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "105",
            "description": "<p>待申领合同</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "106",
            "description": "<p>待资料报单</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "107",
            "description": "<p>合同已寄出（在资料报单之前）</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "108",
            "description": "<p>合同已寄出（在资料报单之后）</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "109",
            "description": "<p>等待资料报单审核</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "110",
            "description": "<p>待重新资料报单</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "111",
            "description": "<p>待合同寄还</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "112",
            "description": "<p>等待麦策确认合同扫描件有效性</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "113",
            "description": "<p>已确认合同有效，等待寄还</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "114",
            "description": "<p>等待项目成立</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "115",
            "description": "<p>待分成确认</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "116",
            "description": "<p>等待麦策确认订单结束</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "117",
            "description": "<p>订单结束</p> "
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
    "title": "订单大进度类型",
    "name": "OrderType",
    "group": "Constant",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "1",
            "description": "<p>预约中</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "2",
            "description": "<p>合同申领</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "3",
            "description": "<p>资料报单</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "4",
            "description": "<p>合同寄还</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "5",
            "description": "<p>项目成立</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "6",
            "description": "<p>分成确认</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "7",
            "description": "<p>订单完成</p> "
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
    "title": "产品状态",
    "name": "ProductStatus",
    "group": "Constant",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "0",
            "description": "<p>待观察</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "1",
            "description": "<p>观察中</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "2",
            "description": "<p>众筹中</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "3",
            "description": "<p>已成立</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "4",
            "description": "<p>已结束</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "-1",
            "description": "<p>淘汰</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "-2",
            "description": "<p>众筹失败</p> "
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
    "url": "/api/users/:user_id/freeze",
    "title": "冻结/解冻账号",
    "name": "FreezeUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>bool</p> ",
            "optional": false,
            "field": "freeze",
            "description": "<p>是否冻结</p> "
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
            "type": "<p>string</p> ",
            "optional": true,
            "field": "name",
            "description": "<p>用户姓名</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>int</p> ",
            "optional": true,
            "field": "admin_id",
            "description": "<p>管理员ID</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>int</p> ",
            "optional": true,
            "field": "page",
            "description": "<p>第几页</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>int</p> ",
            "optional": true,
            "field": "per_page",
            "description": "<p>每页数量</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "旗下理财师",
          "content": "/api/users?admin_id=100342",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[{\n    \"user_id\": 100377,\n    \"name\": \"小明\",\n    \"mobile\": \"150679876523\",\n    \"role\": 1,      # 角色, 1:游客, 2:旗下理财师, 3:管理员\n    \"frozen\": true      # 是否已被冻结\n    \"join_time\": \"2016-12-23T12:23:33\", # 加入时间\n    \"certification_info\": {     # 认证信息\n        \"company_name\": \"机构名称\",\n        \"position\": \"职位理财师\",\n        \"work_year\": 1,     # 工作年限(1:1~3年, 2:3~5年, 3:5~10年, 4:10年以上)\n        \"industry\": 3,      # 行业(1:银行, 2:信托, 3:资管, 4:保险, 5:证券, 6:基金, 7:P2P, 8:三方)\n    },\n}]",
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
            "type": "<p>string</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>用户姓名</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>int</p> ",
            "optional": true,
            "field": "page",
            "description": "<p>第几页</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>int</p> ",
            "optional": true,
            "field": "per_page",
            "description": "<p>每页数量</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"user_id\": 100319,\n    \"name\": \"小明\",\n    \"mobile\": \"150432423\",\n    \"created_time\": \"2015-12-22\",   # 注册时间\n    \"role\": 1,      # 角色, 1:游客, 2:旗下理财师, 3:管理员\n    \"certification_info\": {     # 认证信息\n        \"company_name\": \"机构名称\",\n        \"position\": \"职位理财师\",\n        \"work_year\": 1,     # 工作年限(1:1~3年, 2:3~5年, 3:5~10年, 4:10年以上)\n        \"industry\": 3,      # 行业(1:银行, 2:信托, 3:资管, 4:保险, 5:证券, 6:基金, 7:P2P, 8:三方)\n    },\n    \"personal_statistic\": {     # 个人配置统计\n        \"finished_order_count\": 12, # 累计成交订单\n        \"customer_count\": 3,    # 累计客户\n        \"income\": 333.33,       # 累计分成\n        \"total_invest_rmb\": 33, # 累计配置人民币\n        \"total_invest_dollar\": 999, # 累计配置美元\n        \"last_order_time\": \"2016-12-23T12:23:33\"\n    },\n    \"org_statistic\": {          # 机构配置统计\n        \"finished_order_count\": 12, # 累计成交订单\n        \"customer_count\": 3,    # 累计客户\n        \"income\": 333.33,       # 累计分成\n        \"total_invest_rmb\": 33, # 累计配置人民币\n        \"total_invest_dollar\": 999, # 累计配置美元\n        \"last_order_time\": \"2016-12-23T12:23:33\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../admin/frontend/user.py",
    "groupTitle": "User"
  }
] });