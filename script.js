//SELECTOR PARA COLETAR AS CLASSES
const pikachu = document.querySelector('.pikachu');
const pokeball = document.querySelector('.pokeball');
const ultraball = document.querySelector('.ultraball');
const masterball = document.querySelector('.masterball');
const gameOver = document.querySelector('.gameOver')
const jumpClass = document.querySelector('.jump')
const botaoReiniciar = document.querySelector('.reiniciar')


let score = 0.8;
//

const jump = () => {
    pikachu.classList.add('jump');
    
    setTimeout(() => {
        pikachu.classList.remove('jump');
    
    }, 500);
}


const loop = setInterval(() => {
    const scoree = setInterval(() => {
        score = score + 0.01;
        gameOver.innerHTML = 'Score: ' + Math.trunc(score);
        clearInterval(scoree);

    }, 1000);

    const pokeballPosition = pokeball.offsetLeft;
    const ultraballPosition = ultraball.offsetLeft;
    const masterballPosition = masterball.offsetLeft;
    const pikachuPosition = +window.getComputedStyle(pikachu).bottom.replace('px','');

    if ((pokeballPosition >= 510 && pikachuPosition < 20) || (ultraballPosition >= 510 && pikachuPosition < 20) || (masterballPosition >= 510 && pikachuPosition < 20)) {
        pokeball.style.animation = 'none';
        pokeball.style.left = `${pokeballPosition}px`;

        ultraball.style.animation = 'none';
        ultraball.style.left = `${ultraballPosition}px`;

        pikachu.style.animation = 'none';
        pikachu.style.bottom = `${pikachuPosition}px`

        pikachu.src = './Images/pikachuMorto2.png';
        pikachu.style.width = '85px';
        pikachu.style.marginBottom = ''
     
        botaoReiniciar.style.visibility = 'visible';

        clearInterval(loop);
    } else if(score > 10 && score < 30){
        pokeball.style.animation = 'none';
        pokeball.style.visibility = 'hidden';
        ultraball.style.animation = 'girar 1s linear infinite';
        ultraball.style.visibility = 'visible';
    } else if(score > 30){
        ultraball.style.animation = 'none';
        ultraball.style.visibility = 'hidden';
        masterball.style.animation = 'girar 0.7s linear infinite';
        masterball.style.visibility = 'visible';
    }
}, 10)

const reiniciarJogo = () =>{
    window.location.reload();
}

//CÓDIGO PARA DESATIVAR AS TECLAS ALT E F12
document.addEventListener("keydown", function(press) {

    if (press.key === "Alt" || press.key === "F12") {
        press.preventDefault(); 
    }
  });

document.addEventListener('keydown', jump);
