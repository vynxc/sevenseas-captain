import { t } from 'elysia';
import { IGDB } from '../utils';
import { AppType } from '../utils/app.js';

export class IGDBRoute {
  private client = new IGDB();

  app: AppType;

  constructor(app: AppType) {
    this.app = app;
    this.init();
  }

  private init() {
    this.app.group('/igdb', (app) =>
      app.get(
        '/search',
        async ({ query }) => {
          return await this.search(query.query);
        },
        {
          query: t.Object({
            query: t.String(),
          }),
        },
      ),
    );
  }

  private async search(query: string) {
    try {
      return (await this.client.search(query)).data;
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }
}
