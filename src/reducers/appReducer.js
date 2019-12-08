

export const SET_USER = 'SET_USER';

const initialState = {
  user: {
    firstName: 'John',
    lastName: 'Doe',
    token: 'Basic xxxxx-xxxxx-xxxxx-xxxxx'
  }
};

export default function setUser (state = initialState, action){
  switch (action.type) {
    case SET_USER:
      /* Add implementation to set the user */
      let userFullName = state.user.firstName + state.user.lastName; 
      return state.concate(userFullName)
      
      

    default:
      return state;
  }
};
