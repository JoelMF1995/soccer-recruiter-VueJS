 <template>
  <div id="app">
    <h1>      <img src="./assets/College-soccer-recruiting.png" style="width: 120px; height: 80px"/>
Soccer Recruiters</h1>
    <div id="nav">
      <b-nav>
        <router-link to="/"> Joueur </router-link>
        <router-link to="/newplayer"> Nouveau joueur </router-link>
        <router-link to="/clubs"> Liste des clubs </router-link>
      </b-nav>
    </div>

    <router-view />
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
  background-color: #cc6622; 
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
</style>
