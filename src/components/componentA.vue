<template>
  <div class="hello">
    <h1>{{msg}}</h1>
    <h1>{{fromFather}}</h1>
    <button v-on:click="onClickMe"></button>
  </div>
</template>

<script>
  export default {
    name: 'componentA',
    data () {
      return {
          msg:"hello from component a"
      }
    },
    watch:{

    },
    methods:{
      onClickMe:function () {
         console.log(this.fromFather)
      }
    },
    props:['fromFather']
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>

