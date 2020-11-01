const path = require("path");

module.exports = {
  entry: {
    withIndex: "./src/withIndex",
    withoutIndex: "./src/withoutIndex",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
  },
};
