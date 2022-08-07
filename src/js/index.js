const tbnAvancar = document.getElementById("btn-avancar");
const tbnVoltar = document.getElementById("btn-voltar");
const cartoes = document.querySelectorAll(".cartao");
let cartaoAtual = 0;

function esconderCartaoSelecionado(){
   const cartaoSelecionado = document.querySelector(".selecionado");
cartaoSelecionado.classList.remove("selecionado");
}

function mostrarCartao(indicecartao){
cartoes[indicecartao].classList.add("selecionado");
} 
tbnAvancar.addEventListener('click', function(){
if(cartaoAtual === cartoes.length - 1) return;


esconderCartaoSelecionado();

  cartaoAtual++;
  mostrarCartao(cartaoAtual);;
 
});
tbnVoltar.addEventListener('click', function(){

if(cartaoAtual === 0) return; 

esconderCartaoSelecionado();

  cartaoAtual--;
  mostrarCartao(cartaoAtual);

});