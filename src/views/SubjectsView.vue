<template>
  <!--<h1>myohohoho!</h1>-->
  <v-app>
    <v-container grid-list-md>
      <v-row class="text-center">
        <v-col class="ma-4 pa-2">
          <h1 style="color:#384FFE">
            MATERIAS INSCRITAS
          </h1>
        </v-col>
      </v-row>
      <v-layout row wrap>
        <v-flex v-for="credit in subjects" :key="credit.title" xs8 md style="margin-left:auto;margin-right:auto">
            <v-card class="rounded-xl">
              <v-card-title ><h3 style="color:#384FFE">{{ credit.title }}</h3></v-card-title>
              <v-card-text><h2 style="color:#787C9D">{{ credit.professor }}</h2></v-card-text>
              <v-card-actions>
                <v-btn text class="ml-auto" @click="dialog = true"><h3 style="color:#384FFE">Ver Detalles</h3></v-btn>
              </v-card-actions>
            </v-card>

        </v-flex>
      </v-layout>

      <!-- dialog -->

      <v-dialog v-model="dialog" height="3000" width="500">
        <v-card class="rounded-xl">
          <v-card-title><h2 class="pa-6" style="color:#384FFE;margin-left: auto;margin-right: auto">
            <br>Título de la materia</h2></v-card-title>
          <v-card-text><h2 style="color:#787C9D;margin-left: 40px;margin-right: auto"><br><br>Profesor: Cristiano Ronaldo<br><br>
          Salón: La Congeladora<br><br>Días: Lunes, Miércoles & Viernes<br><br>Horario: 7:00 - 9:00<br></h2></v-card-text>
          <v-card-actions>
            <v-btn text class="ml-auto" @click="dialog = false" style="margin-right: 20px"><h1 style="color:#384FFE">CERRAR</h1></v-btn>
          </v-card-actions>
          <br>
          <br>
        </v-card>
      </v-dialog>

      <!-- dialog -->

    </v-container>
  </v-app>
</template>

<script>
export default{
  data(){
    return{
      dialog: false,
      subjects: [
        { title: 'Título de la materia', professor: 'Cristiano Ronaldo', room: 'La Congeladora',
          days: 'Lunes, Miércoles & Viernes', time: '7:00 - 9:00'},
        { title: 'Título de la materia', professor: 'Cristiano Ronaldo', room: 'La Congeladora',
          days: 'Lunes, Miércoles & Viernes', time: '7:00 - 9:00'},
        { title: 'Título de la materia', professor: 'Cristiano Ronaldo', room: 'La Congeladora',
          days: 'Lunes, Miércoles & Viernes', time: '7:00 - 9:00'},
        { title: 'Título de la materia', professor: 'Cristiano Ronaldo', room: 'La Congeladora',
          days: 'Lunes, Miércoles & Viernes', time: '7:00 - 9:00'},
        { title: 'Título de la materia', professor: 'Cristiano Ronaldo', room: 'La Congeladora',
          days: 'Lunes, Miércoles & Viernes', time: '7:00 - 9:00'}
      ]
    }
  }
}

</script>
