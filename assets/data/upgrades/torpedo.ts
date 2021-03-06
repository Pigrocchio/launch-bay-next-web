import { UpgradeBase } from '../../../types';

const t: UpgradeBase[] = [
  {
    name: 'Adv. Proton Torpedoes',
    limited: 0,
    xws: 'advprotontorpedoes',
    sides: [
      {
        title: 'Adv. Proton Torpedoes',
        type: 'Torpedo',
        ability:
          'Attack ([Lock]): Spend 1 [Charge]. Change 1 [Hit] result to a [Critical Hit] result.',
        slots: ['Torpedo'],
        charges: { value: 1, recovers: 0 },
        attack: {
          arc: 'Front Arc',
          value: 5,
          minrange: 1,
          maxrange: 1,
          ordnance: true,
        },
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_33.png',
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_33.jpg',
        ffg: 262,
      },
    ],
    cost: { value: 6 },
    hyperspace: true,
    epic: true,
  },
  {
    name: 'Ion Torpedoes',
    limited: 0,
    xws: 'iontorpedoes',
    sides: [
      {
        title: 'Ion Torpedoes',
        type: 'Torpedo',
        ability:
          'Attack ([Lock]): Spend 1 [Charge]. If this attack hits, spend 1 [Hit] or [Critical Hit] result to cause the defender to suffer 1 [Hit] damage. All remaining [Hit]/[Critical Hit] results inflict ion tokens instead of damage.',
        slots: ['Torpedo'],
        charges: { value: 2, recovers: 0 },
        attack: {
          arc: 'Front Arc',
          value: 4,
          minrange: 2,
          maxrange: 3,
          ordnance: true,
        },
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_34.png',
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_34.jpg',
        ffg: 263,
      },
    ],
    cost: { value: 6 },
    hyperspace: false,
    epic: true,
  },
  {
    name: 'Proton Torpedoes',
    limited: 0,
    xws: 'protontorpedoes',
    sides: [
      {
        title: 'Proton Torpedoes',
        type: 'Torpedo',
        ability:
          'Attack ([Lock]): Spend 1 [Charge]. Change 1 [Hit] result to a [Critical Hit] result.',
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/Card_Upgrade_35.png',
        slots: ['Torpedo'],
        charges: { value: 2, recovers: 0 },
        attack: {
          arc: 'Front Arc',
          value: 4,
          minrange: 2,
          maxrange: 3,
          ordnance: true,
        },
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_35.jpg',
        ffg: 264,
      },
    ],
    cost: { value: 13 },
    hyperspace: true,
    epic: true,
  },
  {
    name: 'Plasma Torpedoes',
    limited: 0,
    xws: 'plasmatorpedoes',
    sides: [
      {
        title: 'Plasma Torpedoes',
        type: 'Torpedo',
        ability:
          'Attack ([Lock]): Spend 1 [Charge]. During the Neutralize Results step, [Critical Hit] results are canceled before [Hit] results. After this attack hits, the defender loses 1 shield.',
        image:
          'https://sb-cdn.fantasyflightgames.com/card_images/en/60fb85c3782c235904678bac8a106150.png',
        slots: ['Torpedo'],
        charges: { value: 2, recovers: 0 },
        attack: {
          arc: 'Front Arc',
          value: 3,
          minrange: 2,
          maxrange: 3,
          ordnance: true,
        },
        artwork:
          'https://sb-cdn.fantasyflightgames.com/card_art/Card_art_XW_U_35.jpg',
        ffg: 579,
      },
    ],
    cost: { value: 9 },
    hyperspace: true,
    epic: true,
  },
];

export default t;
