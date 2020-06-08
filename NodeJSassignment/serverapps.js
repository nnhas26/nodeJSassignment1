//FULLYFUNCTIONALWEBSERVER
const http = require('http'); 

//routesjs customfile
const assignment = require('./appassignment');

const server = http.createServer(assignment);

//listen starts a process where nodejs will not immediatelyexit ourscripts
//nodejs keeps this running to listen for incoming request
//In production no needtofillthisout,use defaultport80
//tryrunning localhost:3000 on browsernothinghappen 
//request isbeingloggedtotheconsole inTERMINAL
server.listen(3000);