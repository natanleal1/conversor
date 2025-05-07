const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random()*(maxNum - minNum + 1))+ minNum;

let attempts = 0;
let guess;
let running = true;

while(running){ 
    guess = window.prompt('Digite um número entre 1 e 100: ');
    guess = Number(guess);
    if(isNaN(guess)){
        window.alert('Ops ocorreu um erro...');
    }
    else if(guess > maxNum || guess < minNum){
        window.alert('Ops o número que você digitou não é válido...');
    }
    else{
        attempts++
        if(guess - answer === 1 || guess - 1 === answer){
            window.alert('Muito perto!');
        }
        else if(guess < answer){
            window.alert('Chute muito baixo!');
        }
        else if(guess > answer){
            window.alert('tentativa muito alta hehe!');
        }
        else{
            window.alert(`Você acertou o número é ${answer} e o número tentaivas foi ${attempts}`);
            running = false;
        }
    }
}