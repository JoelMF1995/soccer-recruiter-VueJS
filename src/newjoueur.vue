
<template>
  <div id="newjoueur">
    <h1>Completez les informations du joueur</h1>

    <div>
      <label for="nom">Nom :</label>
      <input id="nom" type="text" v-model="joueur.nom" />
    </div>
    <div>
      <label for="prenom">Prénom :</label>
      <input id="prenom" type="text" v-model="joueur.prenom" />
    </div>
    <div>
      <label for="age">Age :</label>
      <input id="age" type="number" v-model="joueur.age" />
    </div>
    <div>
      <label for="poids">Poids :</label>
      <input id="poids" type="number" max=10 v-model="joueur.poids" />
    </div>
    <div>
      <label for="taille">Taille :</label>
      <input id="taille" type="number" v-model="joueur.taille" />
    </div>

    <h3>Critères</h3>
    <div>
      <label for="force">Force :</label>
      <input id="force" type="number" v-model="joueur.force" />
    </div>
    <div>
      <label for="endurance">Endurance :</label>
      <input type="number" id="endurance" v-model="joueur.endurance" />
    </div>
    <div>
      <label for="vision">Vision:</label>
      <input id="vision" type="number" v-model="joueur.vision" />
    </div>
    <div>
      <label for="club">club:</label>
      <select v-model="joueur.club">
        <option :selected="true">Choisi un club</option>
        <option
          v-for="club in clubList"
          v-bind:value="club.idClub"
          :key="club.idClub"
        >
          {{ club.nomClub }}
        </option>
      </select>
    </div><br>
    <button v-on:click="postJoueur()" type="button" class="btn add btn-primary">Créer</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "newplayer",
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
        club: "",
      },

      joueurList: [],
      clubList: [],
      url: "http://localhost:8000/api/joueur",
    };
  },
  methods: {
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

    postJoueur() {
      axios
        .post(this.url + "/add", this.joueur)
        .then((response) => {
          console.log(response.data);
          this.get_joueurList();
        })

        .catch((error) => {
          console.log(error);
        });
      this.$router.push({ name: "joueurList" });
    },
  },

  mounted() {
    this.get_clubList();
  },
};
</script>

<style >
#newjoueur {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  text-align: center;
  background-color: #e9e5e1;
  width: auto;
  height: 80vh;
  padding: 32px;
}
input,select{
  width: 30%;
  clear: both;
}
label,select {
    display: inline-block;
    width:100px;
    text-align: right;
}

@media screen and (max-width: 775px) {
  #newjoueur {
    height: auto;
  }
}

@media screen and (max-width: 530px) {
  input,select{
    width: 65%;
  }
  label,select {
    width:25%;
  }

  h1, .h1 {
    font-size: 2rem;
  }
}
</style>
