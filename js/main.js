var hamburguer = document.querySelector(".hamburguer");
hamburguer.addEventListener("click", function () {
    document.querySelector(".container").classList.toggle("show-menu");

});
document.querySelector("#qtde").addEventListener("change", atualizarPreco)
document.querySelector("#js").addEventListener("change", atualizarPreco)
document.querySelector("#layout-nao").addEventListener("change", atualizarPreco)
document.querySelector("#layout-sim").addEventListener("change", atualizarPreco)
document.querySelector("#prazo").addEventListener("change", function () {
    const prazo = document.querySelector("#prazo").value
    document.querySelector("label[for=prazo]").innerHTML = `Prazo: ${prazo} semanas`
    atualizarPreco()
})
function atualizarPreco() {
    const qtde = document.querySelector("#qtde").value
    const temJS = document.querySelector("#js").checked
    const prazo = document.querySelector("#prazo").value
    const lysim = document.querySelector("#layout-sim").checked
    const lynao = document.querySelector("#layout-nao").checked

    let preco = qtde * 100;
    if (temJS) {
        preco = preco + (preco * 10 / 100)
    }
    if (lysim) {
        preco += 500
    }
    let urge = 1 - prazo * 0.1;
    preco = preco + (preco * urge)
    document.querySelector("#preco").innerHTML = `R$ ${preco}`
}
