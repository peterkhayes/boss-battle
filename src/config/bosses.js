// @flow
import type { Fighter } from '../types/Fighter';
import { getFighterSounds } from '../utils/sounds';
import { getRandomAttacks } from '../utils/fighting';
import { GOOD_VIBES_MIN } from './vibes';

import kamilaImage from '../images/kamila.png';
import chadImage from '../images/chad.gif';
import conradImage from '../images/conrad.png';
import andreyImage from '../images/andrey.png';
import lucasImage from '../images/lucas2.png';
import zhenImage from '../images/zhen.png';
import lilyImage from '../images/lily.png';

import emailImage from '../images/email.png';
import beerImage from '../images/beer_stretched.png';
import teslaImage from '../images/tesla.png';
import turntablesImage from '../images/turntables.png';
import youtubeImage from '../images/youtube.png';
import minimalismImage from '../images/minimalism.png';
import pitchDeckImage from '../images/pitch_deck_small.png';

const EMAIL = {
  name: 'Email',
  image: emailImage,
  attacks: [
    {
      type: 'exclusionary',
      name: '“As per my last email”',
      description:
        'Kamila just “followed up” on that email thread [PLAYER] ignored last week and cc’d their VP',
    },
    {
      type: 'exclusionary',
      name: 'Asana Flood',
      description:
        'Kamila just flooded [PLAYER]’s inbox with 7 new task assignments in Asana, all due Sunday at 10:00 AM',
    },
    {
      type: 'exclusionary',
      name: 'Reply All',
      description:
        '[PLAYER] tried to take Kamila to DM, and she reply all’d their whole team anyway',
    },
    {
      type: 'exclusionary',
      name: 'Thanks in Advance',
      description:
        'Kamila just sent [PLAYER] an email with a long bulleted list signed, “Thanks in advance for taking care of this asap”',
    },
    {
      type: 'exclusionary',
      name: 'Manager’s Meeting',
      description:
        'Kamila just invited [PLAYER] to the manager’s meeting on Monday at 8:00 AM; [PLAYER] doesn’t need to be there, Kamila just wants them to take notes',
    },
    {
      type: 'exclusionary',
      name: 'Email Flurry',
      description:
        '[PLAYER]’s phone blows up with notifications when Kamila sends them a flurry of emails at 6:30 AM and flags them as urgent',
    },

    {
      type: 'inclusive',
      name: 'Reality TV',
      description:
        'Kamila invites [PLAYER] over to hate-watch The Bachelor! Or maybe even its queer counterpart Are You the One',
    },
    {
      type: 'inclusive',
      name: 'Spa Day!',
      description:
        'Kamila knows an amazing place for mani/pedis, and she’s got a coupon for two! What do you think: Fire Engine Red, or Gunmetal Grey?',
    },
    {
      type: 'inclusive',
      name: 'ClassPass Duo',
      description:
        'Kamila has actually been learning some aerial silks on the side with her ClassPass membership! Maybe you two could take a class together next week?',
    },
    {
      type: 'inclusive',
      name: 'Wine Pairing',
      description:
        '[PLAYER]’s aunt just gave them a nice bottle of wine. Kamila helps [PLAYER] figure out the right food pairings for their dinner party!',
    },

    {
      type: 'collaborative',
      name: 'Bring It In!',
      description:
        '[PLAYER] tells Kamila about their fave productivity tool--Kamila downloaded it and omg loves it!',
    },
  ],
};
export const KAMILLA: Fighter = {
  vibes: GOOD_VIBES_MIN,
  name: 'Kamila',
  title: 'Marketing Director',
  image: kamilaImage,
  sounds: getFighterSounds('Karen'),
  weapon: EMAIL,
  currentAttacks: getRandomAttacks({ weapon: EMAIL }),
  facts: [
    { header: 'Favorite Time of Day', description: 'On time' },
    // {
    //   header: 'Favorite Organizational Tool',
    //   description: 'Shared workout calendar with the ClassPass fam',
    // },
    {
      header: 'Major Pet Peeve',
      description:
        'When Ashley insists on visiting another winery when it’s already time for the boat cruise',
    },
  ],
};

