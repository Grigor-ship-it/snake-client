const { connect } = require("./client");

let connection;

const handleUserInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.on('data', (key) => {
    if (key === 'w') {
      connection.write('Move: up');
    }
  });  stdin.on('data', (key) => {
    if (key === 'a') {
      connection.write('Move: left');
    }
  });  stdin.on('data', (key) => {
    if (key === 's') {
      connection.write('Move: down');
    }
  });  stdin.on('data', (key) => {
    if (key === 'd') {
      connection.write('Move: right');
    }
  }); stdin.on('data', (key) => {
    if (key === 'm') {
      connection.write('Say: All your base R belong to us');
    }
  });  
  
  stdin.on('data', (key) => {
    if (key === '\u0003') {
      process.exit();
    }
  }); 
}


const setupInput = function(conn) {
  connection = conn;
  handleUserInput();
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  
  return stdin;
} 



module.exports = {setupInput};

