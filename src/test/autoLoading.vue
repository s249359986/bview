<template>
    <div>
      <v-scroll :offset=50 :on-refresh="onRefresh" :on-infinite="onInfinite" :dataList="scrollData" :enableInfinite="enableInfinite" :enableRefresh="enableRefresh">
        <div class="detail">

          <div class="detail_list" v-for='(item,index) in detailListInit'>
            <div class="item">
              <span class="detail_title">{{item.expenditureName}}</span>
              <span :class="['cash', item.clientExpenditureTypeStyle]">{{item.expenditureMoney }}</span>
            </div>
            <div class="date">
              {{item.expenditureDate}}
            </div>
          </div>
          <div class="detail_list" v-for='(item,index) in detailList'>
              <div class="item">
                <span class="detail_title">{{item.expenditureName}}</span>
                <span :class="['cash', item.clientExpenditureTypeStyle]">{{item.expenditureMoney }}</span>
              </div>
              <div class="date">
                {{item.expenditureDate}}
              </div>
          </div>
        </div>
      </v-scroll>
    </div>
</template>
<script>
import vscroll from '../components/autoLoading'
export default {
    components: {
      'v-scroll': vscroll
    },
    data () {
        return {
            detailList: [],
            detailListInit: [
            {expenditureName: '提现', expenditureMoney: '-100', expenditureDate: '2015'},
            {expenditureName: '提现', expenditureMoney: '-100', expenditureDate: '2015'},
            {expenditureName: '提现', expenditureMoney: '-100', expenditureDate: '2015'},
            {expenditureName: '提现', expenditureMoney: '-100', expenditureDate: '2015'},
            {expenditureName: '提现', expenditureMoney: '-100', expenditureDate: '2015'}
            ],
            enableRefresh: true,
            enableInfinite: true,
            counter: 1, //当前页
            num:10, // 一页显示多少条
            pageStart: 0, // 开始页数
            pageEnd: 0, // 结束页数
            scrollData:{
              noFlag: false //暂无更多数据显示
            }
        }
    },
    methods: {
        onRefresh(done) {
          this.detailListInit=[
          {expenditureName: '提现', expenditureMoney: '-100', expenditureDate: '2015'},
          {expenditureName: '提现', expenditureMoney: '-100', expenditureDate: '2015'},
          {expenditureName: '提现', expenditureMoney: '-100', expenditureDate: '2015'},
          {expenditureName: '提现', expenditureMoney: '-100', expenditureDate: '2015'},
          {expenditureName: '提现', expenditureMoney: '-100', expenditureDate: '2015'}
          ]
          this.detailList=[]
          console.log('onRefresh')
          done()
        },
        onInfinite(done) {
          //上拉加载
          this.detailList.push({expenditureName: '提现', expenditureMoney: '-100', expenditureDate: '2015'})
          console.log('onInfinite')
          done()
        }

    },

    created () {
    }
}
</script>

<style scoped lang="scss">

</style>
<style lang="scss">
.yo-scroll
{
  height:400px !important;
  position:static !important;
  // height:auto !important;
  overflow: scroll !important;


}
</style>
