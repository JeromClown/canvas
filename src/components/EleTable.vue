<template>
  <div class="all">
    <div v-for="(item,index) in data" :key="index" style="width: 21%">
      <el-table :data="data[index]">
        <el-table-column
          :label="'第'+(index+1)+'个'">
          <el-table-column
            type="index">
          </el-table-column>
          <el-table-column
            v-for="item in columns"
            :key="item.prop"
            :label="item.label"
            :prop="item.prop"
          >
          </el-table-column>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: "eletable",
  props: {
    data: {
      type: Array,
      default: []
    },
    columns: {
      type: Array,
      default: []
    }
  },
  data() {
    return {};
  },
  mounted() {
  },
  methods: {}
};
</script>

<style scoped>
.all {
  max-width: 100%;
  display: flex;
}
</style>
