var altura = 0;
var largura = 0;

function ajustaPalco(){
    altura = window.innerHeight;
    largura = window.innerWidth;
    console.log(largura,altura);
}
ajustaPalco();

function posRandomica(){
var posx = Math.floor(Math.random()*largura)-90;
var posy = Math.floor(Math.random()*altura)-90;

posx = posx < 0?0:posx;
posy = posy < 0?0:posy;

console.log(posx,posy);

var mosca = document.createElement('img');
mosca.src= 'Jogo JS - Imagens/mosca.png';
document.body.appendChild(mosca);
mosca.className = 'mosca01';
mosca.style.left = posx + 'px';
mosca.style.top = posy + 'px';
mosca.style.position = 'absolute';

}