 <template>
  <div id="app">
    <router-link to="/"> <img src="./assets/logo4.png" style="max-width: 75px; margin: 5px;"/> </router-link>
    <span class="brand">Soccer Recruiters</span>
    <div id="nav">
      <b-nav>
        <router-link to="/clubs"> Liste des clubs </router-link>
        <router-link to="/"> Liste des joueurs </router-link>
        <router-link to="/newplayer"> Nouveau joueur </router-link>
      </b-nav>
    </div>

    <router-view />
    <footer> ©2021 Joel Monteiro Fereira : Tous droits réservés </footer>
  </div>
</template>

<script>
import JoueurList from "./joueurlist";
import Clublist from "./clublist";
export default {
  name: "app",
  components: { JoueurList, Clublist },
  data() {
    return {};
  },
};
</script>

<style>
#nav{
  background-color:#201e20;;
}
#nav a {
  color: rgb(255, 255, 255);
  font-weight: bold;
  font-size: 30px;
  text-decoration: none;
  padding: 10px;
  margin: 5px;
}
#nav a.router-link-exact-active {
  color: rgb(201, 198, 19);
}

#app {
  text-align: center;
}
#nav {
  color: rgb(202, 138, 41);
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

.brand {
  font-weight: bold;
  font-size: 28px;
}

footer {
  background: #201e20;
  color: white;
}

@media screen and (max-width: 775px) {
  #nav a {
    font-size: 24px;
    padding: 6px;
    margin: 3px;
  }

  #newjoueur {
    height: auto;
  }
}

@media screen and (max-width: 556px) {
  #nav a {
    font-size: 18px;
    padding: 7px;
    margin: 5px;
  }
}

@media screen and (max-width: 490px) {
  #nav a {
    font-size: 16px;
    padding: 5px;
    margin: 2px auto;
  }
}
</style>
