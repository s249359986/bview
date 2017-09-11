import Vue from 'vue'
let LoadingConstructor = Vue.extend(require('./loading.vue'))
let toastPool = []
let getAnInstance = (options) => {
    if (toastPool.length > 0) {
      let instance = toastPool[0];
      return instance;
    }
    let instance=new LoadingConstructor({
        data: options
    })
    toastPool.push(instance)
    return instance
}
let returnAnInstance = instance => {
  if (instance) {
    toastPool.push(instance);
  }
}

let PageLoadingConstruct=function (options) {
      let instance = getAnInstance(options)
      if(!instance.vm)
      {
        instance.vm = instance.$mount()
        document.body.appendChild(instance.vm.$el)
      }
      return instance.vm
}
function hideLoading(){
  PageLoadingConstruct({show: false}).show=false
}
function showLoading(){

        PageLoadingConstruct({show: true}).show=true
}
function PageLoading(options){
   PageLoadingConstruct(options)
   return {hideLoading,showLoading}
}
// PageLoading.hideLoading = function() {
//
// }
// PageLoading.showLoading = function() {
//       PageLoadingConstruct({show: true}).show=true
// }

export default PageLoading
