// ------------------------------------------------------------------------------
// name: store
// author: mudas( mschool.tech )
// created: 2020/4/16 20:34
// ------------------------------------------------------------------------------

import Vue from 'vue';
import { isString, isNumber, isBoolean, isNull, isArray, isPlainObject } from 'lodash-es';

/**
 * 合并多个子级 store 模块后输出合并模块
 * @param {StoreOptions[]} modules
 * @param {Object} options
 */
export function mergeStore(modules, options = Object.create(null)) {
  const store = {
    namespaced: true,
    strict: true,
    state: {},
    getters: {},
    mutations: {},
    actions: {},
    ...options
  };

  modules.forEach(mod => {
    const states = typeof mod.state === 'function' ? mod.state() : mod.state;
    store.state = { ...store.state, ...states };
    store.getters = { ...store.getters, ...mod.getters };
    store.mutations = { ...store.mutations, ...mod.mutations };
    store.actions = { ...store.actions, ...mod.actions };
  });

  return store;
}

/**
 * 对指定 state 进行增量数据修改或者增加
 * @param state store.state.item
 * @param data 需要保存的数据体
 */
export function increment(state, data) {
  _merge(state, data);
}

/**
 * 对指定 holder 进行属性递归赋值
 * @param holder
 * @param source
 * @private
 */
function _merge(holder, source) {
  if (isPlainObject(source)) {
    Object.keys(source)
          .forEach(key => {

            if (isPlainObject(source[key])) {
              // holder 不存在对应属性或者为值类型、数组、null 将创建新的 key
              if (!(key in holder)
                  || isString(holder[key])
                  || isNumber(holder[key])
                  || isBoolean(holder[key])
                  || isNull(holder[key])
                  || isArray(holder[key])) {
                Vue.set(holder, key, Object.create(null));
              }

              _merge(holder[key], source[key]);
            }
            else {
              if (!holder[key]) {
                Vue.set(holder, key, source[key]);
              }
              else {
                holder[key] = source[key];
              }
            }

          });
  }
  else {
    // 非 PlainObject 类型直接赋值
    // 由于函数内传入的是引用，无法直接达到覆盖根级的目的
    // 需要退回到 mutation 中直接使用 = 等号赋值
    holder = source; // 此处无效，只是覆盖了参数值，state 值不变
  }
}
