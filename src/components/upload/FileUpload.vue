<template>
  <div :class="[prefixCls]">
    <div
        @click="handleClick"
      >
      <slot></slot>
        <input @click.stop
            ref="input"
            type="file"
            :class="[prefixCls + '-input']"
            @change="handleChange"
            :multiple="multiple"
            :accept="accept"
            :action="action">

    </div>
<!-- <div>{{msg}}</div> -->
  </div>
</template>

<script>
import ajax from './ajax';
import Emitter from './emiiter';
const prefixCls = 'ivu-upload';
export default {
  name: 'upload',
  //mixins: [ Emitter ],
  props:{
        action: {
            type: String,
            required: true
        },
        headers: {
            type: Object,
            default () {
                return {};
            }
        },
        multiple: {
            type: Boolean,
            default: false
        },
        data: {
            type: Object
        },
        name: {
            type: String,
            default: 'file'
        },
        withCredentials: {
            type: Boolean,
            default: false
        },
        // showUploadList: {
        //     type: Boolean,
        //     default: true
        // },
        // type: {
        //     type: String,
        //     validator (value) {
        //         return oneOf(value, ['select', 'drag']);
        //     },
        //     default: 'select'
        // },
        // format: {
        //     type: Array,
        //     default () {
        //         return [];
        //     }
        // },
        accept: {
            type: String
        },
        // maxSize: {
        //     type: Number
        // },
        // beforeUpload: Function,
        onProgress: {
            type: Function,
            default () {
                return {};
            }
        },
        onSuccess: {
            type: Function,
            default () {
                return {};
            }
        },
        onError: {
            type: Function,
            default () {
                return {};
            }
        }
        // onRemove: {
        //     type: Function,
        //     default () {
        //         return {};
        //     }
        // },
        // onPreview: {
        //     type: Function,
        //     default () {
        //         return {};
        //     }
        // },
        // onExceededSize: {
        //     type: Function,
        //     default () {
        //         return {};
        //     }
        // },
        // onFormatError: {
        //     type: Function,
        //     default () {
        //         return {};
        //     }
        // },
        // defaultFileList: {
        //     type: Array,
        //     default() {
        //         return [];
        //     }
        // }
  },
  data () {
    return {
      fileList: [],
      prefixCls: prefixCls

    }
  },
  created: function () {
},
  methods: {
    triggerClick(){
      this.$refs.input.click();    
    },
    handleClick () {
      this.triggerClick();
    },
    uploadFiles(files){
      let postFiles = Array.prototype.slice.call(files);
      if (!this.multiple) postFiles = postFiles.slice(0, 1);
      if (postFiles.length === 0) return;
      postFiles.forEach(file => {
          this.requestUpload(file);
      });
    },
    requestUpload(file){

                ajax({
                    headers: this.headers,
                    withCredentials: this.withCredentials,
                    file: file,
                    data: this.data,
                    filename: this.name,
                    action: this.action,
                    onProgress: e => {
                        this.handleProgress(e, file);
                    },
                    onSuccess: res => {
                        this.handleSuccess(res, file);
                    },
                    onError: (err, response) => {
                        this.handleError(err, response, file);
                    }
                });
    },
  handleChange(e,a) {

    var _this=this;
    var files=e.target.files;
    this.uploadFiles(files);
    this.$refs.input.value = null;
    return;

      if(files.length===0)
      {return;}
      var oFReader = new FileReader()
      oFReader.onload = function (oFREvent) {
        _this.preImg=oFREvent.target.result;
      }
      var oFile =files[0];
      oFReader.readAsDataURL(oFile);
  },
  handleProgress (e, file) {
      // const _file = this.getFile(file);
      // this.onProgress(e, _file, this.fileList);
      // _file.percentage = e.percent || 0;
      console.log('handleProgress');
  },
  handleSuccess (res, file) {
      // const _file = this.getFile(file);
      // if (_file) {
      //     _file.status = 'finished';
      //     _file.response = res;
      //     this.dispatch('FormItem', 'on-form-change', _file);
      //     this.onSuccess(res, _file, this.fileList);
      //     setTimeout(() => {
      //         _file.showProgress = false;
      //     }, 1000);
      // }
      console.log('handleSuccess');
  },
  getFile (file) {
      const fileList = this.fileList;
      let target;
      fileList.every(item => {
          target = file.uid === item.uid ? item : null;
          return !target;
      });
      return target;
  },
  handleError (err, response, file) {
    console.log('handleError');
      // const _file = this.getFile(file);
      // const fileList = this.fileList;
      // _file.status = 'fail';
      // fileList.splice(fileList.indexOf(_file), 1);
      // this.onError(err, response, file);
  },
  handleRemove(file) {
      const fileList = this.fileList;
      fileList.splice(fileList.indexOf(file), 1);
      this.onRemove(file, fileList);
  },
  handlePreview(file) {
      if (file.status === 'finished') {
          this.onPreview(file);
      }
  },
  clearFiles() {
      this.fileList = [];
  }
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
input
{
  display: none;
}
.upload-img
{
  width: 100px;
}
</style>
