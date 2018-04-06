'use strict';

var builder             = require('botbuilder')

function quemSouRouter(session, builder) {
    var card = createHeroCard(session);
    var msg = new builder.Message(session).addAttachment(card);
    session.send(msg);
}

function createHeroCard(session) {
    return new builder.HeroCard(session)
        .title('Explicando...')
        //.subtitle('')
        .text('Eu sou um bot, porém sou sentimental :)')
        .images([
        builder.CardImage.create(session, 'https://cdn.pixabay.com/photo/2016/02/22/00/25/robot-1214536_960_720.png')
    ]);
}

module.exports = quemSouRouter;

