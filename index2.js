var app = new Vue({
  el:'#app',
  data:{
    red:0,
    green:0
  
  }, 
  methods: {
    // mousemoveのときの処理
    changecolor:function(event){
      // カーソルの位置をもとにredとgreenの数値を変える
      //console.log(this.changecolor);
      //console.log(event.offsetX);
      this.red=event.offsetX;

      this.green=event.offsetY;
      //console.log(event.offsetY);
    }
    // paletteをクリックしたときの処理

    // mini-paletteをクリックしたときの処理
  }, 
  computed: {
    // backgroundColorを変更させる
    paletteStyle() {
      return {
        // ここの中の値が返ってくる
        backgroundColor: `rgba(${this.red}, ${this.green}, 100, 0.5)`
      }
    }
  }
})