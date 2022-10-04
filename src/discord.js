require("dotenv").config();

const axios = require("axios");

const today = new Date();

const openings = [
  "Well, hello there!",
  "Greetings, frens!",
  "Pens at the ready!",
  "ART TIME!",
];

const topics = {
  1: "ferret archer",
  2: "guinea pig barbarian",
  3: "dormouse bard",
  4: "finch fletcher",
  5: "llama shopkeep",
  6: "raven wizard",
  7: "stoat farmer NPC",
  8: "bat artificer",
  9: "long-eared jerboa: thief rogue",
  10: "anteater paladin",
  11: "tapir cleric",
  12: "shrew apothecary",
  13: "chinchilla baker",
  14: "yak druid",
  15: "basilisk sword-dancer",
  16: "otter historian",
  17: "bullfrog fisherman",
  18: "addax sorcerer",
  19: "bunny fighter",
  20: "lamb priest",
  21: "opossum ranger",
  22: "newt baker",
  23: "badger blacksmith",
  24: "capybara war general",
  25: "canary miner",
  26: "mole monk",
  27: "mink florist",
  28: "argali warlock",
  29: "chicken scout",
  30: "squirrel alchemist",
  31: "puppy paladin"
};

const finishings = [
  "Hope you'll share your creations here. And check the pins for other prompt lists!",
  "Draw on! And check the pins for other prompt lists!",
  "The journey is as important as the destination. And check the pins for other prompt lists!",
  "There is no competition - show us what you made. And check the pins for other prompt lists!",
  "1... 2... 3... Draw! And check the pins for other prompt lists!",
];

function constructMessage() {
  const opening = selectRandomFrom(openings);
  const date = getDate();
  const theme = topics[today.getDate()];
  const closing = selectRandomFrom(finishings);
  return `${opening} It is the ${date} of Drawtober and today's theme is **${theme}**. ${closing}`;
}

function selectRandomFrom(selection) {
  return selection[Math.floor(Math.random() * selection.length)];
}

function getDate() {
  const day = today.getDate();
  let ending;
  switch (day) {
    case 1:
    case 21:
    case 31:
      ending = "st";
      break;
    case 2:
    case 22:
      ending = "nd";
      break;
    case 3:
    case 23:
      ending = "rd";
      break;
    default:
      ending = "th";
  }

  return `${day}${ending}`;
}
exports.handler = (event, context, callback) => {
  const params = {
    username: process.env.BOT_NAME,
    avatar_url: process.env.AVATAR_URL || "",
    content: constructMessage(),
  };

  async function triggerWebhook() {
    return axios.post(process.env.DISCORD_WEB_HOOK, params);
  }

  triggerWebhook()
    .then(() => {
      callback(null, {
        statusCode: 200,
        headers: {
          "Cache-Control": "no-cache",
        },
        body: "Message sent.",
      });
    })
    .catch((err) => {
      callback(null, {
        statusCode: 400,
        body: "Message failed with this error: " + err,
      });
    });
};
