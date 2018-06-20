<template>
  <div class="card-edit-box">
    <div id="card-mask"></div>
    <transition name="slideInLeft">
      <Card v-if="show"/>
    </transition>
  </div>
</template>
<script>
import Card from '@/components/Card'
export default {
  name: 'CardMask',
  props: ['show'],
  components: {
    Card
  }
}
</script>

<style scoped>
.card-edit-box{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
#card-mask{
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .6);
  top: 0;
  left: 0;
}

.slideleft-enter-active,.slideleft-leave-active{
  left: 0;
  transition: left 2s;
}
.slideleft-enter-to,.slideleft-leave-to{
  left: 0;
}
.slideleft-enter, .slideleft-to{
  left: -100%;
}
</style>
