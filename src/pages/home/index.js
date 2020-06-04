import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import banner from '../../statics/vm-banner.jpeg';
import List from './components/List';
import Recommend from './components/Recommend';
import Topic from './components/Topic';
import Writer from './components/Event';
import {actionCreators} from './store'
import { 
  HomeWrapper,
  HomeLeft,
  HomeRight,
  BackTop
} from './style';


class Home extends PureComponent {
  handleScrollTop() {
    window.scrollTo(0,0);
  }
  render() { 
    return ( 
      <HomeWrapper>
        <HomeLeft>
          <img className="banner-img" alt="banner" src={banner}/>
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommend />
          <Writer />
        </HomeRight>
        { this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop> : null}
      </HomeWrapper>
    );
  }

  componentDidMount() {
    this.props.changeHomeData();  //把UI组件中的东西拿出来，拿到下面的容器组件中
    this.bindEvents();
    }
  //组件销毁时记得解绑事件
  componentWillMount() {
    window.removeEventListener('scroll',this.props.changeScrollTopShow)
  }
  
  bindEvents() {
    window.addEventListener('scroll',this.props.changeScrollTopShow)
  }
}

const mapState = (state) => ({
  showScroll: state.getIn(['home','showScroll'])
});

const mapDispatch = (dispatch) => ({
  changeHomeData() {
    const action = actionCreators.getHomeInfo();
    dispatch(action);
  },
  changeScrollTopShow() {
    if (document.documentElement.scrollTop > 200) {
      dispatch(actionCreators.toggleTopShow(true))
    } else {
      dispatch(actionCreators.toggleTopShow(false))
    }
  }
});

export default connect(mapState, mapDispatch)(Home);