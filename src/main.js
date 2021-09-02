import axios from 'axios';
import {
  createApp,
} from 'vue';
import App from './App.vue';
import router from './router';

createApp(App).use(router).mount('#app');

// 'X-API-KEY': 'a9f35907f94f4d8488920a7a119905c9'
//const axios = require('axios').default;

const apiUrlCompetitions = 'http://api.football-data.org/v2/competitions';
const apiToken = 'a9f35907f94f4d8488920a7a119905c9';

axios
  .get(`${apiUrlCompetitions}`, {
    headers: {
      'X-Auth-Token': `${apiToken}`,
    },
  })
  .then(response => {
    console.log(response);
  })