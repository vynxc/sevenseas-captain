import { IGDBRoute } from './routes/igdb';
import { app } from './utils/app';

new IGDBRoute(app);
app.listen({
    port: 3000,
    hostname: '0.0.0.0' // Ensure it listens on all interfaces
}, ({ hostname, port }) => {
    console.log(`Running at http://${hostname}:${port}`);
});