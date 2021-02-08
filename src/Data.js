let spirit = {

    battle: {
        name: 'Battle',
        id: 0,

        spells: [
            {   name: 'Enlarge Person',
                lvl: 1,
                link: 'https://www.d20pfsrd.com/magic/all-spells/e/enlarge-person'
            },
            {   name: 'Fog Cloud',
                lvl: 2,
                link: 'https://www.d20pfsrd.com/magic/all-spells/f/fog-cloud'
            },
            {   name: 'Magic Vestment',
                lvl: 3,
                link: 'https://www.d20pfsrd.com/magic/all-spells/m/magic-vestment'
            },
            {   name: 'Wall of Fire',
                lvl: 4,
                link: 'https://www.d20pfsrd.com/magic/all-spells/w/wall-of-fire'
            },
            {   name: 'Righteous Might',
                lvl: 5,
                link: 'https://www.d20pfsrd.com/magic/all-spells/r/righteous-might'
            },
            {   name: 'Mass Bull\'s Strength',
                lvl: 6,
                link: 'https://www.d20pfsrd.com/magic/all-spells/b/bull-s-strength'
            },
            {   name: 'Control Weather',
                lvl: 7,
                link: 'https://www.d20pfsrd.com/magic/all-spells/c/control-weather'
            },
            {   name: 'Earthquake',
                lvl: 8,
                link: 'https://www.d20pfsrd.com/magic/all-spells/e/earthquake'
            },
            {   name: 'Storm of Vengeance',
                lvl: 9,
                link: 'https://www.d20pfsrd.com/magic/all-spells/s/storm-of-vengeance'
            },
        ],

        spiritAnimal: { 
            effect: '+2 Natural Armor',
            desc:'The shaman’s spirit animal looks like a fiercer version of its species, with rippling muscles and a stockier frame. It gains a +2 natural armor bonus to AC. If it already has a natural armor bonus, the bonus increases by 2 instead.'
        },

        baseSpiritAbility: {
            name: 'Battle Spirit',
            type: 'Su',
            desc: 'A shaman surrounds herself with the spirit of battle. Allies within 30 feet of the shaman (including the shaman) receive a +1 morale bonus on attack rolls and weapon damage rolls. At 8th level and 16th level, these bonuses increase by 1. The shaman can use this ability for a number of rounds per day equal to 3 + her Charisma modifier. These rounds do not need to be consecutive'
        },

        greaterSpiritAbility: {
            name: 'Enemies’ Bane',
            type: 'Su',
            desc: 'As a swift action, the shaman imbues a single weapon she’s wielding with the bane weapon special ability, choosing the type of creature affected each time she does. The effect lasts for 1 minute. If the weapon already has the bane weapon special ability of the type chosen, the additional damage dealt by bane increases to 4d6. The shaman can use this ability a number of times per day equal to 3 + her Charisma modifier.'
        },

        trueSpiritAbility: {
            name: 'Paragon of Battle',
            type: 'Su',
            desc: 'As a standard action, the shaman assumes a form that combines the effects of enlarge person and deadly juggernaut for 1 minute or until dismissed. The shaman can use this ability a number of times per day equal to 3 + her Charisma modifier.'
        },

        manifest: 'Upon reaching 20th level, the shaman becomes a spirit of battle. As a full-round action, she can make a full attack and move up to her speed (either before or after the attacks). Whenever she scores a critical hit, the attack ignores damage reduction. She gains a +4 insight bonus to AC for the purposes of confirming critical hits against her. If she is reduced to below 0 hit points, she does not die until her negative hit point total exceeds double her Constitution score.',

        hex: [
            {
                name: 'Battle Master',
                type: 'Ex',
                desc: 'The shaman makes an extra attack of opportunity each round. This ability stacks with the attacks of opportunity granted by the Combat Reflexes feat. At 8th level, the shaman gains the Weapon Specialization feat in a weapon of her choice as a bonus feat. At 16th level, the shaman gains the Greater Weapon Focus feat as a bonus feat, for the same weapon chosen for Weapon Specialization. The shaman doesn’t need to meet the prerequisites of these feats.'
            },

            {
                name: 'Battle Ward',
                type: 'Su',
                desc: 'The shaman touches a willing creature (including herself ) and grants a battle ward. The next time a foe makes an attack roll against the target, the ward activates and grants a +3 deflection bonus to the warded creature’s AC. Each subsequent time she’s attacked, the defection bonus reduces by 1 (to +2 for the second time she’s attacked and +1 for the third). The ward fades when the bonus is reduced to +0 or after 24 hours, whichever comes first. At 8th level, the ward’s starting bonus increases to +4. At 16th level, it increases to +5. A creature affected by this hex cannot be affected by it again for 24 hours.'
            },

            {
                name: 'Curse of Suffering',
                type: 'Su',
                desc: 'The shaman causes a creature within 30 feet to take more damage from bleed effects and causes its wounds to heal at a slower rate. When the cursed creature takes bleed damage, it takes 1 additional point of bleed damage (even if the bleed is ability damage). Furthermore, when the target is subject to an effect that would restore its hit points, that effect restores only half the normal amount of hit points. This curse lasts for a number of rounds equal to the shaman’s level. A creature affected by this hex cannot be affected by it again for 24 hours.'
            },

            {
                name: 'Eyes of Battle', 
                type: 'Su',
                desc: 'The shaman’s senses become magically heightened in the heat of battle. As a swift action, she can grant herself a +10 insight bonus for 1 round on Perception checks made to notice and pinpoint invisible creatures within 30 feet. She can instead use this ability as a swift action to ignore the affects of cover or partial cover (but not total cover) on her next attack, as long as that attack is made before the end of her next turn. The shaman can use this ability a number of times per day equal to her shaman level.'
            },

            {
                name: 'Hampering Hex', 
                type: 'Su',
                desc: 'The shaman causes a creature within 30 feet to take a –2 penalty to AC and CMD for a number of rounds equal to the shaman’s level. A successful Will saving throw reduces this to just 1 round. At 8th level, the penalty becomes –4. Whether or not the save is successful, a creature affected by a hampering hex cannot be the target of this hex again for 24 hours'
            }
        ]
    },

    flame: {
        name: 'Flame',
        id: 1,

        spells: [
            {   name: 'Burning Hands',
                lvl: 1,
                link: 'https://www.d20pfsrd.com/magic/all-spells/b/burning-hands'
            },
            {   name: 'Resist Energy',
                lvl: 2,
                link: 'https://www.d20pfsrd.com/magic/all-spells/r/resist-energy'
            },
            {   name: 'Fireball',
                lvl: 3,
                link: 'https://www.d20pfsrd.com/magic/all-spells/f/fireball'
            },
            {   name: 'Wall of Fire',
                lvl: 4,
                link: 'https://www.d20pfsrd.com/magic/all-spells/w/wall-of-fire'
            },
            {   name: 'Summon Monster V (Fire Elementals Only)',
                lvl: 5,
                link: 'https://www.d20pfsrd.com/magic/all-spells/s/summon-monster'
            },
            {   name: 'Fire Seeds',
                lvl: 6,
                link: 'https://www.d20pfsrd.com/magic/all-spells/f/fire-seeds'
            },
            {   name: 'Fire Storm',
                lvl: 7,
                link: 'https://www.d20pfsrd.com/magic/all-spells/f/fire-storm'
            },
            {   name: 'Incendiary Cloud',
                lvl: 8,
                link: 'https://www.d20pfsrd.com/magic/all-spells/i/incendiary-cloud'
            },
            {   name: 'Fire Body',
                lvl: 9,
                link: 'https://www.d20pfsrd.com/magic/all-spells/f/fiery-body'
            },
        ],

        spiritAnimal: { 
            name: 'Spirit Animal',
            desc:'The shaman’s spirit animal is surrounded by a nimbus of flame that gives off light like a candle. This nimbus is warm to the touch, but doesn’t cause any damage. The animal is immune to fire damage, but is vulnerable to cold damage.'
        },

        baseSpiritAbility: {
            name: 'Touch of Flames',
            type: 'Su',
            desc: 'As a standard action, the shaman can make a melee touch attack that deals 1d6 points of fire damage + 1 point for every 2 shaman levels she possesses. A shaman can use this ability a number of times per day equal to 3 + her Charisma modifier. At 11th level, any weapon she wields is treated as a flaming weapon'
        },

        greaterSpiritAbility: {
            name: 'Fiery Soul',
            type: 'Su',
            desc: 'The shaman gains fire resistance 10. In addition, as a standard action she can unleash a 15-foot cone of flame from her mouth, dealing 1d4 points of fire damage per shaman level she possesses. A successful Reflex saving throw halves this damage. The shaman can use this ability three times per day, but she must wait 1d4 rounds between each use.'
        },

        trueSpiritAbility: {
            name: 'Elemental Form',
            type: 'Su',
            desc: 'As a standard action, the shaman assumes the form of a Huge (or smaller) fire elemental, as if using elemental body IV with a duration of 1 hour per level. The shaman can use this ability once per day.'
        },

        manifest: 'Upon reaching 20th level, the shaman becomes a spirit of flame. The shaman gains fire resistance 30. She can also apply any one of the following feats to any fire spell she casts without increasing the spell’s level or casting time: Enlarge Spell, Extend Spell, Silent Spell, or Still Spell. She doesn’t need to possess these feats to use this ability.',

        hex: [
            {
                name: 'Ward of Flames',
                type: 'Su',
                desc: 'The shaman touches a willing creature (including herself ) and grants a ward of flames. The next time the warded creature is struck with a melee attack, the creature making the attack takes 1d6 points of fire damage + 1 point of fire damage for every 2 shaman levels she possesses. This ward lasts for 1 minute, after which it fades away if not already expended. At 8th and 16th levels, the ward lasts for one additional attack. A creature affected by this hex cannot be affected by it again for 24 hours.'
            },

            {
                name: 'Gaze of Flames',
                type: 'Su',
                desc: 'The shaman sees through fire, fog, and smoke without penalty as long as there is enough light to otherwise allow her to see normally. At 7th level, the shaman can gaze through any source of flame within 10 feet per shaman level, as clairvoyance. The shaman can use this ability a number of rounds per day equal to her shaman level, but these rounds do not need to be consecutive.'
            },

            {
                name: 'Flame Curse',
                type: 'Su',
                desc: 'The shaman causes a creature within 30 feet to become vulnerable to fire until the end of the shaman’s next turn. If the creature is already vulnerable to fire, this hex has no effect. Fire immunity and resistances apply as normal, and any saving throw allowed by the effect that caused the damage reduces it as normal. At 8th and 16th levels, the duration of this hex is extended by 1 round. A creature affected by this hex cannot be affected by it again for 24 hours.'
            },

            {
                name: 'Fire Nimbus', 
                type: 'Su',
                desc: 'he shaman causes a creature within 30 feet to gain a nimbus of fire. Though this doesn’t harm the creature, it does cause the creature to emit light like a torch, preventing it from gaining any benefit from concealment or invisibility. The target also takes a –2 penalty on saving throws against spells or effects that deal fire damage. The fire nimbus lasts for a number of rounds equal to the shaman’s level. A successful Will saving throw negates this effect. Whether or not the save is successful, the creature cannot be the target of this hex again for 24 hours.'
            },

            {
                name: 'Cinder Dance', 
                type: 'Ex',
                desc: 'The shaman’s base speed increases by 10 feet. At 5th level, the shaman receives Nimble Moves as a bonus feat. At 10th level, the shaman receives Acrobatic Steps as a bonus feat. The shaman doesn’t need to meet the prerequisites of these feats.'
            }
        ]
    }
}

