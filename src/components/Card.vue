<template>
  <div class="card-box">
    <el-row class="card-detail-box">
      <el-col :span="6" class="card-detail">
        <p>详细信息</p>
      </el-col>
    </el-row>
    <el-row :gutter="20" class="card-t-box" type="flex">
      <el-col :span="6" class="f-text-right">
        <span class="card-t-title">标题 :</span>
      </el-col>
      <el-col :span="14">
        <el-input value="123"></el-input>
      </el-col>
    </el-row>
    <el-row :gutter="20" class="card-t-box" type="flex">
      <el-col :span="6" class="f-text-right">
        <span class="card-t-title">版本号 :</span>
      </el-col>
      <el-col :span="14">
        <el-input value="123"></el-input>
      </el-col>
    </el-row>
    <el-row :gutter="20" class="card-t-box" type="flex">
      <el-col :span="6" class="f-text-right">
        <span class="card-t-title">发布时间 :</span>
      </el-col>
      <el-col :span="14">
        <el-input value="123"></el-input>
      </el-col>
    </el-row>
    <el-row :gutter="20" class="card-t-box" type="flex">
      <el-col :span="6" class="f-text-right">
        <span class="card-t-title">大小 :</span>
      </el-col>
      <el-col :span="14">
        <span>1.23</span>
      </el-col>
    </el-row>
    <el-row :gutter="20" class="card-t-box" >
      <el-col :span="6" class="f-text-right">
        <span class="card-t-title">描述 :</span>
      </el-col>
      <el-col :span="14">
        <span>多证知别华先现回分造们再大计。</span>
      </el-col>
    </el-row>
    <el-row :gutter="20" class="card-t-box" >
      <el-col :span="6">&nbsp;
      </el-col>
      <el-col :span="14">
        <el-button type="primary">确定</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Card'
}
</script>
<style scoped>
.card-box{
  position: absolute;
  width: 600px;
  height: 100%;
  background-color: #fff;
  top: 1px;
  box-shadow: -2px -2px 34px #000;
  z-index: 2;
}
.card-detail-box{
  margin: 20px 40px 100px;
  border-bottom: 1px solid #cccccc;
}
.card-detail{
  font-size: 18px;
  font-weight: bold;
  padding: 40px 0 20px;
}
.card-t-box{
  align-items: center;
  padding: 20px 0;
}
.card-t-title{
  font-weight: normal;
}
</style>
