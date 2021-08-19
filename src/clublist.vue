
<template>
  <div id="clubList">
    <h1>Liste des club</h1>
    <br>
    <div class="table-club" v-for="club in clubList" v-bind:key="club.idclub">

      <Club
        v-bind:club="club"
        @update_club_event="updateClub"
        @delete_club_event="deleteClub"
      ></Club>
    <br>
    </div>
    <br>
    <h3> Créer un nouveau club</h3>
    <div>
      <label for="nom">Nom du club :</label>
      <input type="text" v-model="club.nomClub" />
      <b-button v-on:click="saveClub()" variant="primary" class="add">Créer club !</b-button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Club from "./club.vue";
export default {
  components: { Club },
  name: "clubList",
  data() {
    return {
      club: {
        idclub: 0,
        nomClub: "",
      },

      clubList: [],
      url: "http://localhost:8000/api/club",
    };
  },
  methods: {
    get_clubList() {
      axios
        .get(this.url)
        .then((response) => {
          this.clubList = response.data;
          console.log(this.clubList);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    saveClub() {
      axios
        .post(this.url + "/add", this.club)
        .then((response) => {
          console.log(response.data);
          this.get_clubList();
        })

        .catch((error) => {
          console.log(error);
        });
    },
    updateClub(type) {
      axios
        .put(this.url + "/update/" + type.idclub, nom)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    deleteClub(id) {
      axios
        .delete(this.url + "/delete/" + id)
        .then((response) => {
          this.get_clubList();
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },

  mounted() {
    this.get_clubList();
  },
};
</script>

<style >
#clubList {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  background-color: #e9e5e1;
  padding: 32px;
  height: 100vh;
}
input {
  width: 30%;
}
.table-club {
  max-width: 600px;
  margin: 0 auto;
}

@media screen and (max-width: 775px) {
  #clubList {
    height: auto;
  }
}
</style>
