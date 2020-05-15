const initial_value = {
  activation: false,
  pricechange: 0,
  price: 0,
  mecha: [],
  cust: [],
};

export default (state = initial_value, action) => {
  switch (action.type) {
    case 'screen_1changeActivation':
      return {...state, activation: action.payload};
    case 'screen_1priceChange':
      return {...state, price: action.payload};
    case 'screen_1showPriceChange':
      return {...state, pricechange: action.payload};
    case 'screen_1setMecha':
      return {...state, mecha: action.payload};
    case 'screen_1setCust':
      return {...state, cust: action.payload};

    default:
      return state;
  }
};
