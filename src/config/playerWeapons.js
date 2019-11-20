// @flow
import type { Weapon } from '../types/Fighter';

import slackImg from '../images/private_slack_channel.png';
import sasquatchImg from '../images/sasquatch.png';
import sideShaveImg from '../images/side_shave.png';
import judgementGavelImg from '../images/judgement_gavel.png';
import fireballImg from '../images/poi.png';

export const PRIVATE_SLACK_CHANNEL: Weapon = {
  name: 'Private Slack Channel',
  image: slackImg,
  attacks: [
    {
      type: 'exclusionary',
      name: 'Master Lock Combo',
      description:
        '[PLAYER] goes at [BOSS] with their infamous attack: The Master Lock Combination Spin',
    },
    {
      type: 'exclusionary',
      name: 'Double Padlock',
      description: '[PLAYER] gets in a 1-2 hit with The Double Padlock',
    },
    {
      type: 'exclusionary',
      name: 'Insult Sling',
      description:
        '[PLAYER] slings insults at [BOSS] in every private channel they can find; everybody is laughing',
    },
    {
      type: 'exclusionary',
      name: '"Cool People”',
      description:
        '[PLAYER] creates a Slack channel called “Cool Ratings” and rates [BOSS] a zero. Everybody reacts with “100” and hot pepper emojis.',
    },
    {
      type: 'exclusionary',
      name: '“Real Artists”',
      description:
        '[PLAYER] creates a Slack channel called “Real Artists” and leaves [BOSS] out',
    },
    {
      type: 'exclusionary',
      name: 'Talk to the Hand',
      description:
        '[PLAYER] is chatting up some friends and blasts [BOSS] backward with the force of their cold shoulder. Sorry, [BOSS] who? [PLAYER] doesn’t know them.',
    },
    {
      type: 'exclusionary',
      name: 'Stranger Danger',
      description:
        '[BOSS] says hi to [PLAYER], and [PLAYER] claims to have no idea who they are, despite having met [BOSS] at least four times. ',
    },

    {
      type: 'inclusive',
      name: 'Carpool',
      description:
        '[PLAYER] @s [BOSS] in a carpool thread for next week’s decompression party. [BOSS] would love to go!',
    },
    {
      type: 'inclusive',
      name: 'Shout-out',
      description:
        '[PLAYER] calls out [BOSS] in a public channel and says: loved your Room Service project this year!',
    },
    {
      type: 'inclusive',
      name: 'Heart2Heart',
      description:
        '[PLAYER] and [BOSS] have a heart-to-heart and really bond over [INTEREST]! High five / booty bump!',
    },
  ],
};

export const INSIDE_JOKE_STICK: Weapon = {
  name: 'Inside Joke Stick',
  image: sasquatchImg,
  attacks: [
    {
      type: 'exclusionary',
      name: 'Pan Smack',
      description: '[PLAYER] smacks [BOSS] with a cast iron skillet',
    },
    {
      type: 'exclusionary',
      name: 'Sasquatch Stomp',
      description: '[PLAYER] brings [BOSS] down with a powerful Sasquatch Stomp',
    },
    {
      type: 'exclusionary',
      name: 'Pie Face',
      description: '[PLAYER] pies [BOSS] in the face',
    },
    {
      type: 'exclusionary',
      name: 'Mop Tango',
      description: '[PLAYER] tangoes with a mop. Everybody gets the joke except [BOSS].',
    },
    {
      type: 'exclusionary',
      name: 'Holy Cheese',
      description:
        '[PLAYER] bows to the power of the holy cheese. Everybody thinks it’s hilarious, but [BOSS] is left out and confused.',
    },
    {
      type: 'exclusionary',
      name: 'Bear Trap',
      description:
        '[PLAYER] laughs about the time they saw a full-grown bear in the Biltmore parking lot—but [BOSS] thinks the Biltmore is a construction company. The whole party points and laughs.',
    },

    {
      type: 'inclusive',
      name: 'Lady and the Tramp',
      description:
        '[PLAYER] and [BOSS] mime eating a mile long spaghetti noodle together. The joke catches on until everybody at the party’s doing it.',
    },
    {
      type: 'inclusive',
      name: 'Secret Handshake',
      description:
        '[PLAYER] and [BOSS] develop a secret handshake together; [BOSS] truly feels like one of the crew.',
    },
    {
      type: 'inclusive',
      name: 'Pyramid Scheme',
      description:
        '[PLAYER] and [BOSS] invent a scheme together where partygoers give them toilet paper in exchange for popularity. Soon, all the TP is gone and nobody knows who the masterminds were, LOL. [PLAYER] and [BOSS] make such a great prank team.',
    },
  ],
};

