<template>
    <v-app>
      <router-view />
      <SnackbarComponent />
    </v-app>
</template>

<script>
import {mapActions} from 'vuex'
import SnackbarComponent from '@/components/SnackbarComponent'

export default {
  components: {SnackbarComponent},
  async created() {
    await this.getCharacters()
    await this.getLocations()
    await this.getEpisodes()
    console.log(process.env);
  },
  methods: {
    ...mapActions({
      getCharacters: 'characterStore/getCharacters',
      getLocations: 'locationStore/getLocations',
      getEpisodes: 'episodeStore/getEpisodes'
    })
  }
}
</script>

<style>
.link{
  color: black !important;
  text-decoration: none!important;
}

.link:hover{
  color: orange !important;
}

</style>

