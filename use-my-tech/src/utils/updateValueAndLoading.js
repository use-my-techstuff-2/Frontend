const updateValueAndLoading = (stateKey) => {
  return function(state, action) {
    console.log(action, stateKey);
    return { ...state, [stateKey]: action.payload, loading: false };
  };
};

export default updateValueAndLoading;
