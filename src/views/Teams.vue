<template>
  <div class="about">
    <h1>This is Teams page</h1>
    <input type="text" name="Teams" id="">
    <table>
      <tr>
        <th>Area</th>
        <th>ID</th>
        <th>name</th>
        <th>startDate</th>
        <th>endDate</th>
      </tr>
      <tr v-for="team in teams"  v-bind:key="team.id">
        <td>{{team.area?.name}}</td>
        <td>{{team.area?.id}}</td>
        <td>{{team.name}}</td>
        <td>{{team.currentSeason?.startDate}}</td>
        <td>{{team.currentSeason?.endDate}}</td>
      </tr>
    </table>
  </div>
</template>
 

<script>
import axios from 'axios';
export default {
  name: 'Teams',
  data() {
    return {
      teams: [],
    };
  },
  mounted() {
    const apiUrlTeams = 'http://api.football-data.org/v2/competitions/id/teams';
    const apiToken = 'dd045086dcdc4f00b0e16680f114a9d3';
    axios
      .get(`${apiUrlTeams}`, {
        headers: {
          'X-Auth-Token': `${apiToken}`,
        },
      })
      .then(response => {
        this.competitions = response.data.teams
      })
  }
}
 </script>
