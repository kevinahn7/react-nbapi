import constants from './../constants';
const { initialState, types } = constants;

const currentTeamReducer = ( state = initialState, action ) => {
  switch(action.type) {
    case types.REQUEST_TEAM_ID:
      let newState = Object.assign({}, state, {
        isFetching: true,
        teamName: action.teamName
      })
      return newState;
    default:
      return state;
  }
}

export default currentTeamReducer;
