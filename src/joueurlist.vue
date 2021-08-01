  
<template>
  <div id="joueurlist">
    <h1>Liste des joueurs</h1>

    <div v-for="joueur in joueurList" v-bind:key="joueur.idjoueur">
      <Joueur v-bind:joueur="joueur" v-bind:clubList="clubList" @event_update="update" @event_delete="deleteJoueur"></Joueur>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Joueur from "./joueur.vue";
export default {
  components: { Joueur },
  name: "joueurList",
  data() {
    return {
      joueur: {
        nom: "",
        prenom: "",
        age: "",
        poids: "",
        taille: "",
        force: "",
        endurance: "",
        vision: "",
        club: ""
      },

      joueurList: [],
      clubList: [],
      url: "http://localhost:8000/api/joueur",
    };
  },
  methods: {
    get_joueurList() {
      axios
        .get(this.url)
        .then((response) => {
          this.joueurList = response.data;
          console.log(this.joueurList);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    get_clubList() {
      axios
        .get("http://localhost:8000/api/club")
        .then((response) => {
          this.clubList = response.data;
          console.log(this.clubList);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    update(joueur) {
      axios
        .put(this.url + "/update/" + joueur.idjoueur, joueur)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    deleteJoueur(id) {
      axios.delete(this.url + "/delete/" + id).then((response) => {
        this.get_joueurList();
        console.log(response.data);
      });
    },
  },

  mounted() {    
    this.get_joueurList();
    this.get_clubList();
  },
};
</script>

<style >
#joueurlist {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  background-color: rgb(241, 105, 105);
  padding: 100px;
  width: 100%;
}
</style>