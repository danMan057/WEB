document.addEventListener("DOMContentLoaded", () => {
    const clientsSection = document.getElementById("clients");
    const loginForm = document.getElementById("login-form");

    loginForm.addEventListener("submit", (event) => {
        event.preventDefault();

        // Exemple senzill: Verifica si l'usuari és administrador
        const usuari = document.getElementById("usuari").value;
        const contrasenya = document.getElementById("contrasenya").value;

        if (usuari === "admin" && contrasenya === "admin123") {
            alert("Benvingut, administrador!");
            clientsSection.style.display = "block";
        } else {
            alert("Credencials incorrectes.");
        }
    });
});