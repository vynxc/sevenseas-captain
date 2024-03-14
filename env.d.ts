declare module 'bun' {
  interface Env {
    TWITCH_CLIENT_ID: string;
    TWITCH_CLIENT_SECRET: string;
    TWITCH_ACCESS_TOKEN: string;
  }
}
