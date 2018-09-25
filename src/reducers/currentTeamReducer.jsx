import constants from './../constants';
const { initialState, types } = constants;

const currentTeamReducer = ( state = initialState, action ) => {
  let newState;
  switch(action.type) {
    case types.REQUEST_TEAM_ID:
        newState = Object.assign({}, state, {
        isFetching: true,
        teamName: action.teamName
      })
      return newState;
    case types.RECEIVE_ROSTER:
        newState = Object.assign({}, state, {
        isFetching: false,
        roster: action.roster
      });
      return newState;
    default:
      return state;
  }
}

export default currentTeamReducer;
