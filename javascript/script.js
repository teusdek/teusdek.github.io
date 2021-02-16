$("#inputcpf").mask("000.000.000-00")
$('#inputcep').mask('00000-000');
$('#inputtelefone').mask('(00) 0000-0000');
$('#inputcelular').mask('(00) 0000-0000');
function validar(params) {
    alert("salvo com suecesso")
}
function mobiMenu(params) {
    let menu = document.getElementById("menu")
    if (menu.style.display == 'none') {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
}