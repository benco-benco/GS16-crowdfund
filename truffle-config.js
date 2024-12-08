module.exports = {
  networks: {
    development: {
      host: "127.0.0.1", // Localhost (Ganache UI)
      port: 7545,        // Ganache's default port
      network_id: "*",   // Match any network id
    },
  },
  compilers: {
    solc: {
      version: "0.8.9", // Match your contract's Solidity version
    },
  },
};
