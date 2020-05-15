export const screen_1ChangeActivation = activation => {
  return {
    type: 'screen_1changeActivation',
    payload: activation,
  };
};

export const screen_1PriceChange = price => {
  return {
    type: 'screen_1priceChange',
    payload: price,
  };
};

export const screen_1ShowPriceChange = change => {
  return {
    type: 'screen_1showPriceChange',
    payload: change,
  };
};

export const screen_1SetMecha = mecha => {
  return {
    type: 'screen_1setMecha',
    payload: mecha,
  };
};

export const screen_1SetCust = cust => {
  return {
    type: 'screen_1setCust',
    payload: cust,
  };
};
