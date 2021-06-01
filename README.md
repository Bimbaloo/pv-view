## master---分支
## TV --- 8条线的版本
## TV6 ---6条线的版本 

## 车间生产看板接口 ##

### 说明 ###

看板数据获取

### 请求方法 ###

`POST`

### 请求URL ###

```
 url: '../assets/mock.json',                         // 本地mock数据，需要使用get
 url: 'http://192.168.46.10:9201/mes/cjkb/execute',  // 服务器
 url: 'http://192.168.120.62/mes/cjkb/execute',         // 张杭烃本地
 url: 'http://rap2api.taobao.org/app/mock/283615/mes/cjkb/execute:9999',   // rap2模拟数据
```

### 请求参数 ###

`JSON`格式，在HTTP `body`中。

包括如下参数：
- XXX：`必选` ，`字符串`。
- XXX：`必选` ，`字符串`。
- XXX：`必选` ，`字符串`。
- XXX：`必选` ，`字符串`。
- XXX：`必选` ，`字符串`。

**示例：**

```json
{
  "gc":"1530",
  "lh":"新基地4#",
  "ks":"组测三课",
  "cj":"三课一",
  "sbglcj":"组测三课一车间"
}
```

### 返回结果 ###
`JSON`格式，在HTTP `body`中。

返回如下字段：
- 质检信息
  - 设备点击率：`字符串`

  - 清洁度OK率： 	`字符串`

  - 物料齐套率：  `字符串`, 格式 `yyyy-MM-dd hh:mm:ss`

  - 检验时间：  `字符串`, 格式 `yyyy-MM-dd hh:mm:ss`

  - 审核时间：  `字符串`, 格式 `yyyy-MM-dd hh:mm:ss`

  - 人员姓名：`字符串`, 

  - 员工号：`字符串`, 

  - 检验结果：

    以下为检验项目相关内容：

    - 检验项目名称：`字符串`, 
    - 检验项目值：`字符串`,需要根据report_level来判断


**示例：**

```json
{
  "cqzb": [{
    "qjd": 1.0000,
    "wlqtl": 0.6924,
    "sbdjs": 0
  }],
  "fderycq2": [{
    "sjcq": "0",
    "xl": "制造"
  }, {
    "sjcq": "0",
    "xl": "品保"
  }],
  "fderycq1": [{
    "sjcq": "0",
    "xl": "工艺"
  }, {
    "sjcq": "0",
    "xl": "设备"
  }],
  "derycq": [{
    "sjcq": 0,
    "ccq": 0,
    "ycq": 0,
    "zzrs": 0,
    "cql": 0
  }],
  "scjd": [{
    "jhdcl": 0,
    "wlqtl": 0,
    "lv": 0,
    "huang": 0,
    "hong": 0,
    "uph": 0,
    "xt": "2#"
  }, {
    "jhdcl": 0.0701,
    "wlqtl": 0.4536,
    "lv": 0,
    "huang": 0,
    "hong": 0,
    "uph": 0,
    "xt": "3#"
  }, {
    "jhdcl": 0,
    "wlqtl": 0,
    "lv": 0,
    "huang": 0,
    "hong": 0,
    "uph": 0,
    "xt": "4#"
  }, {
    "jhdcl": 0.0000,
    "wlqtl": 1.0000,
    "lv": 0,
    "huang": 0,
    "hong": 0,
    "uph": 0,
    "xt": "5#"
  }, {
    "jhdcl": 0.0000,
    "wlqtl": 0.6985,
    "lv": 0,
    "huang": 0,
    "hong": 0,
    "uph": 0,
    "xt": "6#"
  }, {
    "jhdcl": 0.0000,
    "wlqtl": 1.0000,
    "lv": 0,
    "huang": 0,
    "hong": 0,
    "uph": 0,
    "xt": "7#"
  }, {
    "jhdcl": 0.0000,
    "wlqtl": 0.7379,
    "lv": 0,
    "huang": 0,
    "hong": 0,
    "uph": 0,
    "xt": "8#"
  }],
  "ycqk": {
    "data": [{
      "zjzs": 0,
      "jtzs": 0,
      "yx": 0,
      "dj": 0,
      "bj": 0,
      "lx": 0
    }],
    "yc": {
      "ctl": 0,
      "ydl": 0,
      "zjshl": 0,
      "OQC": 0
    }
  }
}
```
