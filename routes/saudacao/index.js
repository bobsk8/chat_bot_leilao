'use strict';

var builder             = require('botbuilder')

function saudacaoRouter(session, builder, googleDatas) {
    googleDatas('resposta!C3').then(data => {
        var card = createHeroCard(session,data);
        var msg = new builder.Message(session).addAttachment(card);
        session.send(msg);
    });
}

function createHeroCard(session, answer) {
    return new builder.HeroCard(session)
        .title('Bem vindo ao Vem leiloar')
        .subtitle('E faça um bom negócio.')
        .text(answer)
        .images([
        builder.CardImage.create(session, 'https://cdn.pixabay.com/photo/2017/07/10/23/49/club-2492011_960_720.jpg')
    ]);
}

module.exports = saudacaoRouter;

