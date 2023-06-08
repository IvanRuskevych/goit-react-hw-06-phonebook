import { createStore } from 'redux';
import { reducer } from './reducers';

const { devToolsEnhancer } = require('@redux-devtools/extension');

const enhancer = devToolsEnhancer();

export const store = createStore(reducer, enhancer);
//
