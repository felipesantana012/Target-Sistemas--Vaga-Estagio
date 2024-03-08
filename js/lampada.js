let lampadaDesligada = "/estagio/img/lampadaDesligada.jpg";
let lampadaLigada = "/estagio/img/lampadaLigada.jpg";


function acendeApaga() {
    let lampada = document.getElementById("lampada");
    let interruptor01 = document.getElementById("interruptor01");
    if(interruptor01.checked){
        lampada.src = lampadaLigada;
        quenteOuFrio();
    }else {
        lampada.src = lampadaDesligada;
        
    }  
}


function abrirPorta(){
    document.getElementById('lampada').style.display = 'block';
    document.getElementById('porta').style.display = 'none';
}

function fecharPorta(){
    document.getElementById('lampada').style.display = 'none';
    document.getElementById('porta').style.display = 'block';
}


function resposta(){
     let resposta = document.getElementById('resposta');

     if(resposta.style.display === 'none'){
        resposta.style.display = 'block';
     }else{
        resposta.style.display = 'none';
     } 
}

let cont = 0;
function quenteOuFrio(){
    cont += 1;
    if(cont>0){
        mensagemFrioOuQuente("A lampada esta Quente");
    }
    
}


function mensagemFrioOuQuente(mensagem){
    let lampada = document.getElementById("lampada");
    let mensagemQuente = document.getElementById('mensagemQuente');
    lampada.addEventListener('mouseover' , function (){
        mensagemQuente.textContent = mensagem;
        mensagemQuente.style.display = 'block';
    });

    lampada.addEventListener('mouseout', function (){
        mensagemQuente.style.display = 'none';
    })
}

  



