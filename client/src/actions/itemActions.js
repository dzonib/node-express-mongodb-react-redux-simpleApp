import {
  GET_ITEMS,
  DELETE_ITEM,
  ADD_ITEMS
} from './types'
import uuid from 'uuid'

export const getItems = () => {
  return {
    type: GET_ITEMS
  }
}

export const deleteItem = (id) => {
  return {
    type: DELETE_ITEM,
    id: id
  }
}

export const addItem = ({name = ''}) => ({
  type: ADD_ITEMS,
  item: {
    id: uuid(),
    name
  }
})