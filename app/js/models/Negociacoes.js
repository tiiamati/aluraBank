System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Negociacoes;
    return {
        setters: [],
        execute: function () {
            Negociacoes = class Negociacoes {
                constructor() {
                    this._negociacoes = [];
                }
                adiciona(negociacao) {
                    this._negociacoes.push(negociacao);
                }
                paraArray() {
                    return [].concat(this._negociacoes);
                }
                paraTexto() {
                    console.log("------ Començo de Console log de Negociações! ------");
                    console.log(JSON.stringify(this._negociacoes));
                    console.log("------ Fim de Console log de Negociações! ------");
                }
            };
            exports_1("Negociacoes", Negociacoes);
        }
    };
});
