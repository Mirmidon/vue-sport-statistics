const championship = { template: '<a class="header__item" href="#">Чемпионат</a>' };
const teams = { template: '<a class="header__item" href="#">Команды</a>' };
const calendar = { template: '<a class="header__item" href="#">Календарь</a>' };
const other = { template: '<a class="header__item" href="#"></a>' };

const routes = [
  { path: '/championship', component: championship },
  { path: '/teams', component: teams },
  { path: '/calendar', component: calendar },
  { path: '/other', component: other },
];

const router = new VueRouter({
  routes,
});

const app = new Vue({
  router,
}).$mount('#app');
