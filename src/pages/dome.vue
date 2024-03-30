<template>
  <div class="all">
    <Paint :open="open" :sbut="sbut" @handleDoubleClick="handleDoubleClick"></Paint>
    <div style="width:72%;display: flex;flex-direction: column;justify-content: space-around">
      <div class="but" :style="changeStyle">
        <el-button type="primary" icon="el-icon-edit" style="height: 40px" @click="painLand">di</el-button>
        <!--      <el-card class="box-card" v-for="(item,index) in diData" :key="index">-->
        <!--        <div v-for="(item,index) in diData[index]" :key="index" class="text item">-->
        <!--          第{{index + 1}}个: x:{{item.x +' - - - y:'+ item.y }}-->
        <!--        </div>-->
        <!--      </el-card>-->
        <div v-if="this.diData.length>0" class="table">
          <EleTable :data="diData" :columns="columns" class="table"></EleTable>
        </div>
      </div>
      <div class="but">
        <el-button type="primary" icon="el-icon-edit" style="height: 40px" @click="painZh">zha</el-button>
        <div v-if="this.zhDta.length>0" class="table">
          <EleTable :data="zhDta" :columns="columns" class="table"></EleTable>
        </div>
      </div>
      <div class="but">
        <el-button type="primary" icon="el-icon-edit" style="height: 40px" @click="painJin">jin</el-button>
        <div v-if="this.jData.length>0" class="table">
          <EleTable :data="jData" :columns="columns" class="table"></EleTable>
        </div>
      </div>
    </div>
    <button @click="toPath">111</button>
  </div>
</template>

<script>
import Paint from '../components/Paint.vue'
import EleTable from "../components/EleTable.vue";

export default {
  components: {Paint, EleTable},
  data() {
    return {
      chSty: 0,
      open: false,
      diData: [],
      jData: [],
      zhDta: [],
      // fdas: [],
      sbut: '',
      changeStyle: '',
      columns: [
        {
          prop: 'x',
          label: '横坐标'
        }, {
          prop: 'y',
          label: '纵坐标'
        }
      ]
    };
  },
  created() {
  },
  methods: {
    toPath() {
      this.$router.push('dome1')
    },
    painLand() {
      this.chSty++
      let par = {
        pageSize: 10,
        currentPage: 2
      }
      this.$http.post('/getTableData',par).then(res=>{
        console.log(res)
      })
      if (this.chSty === 6) {
        this.changeStyle = "overflow-x: scroll"
      }
      this.open = !this.open
      this.sbut = 'di'
    },
    painJin() {
      this.open = !this.open
      this.sbut = 'jin'
      this.open = true
    },
    painZh() {
      this.open = !this.open
      this.sbut = 'zhan'
    },
    handleDoubleClick(data) {
      this.open = false
      if (data.length > 0) {
        let arr = JSON.parse(JSON.stringify(data))
        arr.pop()
        if (this.sbut === 'di') {
          this.diData.push(arr)
          // for (let i = 0; i < this.diData.length; i++) {
          //   for (let j = 0; j < this.diData[i].length; j++) {
          //     let abs = Object.entries(this.diData[i][j])
          //     this.fdas.push(abs)
          //     console.log(this.fdas)
          //     return this.fdas
          //   }
          // }
        } else if (this.sbut === 'jin') {
          this.jData.push(arr)
        } else {
          this.zhDta.push(arr)
        }
      }
    }
  }
};
</script>

<style scoped>
.all {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: flex-start;
}

.but {
  max-width: 100%;
  margin: 12px;
  display: flex;
  align-items: center;
}

/*.text, .item{
  display: flex;
  justify-content: flex-start;
  border-bottom: 1px solid #000;
}*/
.table {
  width: 90%;
  margin-left: 12px;
}

/deep/ .el-table--enable-row-transition {
  height: 200px;
  overflow-y: scroll;
}
</style>