const BEER_STAFF = {
  name: 'Beer Staff',
  image: beerImage,
  attacks: [
    {
      type: 'exclusionary',
      name: 'Pucky Puck',
      description:
        'Chad downs 5 beers in a row, pounds them against his chest, and throws them at [PLAYER] like aluminum hockey pucks',
    },
    {
      type: 'exclusionary',
      name: 'LOL ur mom tho',
      description:
        'Chad makes fun of your mother AND manages to make a “That’s what she said” joke at the same time',
    },
    {
      type: 'exclusionary',
      name: 'Beer Pwned Amirite',
      description:
        'Chad just owned you at beer pong and now you’re down 50 bucks—better pay up',
    },
    {
      type: 'exclusionary',
      name: 'Order of Brothers',
      description:
        'Chad calls upon 92 pledge classes of his fraternity bretheren to empower his next attack',
    },
    {
      type: 'exclusionary',
      name: 'Flip Cup Dunce',
      description:
        'Chad challenges you to a game of flip cup with a case of Keystone Light that’s been in his trunk for 6 months—and needless to say, you lost',
    },
    {
      type: 'exclusionary',
      name: 'Overhead Promo',
      description:
        'Chad reaches out to his uncle and gets promoted above your head. Now he’s your direct manager',
    },

    {
      type: 'inclusive',
      name: 'Sail Bros!',
      description: 'Chad invites [PLAYER] to go sailing together in his boat!',
    },
    {
      type: 'inclusive',
      name: 'Mad Veggie',
      description:
        'Chad invites you to come over and watch the game at his house—no worries if you don’t love sports, but he grills a mad veggie burger',
    },
    {
      type: 'inclusive',
      name: 'Go Deep',
      description:
        'Chad opens up to you about his deepest insecurities—for one, he’s a vegetarian, but he feels like his other friends don’t get it. Maybe he’s found his people here',
    },
    {
      type: 'inclusive',
      name: 'Veggie Noodle',
      description:
        'Chad heard you were sick, and rushed over with his famous veggie noodle soup',
    },
    {
      type: 'inclusive',
      name: 'Mango Kush',
      description:
        'Chad invites you to the Dave Matthews Band concert, and don’t worry, he’s got like 2 oz of Mango Kush to share',
    },

    {
      type: 'collaborative',
      name: 'Bring It In!',
      description:
        '[PLAYER] warns Chad not to mix alcohol and GHD just as he goes to chug a Corona. He’s so touched that you’d look out for him like that, man! Bear hug!',
    },
  ],
};
export const CHAD: Fighter = {
  vibes: GOOD_VIBES_MIN,
  name: 'Chad',
  title: 'Sales Rep',
  image: chadImage,
  sounds: getFighterSounds('Chad'),
  weapon: BEER_STAFF,
  currentAttacks: getRandomAttacks({ weapon: BEER_STAFF }),
  facts: [
    { header: 'Fraternity Nickname', description: 'Pickle' },
    {
      header: 'Beer Pong Winning Streak',
      description: '37 (discounting the Incident with Ross)',
    },
    {
      header: 'Number of Cold Calls Daily',
      description: "It's not about the call, it's the call before the call",
    },
  ],
};