export const SIDE_SHAVE: Weapon = {
  name: 'Side Shave',
  image: sideShaveImg,
  attacks: [
    {
      type: 'exclusionary',
      name: 'Body Slash',
      description:
        '[PLAYER] flips their long hair from side to side in a deadly body slash',
    },
    {
      type: 'exclusionary',
      name: 'Buzz Cut',
      description: '[PLAYER] buzz cuts [BOSS] straight down the middle',
    },
    {
      type: 'exclusionary',
      name: 'New Piercing',
      description: '[PLAYER] gives [BOSS] a new piercing—through the heart',
    },
    {
      type: 'exclusionary',
      name: 'Third Eye Blind',
      description:
        '[PLAYER] gets a third eyebrow ring; [BOSS] is temporarily blinded by the spotlight glint',
    },
    {
      type: 'exclusionary',
      name: 'Painted Black',
      description:
        '[PLAYER] files their fingernails into sharp claws and paints them black; [BOSS] cowers in fear',
    },
    {
      type: 'exclusionary',
      name: 'Hiss',
      description:
        '[PLAYER] doesn’t even say anything, just looks at [BOSS] and hisses like a cat. It’s pretty fucking scary tbh.',
    },

    {
      type: 'inclusive',
      name: 'Wing Tip',
      description: '[PLAYER] tells [BOSS] that they have cool makeup',
    },
    {
      type: 'inclusive',
      name: 'Cool Shirt',
      description: '[PLAYER] asks [BOSS] where they got their shirt',
    },
    {
      type: 'inclusive',
      name: 'Get Some Ink',
      description:
        '[PLAYER] and [BOSS] decide to go get matching skull tattoos together!',
    },
  ],
};

export const JUDGEMENT_GAVEL: Weapon = {
  name: 'Judgement Gavel',
  image: judgementGavelImg,
  attacks: [
    {
      type: 'exclusionary',
      name: 'Gavel Strike',
      description: '[PLAYER] lands a massive gavel strike to the gut',
    },
    {
      type: 'exclusionary',
      name: 'In Contempt!',
      description: '[PLAYER] slams down the hammer—[BOSS] is in contempt of Take3',
    },
    {
      type: 'exclusionary',
      name: 'Whack-a-mole',
      description:
        '[PLAYER] crushes [BOSS] under their hammer like a game of whack-a-mole',
    },
    {
      type: 'exclusionary',
      name: 'Pass Judgement',
      description:
        '[PLAYER] says [BOSS]’s favorite activity, [INTEREST], is too normie for this party. Everybody claps in agreement.',
    },
    {
      type: 'exclusionary',
      name: 'Start a Chant',
      description: '[PLAYER] starts a chant: “Kick [BOSS] out, kick [BOSS] out”',
    },
    {
      type: 'exclusionary',
      name: 'Overruled!',
      description:
        'Every time [BOSS] starts to speak, [PLAYER] yells “overruled”! It’s pretty annoying and soon [BOSS] decides to go sulk in a corner instead.',
    },

    {
      type: 'inclusive',
      name: 'Habeas Corpus',
      description:
        '[PLAYER] sees their friends teasing [BOSS] for [INTEREST] and tells them to simmer down--[BOSS] is pretty cool!',
    },
    {
      type: 'inclusive',
      name: 'High Five',
      description: '[PLAYER] gives [BOSS] an enthusiastic high five',
    },
    {
      type: 'inclusive',
      name: 'New Evidence',
      description:
        '[PLAYER] is dying to learn more about [BOSS INTEREST]! It sounds super fun.',
    },
  ],
};

export const POI_BALLS: Weapon = {
  name: 'Fire Poi',
  image: fireballImg,
  attacks: [
    {
      type: 'exclusionary',
      name: 'Helicopter Wind',
      description: '[PLAYER] gives [BOSS] a piece of the deadly Helicopter Wind attack',
    },
    {
      type: 'exclusionary',
      name: 'Fire Shirt',
      description:
        '[PLAYER] whacks [BOSS] in the shoulder and now their shirt is on fire',
    },
    {
      type: 'exclusionary',
      name: 'Side to Side',
      description: '[PLAYER] smacks [BOSS] side to side with relentless poi ball strikes',
    },
    {
      type: 'exclusionary',
      name: 'Trick Out',
      description:
        '[PLAYER] shows off with a fabulous poi ball trick; [BOSS] feels suddenly uncool and unworthy',
    },
    {
      type: 'exclusionary',
      name: 'Play with Fire',
      description:
        '[PLAYER] challenges [BOSS] to try a simple spin--[BOSS] makes a fool of themself and singes off all their arm hair',
    },
    {
      type: 'exclusionary',
      name: 'Ring of Fire',
      description:
        '[PLAYER] casts a ring of fire all around [BOSS]--now suddenly they’re center stage while everybody watches them dance like an idiot',
    },

    {
      type: 'inclusive',
      name: 'Poi Basics',
      description:
        '[PLAYER] teaches [BOSS] a basic poi spin—turns out, they’re a natural!',
    },
    {
      type: 'inclusive',
      name: 'Front Row Seats',
      description:
        '[PLAYER] hears [BOSS] is into [CREATIVE THING]! That’s super cool, they should collaborate sometime.',
    },
    {
      type: 'inclusive',
      name: 'Show Stoppers',
      description:
        '[PLAYER] and [BOSS] get in the center of the dance floor and do a wild Poi performance together--everybody cheers!',
    },
  ],
};

const PLAYER_WEAPONS = [
  PRIVATE_SLACK_CHANNEL,
  INSIDE_JOKE_STICK,
  SIDE_SHAVE,
  JUDGEMENT_GAVEL,
  POI_BALLS,
];

export default PLAYER_WEAPONS;
