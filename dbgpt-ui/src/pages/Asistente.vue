<template>
  <v-container mt-5>
    <v-row justify="center" v-if="!submit">
      <v-col cols="12" sm="8" md="6">
        <v-card>
          <v-card-title class="text-center">Asistente</v-card-title>
          <v-card-text>
            <v-form ref="myForm">
              <v-row>
                <v-col cols="6">
                  <v-select label="Tipo de consulta" :items="options" v-model="selectedOption"></v-select>
                </v-col>
                <v-col cols="6">
                  <v-file-input label="Contexto" v-model="selectedFile" show-size accept=".txt, .sql"></v-file-input>
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
    <v-row justify="center" v-else>
      <v-col cols="12" sm="8" md="6">
        <v-card>
          <v-card-text style="overflow-y: auto; min-height: 200px; max-height: 600px;">
            <div v-for="message in chatLog" :key="message.id"
              :style="'text-align:' + message.align + ';margin-bottom:20px'">
              {{ message.text }}
            </div>
          </v-card-text>
          <v-progress-linear v-if="loading" indeterminate color="primary"></v-progress-linear>
          <v-divider v-else></v-divider>
          <v-card-actions>
            <v-textarea v-model="newMessage" label="Type your message" rows="1"></v-textarea>
            <v-btn icon @click="sendMessage">
              <v-icon>mdi-send</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ChatService from "@/api/ChatService.js"
export default {
  data() {
    return {
      options: [
        { text: "Análisis de logs", value: "asst_fjtNTqYuTVpDD1pLjRsvXZgV" },
        { text: "Optimización de consultas", value: "asst_vUHE2MH3uu2StNOWctae3s8E" },
        { text: "Análisis de esquemas", value: "asst_TXOrkpl52pb6TXtVm5xjNlze" }],
      selectedOption: {},
      selectedFile: null,
      submit: false,
      chatLog: [],
      newMessage: "",
      loading: false,
    };
  },
  methods: {
    cancelForm() {
      this.selectedOption = {}
      this.selectedFile = null
    },
    submitForm() {
      if (this.selectedOption) {
        this.submit = true
      }
    },
    async sendMessage() {
      try {
        this.loading = true;
        let result = await ChatService.create({ message: this.newMessage, assistant: this.selectedOption });
        this.chatLog.push({ id: Date.now(), text: "User: " + this.newMessage, align: 'start' });
        this.chatLog.push({ id: Date.now() + 100, text: "DBGPT: " + result.data.response, align: 'start' })
        this.newMessage = "";
      } catch (error) {
        console.log(error)
      } finally {
        this.loading = false;
      }

    },
  },
};
</script>