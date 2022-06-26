"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.get("/", (req, res) => {
  const name = process.env.NAME || "World";
  res.send(`Hello ${name}!`);
});
const port =
  parseInt((_a = process.env.PORT) !== null && _a !== void 0 ? _a : "") || 8080;
app.listen(port, () => {
  console.log(`helloworld: listening on port ${port}`);
});
