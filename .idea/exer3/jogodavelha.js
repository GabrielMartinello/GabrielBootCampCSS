 let jogador = 0;
 const label_jogador = document.getElementById('jogador');
 const casas = document.getElementsByTagName('input');

 function play(id) {
    let element = document.getElementById(id);
    if(element.value != "") {
        return;
    }
    element.value = jogador;
    jogador= 1 - jogador;

    for (var i= 0;i< 9; i++) {
    }
 }


 function trocarJogador() {
     if (jogador=='X') {
         jogador = "O";
         label_jogador.innerText='O';
         label_jogador.style.color='#F00';
     }else {
         jogador='X';
         label_jogador.innerText='X';
         label_jogador.style.color='#F00';
     }

 }





