<template>
  <div class="home">
    <el-row>
      <el-col :span="12">
        <h2>旷世</h2>
        <el-upload
          class="upload-demo"
          :http-request="uploadFile"
          action="#"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :file-list="fileList"
          list-type="picture"
        >
          <el-button size="small" type="primary">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">
            只能上传jpg/png文件，且不超过500kb
          </div>
        </el-upload>
        <el-button size="small" type="primary" @click="contrastImg"
          >对比图片</el-button
        >
      </el-col>
      <el-col :span="12">
        <input type="file" @change="getFile($event)" >
      </el-col>
    </el-row>
  </div>
</template>

<script>
import qs from 'qs'
export default {
  data() {
    return {
      file,
      fileList: [],
      comparisonList: [],
    };
  },
  methods: {
    getFile(event){
      console.log(event)
    },
    contrastImg() {
      let img1=this.comparisonList[0]
      let img2=this.comparisonList[1]
      let image_ref1=img1
      let image_ref2=img2
      console.log(image_ref1);
      console.log(image_ref2);
     
      let params = {
        api_key: "-s8LEN7gQR30uO4YMLxM_-oHZCcXsQz5",
        api_secret: "a8xLi6NoujvdZBtga9J53oX7XY5heKPC",
        comparison_type: "0",
        face_image_type: "raw_image",
        uuid: "1234",
        image_ref1:image_ref1,
        image_ref2:image_ref2
      };
      // console.log(params)
      // this.$http
      //   .post("/api/faceid/v2/verify", qs.stringify(params))
      //   .then((res) => {
      //     console.log(res);
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });
    },
    uploadFile(params) {
      console.log(params);
      this.comparisonList.push(params.file);
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
  },
};
</script>

<style lang="less" scoped>
.home {
  h2 {
    text-align: center;
  }
  height: 100%;
  .el-row {
    height: 100%;
    .el-col {
      height: 100%;
      padding: 20px;
      border: 1px solid #f0f0f0;
    }
  }
}
</style>