import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { actionCreators } from './store'
import {
  DetailWrapper,
  Header,
  Content
} from './style'

class Detail extends PureComponent {
  render() { 
    //console.log(this.props) 这个里面可以找到match-params里面有id;可以通过这个方式拿到父组件传递过来的id
    return (
      <DetailWrapper>
        <Header>
          {this.props.title}
        </Header>
        <Content dangerouslySetInnerHTML={{__html:this.props.content}} />  
      </DetailWrapper>
    );
  }

  componentDidMount() {
    this.props.getDetail(this.props.match.params.id);
  }
}

const mapState = (state) => ({
  title: state.getIn(['detail','title']),
  content: state.getIn(['detail','content'])
});

const mapDispatch = (dispatch) => ({
  getDetail(id){
    const action = actionCreators.getDetail(id);
    dispatch(action);
  }
});


export default connect(mapState,mapDispatch)(withRouter(Detail));