import swiper from '../../components/swip.vue'
let mixin={
    filters: {
        setPrice(val){
            val=Number(val)
              return val.toFixed(2)
        }  
      },
    components:{
        swiper,
        // slides
    }
}

export default mixin