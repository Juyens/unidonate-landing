document.addEventListener("DOMContentLoaded", () => {
  console.log("✅ script.js cargado correctamente");

  const sendBtn = document.getElementById("sendBtn");
  const userInput = document.getElementById("userInput");
  const chatBox = document.getElementById("chatBox");

  sendBtn.addEventListener("click", () => {
    const message = userInput.value.trim();
    if (message === "") return;

    // Mostrar mensaje del usuario
    const userMsg = document.createElement("div");
    userMsg.className = "message user";
    userMsg.textContent = message;
    chatBox.appendChild(userMsg);

    // Limpiar campo
    userInput.value = "";

    // Crear respuesta del bot
    const botMsg = document.createElement("div");
    botMsg.className = "message bot";

    if (message.toUpperCase() === "HOLA") {
      botMsg.innerHTML = `
        Hola Estimado, elija una opción:<br>
        1️⃣ Obtener enlaces de tutoriales<br>
        2️⃣ Cómo publicar un ítem<br>
        3️⃣ Cómo cambiar contraseña
      `;
    } else {
      botMsg.textContent = "❌ Lo siento, solo respondo a 'HOLA'.";
    }

    chatBox.appendChild(botMsg);
    chatBox.scrollTop = chatBox.scrollHeight;
  });
});
