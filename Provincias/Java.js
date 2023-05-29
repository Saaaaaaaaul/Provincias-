function mostrarFecha() {
    var fechaActual = new Date();
    var dia = fechaActual.getDate();
    var mes = fechaActual.getMonth() + 1;
    var anio = fechaActual.getFullYear();
    var fechaCompleta = dia + '/' + mes + '/' + anio;

    document.getElementById('fecha').textContent = fechaCompleta;
}

window.onload = mostrarFecha;