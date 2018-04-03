'use strict';

var builder             = require('botbuilder')

function saudacaoRouter(session, builder) {
    var card = createHeroCard(session);
    var msg = new builder.Message(session).addAttachment(card);
    session.send(msg);
}

function createHeroCard(session) {
    return new builder.HeroCard(session)
        .title('Bem vindo ao Vem leiloar')
        .subtitle('E faça um bom negócio.')
        .text('Em que posso te ajudar?')
        .images([
        builder.CardImage.create(session, 'http://www.alfacenter.com.br/wp-content/uploads/2016/05/leilao.jpg')
    ]);
}

module.exports = saudacaoRouter;

