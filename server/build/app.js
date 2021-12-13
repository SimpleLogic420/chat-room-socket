"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
// import morgan from 'morgan';
// import morganHandler from './middleware/morgan.js';
const error_handler_1 = __importDefault(require("./error-handling/error-handler"));
const api_1 = __importDefault(require("./routes/api"));
const app_1 = require("./controllers/app");
const app = (0, express_1.default)();
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// app.use(
//   morganHandler,
//   morgan(":method :url :status :res[content-length] - :response-time ms :body")
// );
app.get("/ping", (req, res) => {
    console.log('pong');
    res.send("pong");
});
app.use(express_1.default.static("../client/build"));
app.get("/", app_1.render);
app.get("/login", app_1.render);
app.get("/sign-up", app_1.render);
app.get("/chat", app_1.render);
app.use('/api', api_1.default);
app.use(error_handler_1.default);
exports.default = app;
