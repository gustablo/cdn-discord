import Discord from 'discord.js';
import { Response } from 'express';

require('dotenv').config();

const sendMessage = async (msg: string, destination: string, res: Response) => {
  const client = new Discord.Client();
  client.on('ready', async () => {
    const testChannel = await client.users.fetch('414456067456630795');

    if (testChannel) {
      testChannel.send(msg, { files: [destination] }).then((sent: any) => {
        const a: any = Array.from(sent.attachments);
        return res.json({ url: a[0][1].attachment });
      });
    } else {
      return res.json({ error: true });
    }
  });

  await client.login(process.env.DISCORD_TOKEN);
};

export default sendMessage;
