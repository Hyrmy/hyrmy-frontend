import eventService from '../services/events'



const eventReducer = (state = [], action) => {
  switch (action.type) {
    case 'NEW_EVENT':
      return [...state, action.data]
    case 'REMOVE_EVENT':
      const removeId = action.data.id
      const newEVENTs = state.filter(e => {
        return e.id !== removeId;
      });
      return newEVENTs

    case 'INIT_EVENTS':
      return action.data
    default:
      return state
  }
}

export const createEvent = (content, user) => {
  console.log(content)
  console.log(user)

  return async dispatch => {
    const newEVENT = await eventService.create(content)
    console.log(newEVENT)
    dispatch({
      type: 'NEW_EVENT',
      data: newEVENT
    })
  }
}


export const removeEvent = (id) => {
  return async dispatch => {
    await eventService.remove(id)
    dispatch({
      type: 'REMOVE_EVENT',
      data: { id }
    })
  }
}

export const initializeEvents = () => {
  return async dispatch => {
    const events = await eventService.getAll()

    dispatch({
      type: 'INIT_EVENTS',
      data: events
    })
  }
}

export default eventReducer