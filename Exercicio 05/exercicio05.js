
/**5) Escreva um programa que inverta os caracteres de um string.
IMPORTANTE:

a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
b) Evite usar funções prontas, como, por exemplo, reverse; */


        let nome = 'felipe da silva santana';
        let nomeInv = '';
       
        for(let i of nome){
            nomeInv = i + nomeInv;
        }
      console.log(nomeInv);

      //RESPOSTA : foi usado o for of, para percorrer todas as letras da variável,  então concatenei com o restante das letras e então a palavra foi ficando inversa


      