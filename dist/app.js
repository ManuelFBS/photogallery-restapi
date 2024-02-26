"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const morgan_1 = __importDefault(require("morgan"));
const TestIndex_routes_1 = __importDefault(require("./routes/TestIndex.routes"));
const index_routes_1 = __importDefault(require("./routes/index.routes"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config();
const app = (0, express_1.default)();
// Middlewares...
app.use((0, morgan_1.default)('dev'));
app.use(express_1.default.json());
// Settings...
app.set('port', process.env.PORT || 7000);
// Routes...
app.use('/api/test', TestIndex_routes_1.default); // Only for test...
app.use('/api', index_routes_1.default);
// This folder for this application will be used to store public files...
app.use('/uploads', express_1.default.static(path_1.default.resolve('uploads')));
exports.default = app;
