import cors from '@elysiajs/cors';
import {Elysia} from 'elysia';

const app = new Elysia().use(cors());
export type AppType = typeof app;

export {app};
