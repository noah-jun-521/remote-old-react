const { dependencies } = require("./package.json");

module.exports = {
  name: "remote_old_react",
  exposes: {
    "./App": "./src/App",
  },
  filename: "remoteEntry.js",
  shared: {
    ...dependencies,
    react: {
      singleton: true,
      strictVersion: true,
      requiredVersion: ">=16.4.0 <= 18.2.0",
    },
    "react-dom": {
      singleton: true,
      requiredVersion: dependencies["react-dom"],
    },
  },
};
