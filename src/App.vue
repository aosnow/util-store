<template>
  <div id="app">
    <div class="app__result">{{envInfo}}</div>

    <div>es6.then: {{typeof promise().then}}</div>
    <div>es6.finally: {{promise().finally}}</div>
    <div>es6.then.finally: {{promise().then().finally}}</div>
    <div>es6.then.catch.finally: {{promise().then(()=>{}).catch(reason=>{}).finally}}</div>

    <div class="app__control">
      <el-button>随机增量属性</el-button>
      <el-button>增量数组</el-button>
      <el-button>增量null</el-button>
      <el-button>增量不存在属性</el-button>
    </div>

    <child></child>

  </div>
</template>

<script>
import Vue from 'vue';
import { mapGetters } from 'vuex';
import * as Types from '@/store/types';

export default {
  name: 'app',

  computed: {
    ...mapGetters({
      envInfo: Types.ENV_INFO
    })
  },

  methods: {
    promise() {
      return new Promise(resolve => {
        resolve(true);
      });
    }
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 10px;
}

.app__result {
  background: #e7efff;
  border: 1px dotted #098adb;
  padding: 20px;
  margin: 10px;
}

.app__control {
  display: flex;
  flex-wrap: wrap;
}

.app__control .el-button {
  flex: 1;
}
</style>
