import styled from 'styled-components';
import logoPic from '../../statics/vm-logo.png'

export const HeaderWrapper = styled.div`
  z-index: 1;  /*为了在login页面还显示出来搜索下拉框 */
  position: relative;
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
`;

export const Logo = styled.div`
  position: absolute;
  height: 22px;
  display: block;
  top: 0;
  left: 0;
  width: 140px;
  margin-top: 16px;
  background: url(${logoPic});  /*这里不能直接写地址 */
  background-repeat: none;
  background-size: cover;
`;

export const Nav = styled.div`
  height: 100%;
  width: 960px;
  margin: 0 auto;
  padding-right: 70px;
  line-height: 56px;
  box-sizing: border-box;
`;

export const NavItem = styled.div`
  line-height: 56px;
  padding: 0 15px;
  font-size: 17px;
  color: #333;
  &.left {
    float: left;
  }
  &.right {
    float: right;
    color: #969696;
  }
  &.active {
    color: #1e428a;
  }
`

export const SearchWrapper = styled.div`
  float: left;  /*这样才能让.zoom不会跑到最右边去 */
  position: relative;
  .zoom {
      position: absolute;
      right: 5px;
      bottom: 13px;
      width: 30px;
      line-height: 30px;
      text-align: center;
      &.focused {
        color: #fff;
        background-color: #777;
        border-radius: 15px; 
      } 
  }
`

export const NavSearch = styled.input.attrs({
placeholder: '搜索'
})`
  width: 160px;
  height: 38px;
  border-radius: 19px;
  background: #eee;
  padding:0 30px 0 20px;
  box-sizing: border-box;
  border: none;
  outline: none;
  margin-top: 9px;
  margin-left: 20px;
  font-size: 14px;
  color: #666;
  &::placeholder {  /*placeholder是伪元素，要用伪元素选择器 */
    color: #999;
  }
  &.focused {
    width: 240px
  }
  &.slide-enter {
    transition: all .2s ease-out;
  }
  &.slide-enter-active {
    width: 240px;
  }
  &.slide-exit {
    transition: all .2s ease-out;
  }
  &.slide-exit-active {
    width: 160px;
  }
`;

export const SearchInfo = styled.div` 
  position: absolute;
  left: 0;
  top: 56px;
  width: 240px;
  padding: 0 20px;
  box-shadow: 0 0 8px rgba(0,0,0, .2);
  background: #fff;
   /* height: 100px; 开始是为了显示出来这个框；后面SearchInfoList设置overflow已经触发了BFC，不用再设置高度，随内容调整高度*/
`;
export const SearchInfoTitle = styled.div`
  margin-top: 20px;
  margin-bottom: 15px;
  line-height: 20px;
  font-size: 14px;
  color: #969696;
`;
export const SearchInfoSwitch = styled.span`
  float: right;
  font-size: 13px;
  cursor: pointer;
  .spin {
    display: block; /* 块级元素才能transform*/
    float: left;
    font-size: 12px;
    margin-right: 2px;
    transition: all .2s ease-in-out;
    transform-origin: center center;
  }
`;
export const SearchInfoList = styled.div`
  overflow: hidden;
`;
export const SearchInfoItem = styled.a`
  display: block;
  float: left;
  line-height: 20px;
  font-size: 12px;
  padding: 0 5px;
  margin-right: 10px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 3px;
  color: #787878;
`;
export const Addition = styled.div` 
  position: absolute;  /*这个设置避免跑到第二行去，保持在同一行 */
  height: 56px;
  top: 0;
  right: 0;
`;
export const Button = styled.div`
  float: right;
  height: 38px;
  border: 1px solid #1e428a;
  border-radius: 19px;
  line-height: 38px;
  font-size: 14px;
  padding: 0 20px;
  margin-top: 9px;
  margin-right: 20px;
  &.writing {
    color: #fff;
    background-color: #1e428a;
  }
  .iconfont {
    margin-right: 3px;
  }
`;