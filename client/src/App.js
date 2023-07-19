"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const BookList_1 = __importDefault(require("./components/BookList"));
require("./App.css");
function App() {
    return ((0, jsx_runtime_1.jsxs)("div", { className: "App", children: [(0, jsx_runtime_1.jsx)("h1", { children: "Books" }), (0, jsx_runtime_1.jsx)(BookList_1.default, {})] }));
}
exports.default = App;
