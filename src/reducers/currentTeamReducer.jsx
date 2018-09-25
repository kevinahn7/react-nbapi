import constants from './../constants';
const { initialState, types } = constants;

const currentTeamReducer = ( state = initialState, action ) => {
  let newTeam;
  switch(action.type) {
    case types.REQUEST_TEAM_ID:
      // newTeam = {
      //   isFetching: true,
      //
      // }
      return state;
    case types.RECEIVE_ROSTER:
      //do stuff to recieve roster
    default:
      return state;
  }
}

export default currentTeamReducer;
