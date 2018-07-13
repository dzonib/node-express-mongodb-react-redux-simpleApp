import uuid from 'uuid';
import {GET_ITEMS, DELETE_ITEM, ADD_ITEMS} from '../actions/types'

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
    case DELETE_ITEM:
    console.log(state)
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.id)
      } 
    case ADD_ITEMS:
      return {items: [...state.items, {...action.item}]}
    default:
      return state  
  }
}