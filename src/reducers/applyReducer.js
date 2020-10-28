import applyService from '../services/applies'



const applyReducer = (state = [], action) => {
  switch (action.type) {
    case 'NEW_APPLY':
      return [...state, action.data]
    case 'INIT_APPLIES':
      return action.data
    default:
      return state
  }
}

export const createApply = (content) => {


  return async dispatch => {
    const newAPPLY = await applyService.create(content)
    dispatch({
      type: 'NEW_APPLY',
      data: newAPPLY
    })
  }
}


export const initializeApplies = () => {
  return async dispatch => {
    const applies = await applyService.getAll()

    dispatch({
      type: 'INIT_APPLIES',
      data: applies
    })
  }
}

export default applyReducer