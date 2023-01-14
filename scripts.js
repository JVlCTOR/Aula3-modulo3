function checkStatus()
{
    event.preventDefault();
    switch(status_compra.value) {
        case "pago":
        document.getElementById("resultado").innerHTML = "Pedido foi pago";
        break;
        case "recusado":
        document.getElementById("resultado").innerHTML = "Pedido foi recusado";
        break;
        case "pendente":
        document.getElementById("resultado").innerHTML = "Pedido pentende";
        break;
        case "disputa":
        document.getElementById("resultado").innerHTML = "Pedido em disputa";
        break;
        default:
        document.getElementById("resultado").innerHTML = "Ocorre um erro";
        break;
    }
}
function checkIdade()
{
    event.preventDefault()
    let resultado = document.getElementById("resultado");
    let idd = Number(idade.value)

    // idd < 10 ? resultado.innerHTML = "É criança" : resultado.innerHTML = "Não é criança"
    idd < 10 && (resultado.innerHTML = "É criança");
    (idd >=10 && idd < 18) && (resultado.innerHTML = "É juvenil");
    (idd >=18 && idd < 60) && (resultado.innerHTML = "É adultado");
    idd > 60 && (resultado.innerHTML = "É idoso");
}