// Alerta ao enviar o formulário
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault(); // impede o envio real
    alert("Obrigado pela sua mensagem! Em breve entraremos em contato.");
    form.reset();
  });
});
