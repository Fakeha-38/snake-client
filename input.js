const { MOVE_DOWN_KEY , MOVE_LEFT_KEY, MOVE_RIGHT_KEY, MOVE_UP_KEY, SPECIAL_KEY, SPECIAL_MSG } = require("./constants");
let connection;

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", (key) => handleUserInput(key));
  return stdin;
};

const handleUserInput = function(key) {
  key = key.toLowerCase();
  switch(key){
    case MOVE_UP_KEY:
      connection.write(`Move: up`);
      break;
    case MOVE_LEFT_KEY:
      connection.write(`Move: left`);
      break;
    case MOVE_DOWN_KEY:
      connection.write(`Move: down`);
      break;
    case MOVE_RIGHT_KEY:
      connection.write(`Move: right`);
      break;
    case SPECIAL_KEY:
      connection.write(`${SPECIAL_MSG}`);
      break;
    case '\u0003':
      process.exit();
      break;
  }
    
};
module.exports = setupInput;
