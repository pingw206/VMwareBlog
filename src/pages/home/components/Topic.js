import React, { PureComponent } from 'react';
import { connect } from 'react-redux'; //connect让topic可以使用provider中的store数据
import {TopicWrapper,TopicItem} from '../style'

class Topic extends PureComponent {
  render() { 
    const { list } = this.props;
    return (
      <TopicWrapper>
        {
          list.map((item) => {
            return (
              <TopicItem key={item.get('id')}>
                <img 
                  className='topic-pic'
                  src={item.get('imgUrl')}  //immutable的数据要通过get获得，不能直接获得
                  alt=''
                />
                {item.get('title')}
              </TopicItem>
            )
          })
        }


        
      </TopicWrapper>  
    );
  }
}

const mapState = (state) => ({
  list: state.get('home').get('topicList')
});

export default connect(mapState,null)(Topic);  //mapState是从store里拿数据