import { REST, SlashCommandBuilder, Routes } from "discord.js";
import config from "../config.json" assert { type: "json" };

const commands = [
  new SlashCommandBuilder().setName("ping").setDescription("Ping the bot."),
].map((command) => command.toJSON());

const rest = new REST({ version: "10" }).setToken(config["token"]);

rest
  .put(Routes.applicationGuildCommands(config["clientId"], config["guildId"]), {
    body: commands,
  })
  .then((data) =>
    console.log(`Successfully registered ${data.length} application commands.`)
  )
  .catch(console.error);
