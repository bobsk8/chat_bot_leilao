'use strict';

var
    saudacaoRouter = require('./saudacao');

function routerAdapter(builder, recognizer) {
  return new builder.IntentDialog({ recognizers: [recognizer] })
        .matches('saudacao',(session) => {
        saudacaoRouter(session,builder);
    });    
}

module.exports = routerAdapter;

