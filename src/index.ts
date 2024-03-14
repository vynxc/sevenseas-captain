import { IGDBRoute } from './routes/igdb';
import { app } from './utils/app';

new IGDBRoute(app);
app.listen(3000);

console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`);
