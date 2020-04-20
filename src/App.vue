<template>
  <div id="app">
    <pre class="app__result">{{envInfo}}</pre>

    <div class="app__control">
      <el-button @click="addRndAttr">随机增量属性</el-button>
      <el-button @click="addArray">增量数组</el-button>
      <el-button @click="addNull">增量null</el-button>
      <el-button @click="addMutiLevelAttr">增量多层级属性</el-button>
    </div>

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
    addRndAttr() {
      const ns = {};
      this.setAttr(ns);
      this.$store.commit(Types.ENV_INFO, ns);
    },
    addArray() {
      const a = [];
      for (let i = 0; i < 5; i++) a.push(Math.random() * 10 >> 0);
      this.$store.commit(Types.ENV_INFO, { arr: a });
    },
    addNull() {
      this.$store.commit(Types.ENV_INFO, { null: null });
    },

    setAttr(handler, value) {
      const ns = String.fromCharCode(Math.random() * 3 + 97 >> 0);
      handler[ns] = value || Math.random() * 100 >> 0;
    },

    setAttrRecursive(handler, deep) {
      const rnd = Math.random() * 3 + 1 >> 0;
      for (let i = 0; i < rnd; i++) {
        // 随机决定是否将当前层级的值做为 object
        if ((Math.random() * rnd >> 0) === i && i < deep) {
          const h = Object.create(null);
          this.setAttrRecursive(h, --deep);
          this.setAttr(handler, h);
        }
        else {
          this.setAttr(handler);
        }
      }
    },

    addMutiLevelAttr() {
      const obj = Object.create(null);
      this.setAttrRecursive(obj, 3);
      console.warn(obj);
      this.$store.commit(Types.ENV_INFO, obj);
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
  font-family: "Courier New", sans-serif;
  font-size: 14px;
  background: #e7efff;
  border: 1px dotted #098adb;
  padding: 10px;
  margin-bottom: 10px;
}

.app__control {
  display: flex;
  flex-wrap: wrap;
}

.app__control .el-button {
  flex: 1;
  margin: 0;
}
</style>
