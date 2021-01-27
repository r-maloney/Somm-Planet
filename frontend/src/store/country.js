const initState = {
  1: { id: 1, name: "United States" },
  2: { id: 2, name: "France" },
};

const countryReducer = (state = initState, action) => {
  // eslint-disable-next-line no-unused-vars
  const newState = Object.assign({}, state);
  switch (action.type) {
    default:
      return state;
  }
};

export default countryReducer;
