import { config } from "./deps.ts";

// checks .env.example and .env if variables are defined loads them
config({ safe: true, export: true });

// * NOTE: I am using enviroment variables, but I only added the ones I'm using.
// * If you want to set other configs here you need to add the env variables,
// * or if you keep this file private, then you can just directly put the values here.

export const configs = {
  // Your bot token goes here
  // token: "",
  token: Deno.env.get("BOT_TOKEN"),
  // The default prefix for your bot. Don't worry guilds can change this later.
  prefix: "-",
  // This isn't required but you can add bot list api keys here.
  botListTokens: {
    DISCORD_BOTS_CO: "",
    DISCORD_BOT_ORG: "",
    BOTS_ON_DISCORD: "",
    DISCORD_BOT_LIST: "",
    BOTS_FOR_DISCORD: "",
    DISCORD_BOATS: "",
    DISCORD_BOTS_GG: "",
    DISCORD_BOTS_GROUP: "",
  },
  // This is the server id for your bot's main server where users can get help/support
  supportServerId: "",
  // These are the role ids that will enable some functionality.
  roleIds: {
    // If you have a patreon set up you can add the patreon vip role id here.
    patreonVIPRoleId: "",
  },
  // These are the user ids that will enable some functionality.
  userIds: {
    // You can delete the `as string[]` when you add atleast 1 id in them.
    // The user ids for the support team
    botSupporters: [] as string[],
    // The user ids for the other devs on your team
    botDevs: [] as string[],
    // The user ids who have complete 100% access to your bot
    botOwners: [Deno.env.get("BOT_OWNERS_ID")],
  },
  webhooks: {
    // the webhook to use when the bot finds a missing translation
    missingTranslation: {
      id: "",
      token: "",
    },
  },
  // Lavadeno nodes
  nodes: [
    {
      // Id of the client which is connecting to the lavalink
      id: "main",
      host: "localhost",
      port: 2333,
      password: "youshallnotpass",
    },
  ],
};
