//const negociacao = new Negociacao(new Date(), 1, 100);
//console.log(negociacao.volume);

/*
document
    .querySelector('.form')
    .addEventListener('submit', controller.adiciona.bind(controller));*/

const controller = new NegociacaoController();

$('.form').submit(controller.adiciona.bind(controller));
