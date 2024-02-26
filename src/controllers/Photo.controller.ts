import { Request, Response } from 'express';
import path from 'path';
import fs from 'fs-extra';
import Photo from '../models/Photo';

export async function getPhotos(
  req: Request,
  res: Response,
): Promise<Response> {
  const getAllPhotos = await Photo.find();

  return res.json(getAllPhotos);
}

export async function getPhotoById(
  req: Request,
  res: Response,
): Promise<Response> {
  const photoId = req.params.id;
  const getById = await Photo.findById(photoId);

  return res.json(getById);
}

export async function createPhoto(
  req: Request,
  res: Response,
): Promise<Response> {
  // console.log(req.body);
  // console.log('Saving photo...');

  const { title, description } = req.body;

  const newPhoto = {
    title: title,
    description: description,
    imagePath: req.file?.path,
  };

  const photo = new Photo(newPhoto);
  console.log(photo);

  const savedPhoto = await photo.save();

  return res.json({
    message: 'Photo successfully saved...!!!',
    savedPhoto,
  });
}

export async function updatePhoto(
  req: Request,
  res: Response,
): Promise<Response> {
  const photoId = req.params.id;
  const { title, description } = req.body;

  const updatedPhoto = await Photo.findByIdAndUpdate(
    photoId,
    {
      title,
      description,
    },
    { new: true },
  );

  return res.json({
    message: 'Photo successfully updated...!',
    updatedPhoto,
  });
}

export async function deletePhoto(
  req: Request,
  res: Response,
): Promise<Response> {
  const photoId = req.params.id;

  const deletePhoto = await Photo.findByIdAndDelete(
    photoId,
  );

  if (deletePhoto) {
    await fs.unlink(path.resolve(deletePhoto.imagePath));
  }

  return res.json({
    message: 'Photo deleted',
    deletePhoto,
  });
}
