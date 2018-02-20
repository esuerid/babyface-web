<template>
  <div>
    <vue-dropzone ref="myVueDropzone" id="dropzone" acceptedFileTypes='.jpg,.png' v-on:vdropzone-success="showSuccess" v-on:vdropzone-file-added="attachListener" :options="dropzoneOptions"></vue-dropzone>
    <!-- <vue-dropzone ref="myVueDropzone" id="dropzone" @vdropzone-file-added="vfileAdded" @vdropzone-success="vsuccess" @vdropzone-error="verror" @vdropzone-removed-file="vremoved" @vdropzone-sending="vsending" @vdropzone-success-multiple="vsuccessMuliple" @vdropzone-sending-multiple="vsendingMuliple" @vdropzone-queue-complete="vqueueComplete" @vdropzone-total-upload-progress="vprogress" @vdropzone-mounted="vmounted" @vdropzone-drop="vddrop" @vdropzone-drag-start="vdstart" @vdropzone-drag-end="vdend" @vdropzone-drag-enter="vdenter" @vdropzone-drag-over="vdover" @vdropzone-drag-leave="vdleave" :options="dropzoneOptions"> -->
    </vue-dropzone>
    <button type="submit" class="btn btn-primary" @click="submitData()">submit</button>
    <canvas id="c0" width="1000" height="1000"></canvas>
  </div>
</template>

<script>

import vue2Dropzone from 'vue2-dropzone'
import 'vue2-dropzone/dist/vue2Dropzone.css'
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
// import fabric from "fabric"
Vue.use(VueAxios, axios)


export default {
  name: 'app',
  canvas: '',
  components: {
    vueDropzone: vue2Dropzone
  },
  data: function () {
    return {
      token:'aaa',
      dropzoneOptions: {
          url: 'https://httpbin.org/post',
          // addRemoveLinks: true,
          thumbnailWidth: 150,
          maxFilesize: 10,
          headers: { "My-Awesome-Header": "header value" }
      },
      isFisrtImage: true,
    }
  },
  created: function(){
    console.log('created');
    var vm = this;
  },
  mounted: function(){
    console.log('mounted');
    // this.token =this.$store.state.token;
    console.log(this.token);
    this.canvas = new fabric.Canvas('c0');
  },
  methods: {
    'showSuccess': function (file) {
      console.log('A file was successfully uploaded')
      var vm = this;
      // vm.canvas.setBackgroundImage(file.dataURL, vm.canvas.renderAll.bind(vm.canvas)); 
      console.log(this.isFisrtImage)
      if (this.isFisrtImage) {
        //console.log(this.isFisrtImage)
        vm.canvas.setBackgroundImage(file.dataURL, vm.canvas.renderAll.bind(vm.canvas)); 
        this.isFisrtImage = false

      }
    },
    'submitData': function () {
      var vm = this;

      console.log(vm.token)

      axios.post('http://49.236.144.72:12345/core/requests',
      {
        send_letter : true,
        make_album: true
      },
      {
         headers:{'Authorization':'Bearer '+vm.token,
          'Content-Type':'application/json'}
      }).then(function(Response){
        console.log('앨범여부 POST 성공')
        console.log('포스트 응답pk:'+JSON.stringify(Response.data.pk));
        })


      console.log("button pressed")
      var files = this.$refs.myVueDropzone.getAcceptedFiles()

      console.log(files)
    },
    attachListener: function (file) {
      var vm = this;
      file.previewElement.addEventListener("click", function() {
        vm.canvas.setBackgroundImage(file.dataURL, vm.canvas.renderAll.bind(vm.canvas)); 
      })
    }
  }
}

</script scoped>

.slide {
  color: #fff;
  height: 300px;
  position: relative;

  &--1 {
      background-color: #f1c40f;
  }

  ...

  h3 {
      font-size: 32px;
      font-weight: 300;
      left: 50%;
      margin: 0;
      position: absolute;
      top: 50%;
      transform: translate(-50%, -50%);
  }
}
</style>
