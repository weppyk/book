"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const BookList = () => {
    const [books, setBooks] = (0, react_1.useState)([]);
    (0, react_1.useEffect)(() => {
        fetch('http://localhost:3005/books', {
            method: 'GET',
            mode: 'cors',
        })
            .then(response => response.json())
            .then(data => {
            setBooks(data);
        });
    }, []);
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h1", { children: "Book List" }), books.map(book => ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h2", { children: book.title }), (0, jsx_runtime_1.jsx)("h3", { children: book.author })] }, book.id)))] }));
};
exports.default = BookList;
