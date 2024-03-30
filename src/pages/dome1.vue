<template>
  <div>
    <canvas ref="myCanvas" width="300" height="300" @click="draw"></canvas>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  mounted() {
  },
  methods: {
    draw(event){
      const canvas = this.$refs.myCanvas;
      const ctx = canvas.getContext("2d");
      const rect = canvas.getBoundingClientRect();
      const widths = canvas.width;
      const heights = canvas.height;
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      ctx.fillStyle = "red";
      ctx.beginPath();
      ctx.arc(widths/2, heights/2, 2, 0, Math.PI * 2);
      ctx.fill();
      console.log(x,y)
      ctx.beginPath();
      // ctx.moveTo(this.points[this.points.length - 2].x, this.points[this.points.length - 2].y);
      // ctx.lineTo(this.points[this.points.length - 1].x, this.points[this.points.length - 1].y);
      ctx.strokeStyle = "black";
      ctx.stroke();
    }
  },
};
</script>


<style scoped>
canvas{
  border: 1px solid #000;
  border-radius: 50%;
}

</style>