let defaultHex = [
    {
        name:'Chant', 
        type: 'Su',
        desc: 'A shaman can chant as a move action. Any creature that is within 30 feet that is under the effects of the shaman’s charm, evil eye, fortune, fury, or misfortune hex has that effect’s duration extended by 1 round. A shaman cannot select both this hex and the witch’s cackle hex.'
    },

    {
        name: 'Charm', 
        type: 'Su',
        desc: 'A shaman charms an animal or humanoid creature within 30 feet by beckoning and speaking soothing words. This improves the attitude of an animal or humanoid creature by 1 step, as if the shaman had successfully used the Diplomacy skill. The effect lasts for a number of rounds equal to the shaman’s Wisdom modifier (minimum 1). A successful Will saving throw negates this effect. Whether or not the save is successful, the creature cannot be the target of this hex again for 24 hours. At 8th level, this effect improves the attitude of the creature by 2 steps. This is a mind-affecting charm effect.'
    },

    {
        name: 'Draconic Resilience', 
        type: 'Ex',
        desc: 'The shaman grants a creature she touches some of the magically resilient nature of dragons, causing the creature to be immune to magical sleep effects for a number of rounds equal to the shaman’s level. At 7th level, the creature is also immune to paralysis for this duration. Once a creature has benefited from the draconic resilience hex, it cannot benefit from this hex again for 24 hours.'
    },

    {
        name: 'Evil Eye', 
        type: 'Su',
        desc: 'The shaman causes doubt to creep into the mind of a foe within 30 feet that she can see. The target takes a –2 penalty on one of the following (shaman’s choice): ability checks, AC, attack rolls, saving throws, or skill checks. This hex lasts a number of rounds equal to 3 + the shaman’s Wisdom modifier. A successful Will saving throw reduces this to just 1 round. At 8th level, the penalty increases to –4. This is a mind-affecting effect.'
    },

    {
        name: 'Fetish', 
        type: 'Ex',
        desc: 'The shaman receives Craft Wondrous Item as a bonus feat and gains a +4 insight bonus on Spellcraft checks to identify magic items permanently.'
    },

    {
        name:'Fortune', 
        type: 'Su',
        desc: 'The shaman grants a creature within 30 feet a bit of good luck for 1 round. The target can call upon this good luck once per round, allowing it to reroll any ability check, attack roll, saving throw, or skill check, taking the better result. The target creature must to decide to use this ability before the first roll is made. At 8th and 16th levels, the duration of this hex increases by 1 round. Once a creature has benefited from the fortune hex, it cannot benefit from it again for 24 hours.'
    },

    {
        name: 'Fury', 
        type: 'Su',
        desc: 'A shaman incites a creature within 30 feet into a primal fury. The target receives a +2 morale bonus on attack rolls and a +2 resistance bonus on saving throws against fear for a number of rounds equal to the shaman’s Wisdom modifier. At 8th and 16th levels, these bonuses increase by 1. Once a creature has benefited from the fury hex, it cannot benefit from it again for 24 hours.'
    },

    {
        name: 'Healing',
        type: 'Su',
        desc: 'A shaman soothes the wounds of those she touches. This acts as cure light wounds, using the shaman’s caster level. Once a creature has benefited from the healing hex, it cannot benefit from it again for 24 hours. At 5th level, this acts as cure moderate wounds.'
    },

    {
        name: 'Intimidating Display', 
        type: 'Ex',
        desc: 'The shaman can call upon some of the majesty and power of dragons to cow her enemies. The shaman gains Dazzling Display as a bonus feat, even if she does not meet the prerequisites, and she can use it even when not wielding a weapon.'
    },

    {
        name: 'Misfortune',
        type: 'Su',
        desc: 'The shaman causes a creature within 30 feet to suffer grave misfortune for 1 round. Anytime the creature makes an ability check, attack roll, saving throw, or skill check, it must roll twice and take the worse result. A successful Will saving throw negates this hex. At 8th level and 16th level, the duration of this hex is extended by 1 round. This hex affects all rolls the target must make while it lasts. Whether or not the save is successful, the creature cannot be the target of this hex again for 24 hours.'
    },

    {
        name: 'Secret', 
        type: 'Ex',
        desc: 'The shaman receives one metamagic feat as a bonus feat. The shaman must meet the prerequisites for the feat.'
    },

    {
        name: 'Shapeshift', 
        type: 'Su',
        desc: 'The shaman transforms herself into another form for a number of minutes per day equal to her level, as alter self. This duration does not need to be consecutive, but must be spent in 1-minute increments. Changing form (including changing back) is a standard action that doesn’t provoke an attack of opportunity. At 8th level, this ability works as beast shape I. At 12th level, this ability works as beast shape II. At 16th level, this ability works as beast shape III. At 20th level, this ability works as beast shape IV.'
    },

    {
        name: 'Silkstring Snare', 
        type: 'Su',
        desc: 'The shaman causes ribbons of spider silk to erupt from the ground beneath a single creature. The target must succeed at a Reflex save or be entangled and anchored in place. The foe can escape the silk as a standard action with a successful Escape Artist or Strength check at the same DC, or by dealing an amount of damage to the silk equal to double the shaman’s class level (the silk has hardness 0). This hex lasts a number of rounds equal to 3 + the shaman’s Wisdom modifier. A creature affected by this hex cannot be affected by it again for 24 hours.'
    },

    {
        name: 'Tongues', 
        type: 'Su',
        desc: 'The shaman understands any spoken language for a number of minutes per day equal to her level, as comprehend languages. This duration does not need to be consecutive, but it must be spent in 1-minute increments. At 5th level, a shaman can use this ability to speak any language, as tongues.'
    },

    {
        name: 'Ward',
        type: 'Su',
        desc: 'The shaman places a protective ward over one creature. The warded creature receives a +2 deflection bonus to AC and a +2 resistance bonus on saving throws. This effect lasts until the warded creature is hit or fails a saving throw. A shaman knows when a warded creature is no longer protected. A shaman can have only one ward active at a time. If the shaman uses this hex while a previous ward is still active, that previous ward immediately ends. A shaman cannot use this ability on herself. At 8th and 16th levels, the bonuses provided by this ward increase by 1.'
    },

    {
        name: 'Wings', 
        type: 'Su',
        desc: 'The shaman can grow a pair of wings for a number of minutes per day equal to her level. These minutes do not need to be consecutive, but they must be spent in 1-minute increments. Initially, these wings lack the power to allow the shaman to fly, but the shaman can use them as a secondary natural attack that deals 1d3 points of damage (1d2 for a Small shaman). At 3rd level, she can use the wings to safely descend any distance, as if using the feather fall spell. At 7th level, she can use the wings to fly with poor maneuverability and a fly speed of 30 feet, but the shaman must land at the end of each turn or fall. A shaman of 8th level or higher can select the wings hex a second time. This doubles the number of minutes per day the shaman can use her wings (2 minutes per level), and allows her to fly with average maneuverability and a fly speed of 30 feet while the wings are active.'
    },

    {
        name: 'Witch Hex',
        desc: 'The shaman selects any one hex normally available through the witch’s hex class feature. She treats her shaman level as her witch level when determining the powers and abilities of the hex. She uses her Wisdom modifier in place of her Intelligence modifier for the hex. She cannot select major hexes or grand hexes using this ability. The shaman cannot select a witch hex that has the same name as a shaman hex.'
    }
]

export default spirit