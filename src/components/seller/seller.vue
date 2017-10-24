<template>
  <div>
    我是seller
      <div class="amap-page-container">
        <el-amap vid="amapDemo" :zoom="zoom" :center="center" class="amap-demo">
          <el-amap-marker v-for="marker in markers" :key="marker.id" :position="marker.position" ></el-amap-marker>
        </el-amap>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  // 引入vue-amap
  import VueAMap from 'vue-amap'

  Vue.use(VueAMap)

  // 初始化vue-amap
  VueAMap.initAMapApiLoader({
    // 高德的key
    key: '0548924312e080abb61c62911b0c6f24',
    // 插件集合
    plugin: []
  })
  export default {
    data () {
      return {
        zoom: 16,
        center: [114.34005, 30.55296],
        markers: [
          {
            position: [114.34005, 30.55296],
            visible: true,
            draggable: true
          }
        ]
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .amap-page-container
    width: 500px
    height: 500px
</style>
