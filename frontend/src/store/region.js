const SET_REGIONS = "regions/SET_REGIONS";

const setRegions = (payload) => ({
  type: SET_REGIONS,
  payload,
});

export const getRegions = (id) => async (dispatch) => {
  const res = await fetch(`/api/countries/${id}`);
  if (res.ok) {
    const regions = await res.json();
    console.log(regions);
    dispatch(setRegions(regions));
  }
};

const initState = {};

const regionReducer = (state = initState, action) => {
  const newState = Object.assign({}, state);
  console.log(newState);
  switch (action.type) {
    case SET_REGIONS:
      for (let region of action.payload) {
        newState[region.id] = region;
      }
      return newState;
    default:
      return state;
  }
};

export default regionReducer;
