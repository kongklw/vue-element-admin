<template>
    <el-row :gutter="20">
        <el-col :span="12">
            <div class="text-right">
                <img class="" :src="errGif"></div>
        </el-col>
        <el-col :span="12">
            <div class="grid-content bg-purple">
                <h1 class="font404 mt-5">500</h1>
                <p>后端服务器出错啦</p>
                <p>找对应后端接口人员</p>
                <p><a href="/">返回首页</a></p>
            </div>
        </el-col>
    </el-row>
</template>
<!-- <script type="text/ecmascript-6"> -->
<script>
export default {
    data() {
            return {
                // errGif: "static/images/backend.jpg" + '?' + +new Date()
                errGif: "static/images/e404.gif" + '?' + +new Date()
            }
        },
        methods: {
                // $router
        }
}
</script>
<style >
.font404 {
    font-size: 80px;
}
</style>