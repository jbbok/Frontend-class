let initailState = {
  popularMovie: {},
  topRatedMovie: {},
  upComingMovie: {},
};

const movieReducer = (state = initailState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "GET_MOVIES_SUCCESS":
      return {
        ...state,
        popularMovie: payload.popularMovie,
        topRatedMovie: payload.topRatedMovie,
        upComingMovie: payload.upComingMovie,
      };

    default:
      return { ...state };
  }
};

export default movieReducer;
