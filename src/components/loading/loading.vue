<template>
  <div class="page_load" v-show='show'>
        <div class="pull_up_loading">
            <span><i></i></span>
            <span>加载中…</span>
        </div>
    </div>
</template>
<script>
export default {
    name: 'pageLoading',
    // props: {
    //     show: {
    //         type: Boolean,
    //         default: false
    //     }
    // },
    data () {
        return {
            show: false
        }
    },
    methods: {
    },
    created () {
    }
}
</script>
<style scoped lang="scss">
.page_load
{
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 400;
    font-size: 15px;
    display: block;
    .pull_up_loading
    {
          position: absolute;
          left: 50%;
          top: 40%;
          transform: translate(-50%, -50%);


          width: 100%;
          height: 46px;
          line-height: 46px;
          margin: 0 auto;
          font-size: 12px;
          color: #999;
          text-align: center;
   }
   .pull_up_loading span:first-child {
          display: inline-block;
          margin-right: 5px;
          width: 20px;
          height: 20px;
          background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAclBMVEUAAADKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysr1Pl5+AAAAJXRSTlMA+eHTpn4dBfUS6NnGto6HcTk1LPDezL+emkpCJA4KvpdmXDEwnz5YWwAAAJFJREFUGNNNjYcOwyAMRI8ZsgdJmtV0+v9/sVapCk9I6J7ONoBDj8VyxR/vSA9aR2GoPGFdFJ2yQC9DyE9ueAB1E4TtgIzfWv6WbtW3VysbBgY98jfIW86tYzfmQQ54ivrVXqSg2SxEChuplRhRTsS0mKmgiLAQlNJ4TGmWVYYuFaIHsnvMijPz5qOOiqrZwXwAMFwQS8/hhg0AAAAASUVORK5CYII=) no-repeat 6px 6px;
          background-size: 8px 8px;
  }
  .pull_up_loading span {
      vertical-align: middle;
  }
  .pull_up_loading i {
    display: inline-block;
    width: 20px;
    height: 20px;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAclBMVEUAAADKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysr1Pl5+AAAAJXRSTlMA+eHTpn4dBfUS6NnGto6HcTk1LPDezL+emkpCJA4KvpdmXDEwnz5YWwAAAJFJREFUGNNNjYcOwyAMRI8ZsgdJmtV0+v9/sVapCk9I6J7ONoBDj8VyxR/vSA9aR2GoPGFdFJ2yQC9DyE9ueAB1E4TtgIzfWv6WbtW3VysbBgY98jfIW86tYzfmQQ54ivrVXqSg2SxEChuplRhRTsS0mKmgiLAQlNJ4TGmWVYYuFaIHsnvMijPz5qOOiqrZwXwAMFwQS8/hhg0AAAAASUVORK5CYII=) no-repeat;
    background-size: 20px 20px;
    vertical-align: top;
    animation: Rotater 1s linear 0s infinite;
  }
}
@keyframes Rotater {
    0% {
        -webkit-transform: rotate(0deg);
    }
    25% {
        -webkit-transform: rotate(90deg);
    }
    50% {
        -webkit-transform: rotate(180deg);
    }
    75% {
        -webkit-transform: rotate(270deg);
    }
    100% {
        -webkit-transform: rotate(360deg);
    }
}
</style>
<style lang="scss">
</style>
