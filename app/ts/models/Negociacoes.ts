import { Negociacao } from './Negociacao'; 
import { Imprimivel } from './Imprimivel';


export class Negociacoes implements Imprimivel {

    private _negociacoes: Negociacao[] = [];

    adiciona(negociacao: Negociacao) {
        this._negociacoes.push(negociacao);
    }

    paraArray(): Negociacao[] {
        return ([] as Negociacao[]).concat(this._negociacoes);
    }

    paraTexto(): void {

        console.log("------ Començo de Console log de Negociações! ------");

        console.log(JSON.stringify(this._negociacoes));

        console.log("------ Fim de Console log de Negociações! ------");
    }

}