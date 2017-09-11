import LoadingCompoent from './loading.js'
const PageLoading={
     install: function (Vue,options)
     {
           Vue.prototype.$PageLoading = LoadingCompoent(options)
           window.PageLoading=LoadingCompoent(options)
     }
}
export default PageLoading
