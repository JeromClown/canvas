<template>
  <div>
    <canvas
      ref="canvas"
      @click="draw"
      @dblclick="handleDoubleClick"
      width="500"
      height="500"
    ></canvas>
  </div>
</template>

<script>
export default {
  name: 'paint',
  props: {
    open: { // 组件开关
      type: Boolean,
      default: false
    },
    sbut: { // 所点击的按钮
      type: String,
      default: ''
    }
  },
  data() {
    return {
      points: [], // 坐标存放
      drawing: false // 确保开启画图
    };
  },
  methods: {
    // 点击画点和线
    draw(event) {
      if (this.open === false) return;
      if (!this.drawing) return;
      const canvas = this.$refs.canvas;
      const ctx = canvas.getContext("2d");
      const rect = canvas.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      this.points.push({x, y});
      ctx.fillStyle = "red";
      ctx.beginPath();
      ctx.arc(x, y, 2, 0, Math.PI * 2);
      ctx.fill();
      if (this.sbut === 'zhan') return;
      if (this.points.length >= 2) {
        ctx.beginPath();
        ctx.moveTo(this.points[this.points.length - 2].x, this.points[this.points.length - 2].y);
        ctx.lineTo(this.points[this.points.length - 1].x, this.points[this.points.length - 1].y);
        ctx.strokeStyle = "black";
        ctx.stroke();
      }
    },

    // 双击触发
    handleDoubleClick() {
      if (this.open === false) return;
      if (this.sbut === 'zhan'){
        this.startNewDrawing();
      }else {
        if (this.points.length < 4) {
          this.points.pop()
          return;
        }
        this.completePolygon();
        this.startNewDrawing();
      }
    },

    // 线条闭合
    completePolygon() {
      if (this.sbut === 'zhan') return;
      const canvas = this.$refs.canvas;
      const ctx = canvas.getContext("2d");
      ctx.beginPath();
      ctx.moveTo(this.points[0].x, this.points[0].y);
      for (let i = 1; i < this.points.length; i++) {
        ctx.lineTo(this.points[i].x, this.points[i].y);
      }
      ctx.closePath();
      ctx.strokeStyle = "red";
      ctx.lineWidth = 2;
      ctx.stroke();
      ctx.fillStyle = "rgba(255,255,0,0.2)";
      ctx.fill();
    },

    // 初始化  传递数据
    startNewDrawing() {
      this.$emit('handleDoubleClick', this.points)
      this.drawing = true;
      this.points = [];
    }
  },

  mounted() {
    this.startNewDrawing();
  }
};
</script>

<style scoped>
canvas {
  border: 1px solid black;
}
</style>
