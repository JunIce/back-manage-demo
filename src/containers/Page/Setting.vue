<template>
  <div class="f-shadow f-bg-fff">
    <h1>后台设置</h1>
    <el-row>
      <el-col :span="12">
        <el-form label-width="200px" label-position="left" class="back-set-form">
          <el-form-item label="后台简介">
            <el-input type="textarea" placeholder="输入后台简介" rows=4 v-model="formData.textarea"></el-input>
          </el-form-item>
          <el-form-item label="后台验证码" >
            <el-switch
              v-model="formData.backendVertiCode"
              active-text="打开"
              inactive-text="关闭">
            </el-switch>
          </el-form-item>
          <el-form-item label="前台功能">
            <el-checkbox-group v-model="formData.checkedFuncs">
              <el-checkbox v-for="fc in frontendFunces" :label="fc" :key="fc"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="模版选择">
            <el-select v-model="formData.selectValue" placeholder="请选择">
              <el-option v-for="tep in templates" :key="tep" :label="tep" :value="tep"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="手动进度条">
            <el-slider v-model="formData.sliderValue"></el-slider>
          </el-form-item>
          <el-form-item>
            <el-progress :text-inside="true" :stroke-width="18" :percentage="formData.sliderValue" color="rgba(142, 113, 199, 0.7)"></el-progress>
          </el-form-item>
          <el-form-item>
            <el-progress type="circle" :percentage="formData.sliderValue" color="#8e71c7"></el-progress>
          </el-form-item>
          <el-form-item label="用户输入标签">
            <el-input
              class="input-new-tag"
              v-model="formData.userDefineTag"
              @keyup.enter.native="handleInputConfirm"
              @blur="handleInputConfirm"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-tag
              :key="tag"
              v-for="tag in formData.dynamictags"
              closable
              :disable-transitions="false"
              @close="removeTag(tag)">
              {{tag}}
            </el-tag>
          </el-form-item>
        </el-form>
      </el-col>
      <el-col :span="10" :offset="2">
        <el-form label-position="right" label-width="100px" class="back-set-form">
          <el-form-item label="后台简介">{{formData.textarea}}</el-form-item>
          <el-form-item label="后台验证码">{{formData.backendVertiCode}}</el-form-item>
          <el-form-item label="前台功能">{{formData.checkedFuncs}}</el-form-item>
          <el-form-item label="模版选择">{{formData.selectValue}}</el-form-item>
          <el-form-item label="进度条">{{formData.sliderValue + '%'}}</el-form-item>
          <el-form-item label="用户输入标签">{{formData.dynamictags}}</el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: 'Setting',
  data () {
    return {
      frontendFunces: [ '登录', '注册', '评论', '发布', '跟帖' ],
      templates: ['模版1', '模版2', '模版3', '模版4'],
      formData: {
        selectValue: '',
        checkedFuncs: ['登录'],
        backendVertiCode: false,
        textarea: '',
        sliderValue: 25,
        userDefineTag: '',
        dynamictags: ['标签1', '标签2']
      }
    }
  },
  mounted () {
  },
  methods: {
    handleInputConfirm () {
      let inputValue = this.formData.userDefineTag
      if (inputValue) {
        this.formData.dynamictags.push(inputValue)
        this.$root.Bus.$emit('message', { msg: '标签增加成功!', status: true })
      }
      this.formData.userDefineTag = ''
    },
    removeTag (tag) {
      let tags = this.formData.dynamictags
      this.formData.dynamictags.splice(tags.indexOf(tag), 1)
      this.$root.Bus.$emit('message', { msg: '移除标签成功!', status: false })
    }
  }
}
</script>
<style scoped>
h1{
  background-color: #242aa7;
  color: #fff;
  padding: 20px;
  font-weight: 400;
}

.back-set-form{
  padding: 30px 20px;
}
.el-form-item{
  margin-bottom: 22px;
}
.el-tag {
  background-color: #7e84ff;
  color: #fff;
  margin-left: 10px;
}
</style>
