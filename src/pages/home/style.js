import styled from 'styled-components';
import pic from '../../statics/recommend.png';

export const HomeWrapper = styled.div`
  overflow: hidden;
  width: 960px;
  margin: 0 auto;
`;
export const HomeLeft = styled.div`
  width: 625px;
  float: left;
  margin-left: 15px;
  padding-top: 30px;
  .banner-img {
    width: 625px;
    height: 270px;
  }
`;
export const HomeRight = styled.div`
  width: 280px;
  float: right;
`;

export const TopicWrapper = styled.div`
  overflow: hidden; /*内层浮动，外层加overflow触发BFC */
  padding: 20px 0 10px 0;
  margin-left: -18px;
  border-bottom: 1px solid #dcdcdc;
`;

export const TopicItem = styled.div`
  float: left;
  background: #f7f7f7;
  height: 32px;
  padding-right: 10px;
  margin-left: 18px;
  margin-bottom: 18px;
  line-height: 32px;
  font-size: 14px;
  color: #000;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  .topic-pic {
    display: block;
    float: left;
    width: 32px;
    height: 32px;
    margin-right: 10px;
  }
`;

export const ListItem = styled.div`
  overflow: hidden;
  padding: 20px 0;
  border-bottom: 1px solid #dcdcdc;
  .list-pic {
    display: block;
    float: right;
    width: 125px;
    height: 100px;
    border-radius: 10px;
  }
`;

export const ListInfo = styled.div`
  width: 500px;
  float: left;
  .title {
    line-height: 27px;
    font-size: 18px;
    font-weight: bold;
    color: #333;
    padding-bottom: 10px;
  }
  .desc {
    line-height: 24px;
    font-size: 13px;
    color: #999;
  }
`;

export const LoadMore = styled.div`
  width: 100%;
  height: 40px;
  line-height: 40px;
  margin: 30px 0;
  background: #a5a5a5;
  text-align: center;
  border-radius: 20px;
  color: #fff;
  cursor: pointer;
`;

export const RecommendWrapper = styled.div`
  margin: 30px 0;
  width: 280px;
`;

export const RecommendItem = styled.div`
  width: 280px;
  height: 50px;
  box-sizing: border-box;
  line-height: 50px;
  padding-left: 50px;
  color: #fff;
  background: url(${pic});
  background-size: 280px 50px;
  margin-bottom: 5px;
  border-radius: 5px;
`;

export const EventWrapper = styled.div`
  width: 278px;
  height: 300px;
`;
export const EventTitle = styled.div`
  top: 0;
  left: 0;
  font-size: 14px;
  color: #969696; 
`;

export const EventMore = styled.span`
  float: right;
`;

export const EventItem = styled.div`
  position: relative;
  width: 100%;
  height: 50px;
  margin-top: 15px;
  .event-img {
    width:50px;
    height: 50px;
    border-radius: 25px;
  }
  .event-date {
    position: absolute;
    margin-top: -25px;
    margin-left: 60px;
    font-size: 12px;
    color: #969696;
  }
`;

export const EventName = styled.span`
  position: absolute;
  margin-top: 0;
  padding-top: 5px;
  margin-left: 10px;
  font-size: 14px;
  color: #333;
`;
export const Follow = styled.span`
  float: right;
  font-size: 14px;
  color: #42C02E;
`;

export const BackTop = styled.div`
  position: fixed;
  right: 100px;
  bottom: 100px;
  width: 60px;
  height: 40px;
  padding: 10px 10px;
  font-size: 14px;
  line-height: 40px;
  text-align: center;
  border: 1px solid #ccc;
  cursor: pointer;
`;