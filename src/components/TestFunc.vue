<template>
    <div>
        <!-- 使用数组形式进行多值绑定 -->
        <p :class="[vforecolor, vbackcolor]">{{vdata}}</p>
        <!-- 多值在Vue的data属性中已经进行绑定 -->
        <p :class="vclass">{{vdata}}</p>
        <!-- 根据真假渲染 -->
        <p :class="{forecolor:vclass1, backcolor:vclass2}">{{vdata}}</p>
    </div>    
  
</template>
 
<script>
  export default {
  data() {
    return {
      vdata:            "我修改了字体颜色",
      vforecolor:       "forecolor",
      vbackcolor:       "backcolor",
      vclass:           'forecolor backcolor',
      vclass1:          true,
      vclass2:          false
    };
  }
};
</script>

<style>
    .forecolor{
        color: burlywood;
    }
    .backcolor{
        background: chartreuse;
    }
</style>