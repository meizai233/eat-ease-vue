<template>
  <div style="text-align: center">
    <div v-if="loadingMore">加载中</div>
    <div v-if="noMore">没有更多了</div>
  </div>
</template>
<script>
export default {
  props: {
    loadingMore: {
      type: Boolean,
      required: true,
    },
    distance: {
      type: Number,
      default: 50,
    },
    noMore: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    window.addEventListener("scroll", this.listenBottomOut);
    this.element = document.documentElement;
  },
  destroyed() {
    window.removeEventListener("scroll", this.listenBottomOut, false);
  },
  data() {
    return {
      element: null,
    };
  },
  methods: {
    listenBottomOut() {
      if (this.noMore || this.loadingMore) return;
      let scrollTop = this.element.scrollTop || document.body.scrollTop;
      let clientHeight = this.element.clientHeight;
      let scrollHeight = this.element.scrollHeight;
      if (scrollTop + clientHeight >= scrollHeight - this.distance) {
        this.$emit("arriveBottom");
      }
    },
  },
};
</script>
