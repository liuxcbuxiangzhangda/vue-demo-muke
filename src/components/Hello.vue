<template>
  <div class="hello">
    <h1>{{msg}}</h1>
    <input type="text" v-model="newItem" v-on:keyup.enter="addItem">
    <ul>
      <li v-for="item in items" v-bind:class="{mm:item.isFinished}" v-on:click="toggleFinish(item)">
      {{item.label}}
      </li>
    </ul>
    <ComponentA fromFather="yyy"></ComponentA>
  </div>
</template>

<script>
  import Store from '../store'
  import ComponentA from  './componentA'
  export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your2 Vue.js App',
      items:Store.fetch(),//把web储存的值取出来
      newItem:""
    }
  },
  watch:{
      //监听到items变化时就储存起来
     items:{
         handler:function (items) {
           Store.save(items)
         },
       deep:true  //深度监听，如果是false时，只是键改变，就不会引起监听
     }
  },
  methods:{
      toggleFinish:function (item) {
        item.isFinished=!item.isFinished
      },
    addItem:function () {
      this.items.push({
        label: this.newItem,
        isFinished: false
      });
      this.newItem=""//input置空
    }
  },
    components:{ComponentA}
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mm{
  color:red;
}

</style>
