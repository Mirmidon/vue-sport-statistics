<template>
  <div class="about">
    <h1>This is Championship page</h1>
    <table>
      <tr>
        <th>Area</th>
        <th>name</th>
        <th>startDate</th>
        <th>endDate</th>
      </tr>
      <tr v-for="competition in competitions"  v-bind:key="competition.id">
        <td>{{competition.area?.name}}</td>
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
    const apiToken = 'a9f35907f94f4d8488920a7a119905c9';
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