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
    case 'w':
      connection.write(`Move: up`);
      break;
    case 'a':
      connection.write(`Move: left`);
      break;
    case 's':
      connection.write(`Move: down`);
      break;
    case 'd':
      connection.write(`Move: right`);
      break;
    case '\u0020':
      connection.write(`Say: Damn!!`);
      break;
    case '\u0003':
      process.exit();
      break;
  }
    
};
module.exports = setupInput;
