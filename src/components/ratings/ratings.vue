<template>
  <div class="ratings">
    <div class="ratings-content" ref="ratingContent">
      <div class="overview">
        <div class="overview-left">
          <h1 class="score">{{seller.score}}</h1>
          <div class="title">综合评分</div>
          <div class="rank">高于周边商家{{seller.rankRate}}</div>
        </div>
        <div class="overview-right"></div>
      </div>
      <split></split>
      <ratingselect @add1="addIterm" @change1="toggle"  :ratings="ratings" :selectType="selectType" :onlyContent="onlyContent"></ratingselect>
      <div class="rating-wrapper">
        <ul>
          <li v-for="rating in ratings" :key="rating.id" v-show="needShow(rating.rateType, rating.text)" class="rating-item">
            <div class="avatar">
              <img width="28" height="28" :src="rating.avatar">
            </div>
            <div class="content">
              <h1 class="name">{{rating.username}}</h1>
              <div class="star-wrapper">
                <span class="delivery" v-show="rating.deliveryTime">{{rating.deliveryTime}}</span>
              </div>
              <p class="text">{{rating.text}}</p>
              <div class="recommend" v-show="rating.recommend && rating.recommend.length">
                <span class="icon-thumb_up"></span>
                <span class="item" v-for="item in rating.recommend" :key="item.id">{{item}}</span>
              </div>
              <div class="time">
                {{rating.rateTime | formatDate1}}
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import split from '@/components/split/split'
  import ratingselect from '@/components/ratingselect/ratingselect'
  import BScorll from 'better-scroll'
  import {formatDate} from '@/assets/js/data'

  const ALL = 2
  const ERR_OK = 0
  const debug = process.env.NODE_ENV !== 'production'
  export default {
    props: {
      seller: {
        type: Object
      }
    },
    data () {
      return {
        ratings: [],
        selectType: ALL,
        onlyContent: true
      }
    },
    components: {
      split,
      ratingselect
    },
    created () {
      const url = debug ? '/api/ratings' : 'https://easy-mock.com/mock/59c9aed5e0dc663341ba41de/web/ratings'
      this.$http.get(url).then((response) => {
        response = response.body
        if (response.errno === ERR_OK) {
          this.ratings = response.data
          this.$nextTick(() => {
            if (!this.ratingScroll) {
              this.ratingScroll = new BScorll(this.$refs.ratingContent, {
                click: true
              })
            }
          })
        }
      })
    },
    methods: {
      addIterm (type) {
        this.selectType = type
        this.$nextTick(() => {
          this.ratingScroll.refresh()
        })
      },
      toggle () {
        this.onlyContent = !this.onlyContent
        this.$nextTick(() => {
          this.ratingScroll.refresh()
        })
      },
      needShow (type, text) {   // 根据type和selectType来判断哪些显示 哪些不显示
        if (this.onlyContent && !text) {
          return false
        }
        if (this.selectType === ALL) {
          return true
        } else {
          return type === this.selectType
        }
      }
    },
    filters: {  // 组件级别的filter
      formatDate1 (time) {
        let date = new Date(time)
        return formatDate(date, 'yyyy-MM-dd hh:mm')
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../assets/stylus/mixin.styl"
  .ratings
    position: absolute
    top: 174px
    left: 0px
    bottom: 0
    width: 100%
    overflow: hidden
    .overview
      display: flex
      padding: 16px 0px
      .overview-left
        flex: 0 0 137px
        width: 137px
        text-align: center
        border-right: 1px solid rgba(7, 17, 27, 0.1)
        .score
          line-height: 28px
          font-size: 24px
          color: rgb(255, 153, 0)
        .title
          margin-bottom 8px
          line-height: 12px
          font-size: 12px
          color: rgb(7, 17, 27)
        .rank
          padding-bottom: 6px
          line-height: 10px
          font-size 10px
          color: rgb(147, 153, 159)
      .overview-right
        flex: 1
        padding-left: 24px

  .rating-wrapper
    padding: 0 18px
    .rating-item
      display: flex
      padding: 18px 0
      border-1px(rgba(7, 17, 27, 0.1))
      .avatar
        flex: 0 0 28px
        width: 28px
        margin-right: 12px
        img
          border-radius: 50%
      .content
        position: relative
        flex: 1
        .name
          margin-bottom: 4px
          line-height: 12px
          font-size: 10px
          color: rgb(7, 17, 27)
        .star-wrapper
          margin-bottom: 6px
          font-size: 0
          .star
            display: inline-block
            margin-right: 6px
            vertical-align: top
          .delivery
            display: inline-block
            vertical-align: top
            line-height: 12px
            font-size: 10px
            color: rgb(147, 153, 159)
        .text
          margin-bottom: 8px
          line-height: 18px
          color: rgb(7, 17, 27)
          font-size: 12px
        .recommend
          line-height: 16px
          font-size: 0
          .icon-thumb_up, .item
            display: inline-block
            margin: 0 8px 4px 0
            font-size: 9px
          .icon-thumb_up
            color: #ff7200
          .item
            padding: 0 6px
            border: 1px solid rgba(7, 17, 27, 0.1)
            border-radius: 1px
            color: rgb(147, 153, 159)
            background: #fff
        .time
          position: absolute
          top: 0
          right: 0
          line-height: 12px
          font-size: 10px
          color: rgb(147, 153, 159)
</style>
