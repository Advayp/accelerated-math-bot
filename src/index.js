import { Client, GatewayIntentBits } from "discord.js";
import config from "../config.json" assert { type: "json" };

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once("ready", () => {
  console.log("Ready");
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  const { commandName } = interaction;

  if (commandName == "ping") {
    await interaction.reply("Pong!");
  }
});

client.login(config["token"]);