const TESLA = {
  name: 'Tesla',
  image: teslaImage,
  attacks: [
    {
      type: 'exclusionary',
      name: 'Tesla Door Flip',
      description:
        'Conrad pushes a keychain button from across the parking lot and his Tesla door knocks [PLAYER] to the ground',
    },
    {
      type: 'exclusionary',
      name: 'Poncho Whip',
      description:
        'Conrad pulls his alpaca wool poncho out of the passenger seat and whips it at [PLAYER]',
    },
    {
      type: 'exclusionary',
      name: 'Clear the Air',
      description:
        'Conrad says he doesn’t like [PLAYER]’s energy, and burns every room they leave with sage',
    },
    {
      type: 'exclusionary',
      name: 'Battery Drain',
      description:
        'Conrad lets you borrow his Tesla—but doesn’t charge it first. Now you’re stranded on the side of the highway while all your friends are raging at Room Service',
    },
    {
      type: 'exclusionary',
      name: 'Charging Cable Lasso',
      description: 'Conrad lassos you with his Tesla charging cable',
    },
    {
      type: 'exclusionary',
      name: 'GPS Terminator',
      description:
        'Conrad programs his GPS to find you, wherever you are, and rear end you in traffic',
    },
    {
      type: 'exclusionary',
      name: 'AI Risk',
      description:
        'Conrad’s autopilot hunts you down and engages you in a car chase you can’t escape',
    },

    {
      type: 'inclusive',
      name: 'Esalen Invite',
      description:
        'Conrad would love to introduce [PLAYER] to his shaman! There’s an exclusive retreat at Esalen next week they should totally come to',
    },
    {
      type: 'inclusive',
      name: 'Roadster Ride',
      description: 'Conrad and [PLAYER] cruise around Tahoe in his Roadster',
    },
    {
      type: 'inclusive',
      name: 'Listen Up',
      description:
        'When [PLAYER] was feeling down about a friend conflict, Conrad had some really sound advice! What a great listener',
    },

    {
      type: 'collaborative',
      name: 'Bring It In!',
      description:
        '[PLAYER] gives Conrad a great new startup idea—Conrad is feeling so energized!',
    },
  ],
};
export const CONRAD: Fighter = {
  vibes: GOOD_VIBES_MIN,
  name: 'Conrad',
  title: 'CEO & Thought Leader',
  image: conradImage,
  sounds: getFighterSounds('Conrad'),
  weapon: TESLA,
  currentAttacks: getRandomAttacks({ weapon: TESLA }),
  facts: [
    { header: 'Favorite First Date', description: 'Ayahuasca at Esalen' },
    { header: 'Longevity Hack', description: 'Drinking salt juice in a cryo bath' },
    { header: 'Crypto Position', description: 'Long on Filecoin' },
  ],
};

const YOUTUBE_CHANNEL = {
  name: 'YouTube Channel',
  image: youtubeImage,
  attacks: [
    {
      type: 'exclusionary',
      name: 'CANCELED',
      description:
        'Lily digs up some dirt on [PLAYER] and makes a video about it on her channel. Sorry, [PLAYER], you just got canceled',
    },
    {
      type: 'exclusionary',
      name: 'No Media Policy?',
      description:
        'Lily makes a Room Service 2019 walk through and posts it on her YouTube channel—her friends are so jelly she was here!',
    },
    {
      type: 'exclusionary',
      name: 'Viral Video',
      description:
        'Lily takes [PLAYER] down in a viral diss video and makes over $1,000 from AdSense',
    },
    {
      type: 'exclusionary',
      name: 'Thumbs DOWN',
      description:
        'Lily slams the thumbs down button so hard that [PLAYER] gets knocked backwards',
    },
    {
      type: 'exclusionary',
      name: 'InstaDragged',
      description:
        'Lily completely drags [PLAYER] in a 14-part Instagram story, which is later reposted by meme accounts and gets written up in Buzzfeed',
    },
    {
      type: 'exclusionary',
      name: 'Who’s the Joker Now?',
      description:
        'Lily cuts you down in a TikTok video while applying joker make-up; it gets over 1.5M views and starts a meme',
    },

    {
      type: 'inclusive',
      name: 'Music Mashup',
      description:
        'Lily makes a music mashup of all [PLAYER]’s catchphrases and the two of you choreograph a funny dance to it that gets over 100k likes!',
    },
    {
      type: 'inclusive',
      name: 'Slang Gang',
      description:
        'Lily teaches [PLAYER] all the latest Gen Z slang—now [PLAYER] knows what “Ligma” and “E-Boy” mean!',
    },
    {
      type: 'inclusive',
      name: 'Strike One',
      description:
        'Lily is really passionate about being the change she wants to see in the world—[PLAYER] and Lily decide to participate in the Climate Strike together!',
    },

    {
      type: 'collaborative',
      name: 'Bring It In!',
      description: '[PLAYER] likes and subscribes to Lily’s YouTube channel!',
    },
  ],
};
export const LILY: Fighter = {
  vibes: GOOD_VIBES_MIN,
  name: 'Lily',
  image: lilyImage,
  title: 'Social Media Manager',
  sounds: getFighterSounds('Lily'),
  weapon: YOUTUBE_CHANNEL,
  currentAttacks: getRandomAttacks({ weapon: YOUTUBE_CHANNEL }),
  facts: [
    { header: 'Age', description: '28 (but identifies as Gen Z)' },
    { header: 'Afternoon Fuel', description: 'The “Pink Drink” from Starbucks' },
    { header: 'Definitely Not A', description: 'VSCO Girl' },
  ],
};

