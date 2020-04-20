# util-store
[![npm version](https://img.shields.io/npm/v/@mudas/util-store.svg)](https://www.npmjs.org/package/@mudas/util-store)
> A tools for incremental storage in store, and module merge and other transactions

## Setup
install：
```npm
npm i @mudas/plugin-vue-handler -S
```

You need to add configuration for vue-cli to correctly translate the es module in node_modules:
```js
// vue.config.js:
module.exports = {
    transpileDependencies: [
      '@mudas/*' // all of node_module for '@mudas'
    ]
}
```

### Usage	

directory Structure:
```text
env
  |- index.js
  |- env1.js
  └─ env2.js
```

env/env1.js:
```js
import * as utils from '@mudas/util-store';

const Mutations = {
  [ENV_INFO](state, data) {
    // Incremental save
    // existing field values are overwritten, non-existent fields are created
    utils.increment(state.envInfo, data);
    
    // Simple value type or null, no need to use incremental save
    // please use the fllowing code, direct assignment:
    // state.envInfo = 1; // null, true, 'any'
  }
};
```

env/index.js:
```js
import * as utils from '@mudas/util-store';
import EnvInfo1 from './env1';
import EnvInfo2 from './env2';

// Combine multiple StoreOptions into a single StoreOptions
export default utils.mergeStore([
  EnvInfo1, 
  EnvInfo2
]);
```
