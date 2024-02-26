"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexWelcome = exports.greeetings = exports.startingApp = void 0;
// These routes are to testing...
function startingApp(req, res) {
    return res.json('Starting App...');
}
exports.startingApp = startingApp;
function greeetings(req, res) {
    return res.json('Hello World...!!!');
}
exports.greeetings = greeetings;
function indexWelcome(req, res) {
    return res.json('Welcome to my Photo Gallery Rest Api...!!!');
}
exports.indexWelcome = indexWelcome;
