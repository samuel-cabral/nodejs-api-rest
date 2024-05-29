"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fastify_1 = require("fastify");
var app = (0, fastify_1.default)();
app.get("/", function () {
    return { hello: "world" };
});
app.listen({
    port: 3333,
}).then(function () {
    console.log("Server is running on http://localhost:3333");
});
