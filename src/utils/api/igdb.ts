
import igdb from 'igdb-api-node';

// TODO: auto get access_token

export class IGDB {
  clientId: string = process.env.TWITCH_CLIENT_ID;
  clientAccessToken: string = process.env.TWITCH_ACCESS_TOKEN;

  client = igdb(this.clientId, this.clientAccessToken);

  async search(
    query: string,
    sort?: {
      direction: 'asc' | 'desc';
      field: string;
    },
  ) {
    try {
      let base = this.client
        .fields([
          '*',
          'screenshots.*',
          'cover.*',
          'rating',
          'release_dates.*',
          'aggregated_rating',
          'platforms.*',
          'involved_companies.*',
          'game_engines.*',
          'websites.*',
          'videos.*',
          'genres.*',
          'similar_games.*',
        ])
        .search(query);
      if (sort) base = base.sort(sort.field, sort.direction);

      console.log('res');
      const res = await base.request('games');

      console.log(res);
      return res;
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }

  info(id: string) {
    return this.client
      .fields(['*'])
      .where([`id = ${id}`])
      .request('/games');
  }
}
