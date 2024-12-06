const botOpen = document.getElementById("botOpen");
const chatContainer = document.getElementById("chatContainer");
const chatMessages = document.getElementById("chatMessages");
const userInput = document.getElementById("userInput");
const sendMessage = document.getElementById("sendMessage");

botOpen.addEventListener("click", () => {
    chatContainer.classList.toggle("d-none");
});

sendMessage.addEventListener("click", () => {
    const userMessage = userInput.value.trim();
    if (userMessage) {
        const userBubble = `<p><strong>Tú:</strong> ${userMessage}</p>`;
        chatMessages.innerHTML += userBubble;

        setTimeout(() => {
            const botResponde = `<p><strong>Bot:</strong> ¡Gracias por contactarnos! ¿En qué puedo ayudarte?</p>`;
            chatMessages.innerHTML += botResponde;
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }, 1000);

        userInput.value = "";
    }
}); 