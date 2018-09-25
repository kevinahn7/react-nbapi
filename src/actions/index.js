import * as types from './../constants/ActionTypes';

export function fetchTeamId(teamName) {
  return function (dispatch) {
    // dispatch(requestTeamId(teamName))
    return fetch('https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=' + teamName)
      .then(
        response => response.json(),
        error => console.log('An error occured.', error)
      ).then(function(json) {
        let teamId = json.teams[0].idTeam;
        fetchRoster(teamId, dispatch);
        // dispatch(receieveRoster(teamId));
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

export function fetchRoster(teamId, dispatch) {
  return fetch('https://www.thesportsdb.com/api/v1/json/1/lookup_all_players.php?id=' + teamId)
    .then(
      response => response.json(),
      error => console.log('An error occured.', error)
    ).then(function(json) {
      let roster = json.player.map(player => ({
        name: player.strPlayer,
        position: player.strPosition,
        image: player.strThumb
      }));
    })
}
