export class Negociacao {

    //private _data: Date;
    //private _quantidade: number;
    //private _valor: number;

    /*constructor(data: Date, quantidade: number, valor: number) {

        if(!data){
            throw new Error('data deve ser preenchida');
        }

        if(!quantidade){
            throw new Error('quantidade deve ser preenchida');
        }

        if(!valor){
            throw new Error('valor deve ser preenchido');
        }

        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;        

    }*/

    constructor(readonly data: Date, readonly quantidade: number, readonly valor: number){}

    get volume() {
        return this.quantidade * this.valor;
    }
}