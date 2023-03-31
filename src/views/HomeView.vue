<template>
  <v-app>
    <v-container>
      <v-row class="text-center">
        <v-col class="ma-4 pa-2">
          <h1 style="color:#384FFE">
            INFORMACIÓN DEL ALUMNO
          </h1>

          <v-avatar class="ma-6 pa-4" height="180" width="210">
            <v-img
                src="../assets/juan-escutia2.jpeg"
                alt="Foto de perfil"
            ></v-img>
          </v-avatar>
        </v-col>
      </v-row>
      <div class="pa-6">
        <v-row justify="center">
          <v-col cols="2" style="margin-left:auto;margin-right:auto">
            <h2 style="color:#384FFE;text-align: start">Nombre Completo</h2>
          </v-col>
          <v-col cols="2" style="margin-left:auto;margin-right:auto">
            <h2 style="color:#384FFE;text-align: start">Matrícula</h2>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="2" style="margin-left:auto;margin-right:auto">
            <h2 style="color:#787C9D;text-align: start">Juan Escutia</h2>
          </v-col>
          <v-col cols="2" style="margin-left:auto;margin-right:auto">
            <h2 style="color:#787C9D;text-align: start">A01361234</h2>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="2" style="margin-left:auto;margin-right:auto">
            <h2 style="color:#384FFE;text-align: start">Correo Institucional</h2>
          </v-col>
          <v-col cols="2" style="margin-left:auto;margin-right:auto">
            <h2 style="color:#384FFE;text-align: start">Carrera</h2>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="2" style="margin-left:auto;margin-right:auto">
            <h2 style="color:#787C9D;text-align: start">A01361234@tec.mx</h2>
          </v-col>
          <v-col cols="2" style="margin-left:auto;margin-right:auto">
            <h2 style="color:#787C9D;text-align: start">ISC</h2>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="2" style="margin-left:auto;margin-right:auto">
            <h2 style="color:#384FFE;text-align: start">Correo Personal</h2>
          </v-col>
          <v-col cols="2" style="margin-left:auto;margin-right:auto">
            <h2 style="color:#FFFFFF;text-align: start"><br></h2>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="2" style="margin-left:auto;margin-right:auto">
            <h2 style="color:#787C9D;text-align: start">murioporlapatria@gmail.com</h2>
          </v-col>
          <v-col cols="2" style="margin-left:auto;margin-right:auto">
            <h2 style="color:#FFFFFF;text-align: start"><br></h2>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: 'HelloWorld',

  data: () => ({
    ecosystem: [
      {
        text: 'vuetify-loader',
        href: 'https://github.com/vuetifyjs/vuetify-loader',
      },
      {
        text: 'github',
        href: 'https://github.com/vuetifyjs/vuetify',
      },
      {
        text: 'awesome-vuetify',
        href: 'https://github.com/vuetifyjs/awesome-vuetify',
      },
    ],
    importantLinks: [
      {
        text: 'Documentation',
        href: 'https://vuetifyjs.com',
      },
      {
        text: 'Chat',
        href: 'https://community.vuetifyjs.com',
      },
      {
        text: 'Made with Vuetify',
        href: 'https://madewithvuejs.com/vuetify',
      },
      {
        text: 'Twitter',
        href: 'https://twitter.com/vuetifyjs',
      },
      {
        text: 'Articles',
        href: 'https://medium.com/vuetify',
      },
    ],
    whatsNext: [
      {
        text: 'Explore components',
        href: 'https://vuetifyjs.com/components/api-explorer',
      },
      {
        text: 'Select a layout',
        href: 'https://vuetifyjs.com/getting-started/pre-made-layouts',
      },
      {
        text: 'Frequently Asked Questions',
        href: 'https://vuetifyjs.com/getting-started/frequently-asked-questions',
      },
    ],
  }),
}
</script>