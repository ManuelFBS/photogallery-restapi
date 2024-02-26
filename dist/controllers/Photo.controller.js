"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePhoto = exports.updatePhoto = exports.createPhoto = exports.getPhotoById = exports.getPhotos = void 0;
const path_1 = __importDefault(require("path"));
const fs_extra_1 = __importDefault(require("fs-extra"));
const Photo_1 = __importDefault(require("../models/Photo"));
function getPhotos(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const getAllPhotos = yield Photo_1.default.find();
        return res.json(getAllPhotos);
    });
}
exports.getPhotos = getPhotos;
function getPhotoById(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const photoId = req.params.id;
        const getById = yield Photo_1.default.findById(photoId);
        return res.json(getById);
    });
}
exports.getPhotoById = getPhotoById;
function createPhoto(req, res) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        // console.log(req.body);
        // console.log('Saving photo...');
        const { title, description } = req.body;
        const newPhoto = {
            title: title,
            description: description,
            imagePath: (_a = req.file) === null || _a === void 0 ? void 0 : _a.path,
        };
        const photo = new Photo_1.default(newPhoto);
        console.log(photo);
        const savedPhoto = yield photo.save();
        return res.json({
            message: 'Photo successfully saved...!!!',
            savedPhoto,
        });
    });
}
exports.createPhoto = createPhoto;
function updatePhoto(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const photoId = req.params.id;
        const { title, description } = req.body;
        const updatedPhoto = yield Photo_1.default.findByIdAndUpdate(photoId, {
            title,
            description,
        }, { new: true });
        return res.json({
            message: 'Photo successfully updated...!',
            updatedPhoto,
        });
    });
}
exports.updatePhoto = updatePhoto;
function deletePhoto(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const photoId = req.params.id;
        const deletePhoto = yield Photo_1.default.findByIdAndDelete(photoId);
        if (deletePhoto) {
            yield fs_extra_1.default.unlink(path_1.default.resolve(deletePhoto.imagePath));
        }
        return res.json({
            message: 'Photo deleted',
            deletePhoto,
        });
    });
}
exports.deletePhoto = deletePhoto;
