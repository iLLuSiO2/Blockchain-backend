module.exports = {
  networks: {
    development: {
      host: "127.0.0.1", // Localhost (default: localhost)
      port: 7545, // Ganache UI port (default: 7545)
      network_id: 5777, // Any network (default: "*")
    },
  },
  compilers: {
    solc: {
      version: "0.8.0", // Specify the Solidity compiler version
    },
  },
};
