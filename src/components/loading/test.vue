<template>
    <div>
<page-loading :show='isLoadingShow'></page-loading>
    </div>
</template>
<script>

export default {
    data () {
        return {
          isLoadingShow: true
        }
    },
    created () {
          this.isLoadingShow=false
    }
}
</script>
<style scoped lang="scss">

</style>
