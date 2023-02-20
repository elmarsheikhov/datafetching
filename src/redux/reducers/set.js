import { DARK_ET, PINK_ET, CYAN_ET } from "../types";

const default_state = "white";

const reducer = (state = default_state, action) => {
  switch (action.type) {
    case DARK_ET:
      return "black";
      break;
    case PINK_ET:
      return "pink";
      break;
    case CYAN_ET:
      return "cyan";
      break;
    default:
      return state;
      break;
  }
};

export default reducer;
