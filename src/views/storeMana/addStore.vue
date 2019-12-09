<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="中文门店">
        <el-input v-model="form.STORE_NAME" />
      </el-form-item>
      <el-form-item label="英文门店">
        <el-input v-model="form.STORE_NAME_EN" />
      </el-form-item>
      <el-form-item label="电话">
        <el-input v-model="form.TEL" />
      </el-form-item>
      <el-form-item label="地址">
        <el-input v-model="form.ADDR" />
      </el-form-item>
      <el-form-item label="微信图片">
        <el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview"
          :on-remove="handleRemove" :before-remove="beforeRemove" multiple :limit="3" :on-exceed="handleExceed"
          :file-list="fileList">
          <el-button size="small" type="primary">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
      </el-form-item>
      <el-form-item label="经度">
        <el-input v-model="form.LOC_X" />
      </el-form-item>
      <el-form-item label="纬度">
        <el-input v-model="form.LOC_Y" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">确认</el-button>
        <el-button @click="onCancel">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        fileList: [],
        form: {
          STORE_NAME: "",
          STORE_NAME_EN: "",
          TEL: "",
          ADDR: "",
          QR_CODE_IMG: "",
          LOC_X: 0,
          LOC_Y: 0
        }
      }
    },
    methods: {
      onSubmit() {
        this.$message('submit!')
      },
      onCancel() {
        this.$message({
          message: 'cancel!',
          type: 'warning'
        })
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
      beforeRemove(file, fileList) {
        return this.$confirm(`确定移除 ${ file.name }？`);
      }
    }
  }

</script>

<style scoped>
  .line {
    text-align: center;
  }

</style>
