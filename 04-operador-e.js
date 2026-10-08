console.log("\n=== 4. Operador AND (&&) ===");

function enviarNotificacao(nome) {
  console.log(`Notificacao enviada para ${nome}.`);
}

const usuarioAtivo = true;
const usuarioInativo = false;


usuarioAtivo && enviarNotificacao("Davi");

usuarioInativo && enviarNotificacao("Elisa");

if (usuarioAtivo) {
  console.log("Com IF: mais claro para fluxos maiores de codigo.");
}
