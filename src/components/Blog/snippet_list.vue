<template>
  <div class="block">
    <el-table
      :data="tableData"
      style="width: 100%"
      :row-class-name="tableRowClassName"
    >
      <el-table-column prop="created" label="日期" width="260">
      </el-table-column>
      <el-table-column prop="code" label="代码" width="180"> </el-table-column>
      <el-table-column prop="language" label="语言"> </el-table-column>
    </el-table>

    <span class="demonstration">默认 Hover 指示器触发</span>
    <el-carousel height="150px">
      <el-carousel-item v-for="item in 4" :key="item">
        <div style="background: #ff00ff">123123123123</div>
        <img src="" alt="" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<style>
.el-table .warning-row {
  background: oldlace;
}

.el-table .success-row {
  background: #f0f9eb;
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>

<script>
import baseUrl from "../../assets/router";
import axios from "axios";

export default {
  data() {
    return {
      tableData: [],
    };
  },

  mounted() {
    console.log("url", baseUrl);
    this.getData();
  },

  methods: {
    tableRowClassName({ row, rowIndex }) {
      console.log(1);
      if (rowIndex === 1) {
        return "warning-row";
      } else if (rowIndex === 3) {
        return "success-row";
      }
      return "";
    },
    
    getData() {
      var url = baseUrl + "snippets";
      console.log("snippets url", url);

      axios.get(url).then((res) => {
        console.log("res", res);
        this.tableData = res.data;
      });
    },
  },
};
</script>