import * as constants from './constants';
import { fromJS } from 'immutable';
import axios from 'axios';
//不需要导出的统一放到上面
const changeList = (data) => ({
    type: constants.CHANGE_LIST,
    data: fromJS(data), //这样保证创建和接收到的list都是immutable的，才能一致
    totalPage: Math.ceil(data.length/10)
})

export const searchFocus = () => ({
    type: constants.SEARCH_FOCUS
});

export const searchBlur = () => ({
    type: constants.SEARCH_BLUR
});

export const mouseEnter = () => ({
    type: constants.MOUSE_ENTER
});

export const mouseLeave = () => ({
    type: constants.MOUSE_LEAVE
});

export const changePage = (page) => ({
    type: constants.CHANGE_PAGE,
    page
});

export const getList = () => {
    return (dispatch) => {
        axios.get('/api/headerList.json').then((res) => {
            const data = res.data;
            dispatch(changeList(data.data));
        }).catch(() => {
            console.log('error');
        });
    }
}