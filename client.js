// const net = require("net");

// // establishes a connection with the game server
// const connect = function () {
//   const conn = net.createConnection({
//     host: 'localhost',// IP address here,
//     port: 50541// PORT number here,
//   });

//   module.exports = connect;
const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: 'localhost',// IP address here,
    port: 50541// PORT number here,
  });
  conn.setEncoding("utf8");
  conn.on("data", (data) => {
    console.log(data);
  });
  // interpret incoming data as text

  return conn;

};
  module.exports = connect;
