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
  switch(key){
    case 'w':
    case 'W':
      connection.write(`Move: up`);
      break;
    case 'a':
    case 'A':
      connection.write(`Move: left`);
      break;
    case 's':
    case 'S':
      connection.write(`Move: down`);
      break;
    case 'd':
    case 'D':
      connection.write(`Move: right`);
      break;
    case '\u0003':
      process.exit();
      break;
  }
    
};


module.exports = setupInput;
