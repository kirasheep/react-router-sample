import {FETCH_POSTS} from '../actions/index.js';
import _ from 'lodash';

export default function (state = {}, action){
    switch (action.type){
        case FETCH_POSTS:
            console.log(action.payload.data); //[post1, post2]
            //{1:post1}
            return _.mapKeys(action.payload.data, 'id');
        default:
            return state;

    }
}
