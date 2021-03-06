import { UpgradeBase } from '../../../types';

const t: UpgradeBase[] = [
  {
    name: 'Kraken',
    limited: 1,
    xws: 'kraken',
    sides: [
      {
        title: 'Kraken',
        type: 'Tactical Relay',
        ability:
          'During the End Phase, you may choose up to 3 friendly ships at range 0-3. If you do, each of these ships does not remove 1 calculate token.',
        grants: [
          { action: { type: 'Calculate', difficulty: 'White' }, value: 1 },
        ],
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/47dae8a3ecd27a48f3dc35aff03a1a75.png',
        slots: ['Tactical Relay'],
        ffg: 531,
      },
    ],
    restrictions: [{ factions: ['Separatist Alliance'] }],
    hyperspace: true,
    epic: true,
    cost: { value: 10 },
  },
  {
    name: 'TV-94',
    xws: 'tv94',
    limited: 1,
    sides: [
      {
        title: 'TV-94',
        type: 'Tactical Relay',
        ability:
          'While a friendly ship at range 0-3 performs a primary attack against a defender in its [Bullseye Arc], if there are 2 or fewer attack dice, it may spend 1 calculate token to add 1 [Hit] result.',
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/633a34a139c912116c1b034fc2765484.png',
        slots: ['Tactical Relay'],
        ffg: 530,
      },
    ],
    restrictions: [{ factions: ['Separatist Alliance'] }],
    cost: { value: 5 },
    hyperspace: true,
    epic: true,
  },
  {
    name: 'K2-B4',
    xws: 'k2b4',
    limited: 1,
    sides: [
      {
        title: 'K2-B4',
        type: 'Tactical Relay',
        ability:
          'While a friendly ship at range 0-3 defends, it may spend 1 calculate token. If it does, add 1 [Evade] result unless the attacker chooses to gain 1 strain token.',
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/2178079ef9488899e51e927b2e136572.png',
        slots: ['Tactical Relay'],
        ffg: 537,
      },
    ],
    restrictions: [{ factions: ['Separatist Alliance'] }],
    cost: { value: 5 },
    hyperspace: true,
    epic: true,
  },
  {
    name: 'TA-175',
    xws: 'ta175',
    limited: 1,
    sides: [
      {
        title: 'TA-175',
        type: 'Tactical Relay',
        ability:
          'After a friendly ship at range 0-3 with [Calculate] on its action bar is destroyed, each friendly ship at range 0-3 with [Calculate] in its action bar gains 1 calculate token.',
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/d71e07aa3147c6fe943bd0c8131a0096.png',
        slots: ['Tactical Relay'],
        ffg: 590,
      },
    ],
    restrictions: [{ factions: ['Separatist Alliance'] }],
    hyperspace: true,
    epic: true,
    cost: { value: 9 },
  },
];

export default t;
