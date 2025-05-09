function mostrarFormulario() {
    const tipo = document.getElementById("calculoSeleccionado").value;
    const form = document.getElementById("formulario");
    form.innerHTML = "";
    document.getElementById("resultado").innerHTML = "";

    if (tipo === "costo") {
        form.innerHTML = `
            <label>Radio (r): <input type="number" id="r" step="any"></label>
            <label>Altura (h): <input type="number" id="h" step="any"></label>
            <button type="button" onclick="calcularCosto()">Calcular</button>
        `;
    } else if (tipo === "area") {
        form.innerHTML = `
            <label>Ancho (b): <input type="number" id="b" step="any"></label>
            <label>Tirante (y): <input type="number" id="y" step="any"></label>
            <label>Talud (z): <input type="number" id="z" step="any"></label>
            <button type="button" onclick="calcularArea()">Calcular</button>
        `;
    } else if (tipo === "momento") {
        form.innerHTML = `
            <label>Fuerza (F): <input type="number" id="fuerza" step="any"></label>
            <label>Distancia (d): <input type="number" id="distancia" step="any"></label>
            <button type="button" onclick="calcularMomento()">Calcular</button>
        `;
    } else if (tipo === "esfuerzo") {
        form.innerHTML = `
            <label>Fuerza (F): <input type="number" id="f" step="any"></label>
            <label>Area (A): <input type="number" id="a" step="any"></label>
            <button type="button" onclick="calcularEsfuerzo()">Calcular</button>
        `;
    }
}

function calcularCosto() {
    const r = parseFloat(document.getElementById("r").value);
    const h = parseFloat(document.getElementById("h").value);
    const resultado = 2 * Math.PI * r * r * 2 + 2 * Math.PI * r * h * 3;
    document.getElementById("resultado").innerText = `Costo total: ${resultado.toFixed(2)} Pesos`;
}

function calcularArea() {
    const b = parseFloat(document.getElementById("b").value);
    const y = parseFloat(document.getElementById("y").value);
    const z = parseFloat(document.getElementById("z").value);
    const resultado = (b + y * z) * y;
    document.getElementById("resultado").innerText = `Area del canal: ${resultado.toFixed(2)} unidades2`;
}

function calcularMomento() {
    const F = parseFloat(document.getElementById("fuerza").value);
    const d = parseFloat(document.getElementById("distancia").value);
    const resultado = F * d;
    document.getElementById("resultado").innerText = `Momento flector: ${resultado.toFixed(2)} Nm`;
}

function calcularEsfuerzo() {
    const F = parseFloat(document.getElementById("f").value);
    const A = parseFloat(document.getElementById("a").value);
    const resultado = A !== 0 ? F / A : "Area no puede ser cero";
    document.getElementById("resultado").innerText = `Esfuerzo cortante: ${resultado}`;
}
