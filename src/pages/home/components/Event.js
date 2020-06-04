import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { 
  EventWrapper,
  EventTitle,
  EventMore,
  EventItem,
  EventName,
  Follow
} from '../style';


class Event extends PureComponent {
  render() { 
    const { list } = this.props; 
    return (
      <EventWrapper>
        <EventTitle>
          热门活动
          <EventMore>
            查看全部
          </EventMore>
        </EventTitle>
        {
          list.map((item) => {
            return (
              <EventItem key = {item.get('id')}>
                <img className="event-img" alt="" src={item.get('imgUrl')} />
                <EventName>{item.get('name')}</EventName>
                <p className="event-date">{item.get('date')}</p>
                <Follow> +报名</Follow>
              </EventItem>
            )
          })
        }
        
      </EventWrapper>
    );
  }
}
 
const mapState = (state) => ({
  list: state.getIn(['home','writerList'])
})
export default connect(mapState,null)(Event);