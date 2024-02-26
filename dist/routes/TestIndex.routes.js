"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const TestPhoto_controller_1 = require("../controllers/TestPhoto.controller");
const routerTest = (0, express_1.Router)();
routerTest.route('/').get(TestPhoto_controller_1.startingApp);
routerTest.route('/greets').get(TestPhoto_controller_1.greeetings);
routerTest.route('/welcome').get(TestPhoto_controller_1.indexWelcome);
exports.default = routerTest;
