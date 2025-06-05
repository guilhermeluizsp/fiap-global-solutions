// Solicita permissão ao usuário
function pedirPermissao() {
  if (Notification.permission !== "granted") {
    Notification.requestPermission();
  }
}

var icon = "../assets/img/logo.png";

// Envia a notificação
function enviarNotificacao() {
  if (Notification.permission === "granted") {
    new Notification("Enerlink", {
      body: "Suas Notificações Foram Ativadas!",
      icon: icon,
    });
  } else {
    pedirPermissao();
  }
}
