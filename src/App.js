import React from 'react';
import { Provider } from 'react-redux';
import Header  from './common/header/index';
import { GlobalStyled } from './style.js';
import { GlobalStyled2 } from './statics/iconfont/iconfont';
import store from './store/index';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/home';
import Detail from './pages/detail/loadable.js';
import Login from './pages/login';
import Post from './pages/post';


function App() {
  return (
      <div>
        {/* reset.css */}
        <GlobalStyled />
        {/* iconfont.css */}
        <GlobalStyled2 />  
        <Provider store={store}>
          <BrowserRouter>
            <div>
              <Header />
              <Route path='/' exact component={Home} />
              <Route path='/detail/:id' exact component={Detail}/>
              <Route path='/login' exact component={Login} />
              <Route path='/post' exact component={Post} />
            </div>
          </BrowserRouter>
        </Provider>
        
      </div>
      
  );
}

export default App;
