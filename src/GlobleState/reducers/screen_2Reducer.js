const initial_value = {
  activation: true,
  email: '',
  password: '',
  name: '',
  error: 0,
  mobileno: 0,
  change: 'only',
};

export default (state = initial_value, action) => {
  switch (action.type) {
    case 'screen_2setName':
      return {...state, name: action.payload};
    case 'screen_2setPassword':
      return {...state, password: action.payload};
    case 'screen_2setError':
      return {...state, error: action.payload};
    case 'screen_2changeActivation':
      return {...state, activation: action.payload};
    case 'screen_2setEmail':
      return {...state, email: action.payload};
    case 'screen_2setChange':
      return {...state, change: action.payload};
    case 'screen_2setMobileNo':
      return {...state, mobileno: action.payload};
    default:
      return state;
  }
};
