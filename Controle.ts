import promptSync from 'prompt-sync';
import { Televisao } from './Tv';

const prompt = promptSync();

function exibirMenu(): void {
console.log(tv.getStatus());

    console.log(`
==============================
        CONTROLE REMOTO
==============================
= 1 - Ligar/Desligar          
= 2 - Mudar Canal             
= 3 - Aumentar Volume         
= 4 - Diminuir Volume         
= 0 - Sair                    
==============================
    `);
}

const tv = new Televisao();

let ligado = true;
while (ligado) {
    exibirMenu();
    const opcao = parseInt(prompt("Escolha uma opção: "));
    switch (opcao) {
        case 1:
            console.clear()
            tv.ligarDesligar();
            break;
        case 2:
            console.clear()
            const novoCanal = parseInt(prompt("Informe o novo canal: "));
            tv.mudarCanal(novoCanal);
            break;
        case 3:
            console.clear()
            tv.aumentarVolume();
            break;
        case 4:
            console.clear()
            tv.diminuirVolume();
            break;
        case 0:
            ligado = false;
            break;
        default:
            console.clear()
            console.log("Opção inválida.");
            break;
    }
}
