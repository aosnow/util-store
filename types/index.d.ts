// ------------------------------------------------------------------------------
// name: index.d
// author: mudas( mschool.tech )
// created: 2020/4/18
// ------------------------------------------------------------------------------

import { StoreOptions } from 'vuex';

export interface MergeOptions {
  namespaced?:boolean;
  strict?:boolean;
}

/**
 * 合并多个子级 store 模块后输出合并模块
 * @param {StoreOptions[]} modules
 * @param {MergeOptions} [options=Object.create(null)]
 */
export function mergeStore(modules:StoreOptions<any>, options?:MergeOptions):StoreOptions<any>;

/**
 * 对指定 state 进行增量数据修改或者增加
 * @param state store.state.item
 * @param data 需要保存的数据体
 */
export function increment(state, data):void;
