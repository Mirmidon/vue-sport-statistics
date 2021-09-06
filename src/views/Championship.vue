<template>
  <div class="about">
    <h1>This is Championship page</h1>
    <table>
      <tr>
        <th>Area</th>
        <th>ID</th>
        <th>name</th>
        <th>startDate</th>
        <th>endDate</th>
      </tr>
      <tr v-for="competition in competitions"  v-bind:key="competition.id">
        <td>{{competition.area?.name}}</td>
        <td>{{competition.area?.id}}</td>
        <td>{{competition.name}}</td>
        <td>{{competition.currentSeason?.startDate}}</td>
        <td>{{competition.currentSeason?.endDate}}</td>
      </tr>
    </table>
  </div>
</template>
 

<script>
import axios from 'axios';
export default {
  name: 'Competitions',
  data() {
    return {
      competitions: [],
    };
  },
  mounted() {
    const apiUrlCompetitions = 'http://api.football-data.org/v2/competitions';
    const apiToken = 'dd045086dcdc4f00b0e16680f114a9d3';
    axios
      .get(`${apiUrlCompetitions}`, {
        headers: {
          'X-Auth-Token': `${apiToken}`,
        },
      })
      // .then(response => {
      //   console.log(response.data);
      // })
      .then(response => {
        this.competitions = response.data.competitions
      })
  }
}
 </script>