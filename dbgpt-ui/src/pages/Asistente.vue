<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col cols="12" sm="8" md="6">
        <v-card>
          <v-card-title class="text-center">Asistente</v-card-title>
          <v-card-text>
            <v-form ref="myForm">
              <v-row>
                <v-col cols="6">
                  <v-select
                    label="Tipo de consulta"
                    :items="options"
                    v-model="selectedOption"
                  ></v-select>
                </v-col>
                <v-col cols="6">
                  <v-file-input
                    label="Contexto"
                    v-model="selectedFile"
                    show-size
                    accept=".txt, .sql"
                  ></v-file-input>
                </v-col>
              </v-row>
            </v-form>
          </v-card-text>
          <v-card-actions class="justify-end">
            <v-btn text @click="cancelForm">Cancelar</v-btn>
            <v-btn color="primary" @click="submitForm">Enviar</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      options: ["Opción 1", "Opción 2", "Opción 3"],
      selectedOption: "",
      selectedFile: null,
    };
  },
  methods: {
    cancelForm() {
      // Implement cancel logic here
    },
    submitForm() {
      // Implement submit logic here
    },
  },
};
</script>