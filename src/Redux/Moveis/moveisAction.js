import axios from "axios";
import {
  GET_MOVEIS_FAILED,
  GET_MOVEIS_START,
  GET_MOVEIS_SUCCESS,
  GET_MOVEI_BY_ID_FAILED,
  GET_MOVEI_BY_ID_START,
  GET_MOVEI_BY_ID_SUCCESS,
} from "./moveisType";

export const getMoveis = (page, lastMovies) => async (dispatch) => {
  dispatch({
    type: GET_MOVEIS_START,
  });

  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=dcf2d1463b5703e25fc8d86eb0fce187&page=${page}`
    );
    const data=[...lastMovies,...response.data.results]
    dispatch({
      type: GET_MOVEIS_SUCCESS,
      payload: data,
    });
  } catch (e) {
    dispatch({
      type: GET_MOVEIS_FAILED,
      payload: e?.response?.message,
    });
  }
};

export const getMovie = (id) => async (dispatch) => {
    dispatch({
      type: GET_MOVEI_BY_ID_START,
    });
  
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=dcf2d1463b5703e25fc8d86eb0fce187`
      );
      console.log(response)
      dispatch({
        type: GET_MOVEI_BY_ID_SUCCESS,
        payload: response.data
      });
    } catch (e) {
      dispatch({
        type: GET_MOVEI_BY_ID_FAILED,
        payload: e?.response?.message,
      });
    }
  };
  