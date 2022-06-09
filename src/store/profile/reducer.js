import { TOGGLE_VISIBLE_PROFILE, UPDATE_PROFILE } from "./types";

const initialState = {
  firstName: "Name",
  lastName: "Surname",
  isVisibleProfile: false,
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_VISIBLE_PROFILE:
      return {
        ...state,
        isVisibleProfile: !state.isVisibleProfile,
      };
      case UPDATE_PROFILE:
        return {
          ...state,
          firstName: action.payload.name,
          lastName: action.payload.surname,
          
        };
    default:
      return state;
  }
};
