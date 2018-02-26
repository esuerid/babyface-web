<template>
  <div>
    <v-container >
      <v-layout row wrap>
        <v-flex xs10 offset-xs1>
          <v-card dark color="red lighten-4">
            <vue-dropzone ref="myVueDropzone" id="dropzone" acceptedFileTypes='.jpg,.png' v-on:vdropzone-success="showSuccess" v-on:vdropzone-file-added="attachListener" :options="dropzoneOptions"></vue-dropzone>
            <!-- <vue-dropzone ref="myVueDropzone" id="dropzone" @vdropzone-file-added="vfileAdded" @vdropzone-success="vsuccess" @vdropzone-error="verror" @vdropzone-removed-file="vremoved" @vdropzone-sending="vsending" @vdropzone-success-multiple="vsuccessMuliple" @vdropzone-sending-multiple="vsendingMuliple" @vdropzone-queue-complete="vqueueComplete" @vdropzone-total-upload-progress="vprogress" @vdropzone-mounted="vmounted" @vdropzone-drop="vddrop" @vdropzone-drag-start="vdstart" @vdropzone-drag-end="vdend" @vdropzone-drag-enter="vdenter" @vdropzone-drag-over="vdover" @vdropzone-drag-leave="vdleave" :options="dropzoneOptions"> -->
            </vue-dropzone>

            <button type="submit" class="btn btn-primary" @click="submitData()">submit</button>
          </v-card>
        </v-flex>
        <v-flex xs10 offset-xs1>
          <v-card dark color="red lighten-4">
            <canvas id="c0" width="500" height="500"></canvas>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
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
          clickable: true,
          thumbnailWidth: 100,
          thumbnailHeight: 120,
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

        var reader = new FileReader();
        reader.onload = function(f) {
            var data = f.target.result;
            fabric.Image.fromURL(data, function(img) {
                var oImg = img.set({
                    left: 0,
                    top: 0,
                    width: vm.canvas.width,
                    height: vm.canvas.height
                });
                vm.canvas.setBackgroundImage(oImg).renderAll();
                var dataURL = vm.canvas.toDataURL({
                    format: 'png',
                    quality: 0.8
                });
            });
        };
        reader.readAsDataURL(file);

        // image.scaleToWidth(service.canvas.getWidth());

        // vm.canvas.setBackgroundImage(image, vm.canvas.renderAll.bind(vm.canvas));
        this.isFisrtImage = false

      }
      var files = this.$refs.myVueDropzone.getAcceptedFiles()
      console.log("files length : " + files.length)
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

        // var image = file.dataURL
        // vm.canvas.setBackgroundImage(image, vm.canvas.renderAll.bind(vm.canvas));
        // vm.canvas.setBackgroundImage(image).renderAll()

        var reader = new FileReader();
        reader.onload = function(f) {
            var data = f.target.result;
            fabric.Image.fromURL(data, function(img) {

                img.scaleToWidth(500);
                // img.scaleToHeight(400);
                // vm.canvas.setBackgroundImage(sImg).renderAll();
                vm.canvas.setBackgroundImage(img, vm.canvas.renderAll.bind(vm.canvas));
                // var dataURL = vm.canvas.toDataURL({
                //     format: 'png',
                //     quality: 0.8
                // });
            });
        };
        reader.readAsDataURL(file);


        // image.scaleToWidth(vm.canvas.getWidth());
        // vm.canvas.add(image);
      })
    }
  }
}

</script>

<style scoped>
/*.slide {
  color: #fff;
  height: 300px;
  position: relative;

  &--1 {
      background-color: #f1c40f;
  }
  h3 {
      font-size: 32px;
      font-weight: 300;
      left: 50%;
      margin: 0;
      position: absolute;
      top: 50%;
      transform: translate(-50%, -50%);
  }
}*/
canvas{
  border-width: 1pz;
  border-style: solid;
  border-color: #000;
}

</style>
