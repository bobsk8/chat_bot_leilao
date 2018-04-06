'use strict';

var
    saudacaoRouter = require('./saudacao'),
    quemSouRouter = require('./quem-sou');

function routerAdapter(builder, recognizer, googleDatas) {
  return new builder.IntentDialog({ recognizers: [recognizer] })
        .matches('saudacao',(session) => {
        saudacaoRouter(session,builder, googleDatas);
    })
    .matches('quem-sou',(session) => {
        quemSouRouter(session,builder, googleDatas);
    });    
}

module.exports = routerAdapter;

