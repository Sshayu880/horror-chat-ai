async function sendMessage() {
    let inputField = document.getElementById("user-input");
    let message = inputField.value.trim();
    if (!message) return;

    let chatBox = document.getElementById("chat-box");
    chatBox.innerHTML += `<p><strong>Вы:</strong> ${message}</p>`;
    inputField.value = "";

    try {
        let response = await fetch("http://localhost:5000/chat", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message })
        });
        let data = await response.json();
        chatBox.innerHTML += `<p><strong>AI:</strong> ${data.reply}</p>`;
    } catch (error) {
        chatBox.innerHTML += `<p><strong>Ошибка:</strong> Сервер недоступен</p>`;
    }
}
