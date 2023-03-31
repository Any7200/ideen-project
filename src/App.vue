<template>
  <v-app>
    <v-app-bar
      app absolute
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <router-link
          to="/">
          <v-img
            alt="Tecnológico de Monterrey Logo"
            src="./assets/logoTec.png"
            width="140"
          />
        </router-link>
      </div>

      <v-spacer></v-spacer>

      <router-link
        style="text-decoration: none; color: inherit;"
        to="/">
        <v-btn text>
          Inicio
        </v-btn>
      </router-link>
      <router-link
        style="text-decoration: none; color: inherit;"
        to="/materias">
        <v-btn text>
          Lista de Materias
        </v-btn>
      </router-link>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
