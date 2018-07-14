import {GET_ITEMS, DELETE_ITEM, ADD_ITEMS, ITEMS_LOADING} from '../actions/types'

const initialState = {
  items: [],
  loading: false
};

export default (state = initialState, action) => {
  switch(action.type) {
    case GET_ITEMS:
      return {
        ...state,
        items: action.items,
        loading: false
      };
    case DELETE_ITEM:
    console.log(action)
      return {
        ...state,
        items: state.items.filter(item => item._id !== action.id)
      } 
    case ADD_ITEMS:
      return {items: [...state.items, {...action.item}]};
    case ITEMS_LOADING:
      return {
        ...state,
        loading: true
      }  
    default:
      return state  
  }
}