const initial_value = {
  activation: false,
  timer: true,
};

export default (state = initial_value, action) => {
  switch (action.type) {
    case 'screen_4changeActivation':
      return {...state, activation: action.payload};
    case 'screen_4timer':
      return {...state, timer: action.payload};
    default:
      return state;
  }
};
