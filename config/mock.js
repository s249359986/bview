// 将mock导入
var bidList = require('../mock/bidList.js');

module.exports = {
  // mock开发配置
  // 标书列表页?$pageSize&$pageNum&$bidCondition

  // 获取订单详情
  'GET /vip/m/suyunorder/getOrderDetail': {
    ok: bidList,
    fail: {
      code: 200,
      msg: 'fail'
    }
  },
  // 取消订单
  'POST /vip/m/suyunorder/cancelOrder': {
    ok: {
      code: 0,
      message: '成功',
      data: {
      }
    },
    fail: {
      code: 200,
      msg: 'fail'
    }
  }
}
