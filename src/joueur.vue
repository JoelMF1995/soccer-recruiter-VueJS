<template>
  <div class="joueur">
    <span v-if="showInput == false">
      <div class="container">
        <div class="row align-items-start">
          <div class="col-sm">
            <b-card id="bcard">

              <b-card-body>
                <b-card-title>
                  <h4 class="mb-0">{{ joueur.nom }} {{ joueur.prenom}}, {{ joueur.age}} ans</h4>

                  </b-card-title>
                <b-card-sub-title class="mb-2">
                  Poids et taille : {{ joueur.poids }} kg, {{joueur.taille}} cm</b-card-sub-title>
                <b-card-text>
                  <br>
                  <br>
                  Force : {{ joueur.force }}
                  Endurance : {{ joueur.endurance }} 
                  Vision de jeu :{{ joueur.vision }}
                </b-card-text>
              </b-card-body>
              <b-card-body>
                <b-button v-on:click="showInput=true" variant="warning" >Modifier</b-button>
              </b-card-body>
            </b-card>
            <br />
          </div>
        </div>
      </div>
    </span>
    <span v-if="showInput == true">
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
        <input id="poids" type="number" v-model="joueur.poids" />
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
        <label for="club">Club :</label>
        <select v-model="selected">
          <option :selected=true >Choisi un club</option>
          <option v-for="club in clubList" v-bind:value="club.idClub" :key="club.idClub">
            {{ club.nomClub }}
          </option>
        </select>
      </div>

      

      <button v-on:click="updateJoueur(joueur)">Sauver</button>
      <button v-on:click="deleteJoueur(joueur.idjoueur)">Supprimer</button>
      <button v-on:click="showInput = false">Annuler</button>
    </span>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Joueur",
  props: ["joueur"],
  data() {
    return {
      selected: "Choisi un club",
      clubList: [],
      showInput: false,
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

    updateJoueur(joueur) {
      this.$emit("event_update", joueur);
      this.showInput = false;
    },

    deleteJoueur(id) {
      this.$emit("event_delete", id);
    },
  },
  mounted() {
    this.get_clubList();
  },
};
</script>

<style>
.joueur {
  background-color: lightgrey;
  width: 500px;
  margin: 5px auto;
  padding: 5px;
}
p {
  text-align: center;
  margin-right: 4px;
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

.bcard {
  padding: 15%;
  margin: 15%;
}
</style>