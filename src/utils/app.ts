import cors from '@elysiajs/cors';
import {env} from 'bun';
import {Elysia} from 'elysia';

const app = new Elysia({aot: env.RUNTIME === 'bun'}).use(cors());
export type AppType = typeof app;

export {app};
