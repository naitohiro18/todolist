var app = new Vue({
  el:'#app',
  data:{
    message:'Hello Vuejs',
    todos:[],

  },
  methods:{
    add:function(){
      //console.log(this.add);
    const todo={
      item:this.message,
      isDone:false,
      
    }
    if (this.message === "")return;
    this.todos.push(todo)
    console.log(this.todos);
    this.message="";
  },

  deleteTodo:function(index){
    this.todos.splice(index,1);
    //console.log(index);
  },


}
}
)
