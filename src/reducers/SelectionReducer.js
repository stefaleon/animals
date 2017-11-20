export default (state  =  null, action) => {
  switch (action.type) {
    case 'select_animal':
      return action.payload;
    default:
      return state;
  }
};
