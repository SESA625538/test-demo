<template>

    <div>
        <!-- 属性绑定 -->
        v-bind的完整:<input type="text" v-bind:value="bind"><br>
        v-bind的简写:<input type="text" :value="bind">
        <p>{{bind}}</p>
        <!-- 双向绑定 -->
        v-model的完整:<input type="text" v-model="model"><br>
        v-model的简写:<input type="text" v-model="model">
        <p>{{model}}</p>
        <!-- 事件绑定 -->
        <button v-on:click="von">我被点了{{on}}次</button>
        <button @click="von">简写版被点了{{on}}次</button>
    </div>    
  
</template>
 
<script>
  export default {
  data() {
    return {
      bind : '我是属性绑定',
      model : '我是双向绑定', 
      on : 0
    };
  },
  methods: {
    von(){
      this.on += 1
    }
  }
};
</script>