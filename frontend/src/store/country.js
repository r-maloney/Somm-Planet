const SET_COUNTRIES = "countries/SET_COUNTRIES";

const setCountries = (payload) => ({
  type: SET_COUNTRIES,
  payload,
});

export const getCountries = () => async (dispatch) => {
  const res = await fetch("/api/countries");
  if (res.ok) {
    const countries = await res.json();
    dispatch(setCountries(countries));
  }
};

const initState = {
  1: { id: 1, name: "United States" },
  2: { id: 2, name: "France" },
};

const countryReducer = (state = initState, action) => {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case SET_COUNTRIES:
      for (let country of action.payload) {
        newState[country.id] = country;
      }
      return newState;
    default:
      return state;
  }
};

export default countryReducer;
