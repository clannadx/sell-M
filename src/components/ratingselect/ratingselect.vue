<template>
  <div class="ratingselect">
    <div class="rating-type border-1px">
      <span @click="add(2,$event)" class="block positive" :class="{'active':selectType===2}">{{desc.all}}<span class="count">{{ratings.length}}</span></span>
      <span @click="add(0,$event)" class="block positive" :class="{'active':selectType===0}">{{desc.positive}}<span class="count">{{positives.length}}</span></span>
      <span @click="add(1,$event)" class="block negative" :class="{'active':selectType===1}">{{desc.negative}}<span class="count">{{negatives.length}}</span></span>
    </div>
    <div @click="change($event)" class="switch" :class="{'on':onlyContent}">
      <span class="icon-check_circle"></span>
      <span class="text">只看有内容的评价</span>
    </div>
  </div>
</template>

<script>
    const POSITIVE = 0
    const NEGATIVE = 1
    const ALL = 2
    export default {
      props: {
        ratings: {
          type: Array,
          default () {
            return []
          }
        },
        selectType: {
          type: Number,
          default: ALL
        },
        onlyContent: {
          type: Boolean,
          default: false
        },
        desc: {
          type: Object,
          default () {
            return {
              all: '全部',
              positive: '满意',
              negative: '不满意'
            }
          }
        }
      },
      methods: {
        add (type, event) {
          if (!event._constructed) {
            return
          }
          this.$emit('add1', type)
        },
        change (event) {
          if (!event._constructed) {
            return
          }
          this.$emit('change1')
        }
      },
      computed: {
        positives () {
          return this.ratings.filter((item) => {
            return item.rateType === POSITIVE
          })
        },
        negatives () {
          return this.ratings.filter((item) => {
            return item.rateType === NEGATIVE
          })
        }
      }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus">
    @import "../../assets/stylus/mixin.styl"
    .ratingselect
      .rating-type
        padding: 18px 0
        margin: 0 18px
        border-1px(rgba(7, 17, 27, 0.1))
        font-size: 0
        .block
          display:inline-block
          padding:8px 12px
          margin-right: 8px
          -webkit-border-radius: 1px
          -moz-border-radius: 1px
          border-radius: 1px
          color: rgb(77,85,93)
          font-size:12px
          line-height:16px
          &.active
            color: #fff
          &.positive
            background: #ffd5b3
            &.active
              background:#ff7200
          &.negative
            background: rgba(77,85,93,0.2)
            &.active
              background:rgb(77,85,93)
          .count
            font-size:8px
            margin-left: 2px


    .switch
      padding:12px 18px
      line-height: 24px
      border-bottom:1px solid rgba(7,17,27,0.1)
      color: #ccc
      &.on
        .icon-check_circle
          color: #00c850
      .icon-check_circle
        display inline-block
        vertical-align top
        font-size:24px
        margin-right: 4px
      .text
        display inline-block
        vertical-align top
        font-size:12px
</style>
