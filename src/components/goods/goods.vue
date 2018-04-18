<template>
  <div>
    <div class="goods">
      <div class="menu-wrapper" ref="menuWrapper">
        <ul>
          <li v-for="( item, index ) in goods" :key="item.id" class="menu-item" :class="{'current' : currentIndex === index }"
              @click="selectMenu(index)" ref="menuList">
            <span class="text border-1px">
              <span v-show="item.type>0" class="icon"></span>
              {{item.name}}
            </span>
          </li>
        </ul>
      </div>
      <div class="food-wrapper" ref="foodsWrapper">
        <ul>
          <li  v-for="item in goods" :key="item.id" class="food-list food-list-hook">
            <h1 class="title">{{item.name}}</h1>
            <ul>
              <li @click="selectFood(food,$event)"  v-for="food in item.foods" :key="food.id" class="food-item border-1px">
                <div class="icon">
                  <img width="57" height="57" :src="food.icon" alt="">
                </div>
                <div class="content">
                  <h2 class="name">{{food.name}}</h2>
                  <p class="desc">{{food.description}}</p>
                  <div class="extra">
                    <span class="count">月售{{food.sellCount}}份</span>
                    <span>好评率{{food.rating}}</span>
                  </div>
                  <div class="price">
                    <span class="now">¥{{food.price}}</span>
                    <span class="old" v-show="food.oldPrice">¥{{food.oldPrice}}</span>
                  </div>
                  <div class="contr">
                    <cart-control :food="food"></cart-control>
                  </div>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
     <loading :seller="seller" :loading="loading" :resultCode="resultCode"></loading>
    <shop-cart :select-foods="selectFoods" :delivery-price="seller.deliveryPrice"
               :min-price="seller.minPrice"></shop-cart>
    <food :food="selectedFood" ref="food"></food>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  import Shopcart from '@/components/shopcart/shopcart'
  import loading from '@/components/loading/loading'
  import Cartcontrol from '@/components/cartcontrol/cartcontrol'
  import Food from '@/components/food/food'

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
        goods: [],
        listHeight: [],
        scrollY: 0,
        selectedFood: {},
        loading: true,
        resultCode: {
          type: Number
        }
      }
    },
    components: {
      Food,
      'shop-cart': Shopcart,
      'cart-control': Cartcontrol,
      loading
    },
    computed: {
      currentIndex () {
        for (let i = 0; i < this.listHeight.length; i++) {
          let height1 = this.listHeight[i]
          let height2 = this.listHeight[i + 1]
          if (!height2 || (this.scrollY >= height1 && this.scrollY < height2)) {
            this._followScroll(i)
            return i
          }
        }
        return 0
      },
      selectFoods () {
        let foods1 = []
        this.goods.forEach((good) => {
          good.foods.forEach((food) => {
            if (food.count) {
              foods1.push(food)
            }
          })
        })
        return foods1
      }
    },
    created () {
      const url = debug ? '/api/goods' : 'https://easy-mock.com/mock/59c9aed5e0dc663341ba41de/example_1506389717568/goods'
      this.$http.get(url).then((response) => {
        response = response.body
        this.resultCode = response.status
        this.loading = false
        if (response.errno === ERR_OK) {
          this.goods = response.data
          this.$nextTick(() => {
            this._initScroll()
            this._calculateHeight()
          })
        }
      })
    },
    methods: {
      selectMenu (index) {
        console.log(index)
        let foodList = this.$refs.foodsWrapper.getElementsByClassName('food-list-hook')
        let el = foodList[index]
        this.foodsScroll.scrollToElement(el, 300)
      },
      _initScroll () {
        this.menuScroll = new BScroll(this.$refs.menuWrapper, {
          click: true
        })
        this.foodsScroll = new BScroll(this.$refs.foodsWrapper, {
          click: true,
          probeType: 3
        })

        this.foodsScroll.on('scroll', (pos) => {
          // 判断滑动方向，避免下拉时分类高亮错误（如第一分类商品数量为1时，下拉使得第二分类高亮）
          if (pos.y <= 0) {
            this.scrollY = Math.abs(Math.round(pos.y))
          }
        })
      },
      _calculateHeight () {
        let foodList = this.$refs.foodsWrapper.getElementsByClassName('food-list-hook')
        let height = 0
        this.listHeight.push(height)
        for (let i = 0; i < foodList.length; i++) {
          let item = foodList[i]
          height += item.clientHeight
          this.listHeight.push(height)
//          console.log(this.listHeight)
        }
      },
      _followScroll (index) {
        let menuList = this.$refs.menuList
        let el = menuList[index]
        this.menuScroll.scrollToElement(el, 300, 0, -100)
      },
      selectFood (food, event) {
        console.log(3)
        if (!event._constructed) {
          return
        }
        this.selectedFood = food
        console.log(this.selectedFood)
        this.$refs.food.show()
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import '../../assets/stylus/mixin'

  .goods
    display: flex
    position: absolute
    top: 174px
    bottom: 46px
    width: 100%
    overflow: hidden
    .menu-wrapper
      flex: 0 0 80px
      width: 80px //安卓兼容
      background-color: #f3f5f7
      .menu-item //class的级联速度快
        display: table
        width: 56px
        height: 54px
        line-height: 14px
        padding: 0 12px
        &.current
          position: relative
          z-index: 10
          margin-top: -1px
          background: #fff
          font-weight: 700
          .text
            border-none()
        .text
          display: table-cell
          width: 56px
          text-align: center
          vertical-align: middle
          font-size: 12px
          border-1px(rgba(7, 17, 27, 0.1))
    .food-wrapper
      flex: 1
      .title
        padding-left: 14px
        height: 26px
        line-height: 26px
        border-left: 2px solid #d9dde1
        font-size: 12px
        color: rgb(147, 153, 159)
        background-color: #f3f5f7
      .food-item
        display: flex
        margin: 18px
        padding-bottom: 18px
        border-1px(rgba(7, 17, 27, 0.1))
        &:last-clild
          border-none()
          margin-bottom: 0px
        .icon
          flex: 0 0 57px
          margin-right: 10px
        .content
          flex: 1
          .name
            margin: 2px 0 8px 0
            height: 14px
            line-height: 14px
            font-size: 14px
            color: rgb(7, 17, 27)
          .desc, .extra
            line-height: 10px
            font-size: 10px
            color: rgb(147, 153, 159)
          .desc
            line-height: 12px
            margin-bottom: 8px
          .extra
            .count
              margin-right: 12px
          .price
            font-weight: 700
            line-height: 24px
            .now
              margin-right: 8px
              font-size: 14px
              color: rgb(240, 20, 20)
            .old
              text-decoration: line-through
              font-size: 10px
              color: rgb(147, 153, 159)
          .contr
            position: absolute
            right: 0px
            bottom: 12px

</style>
