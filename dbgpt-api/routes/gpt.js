const express = require('express');
const router = express.Router();
const OpenAI = require("openai");

// Inicialización de la API de OpenAI 
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

router.post("/converse", async (req, res) => {
    try {
        const userMessage = req.body.message;

        // Crear una conversación con el mensaje del usuario
        const conversation = [
            { role: "user", content: userMessage }
        ];

        // Llamar a la API de OpenAI para completar el mensaje
        const completion = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            assistant: "asst_vUHE2MH3uu2StNOWctae3s8E", // Especifica el ID del asistente
            messages: conversation,
            temperature: 0.9, // La temperatura controla la aleatoriedad de las respuestas generadas
            max_tokens: 150, //  limita la longitud máxima de la respuesta generada
            top_p: 1, //  controla la probabilidad acumulativa de las palabras generadas
            frequency_penalty: 0, //  ajusta la penalización por frecuencia de palabras repetidas
            presence_penalty: 0.6,
            stop: [" Human:", " AI:"]
        });

        // Enviar la respuesta al cliente
        res.send(completion.choices[0].message.content);
    } catch (error) {
        console.error("Error al procesar la solicitud:", error);
        res.status(500).send("Error interno del servidor");
    }
});

router.post("/chat", async (req, res) => {
    const assistantIdToUse = req.body.assistant || "asst_vUHE2MH3uu2StNOWctae3s8E";
    const userMessage = req.body.message;
    const myThread = await openai.beta.threads.create();

    try {
        const myThreadMessage = await openai.beta.threads.messages.create(
            myThread.id,
            {
              role: "user",
              content: userMessage,
            }
          );
          console.log("This is the message object: ", myThreadMessage, "\n");
          const myRun = await openai.beta.threads.runs.create(
            myThread.id,
            {
              assistant_id: assistantIdToUse,
              instructions: "Eres un asistente diseñado para ayudar con diferentes tareas en la administracion, optimizacion y manejo de operaciones en bases de datos",
              tools: [
                { type: "code_interpreter" }, 
                { type: "retrieval" },
              ],
            }
          );
          console.log("This is the run object: ", myRun, "\n");
          const retrieveRun = async () => {
            let keepRetrievingRun;
      
            while (myRun.status !== "completed") {
              keepRetrievingRun = await openai.beta.threads.runs.retrieve(
                myThread.id,
                myRun.id
              );
      
              console.log(`Run status: ${keepRetrievingRun.status}`);
      
              if (keepRetrievingRun.status === "completed") {
                console.log("\n");
                break;
              }
            }
          };
          retrieveRun();

          const waitForAssistantMessage = async () => {
            await retrieveRun();
      
            const allMessages = await openai.beta.threads.messages.list(
                myThread.id
            );
      
            // Send the response back to the front end
            res.status(200).json({
              response: allMessages.data[0].content[0].text.value,
            });
            console.log(
              "------------------------------------------------------------ \n"
            );
      
            console.log("User: ", myThreadMessage.content[0].text.value);
            console.log("Assistant: ", allMessages.data[0].content[0].text.value);
          };
          waitForAssistantMessage();
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: "Internal server error" });
    }
})


module.exports = router;
