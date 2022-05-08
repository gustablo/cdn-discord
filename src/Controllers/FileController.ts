/* eslint-disable no-console */
import { Request, Response } from 'express';
import sendMessage from '../bot';

export default {
  async sendFile(req: any, res: any) {
    const { destination, filename } = req.file;
    const path = `${destination}\\${filename}`;
    await sendMessage('img', path, res);
  },
};