const PEN_AND_NOTEBOOK = {
  name: 'Pen and Notebook',
  image: minimalismImage,
  attacks: [
    {
      type: 'exclusionary',
      name: 'Impulsive Redesign',
      description:
        'Zhen suggests that Room Service has too many rooms and redesigns it as two empty white squares',
    },
    {
      type: 'exclusionary',
      name: 'Bad Branding',
      description:
        'Zhen says they thought this party would be Helvetica, but it’s way more Comic Sans. Yuck',
    },
    {
      type: 'exclusionary',
      name: 'A Bit Overdone',
      description:
        'Zhen cuts down [PLAYER]’s complicated outfit and leaves them wearing a plain black sweater dress',
    },
    {
      type: 'exclusionary',
      name: 'Um, Campy',
      description:
        'Zhen tells [PLAYER] that the movie Labyrinth would been much better if shot according to the principles of Dogma 95',
    },
    {
      type: 'exclusionary',
      name: 'Harsh Feedback',
      description:
        'Zhen gives some harsh feedback about the lighting here at Room Service—it should really be a monochrome palette',
    },
    {
      type: 'exclusionary',
      name: 'Eyeroll',
      description:
        'Zhen rolls her eyes at this party so hard the room begins to shake and the party evacuates for an earthquake alert',
    },

    {
      type: 'inclusive',
      name: 'Blue Print',
      description:
        'With her talent for woodwork, Zhen and [PLAYER] come up with a great plan for next year’s main event set design',
    },
    {
      type: 'inclusive',
      name: 'Konmari',
      description:
        'Zhen heard you’ve been looking to reorganize your room, and she’d love to help. She’s been really into Konmari and Instagram organizers lately!',
    },
    {
      type: 'inclusive',
      name: 'Sketch Artist',
      description: 'Zhen drew you a cute sketch of you posing with Madame Clavae!',
    },

    {
      type: 'collaborative',
      name: 'Bring It In!',
      description:
        '[PLAYER] confesses to Zhen that they, too, get a little tingle on the back of their neck every time they see a slick logo with perfect kerning',
    },
  ],
};
export const ZHEN: Fighter = {
  vibes: GOOD_VIBES_MIN,
  name: 'Zhen',
  title: 'Designer',
  image: zhenImage,
  sounds: getFighterSounds('Zhen'),
  weapon: PEN_AND_NOTEBOOK,
  currentAttacks: getRandomAttacks({ weapon: PEN_AND_NOTEBOOK }),
  facts: [
    { header: 'Vacation Highlight', description: 'Cycling in Copenhagen' },
    {
      header: 'Colors in wardrobe',
      description: 'Black, mauve, aubergine accents',
    },
    {
      header: 'Passion Project',
      description: 'Polishing her live edge Redwood coffee table',
    },
  ],
};

const TURNTABLES = {
  name: 'Turntables',
  image: turntablesImage,
  attacks: [
    {
      type: 'exclusionary',
      name: 'Drop Denial',
      description:
        'Lucas makes a remix where the bass sounds like it’s going to drop for five straight minutes. You wait for it, and wait for it, and the drop never comes',
    },
    {
      type: 'exclusionary',
      name: 'Yeah, Everybody’s Heard of Them',
      description:
        '“Oh, you like them?”: Lucas judges [PLAYER] heavily for liking such a mainstream DJ',
    },
    {
      type: 'exclusionary',
      name: 'Baby Shark',
      description:
        'Lucas throws “Baby Shark” into the middle of what was previously a good song—it really kills [PLAYER]’s dancing rhythm and now they look super awkward in front of their crush',
    },
    {
      type: 'exclusionary',
      name: 'Record Ninja',
      description:
        'Lucas pummels [PLAYER] with his records, throwing them out one after the other like ninja stars',
    },
    {
      type: 'exclusionary',
      name: 'Turntable Flip',
      description: 'Lucas flips his turntables right into [PLAYER]’s stomach',
    },
    {
      type: 'exclusionary',
      name: 'Bouncer Smash',
      description:
        'Lucas summons the bouncer over, who spills all your drinks and tosses you across the room',
    },

    {
      type: 'inclusive',
      name: 'Re-Re-Remix',
      description:
        'Lucas makes a sweet remix of [PLAYER]’s favorite song, and it gets huge on local radio!',
    },
    {
      type: 'inclusive',
      name: 'Free Cover',
      description:
        'Lucas says you two should totally take a trip to Berlin together! He knows the bouncer at Berghain, so you won’t even have to pay a cover',
    },
    {
      type: 'inclusive',
      name: 'Song Credits',
      description:
        '[PLAYER] has had the idea for a song for a long time now, and Lucas offers to help you produce it!',
    },

    {
      type: 'collaborative',
      name: 'Bring It In!',
      description:
        'Lucas has been following a little-known artist for years, who just happens to be [PLAYER]’s friend! [PLAYER] would love to introduce them!',
    },
  ],
};
export const LUCAS: Fighter = {
  vibes: GOOD_VIBES_MIN,
  name: 'Lucas',
  title: 'PM & DJ',
  image: lucasImage,
  sounds: getFighterSounds('Keith'),
  weapon: TURNTABLES,
  currentAttacks: getRandomAttacks({ weapon: TURNTABLES }),
  facts: [
    { header: 'Task Tracking Software', description: 'Logic Pro' },
    { header: 'Favorite Floor of Berghain', description: '3rd basement' },
    {
      header: 'Weekend Plans',
      description: 'Closing out the night in the acid house room at DAS UNTERKREM',
    },
  ],
};

