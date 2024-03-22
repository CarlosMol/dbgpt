<template>
    <v-container mt-5>
        <v-row justify="center">
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
            chatLog: [],
            newMessage: "",
            loading: false,
        };
    },
    methods: {
        async sendMessage() {
            try {
                this.loading = true;
                let result = await ChatService.create({ message: this.newMessage });
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

<style>
/* Add any custom styling here */
</style>