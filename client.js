const net = require("net");
const { connected } = require("process");
const { IP, PORT, PLAYER_NAME } = require("./constants");


// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,// IP address here,
    port: PORT// PORT number here,
  });
  //sending connection message
  conn.on("connect", () => {
    console.log('Successfully connected to game server');
    conn.write(PLAYER_NAME);
  });
  conn.setEncoding("utf8");
  conn.on("data", (data) => {
    console.log(data);    
  });
  // interpret incoming data as text

  return conn;

};
  module.exports = connect;
