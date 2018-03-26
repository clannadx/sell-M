<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
    <div class="tab border-1px">
      <div class="tab-item">
        <router-link to="/" exact>商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <router-view :seller="seller"/>
  </div>
</template>

<script type="text/ecmascript-6">
  import header from '@/components/header/header'
  import {urlParse} from '@/assets/js/util'
  const ERR_OK = 0
  export default {
    name: 'app',
    data () {
      return {
        seller: {
          id: (() => {
            let queryParam = urlParse()
            return queryParam.id
          })()
        }
      }
    },
    components: {
      'v-header': header
    },
    created () {
      this.$http.get('/api/seller?id=' + this.seller.id).then((response) => {
        response = response.body
        if (response.errno === ERR_OK) {
          this.seller = Object.assign({}, this.seller, response.data)    // 给对象扩展属性
          console.log(this.seller.id)
        }
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import './assets/stylus/mixin'

  .tab
    display: flex
    width: 100%
    height: 40px
    line-height: 40px
    border-1px(rgba(7, 17, 27, 0.1))
    .tab-item
      flex: 1
      text-align: center
      line-height: 40px
      & > a
        font-size: 14px
        color: rgb(77, 85, 93)
        line-height: 40px
        &.active
          color: rgb(240, 20, 20)

</style>
