"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Photo_controller_1 = require("../controllers/Photo.controller");
const multer_1 = __importDefault(require("../libs/multer"));
const router = (0, express_1.Router)();
router
    .route('/create')
    .post(multer_1.default.single('image'), Photo_controller_1.createPhoto);
router.route('/').get(Photo_controller_1.getPhotos);
router.route('/:id').get(Photo_controller_1.getPhotoById);
router.route('/update/:id').put(Photo_controller_1.updatePhoto);
router.route('/delete/:id').delete(Photo_controller_1.deletePhoto);
exports.default = router;
