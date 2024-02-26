import { Request, Response } from 'express';

// These routes are to testing...
export function startingApp(
  req: Request,
  res: Response,
): Response {
  return res.json('Starting App...');
}

export function greeetings(
  req: Request,
  res: Response,
): Response {
  return res.json('Hello World...!!!');
}

export function indexWelcome(
  req: Request,
  res: Response,
): Response {
  return res.json(
    'Welcome to my Photo Gallery Rest Api...!!!',
  );
}
