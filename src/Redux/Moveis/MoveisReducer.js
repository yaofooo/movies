import {
  GET_MOVEIS_START,
  GET_MOVEIS_SUCCESS,
  GET_MOVEIS_FAILED,
  GET_MOVEI_BY_ID_FAILED,
  GET_MOVEI_BY_ID_START,
  GET_MOVEI_BY_ID_SUCCESS,
} from "./moveisType";

export const MoveisReducers = (
  initialState = {
    Moveis: [],
    movie: [],
    isLoading: false,
    error:'',
  },
  action
) => {
  switch (action.type) {
    case GET_MOVEIS_START:
      return {
        ...initialState,
        isLoading: true,
      };
    case GET_MOVEIS_SUCCESS:
      return {
          ...initialState,
        isLoading: false,
        Moveis: action.payload,
      };
    case GET_MOVEIS_FAILED:
      return {
          ...initialState,
        isLoading: false,
        error: action.payload,
      };

      case GET_MOVEI_BY_ID_START:
      return {
        ...initialState,
        movie: {
            isLoading: true,
        },
      };
    case GET_MOVEI_BY_ID_SUCCESS:
      return {
        
            movie: action.payload,
            isLoading: false
        
      };
    case GET_MOVEI_BY_ID_FAILED:
      return {
          movie:{
            isLoading: false,
            error: action.payload
          }
      };
      
    default:
        return initialState;
  }
};
