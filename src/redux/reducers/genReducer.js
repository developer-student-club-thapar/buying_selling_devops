const defaultState = {
  backendEndpoint: 'http://127.0.0.1:8000',
};

export default (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
