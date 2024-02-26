import { Router } from 'express';
import {
  createPhoto,
  deletePhoto,
  getPhotoById,
  getPhotos,
  updatePhoto,
} from '../controllers/Photo.controller';
import multer from '../libs/multer';

const router = Router();

router
  .route('/create')
  .post(multer.single('image'), createPhoto);

router.route('/').get(getPhotos);

router.route('/:id').get(getPhotoById);

router.route('/update/:id').put(updatePhoto);

router.route('/delete/:id').delete(deletePhoto);

export default router;
