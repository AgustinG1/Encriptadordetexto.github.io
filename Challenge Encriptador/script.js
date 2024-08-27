// Reglas de encriptación y desencriptación
const reglas = {
    e: "enter",
    i: "imes",
    a: "ai",
    o: "ober",
    u: "ufat"
};

// Función de encriptación
function encriptar(texto) {
    return texto.split('').map(char => {
        return reglas[char] || char;
    }).join('');
}

// Función de desencriptación
function desencriptar(texto) {
    let resultado = texto;
    for (let [letra, clave] of Object.entries(reglas)) {
        const regex = new RegExp(clave, 'g');
        resultado = resultado.replace(regex, letra);
    }
    return resultado;
}

// Eventos de los botones
document.getElementById("btnEncriptar").addEventListener("click", function() {
    const texto = document.getElementById("inputTexto").value;
    const resultado = encriptar(texto);
    document.getElementById("outputTexto").value = resultado;
});

document.getElementById("btnDesencriptar").addEventListener("click", function() {
    const texto = document.getElementById("inputTexto").value;
    const resultado = desencriptar(texto);
    document.getElementById("outputTexto").value = resultado;
});

document.getElementById("btnCopiar").addEventListener("click", function() {
    const texto = document.getElementById("outputTexto");
    texto.select();
    document.execCommand("copy");
});
