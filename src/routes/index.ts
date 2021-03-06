import express from 'express';
import imageRouters from './api/image';

const routes = express.Router();

routes.use('/images', imageRouters);

export default routes;
