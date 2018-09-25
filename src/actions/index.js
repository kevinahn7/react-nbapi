import * as types from './../constants/ActionTypes';

export function fetchTeamId(teamName) {
  return function (dispatch) {
    dispatch(requestTeamId(teamName))
    return fetch('https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=' + teamName)
      .then(
        response => response.json(),
        error => console.log('An error occured.', error)
      ).then(function(json) {
        let teamId = json.teamId; //is this how the team id is reached?
        dispatch(receieveRoster(teamId));
      })
  }
}

export const requestTeamId = (teamName) => ({
  type: types.REQUEST_TEAM_ID,
  teamName
});

export const receieveRoster = (teamId) => ({
  type: types.RECEIVE_ROSTER,
  teamid
})
