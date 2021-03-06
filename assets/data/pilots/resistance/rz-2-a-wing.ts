import { ShipType } from '../../../../types';

const t: ShipType = {
  name: 'RZ-2 A-wing',
  xws: 'rz2awing',
  ffg: 54,
  size: 'Small',
  dial: [
    '1TW',
    '1YW',
    '2TB',
    '2BB',
    '2FB',
    '2NB',
    '2YB',
    '3LR',
    '3TW',
    '3BB',
    '3FB',
    '3NB',
    '3YW',
    '3PR',
    '4FB',
    '5FB',
    '5KR',
  ],
  faction: 'Resistance',
  stats: [
    { arc: 'Single Turret Arc', type: 'attack', value: 2 },
    { type: 'agility', value: 3 },
    { type: 'hull', value: 2 },
    { type: 'shields', value: 2 },
  ],
  actions: [
    { difficulty: 'White', type: 'Focus' },
    { difficulty: 'White', type: 'Evade' },
    { difficulty: 'White', type: 'Lock' },
    { difficulty: 'White', type: 'Barrel Roll' },
    { difficulty: 'White', type: 'Boost' },
  ],
  icon: 'https://sb-cdn.fantasyflightgames.com/ship_types/I_RZ-2_A-wing.png',
  pilots: [
    {
      name: "L'ulo L'ampar",
      caption: 'Luminous Mentor',
      initiative: 5,
      limited: 1,
      cost: 43,
      xws: 'lulolampar',
      ability:
        'While you defend or perform a primary attack, if you are stressed, you must roll 1 fewer defense die or 1 additional attack die.',
      shipAbility: {
        name: 'Refined Gyrostabilizers',
        text:
          'You can rotate your [Single Turret Arc] indicator only to your [Front Arc] or [Rear Arc]. After you perform an action, you may perform a red [Boost] or red [Rotate Arc] action.',
      },
      slots: ['Talent', 'Talent', 'Missile', 'Tech'],
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/en/e15d3e2a2fc082b95a64a83df0c96f7f.png',
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/b97a025a7859f54bbc68374ff5d8116e.jpg',
      ffg: 435,
      hyperspace: false,
      epic: true,
    },
    {
      name: 'Tallissan Lintra',
      caption: 'Deadly Approach',
      initiative: 5,
      limited: 1,
      cost: 36,
      xws: 'tallissanlintra',
      ability:
        'While an enemy ship in your [Bullseye Arc] performs an attack, you may spend 1 [Charge]. If you do, the defender rolls 1 additional die.',
      shipAbility: {
        name: 'Refined Gyrostabilizers',
        text:
          'You can rotate your [Single Turret Arc] indicator only to your [Front Arc] or [Rear Arc]. After you perform an action, you may perform a red [Boost] or red [Rotate Arc] action.',
      },
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/en/72cb6c4e50b0ad24af0bb84ce0aa53f0.png',
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/ee8c3c26ce6432d7581c5f61392597bc.jpg',
      charges: { value: 1, recovers: 1 },
      slots: ['Talent', 'Talent', 'Tech', 'Missile'],
      ffg: 436,
      hyperspace: true,
      epic: true,
    },
    {
      name: 'Zari Bangel',
      caption: 'Aerial Exhibitionist',
      initiative: 3,
      limited: 1,
      cost: 35,
      xws: 'zaribangel',
      ability:
        'You do not skip your Perform Action step after you partially execute a maneuver.',
      shipAbility: {
        name: 'Refined Gyrostabilizers',
        text:
          'You can rotate your [Single Turret Arc] indicator only to your [Front Arc] or [Rear Arc]. After you perform an action, you may perform a red [Boost] or red [Rotate Arc] action.',
      },
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/en/d7f37dbb86bb706dd535e9a65b69149a.png',
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/2fe44e1e5496645c16f4d2189a1746e3.jpg',
      slots: ['Talent', 'Talent', 'Tech', 'Missile'],
      ffg: 438,
      hyperspace: true,
      epic: true,
    },
    {
      name: 'Greer Sonnel',
      caption: 'Kothan Si',
      initiative: 4,
      limited: 1,
      cost: 36,
      xws: 'greersonnel',
      ability:
        'After you fully execute a maneuver, you may rotate your [Single Turret Arc].',
      shipAbility: {
        name: 'Refined Gyrostabilizers',
        text:
          'You can rotate your [Single Turret Arc] indicator only to your [Front Arc] or [Rear Arc]. After you perform an action, you may perform a red [Boost] or red [Rotate Arc] action.',
      },
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/en/7fc7b194b02ad7af6adf4ef9b79108d1.png',
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/84bf1ce21926d4500b54e122da01b162.jpg',
      slots: ['Talent', 'Talent', 'Tech', 'Missile'],
      ffg: 437,
      hyperspace: true,
      epic: true,
    },
    {
      name: 'Green Squadron Expert',
      initiative: 3,
      limited: 0,
      cost: 34,
      xws: 'greensquadronexpert',
      text:
        "Years of field-expedient modifications were standardized in the RZ-2 design, but daring pilots see the ship's improved reliability as a challenge to further push the limits of its performance.",
      shipAbility: {
        name: 'Refined Gyrostabilizers',
        text:
          'You can rotate your [Single Turret Arc] indicator only to your [Front Arc] or [Rear Arc]. After you perform an action, you may perform a red [Boost] or red [Rotate Arc] action.',
      },
      slots: ['Talent', 'Talent', 'Tech', 'Missile'],
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/en/3f7ad9efb4c5af8b4d1f5c07a3c7538b.png',
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/8427bdfb1cf9497a9ab797e2c955ba41.jpg',
      ffg: 439,
      hyperspace: true,
      epic: true,
    },
    {
      name: 'Blue Squadron Recruit',
      initiative: 1,
      limited: 0,
      cost: 32,
      xws: 'bluesquadronrecruit',
      text:
        'Young beings across the galaxy have grown up on tales of heroism in the Galactic Civil War, and many learned to fly in the same cockpits from which their parents fought the Empire.',
      shipAbility: {
        name: 'Refined Gyrostabilizers',
        text:
          'You can rotate your [Single Turret Arc] indicator only to your [Front Arc] or [Rear Arc]. After you perform an action, you may perform a red [Boost] or red [Rotate Arc] action.',
      },
      slots: ['Talent', 'Tech', 'Missile'],
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/en/e033b2729305ac0b678d6031ada7b2b8.png',
      artwork:
        'https://sb-cdn.fantasyflightgames.com/card_art/3df643a75106a59899e5f32ef56e8a5e.jpg',
      ffg: 440,
      hyperspace: true,
      epic: true,
    },
    {
      name: 'Zizi Tlo',
      initiative: 5,
      limited: 1,
      cost: 40,
      xws: 'zizitlo',
      ability:
        'After you defend or perform an attack, you may spend 1 [Charge] to gain 1 focus or evade token.',
      charges: { value: 1, recovers: 1 },
      shipAbility: {
        name: 'Refined Gyrostabilizers',
        text:
          'You can rotate your [Single Turret Arc] indicator only to your [Front Arc] or [Rear Arc]. After you perform an action, you may perform a red [Boost] or red [Rotate Arc] action.',
      },
      slots: ['Talent', 'Talent', 'Tech', 'Missile'],
      hyperspace: true,
      epic: true,
      ffg: 638,
      caption: 'Committed to the Cause',
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/en/17b2411d61b671ebca568ca2bb55e2da.png',
    },
    {
      name: 'Ronith Blario',
      initiative: 2,
      limited: 1,
      cost: 34,
      xws: 'ronithblario',
      ability:
        "While you defend or perform an attack, if the enemy ship is in another friendly ship's [Single Turret Arc], you may spend 1 focus token from that friendly ship to change 1 of your [Focus] results to an [Evade] or [Hit] result.",
      shipAbility: {
        name: 'Refined Gyrostabilizers',
        text:
          'You can rotate your [Single Turret Arc] indicator only to your [Front Arc] or [Rear Arc]. After you perform an action, you may perform a red [Boost] or red [Rotate Arc] action.',
      },
      slots: ['Talent', 'Tech', 'Missile'],
      hyperspace: true,
      epic: true,
      ffg: 639,
      caption: 'Reckless Rookie',
      image:
        'https://sb-cdn.fantasyflightgames.com/card_images/en/1e861cadd2291ece7a9207cddcdcba39.png',
    },
  ],
};

export default t;
