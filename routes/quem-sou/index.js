'use strict';

var builder             = require('botbuilder')

function quemSouRouter(session, builder, googleDatas) {
    googleDatas('resposta!C4').then(data => {
        var card = createHeroCard(session,data);
        var msg = new builder.Message(session).addAttachment(card);
        session.send(msg);
    });
}

function createHeroCard(session,answer) {
    return new builder.HeroCard(session)
        .title('Explicando...')
        //.subtitle('')
        .text(answer)
        .images([
        builder.CardImage.create(session, 'https://cdn.pixabay.com/photo/2016/02/22/00/25/robot-1214536_960_720.png')
    ]);
}

module.exports = quemSouRouter;

