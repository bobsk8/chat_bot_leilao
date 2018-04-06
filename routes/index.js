'use strict';

var
    saudacaoRouter = require('./saudacao'),
    quemSouRouter = require('./quem-sou');

function routerAdapter(builder, recognizer) {
  return new builder.IntentDialog({ recognizers: [recognizer] })
        .matches('saudacao',(session) => {
        saudacaoRouter(session,builder);
    })
    .matches('quem-sou',(session) => {
        quemSouRouter(session,builder);
    });    
}

module.exports = routerAdapter;

