/* As constantes */



let parsepeso = document.getElementById("peso");
let parsealtura = document.getElementById("altura");
const pegarBotao = document.getElementById("botao");
const pegarNome = document.getElementById("result");
const pegarTipo = document.getElementById("result_type");


/* As variáveis */

var pegarPeso = 0;
var pegarAltura = 0;
var imc = 0;
var converterAltura = 0;
var secondImc = 0;






/* Função principal que fará o código */





function main() {



    pegarBotao.addEventListener("click", function () {

        pegarPeso = parsepeso.value;
        pegarAltura = parsealtura.value;

        if(pegarPeso<0 || pegarAltura<0){
			alert("tente novamente, não digite valores negativos");
			location.href="index.html"
		}
    
 
        imc = pegarPeso / (pegarAltura * pegarAltura);


        if (imc <= 17) {
            pegarTipo.innerHTML = "Muito abaixo do peso"
        }
        else if (imc > 17 && imc < 18.49) {
            pegarTipo.innerHTML = "Abaixo do peso"
        }
        else if (imc > 18.5 && imc < 24.99) {
            pegarTipo.innerHTML = "Saudável "
        }
        else if (imc > 25 && imc < 29.99) {
            pegarTipo.innerHTML = "Acima do peso"
        }
        else if (imc > 30 && imc < 34.99) {
            pegarTipo.innerHTML = "Obesidade"
        }
        else if (imc > 35 && imc < 39.99) {
            pegarTipo.innerHTML = "Obesidade severa"
        }
        else if (imc > 40) {
            pegarTipo.innerHTML = "Obesidade mórbida"
        }



        if (pegarAltura > 10) {
            converterAltura = pegarAltura / 100;
            secondImc = pegarPeso / (converterAltura * converterAltura);
            pegarNome.innerHTML = secondImc.toFixed(2);

            if (secondImc <= 17) {
                pegarTipo.innerHTML = "Muito abaixo do peso"
            }
            else if (secondImc > 17 && secondImc < 18.49) {
                pegarTipo.innerHTML = "Abaixo do peso"
            }
            else if (secondImc > 18.5 && secondImc < 24.99) {
                pegarTipo.innerHTML = "Saudável "
            }
            else if (secondImc > 25 && secondImc < 29.99) {
                pegarTipo.innerHTML = "Acima do peso"
            }
            else if (secondImc > 30 && secondImc < 34.99) {
                pegarTipo.innerHTML = "Obesidade"
            }
            else if (secondImc > 35 && secondImc < 39.99) {
                pegarTipo.innerHTML = "Obesidade severa"
            }
            else if (secondImc > 40) {
                pegarTipo.innerHTML = "Obesidade mórbida"
            }
        } else {
            pegarNome.innerHTML = imc.toFixed(2);
        }



        if (pegarPeso == 0) {
            alert("Digite valores válidos!");
            window.location.reload();

        }

        if (pegarAltura == 0) {
            alert("Digite valores válidos!");
            window.location.reload();

        }


        pegarNome.style.display = 'block';



        pegarTipo.style.display = 'block';



    });




}


main();