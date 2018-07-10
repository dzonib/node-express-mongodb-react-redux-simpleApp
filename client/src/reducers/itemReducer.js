import uuid from 'uuid';
import {GET_ITEMS, DELETE_ITEMS, ADD_ITEMS} from '../actions/types'

const initialState = {
  items: [
    {id: uuid(), name: 'Eier'},
    {id: uuid(), name: 'Milch'},
    {id: uuid(), name: 'Flaish'},
    {id: uuid(), name: 'Wasser'},
  ]
};

export default (state = initialState, action) => {
  switch(action.type) {
    case GET_ITEMS:
      return {
        ...state
      };
    default:
      return state  
  }
}