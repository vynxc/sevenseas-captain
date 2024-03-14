import { IGDBRoute } from './routes/igdb.js';
import { app } from './utils/app.js';

new IGDBRoute(app);
app.listen(3000);

console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`);
