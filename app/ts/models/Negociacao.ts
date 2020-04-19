import { Imprimivel } from './Imprimivel';

export class Negociacao implements Imprimivel {

    constructor(readonly data: Date, readonly quantidade: number, readonly valor: number){}

    get volume() {
        return this.quantidade * this.valor;
    }

    paraTexto(): void {
        console.log("------ Començo de Console log de Negociação! ------");
        
        console.log(
            `Data: ${this.data}
            Quantidade: ${this.quantidade}
            Valor: ${this.valor}
            Volume: ${this.volume}`
        );

        console.log("------ Fim de Console log de Negociação! ------");
    }
}