const PITCH_DECK = {
  name: 'Pitch Deck',
  image: pitchDeckImage,
  attacks: [
    {
      type: 'exclusionary',
      name: 'Fan Club',
      description:
        'Andrey literally talks [PLAYER]’s ears off about what a visionary Elon Musk is. Is he here? Do you think they’ll get to trip together at Room Service?',
    },
    {
      type: 'exclusionary',
      name: 'Raining Swag',
      description:
        'Andrey makes it rain with his huge collection of tech conference swag—usb sticks, fanny packs and keychains are slamming into [PLAYER] from all directions',
    },
    {
      type: 'exclusionary',
      name: 'Pitch Deck Flash',
      description:
        'Andrey clicks through his slides so fast it’s like a strobe light--[PLAYER] is blinded by the flash',
    },
    {
      type: 'exclusionary',
      name: 'SV Connections',
      description:
        'Andrey got free tickets to Room Service using his Founders Fund connections—oh, did [PLAYER] have to buy their own ticket? Ha ha ha!',
    },
    {
      type: 'exclusionary',
      name: 'Hacker Hostel',
      description:
        'Andrey converts [PLAYER]’s former industrial arts space into a “Hacker Hostel” and kicks [PLAYER] out of it. Evicted!',
    },
    {
      type: 'exclusionary',
      name: 'ICO',
      description:
        'Andrey and his crew start talking loudly next to [PLAYER] during their midnight molly cuddle sesh—they’re all Thiel Fellows making plans for their upcoming ICOs',
    },
    {
      type: 'exclusionary',
      name: 'Clicker Cult',
      description: 'Andrey straight up stabs you with his Powerpoint clicker',
    },

    {
      type: 'inclusive',
      name: 'Calm Down',
      description:
        'Andrey knows the founder of Calm—you two should grab coffee with them sometime and talk about meditation strategies!',
    },
    {
      type: 'inclusive',
      name: 'Light It Up',
      description:
        'Andrey has been working on some really cool LED stuff on the side that might work really great with [PLAYER]’s project!',
    },
    {
      type: 'inclusive',
      name: 'Solder Sesh',
      description:
        'Andrey has a huge stockpile of Arduino stuff at his place—you two should collab on some Room Service art next year!',
    },

    {
      type: 'collaborative',
      name: 'Bring It In!',
      description:
        'All of Andrey’s photos are of him looking serious at talks--so [PLAYER] takes a candid picture of Andrey laughing with friends at Room Service. So sweet!',
    },
  ],
};
export const ANDREY: Fighter = {
  vibes: GOOD_VIBES_MIN,
  name: 'Andrey',
  title: 'Aspiring Founder',
  sounds: getFighterSounds('Andre'),
  weapon: PITCH_DECK,
  currentAttacks: getRandomAttacks({ weapon: PITCH_DECK }),
  image: andreyImage,
  facts: [
    { header: 'Startup Idea', description: 'Instacart for the Housing Crisis' },
    {
      header: 'Bragging Rights',
      description: "Took Zuck's exact course schedule at Harvard... twice!",
    },
  ],
};

const BOSSES = [KAMILLA, CHAD, CONRAD, LILY, ZHEN, LUCAS, ANDREY];

export default BOSSES;
