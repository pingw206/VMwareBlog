import React from 'react';
import Loadable from 'react-loadable';

const LoadableComponent = Loadable({
  loader: () => import('./'),  //加载index.js
  loading() {
    return <div>加载中</div>
  }
});

export default () => <LoadableComponent/>
