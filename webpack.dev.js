import { merge } from "webpack-merge";
import common from "./webpack.common.js";

export default merge(common, {
    mode: "development",
    devtool: "eval-source-map",
    devServer: {
        host: "127.0.0.1",
        port: "5500",
        watchFiles: ["./src/template.html"],
    },
});
