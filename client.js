const net = require("net");
const { connected } = require("process");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: 'localhost',// IP address here,
    port: 50541// PORT number here,
  });
  //sending connection message
  conn.on("connect", () => {
    console.log('Successfully connected to game server');
    conn.write("Name: FI");
  });
  conn.setEncoding("utf8");
  conn.on("data", (data) => {
    console.log(data);    
  });
  // interpret incoming data as text

  return conn;

};
  module.exports = connect;
