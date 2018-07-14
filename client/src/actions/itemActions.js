import {
  GET_ITEMS,
  DELETE_ITEM,
  ADD_ITEMS,
  ITEMS_LOADING
} from './types'
import axios from 'axios'


export const getItems = () => dispatch => {
  dispatch(setItemsLoading());
  fetch('/api/items')
    .then(res => res.json())
    .then(data => {
      dispatch({
        type: GET_ITEMS,
        items: data
      })
    })
}

export const deleteItem = (id) => dispatch => {
  axios.delete(`/api/items/${id}`)
    .then(res => dispatch({
      type: DELETE_ITEM,
      id: id
    }))
}

export const addItem = (item) => dispatch => {
  axios.post('/api/items', item)
    .then(res =>  dispatch({
      type: ADD_ITEMS,
      item: res.data
    }))
   
}

export const setItemsLoading = () => ({
  type: ITEMS_LOADING
})