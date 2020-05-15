const initial_value = {
  activation: false,
  _id: '5ebd1faa3f524d681a87bd57',
  change: 'all',
  change1: 'history',
};

export default (state = initial_value, action) => {
  switch (action.type) {
    case 'screen_3set_id':
      return {...state, _id: action.payload};
    case 'screen_3changeActivation':
      return {...state, activation: action.payload};
    case 'screen_3setChange':
      return {...state, change: action.payload};
    case 'screen_3setChange1':
      return {...state, change1: action.payload};
    default:
      return state;
  }
};
