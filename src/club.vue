<template>
    <div>
        <span v-if="showInput==false">
        <div class="nom-equipe inline">{{club.nomClub}}</div>
        <div class="inline"><b-button v-on:click="showInput=true" variant="warning" >Modifier</b-button></div>
</span>
        <span v-if="showInput == true">
            <div>
                <div>
                    <label for="nom">Nom du club :</label>
                    <input type="text" v-model="club.nomClub">
                </div>

            </div>
            <button v-on:click="updateClub(club)">Sauver</button>
            <button v-on:click="deleteClub(club.idclub)">Supprimer</button>
            <button v-on:click="showInput=false">Annuler</button>
        </span>
    </div>
</template>

<script>
    export default{

        name: 'Club',
        props: ['club'],
        data () {
            return{
                showInput:false
            }
        },

        methods: {
            updateClub(club) {
                this.$emit('update_club_event',club);
                this.showInput = false;
            },

            deleteClub(id){
                this.$emit('delete_club_event',id);
            },
        }
    }
</script>

<style>

.type{
  background-color:rgb(168, 209, 197);
  width: 300px;
  margin: 5px auto;
  padding : 5px;
}

.inline {
  display: inline-block;
  width: 49%;
}

.nom-equipe {
  font-weight: bold;
  font-size: 18px;
  text-transform: uppercase;
}
</style>
