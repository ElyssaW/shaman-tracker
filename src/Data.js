let spirit = {

    ancestors: {  
        name: 'Ancestors',
        desc: 'A shaman that selects the ancestors spirit has wise eyes and thick white or silver hair. Fine wrinkles line the shaman’s face, becoming more obvious when she smiles or glowers. When she calls upon one of this spirit’s abilities, her hair glows as though lit from within, rustling of its own accord',
        id: 0,

        spells: [
            {   name: 'Unseen Servant',
                lvl: 1,
                link: 'https://www.d20pfsrd.com/magic/all-spells/e/enlarge-person'
            },
            {   name: 'Spiritual Weapon',
                lvl: 2,
                link: 'https://www.d20pfsrd.com/magic/all-spells/f/fog-cloud'
            },
            {   name: 'Heroism',
                lvl: 3,
                link: 'https://www.d20pfsrd.com/magic/all-spells/m/magic-vestment'
            },
            {   name: 'Spiritual Ally',
                lvl: 4,
                link: 'https://www.d20pfsrd.com/magic/all-spells/w/wall-of-fire'
            },
            {   name: 'Telekinesis',
                lvl: 5,
                link: 'https://www.d20pfsrd.com/magic/all-spells/r/righteous-might'
            },
            {   name: 'Greater Heroism',
                lvl: 6,
                link: 'https://www.d20pfsrd.com/magic/all-spells/b/bull-s-strength'
            },
            {   name: 'Ethereal Jaunt',
                lvl: 7,
                link: 'https://www.d20pfsrd.com/magic/all-spells/c/control-weather'
            },
            {   name: 'Vision',
                lvl: 8,
                link: 'https://www.d20pfsrd.com/magic/all-spells/e/earthquake'
            },
            {   name: 'Astral Projection',
                lvl: 9,
                link: 'https://www.d20pfsrd.com/magic/all-spells/s/storm-of-vengeance'
            },
        ],

        spiritAnimal: {
            desc: 'The shaman’s spirit animal has streaks of gray or silver hide, hair, or fur, and long facial hair that appears similar to a wispy mustache or bushy eyebrows.The spirit animal can speak and understand a number of bonus languages equal to the shaman’s Charisma bonus'
        },

        baseSpiritAbility: {
            name: 'Ancestor\'s Council',
            type: '(Su)',
            desc: 'As a standard action the shaman can call upon her ancestors to provide advice and assistance to one ally within 30 feet. The ally gains a +2 bonus on any attack roll, saving throw, ability check, or skill check made before the beginning of the shaman’s next turn. The shaman can use this ability a number of times per day equal to 3 + her Charisma bonus'
        },

        greaterSpiritAbility: {
            name: 'Ancestral Weapon',
            type: '(Su)',
            desc: 'As a standard action, the shaman can summon an appropriately-sized simple or martial weapon with a +1 enhancement bonus from her family’s history. She is always considered proficient with this weapon. At 15th level and 19th level, the weapon’s enhancement bonus increases by 1. At 11th level, the weapon gains the ghost touch weapon property. The shaman can use this ability for a number of minutes per day equal to her shaman level. This duration does not need to be consecutive, but it must be used in 1-minute increments. The weapon disappears 1 round after leaving the shaman’s grasp.'
        },

        trueSpiritAbility: {
            name: 'Ancestral Guardian',
            type: '(Sp)',
            desc: 'The shaman can call on the ancient allies of her ancestors to physically appear and assist her, even if they have moved on to new roles in the cosmos. Once per day as a standard action, the shaman can cast planar ally. Although there is no cost to use the spell-like ability, the planar ally demands payment for services it performs as normal for the spell.'
        },

        manifest: 'Upon reaching 20th level, the shaman becomes one with the spirits of her ancestors. She gains a bonus on Will saving throws equal to her Charisma modifier, blindsense out to a range of 60 feet, and a +4 bonus to her caster level for all divination spells. She can cast astral projection as a spell-like ability once per day without requiring material components.',

        hex: [
            {
                name: 'Ancestral Blessing',
                type: '(Su)',
                desc: 'The shaman can grant the blessings of her ancestors to any ally within 30 feet. The blessed creature receives a +1 competence bonus on attack and damage rolls. This blessing lasts until the blessed creature hits with an attack or deals damage to a target. The shaman can have only one ancestral blessing active at a time. If the shaman uses this ability again, the previous blessing immediately ends. At 8th level and 16th level, the bonuses provided by this blessing increase by 1.'
            }, {
                name: 'Ghost Blade',
                type: '(Su)',
                desc: 'The shaman can touch a creature to grant all of her weapons the ghost touch weapon property for a number of rounds equal to her Charisma bonus. Once a creature has been the target of this ability, it cannot be the target of this ability again for 24 hours.',
            }, {
                name: 'Intercessor',
                type: '(Sp)',
                desc: 'The shaman can invoke an ancestor spirit into an intact, humanoid or monstrous humanoid corpse to learn what the body knew in life. The acts as speak with dead, but the shaman may ask only a single question. If an animated corpse or undead is targeted with this ability, the hex immediately fails. Once a corpse has answered a single question, it cannot be targeted with this ability again.'
            }, {
                name: 'Might of the Fallen',
                type: '(Su)',
                desc: 'The shaman can call upon the ancestral heroes of her family to bolster ailing allies. As a standard action, the shaman can cure 1 point of temporary ability damage affecting the creature touched. At 7th level, this increases to 1d4 points of temporary ability damage. Once a creature has been the target of this hex, it cannot be the target of this hex again for 24 hours'
            }, {
                name: 'Wisdom of the Ages',
                type: '(Su)',
                desc: 'The shaman can call upon her ancestors for lore and guidance. She can use her Wisdom modifier instead of her Intelligence modifier on all Intelligence-based skill checks'
            }
        ],

        source: 'Pathfinder Player Companion: Cohorts and Companions'
    },

    battle: {
        name: 'Battle',
        desc: 'A shaman who selects the battle spirit gains scars from every wound she takes, and the grit of battle always seems to cling on her body. When she calls upon one of this spirit’s abilities, she grows in stature—becoming taller and more muscular, with a grimace of rage stretching across her face.',
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
        ],

        source: 'Pathfinder Roleplaying Game: Advanced Class Guide'
    },

    bones: {
        name: 'Bones',
        desc: 'A shaman who selects the bones spirit is cadaverously thin, with sunken eye sockets and dead eyes that stare off into the distance. Her body has a faint smell of the grave. When she calls upon one of this spirit’s abilities, a ghostly wind whips her hair and clothes about, and the unpleasant stench becomes more prominent.',
        id: 0,

        spells: [
            {   name: 'Cause Fear',
                lvl: 1,
                link: 'https://www.d20pfsrd.com/magic/all-spells/e/enlarge-person'
            },
            {   name: 'False Life',
                lvl: 2,
                link: 'https://www.d20pfsrd.com/magic/all-spells/f/fog-cloud'
            },
            {   name: 'Animate Dead',
                lvl: 3,
                link: 'https://www.d20pfsrd.com/magic/all-spells/m/magic-vestment'
            },
            {   name: 'Fear',
                lvl: 4,
                link: 'https://www.d20pfsrd.com/magic/all-spells/w/wall-of-fire'
            },
            {   name: 'Slay Living',
                lvl: 5,
                link: 'https://www.d20pfsrd.com/magic/all-spells/r/righteous-might'
            },
            {   name: 'Circle of Death',
                lvl: 6,
                link: 'https://www.d20pfsrd.com/magic/all-spells/b/bull-s-strength'
            },
            {   name: 'Control Undead',
                lvl: 7,
                link: 'https://www.d20pfsrd.com/magic/all-spells/c/control-weather'
            },
            {   name: 'Horried Wilting',
                lvl: 8,
                link: 'https://www.d20pfsrd.com/magic/all-spells/e/earthquake'
            },
            {   name: 'Wail of the Banshee',
                lvl: 9,
                link: 'https://www.d20pfsrd.com/magic/all-spells/s/storm-of-vengeance'
            },
        ],

        spiritAnimal: {
            desc: 'The shaman’s spirit animal gives off a ghostly glow and seems nearly transparent. The animal is under the constant effects of blur, with a caster level equal to the shaman’s level.'
        },

        baseSpiritAbility: {
            name: 'Touch of the Grave',
            type: '(Su)',
            desc: 'As a standard action, the shaman can make a melee touch attack infused with negative energy that deals 1d4 points of damage + 1 point of damage for every 2 shaman levels she possesses. She can instead touch an undead creature to heal it of the same amount of damage. A shaman can use this ability a number of times per day equal to 3 + her Charisma modifier. At 11th level, any weapon that the shaman wields is treated as an unholy weapon'
        },

        greaterSpiritAbility: {
            name: 'Shard Soul',
            type: '(Su)',
            desc: 'The shaman gains DR 3/magic. This DR increases by 1 for every 4 shaman levels she possesses beyond 8th. In addition, as a standard action she can cause jagged pieces of bone to explode from her body in a 10-foot-radius burst. This deals 1d6 points of piercing damage for every 2 shaman levels she possesses. A successful Reflex saving throw halves this damage. The shaman can use this ability three times per day, but she must wait 1d4 rounds between each use.'
        },

        trueSpiritAbility: {
            name: 'Shedding Form',
            type: '(Su)',
            desc: 'As a standard action, the shaman sheds her body and becomes incorporeal. While in this form, all of her weapon attacks are considered to have the ghost touch weapon special ability. The shaman can use this ability for a number of rounds equal to her shaman level, though those rounds do not need to be consecutive.'
        },

        manifest: 'Upon reaching 20th level, the shaman becomes a spirit of death. Once per round, she can cast bleed or stabilize as a free action. If she is reduced to below 0 hit points, she automatically stabilizes. She can cast animate dead at will without paying a material component cost, although she is still subject to the usual Hit Dice control limit. Once per day, she can cast power word kill, but the spell can target a creature with 150 hit points or fewer.',

        hex: [
            {
                name: 'Grave Sight',
                type: '(Su)',
                desc: 'The shaman sees the states of life, death, undeath, and general health of those around her. When using this ability, she can tell whether or not creatures within 30 feet that she can see are living, wounded, dying, or dead, as well as determine if any are undead. Lastly, she can tell if those creatures are poisoned or diseased. The shaman can use this ability a number of rounds per day equal to her shaman level, but these rounds do not need to be consecutive'
            }, {
                name: 'Fearful Gaze',
                type: '(Su)',
                desc: 'With a single shout, the shaman causes one target creature within 30 feet to become shaken for 1 round. A successful Will saving throw negates this effect. At 8th level, she makes the target frightened instead. At 16th level, she makes it panicked instead. This is a mind-affecting fear effect. A creature affected by this hex cannot be affected by it again for 24 hours'
            }, {
                name: 'Deathly Being',
                type: '(Su)',
                desc: 'If the shaman is a living creature, she reacts to positive and negative energy as if she were undead—positive energy harms her, while negative energy heals her. If she’s an undead creature or a creature with the negative energy affinity ability, she gains a +1 bonus to her channel resistance. At 8th level, if she’s a living creature she gains a +4 bonus on saves against death effects and effects that drain energy, or if she’s an undead creature her bonus to channel resistance increases to +2. At 16th level, if the shaman a living creature, she takes no penalties from energy drain effects, though she can still be killed if she accrues more negative levels than she has Hit Dice. Furthermore, after 24 hours any negative levels the shaman has are removed without requiring her to succeed at an additional saving throw. If the shaman is an undead creature, her bonus to channel resistance increases to +4.'
            }, {
                name: 'Bone Ward',
                type: '(Su)',
                desc: 'A shaman touches a willing creature (including herself ) and grants a bone ward. The warded creature becomes encircled by a group of flying bones that grant it a +2 deflection bonus to AC for a number of rounds equal to the shaman’s level. At 8th level, the ward increases to +3 and lasts for 1 minute. At 16th level, the bonus increases to +4 and lasts for 1 hour. A creature affected by this hex cannot be affected by it again for 24 hours.'
            }, {
                name: 'Bone Lock',
                type: '(Su)',
                desc: 'With a quick incantation, the shaman causes a creature within 30 feet to suffer stiffness in the joints and bones, causing the target to be staggered 1 round. A successful Fortitude saving throw negates this effect. At 8th level, the duration is increased to a number of rounds equal to her shaman level, though the target can attempt a save each round to end the effect if its initial saving throw fails. At 16th level, the target can no longer attempt a saving throw each round to end the effect, although it still attempts the initial Fortitude saving throw to negate the effect entirely.'
            }
        ],

        source: 'Pathfinder Roleplaying Game: Advanced Class Guide'
    },

    flame: {
        name: 'Flame',
        desc: 'A shaman who selects the flame spirit has a radiant light behind her eyes and the faint smell of smoke about her. When she calls upon one of this spirit’s abilities, a hungry spectral flame dances around her body.',
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
        ],

        source: 'Pathfinder Roleplaying Game: Advanced Class Guide'
    }, 

    frost : {
        name: 'Frost',
        desc: 'Far to the north, some tribes have adapted to life in the bitter cold of arctic regions. The frost spirit is seen by some as a protector of their way of life, and shamans who commune with the spirit are shown great respect in their communities. A shaman who selects the frost spirit has coarse white hair and always feels cold to the touch.',
        id: 0,

        spells: [
            {   name: 'Frostbite',
                lvl: 1,
                link: 'https://www.d20pfsrd.com/magic/all-spells/e/enlarge-person'
            },
            {   name: 'Elemental Touch',
                lvl: 2,
                link: 'https://www.d20pfsrd.com/magic/all-spells/f/fog-cloud'
            },
            {   name: 'Elemental Aura',
                lvl: 3,
                link: 'https://www.d20pfsrd.com/magic/all-spells/m/magic-vestment'
            },
            {   name: 'Ice Storm',
                lvl: 4,
                link: 'https://www.d20pfsrd.com/magic/all-spells/w/wall-of-fire'
            },
            {   name: 'Summon Monster V (Ice elementals only)',
                lvl: 5,
                link: 'https://www.d20pfsrd.com/magic/all-spells/r/righteous-might'
            },
            {   name: 'Freezing Sphere',
                lvl: 6,
                link: 'https://www.d20pfsrd.com/magic/all-spells/b/bull-s-strength'
            },
            {   name: 'Ice Body',
                lvl: 7,
                link: 'https://www.d20pfsrd.com/magic/all-spells/c/control-weather'
            },
            {   name: 'Polar Ray',
                lvl: 8,
                link: 'https://www.d20pfsrd.com/magic/all-spells/e/earthquake'
            },
            {   name: 'Mass Icy Prison',
                lvl: 9,
                link: 'https://www.d20pfsrd.com/magic/all-spells/s/storm-of-vengeance'
            },
        ],

        hex: [
            {
                name: 'Biting Frost',
                type: '(Su)',
                desc: 'The shaman turns the air frigid around a target within 30 feet for a number of rounds equal to the shaman’s Charisma modifier (minimum 1). The target must attempt a Fortitude saving throw at the beginning of each turn or be damaged by exposure to the extreme cold. On a failed save, the target takes 1d6 points of nonlethal damage. On a successful save, the effect ends immediately. Whether or not the initial save is successful, the creature cannot be the target of this hex again for 24 hours.'
            }, {
                name: 'Hypothermia',
                type: '(Su)',
                desc: 'The shaman afflicts a creature within 30 feet with hypothermia. The target must attempt a Fortitude saving throw. On a failed save, the target is fatigued for 2 rounds. At 8th and 16th levels, the duration of this hex is extended by 1 round. Whether or not the save is sucessful, the creature cannot be the target of this hex again for 24 hours.'
            }, {
                name: 'Sluggish',
                type: '(Su)',
                desc: 'The shaman causes the speed of a creature within 30 feet to be halved. The target can attempt a Fortitude saving throw to negate this effect. The penalty lasts for a number of rounds equal to the shaman’s character level and does not stack with other effects that reduce speed. Whether or not the save is successful, the creature can’t be the target of this hex again for 24 hours.'
            }, {
                name: 'Tundra Dweller',
                type: '(Su)', 
                desc: 'The shaman touches a willing creature and grants it cold resistance 10 for a number of rounds equal to her Charisma modifier (minimum 1). This resistance does not stack with any other cold resistance, such as from special abilities or magical items. At 8th and 16th levels, the duration of this hex is extended by 1 round. A creature targeted by this hex cannot be affected by it again for 24 hours.'
            }, {
                name: 'Wilds-Attuned',
                type: '(Ex)',
                desc: 'The shaman receives Animal Affinity as a bonus feat and gains a +4 insight bonus on Knowledge (nature) checks when in a cold climate.'
            }
        ],

        spiritAnimal: {
            name: 'Spirit Animal',
            desc: 'The shaman’s spirit animal is covered in a light layer of glimmering frost, and its breath comes out as mist regardless of the temperature. The animal has resistance 5 to cold and electricity.'
        },

        baseSpiritAbility: {
            name: 'Ice Splinter',
            type: '(Su)',
            desc: 'As a standard action, the shaman can shoot razor-sharp icicles at an enemy within 30 feet as a ranged touch attack. This barrage deals 1d6 points of piercing damage + 1 point for every 2 shaman levels she has. The shaman can use this ability a number of times per day equal to 3 + her Charisma modifier. At 11th level, any weapon she wields is treated as a frost weapon.'
        },

        greaterSpiritAbility: {
            name: 'Frigid Blast',
            type: '(Su)',
            desc: 'The shaman gains cold resistance 10. In addition, as a standard action, she can summon an icy blast in a 20-foot-radius burst originating from a point she can see within 30 feet. This blast deals cold damage equal to 1d6 per shaman level she has to each creature caught in the burst. Each target can attempt a Reflex saving throw to halve this damage. The shaman can use this ability three times per day, but she must wait at least 1d4 rounds between each use.'
        },

        trueSpiritAbility: {
            name: 'Guardian of the North',
            type: '(Su)',
            desc: 'As a standard action, the shaman assumes the form, as beast shape IV, of one of the following animals: dire bear, dire tiger, mastodon, or woolly rhinoceros. The duration of this transformation is 1 hour per level. The shaman can use this ability once per day.'
         },

        manifest: 'Upon reaching 20th level, the shaman becomes a being of ice and snow. The shaman gains immunity to cold. She can also apply any one of the following feats to any spell with the cold descriptor that she casts without increasing the spell’s level or casting time: Enlarge Spell, Extend Spell, Silent Spell, or Still Spell. She doesn’t need to have these feats to use this ability.',

        source: 'Pathfinder Player Companion: Heroes of Golarion'
    },

    Heavens: {
        name: 'Heavens',
        desc: 'A shaman who selects the heavens spirit has eyes that sparkle like starlight, exuding an aura of otherworldliness to those she is around. When she calls upon one of this spirit’s abilities, her eyes turn pitch black and the colors around her drain for a brief moment.',
        id: 5,

        spells: [
            {   name: 'Color Spray',
                lvl: 1,
                link: 'https://www.d20pfsrd.com/magic/all-spells/e/enlarge-person'
            },
            {   name: 'Hypnotic Pattern',
                lvl: 2,
                link: 'https://www.d20pfsrd.com/magic/all-spells/f/fog-cloud'
            },
            {   name: 'Daylight',
                lvl: 3,
                link: 'https://www.d20pfsrd.com/magic/all-spells/m/magic-vestment'
            },
            {   name: 'Rainbow Pattern',
                lvl: 4,
                link: 'https://www.d20pfsrd.com/magic/all-spells/w/wall-of-fire'
            },
            {   name: 'Overland Flight',
                lvl: 5,
                link: 'https://www.d20pfsrd.com/magic/all-spells/r/righteous-might'
            },
            {   name: 'Chain Lightning',
                lvl: 6,
                link: 'https://www.d20pfsrd.com/magic/all-spells/b/bull-s-strength'
            },
            {   name: 'Prismatic Spray',
                lvl: 7,
                link: 'https://www.d20pfsrd.com/magic/all-spells/c/control-weather'
            },
            {   name: 'Sunburst',
                lvl: 8,
                link: 'https://www.d20pfsrd.com/magic/all-spells/e/earthquake'
            },
            {   name: 'Meteor Swarm',
                lvl: 9,
                link: 'https://www.d20pfsrd.com/magic/all-spells/s/storm-of-vengeance'
            },
        ],
        
        hex: [
            {
                name: 'Enveloping Void',
                type: '(Su)',
                desc: 'The shaman curses one creature with the dark void. As a standard action, the shaman can cause one enemy within 30 feet to treat the light level as two steps lower: bright light becomes dim light, normal light becomes darkness, and areas of dim light and darkness become supernaturally dark (like darkness, but even creatures with darkvision cannot see). This effect lasts for a number of rounds equal to the shaman’s level. A successful Will saving throw negates this effect. Whether or not the save is successful, the creature cannot be the target of this hex again for 24 hours.'
            }, {
                name: 'Guiding Star',
                type: '(Su)',
                desc: 'Whenever the shaman can see the open sky at night, she can determine her precise location and can add her Wisdom modifier to her Charisma modifier on all Charisma-based skill checks. In addition, once per night while outdoors, she can cast one spell as if it were modified by the Empower Spell, Extend Spell, Silent Spell, or Still Spell feat without increasing the spell’s casting time or level. The shaman doesn’t need to possess the feat to use this ability.'
            }, {
                name: 'Heaven\'s Leap',
                type: '(Su)',
                desc: 'The shaman is adept at creating tiny tears in the fabric of space, and temporarily stitching them together to reach other locations through a limited, one-way wormhole. As a standard action, the shaman can designate herself or a single ally that she can see who is within 30 feet of her. She can move that creature as if it were subject to jester’s jaunt. Once targeted by this hex, the ally cannot be the target of this hex again for 24 hours'
            }, {
                name: 'Lure of the Heavens',
                type: '(Su)',
                desc: 'The shaman’s connection to the skies above is so strong that her feet barely touch the ground. At 1st level, she no longer leaves tracks. At 5th level, she can hover up to 6 inches above the ground or liquid surfaces. At 10th level, the shaman gains the ability to fly (as the spell) for a number of minutes per day equal to her shaman level—the duration does not need to be consecutive, but it must be used in 1-minute increments.'
            }, {
                name: 'Starburn',
                type: '(Su)',
                desc: 'As a standard action, the shaman causes one creature within 30 feet to burn like a star. The creature takes 1d6 points of fire damage for every 2 levels the shaman possesses and emits bright light for 1 round. A successful Fortitude saving throw halves the damage and negates the emission of bright light. The shaman can use this hex a number of times per day equal to her Charisma modifier (minimum 1), but must wait 1d4 rounds between uses'
            }
        ],

        spiritAnimal: {
            desc: 'The flesh of the shaman’s spirit animal accurately reflects the stars that would be visible in the night sky, no matter where the animal is or the time of day. Due to this, it can be used as a star map. In addition, it gains a fly speed of 5 feet; if the animal already has a fly speed, instead its fly speed increases by 10 feet. While the animal is flying, a small nimbus of light surrounds it.'
        },

        baseSpiritAbility: {
            name: 'Stardust',
            type: '(Sp)',
            desc: 'As a standard action, the shaman causes stardust to materialize around one creature within 30 feet. This stardust causes the target to shed light as a candle, and it cannot benefit from concealment or any invisibility effects. The creature takes a –1 penalty on attack rolls and sight-based Perception checks. This penalty to attack rolls and Perception checks increases by 1 at 4th level and every 4 levels thereafter, to a maximum of –6 at 20th level. This effect lasts for a number of rounds equal to half the shaman’s level (minimum 1). Sightless creatures cannot be affected by this ability. The shaman can use this ability a number of times per day equal to 3 + her Charisma modifier.',
        },

        greaterSpiritAbility: {
            name: 'Void Adaptation',
            type: '(Su)',
            desc: 'The shaman gains darkvision 60 feet. If she already possesses darkvision, the range instead increases by 30 feet. In addition, the shaman can see in supernatural darkness, is constantly under the effects of endure elements, and doesn’t need to breathe.'
        },

        trueSpiritAbility: {
            name: 'Phantasmagoric Display',
            type: '(Sp)',
            desc: 'The shaman can cast prismatic wall and prismatic spray, each once per day with a caster level equal to her shaman level.'
         },

        manifest: 'Upon reaching 20th level, the shaman becomes the spirit of heaven. She receives a bonus on all saving throws equal to her Wisdom modifier. She automatically stabilizes if she is reduced to below 0 hit points. She’s immune to fear effects, and she automatically confirms all critical hits she threatens. If she dies, she’s reborn 3 days later in the form of a star child, maturing over the course of 7 days (as reincarnate).',

        source: 'Pathfinder Roleplaying Game: Advanced Class Guide'
    },

    life: {
        name: 'Life',
        desc: 'A shaman who selects the life spirit appears more vibrant than most mortals. Her skin seems to glow, and her teeth are a pearly white. When she calls upon one of this spirit’s abilities, her eyes and hair shimmer in the light.',
        id: 5,

        spells: [
            {   name: 'Detect Undead',
                lvl: 1,
                link: 'https://www.d20pfsrd.com/magic/all-spells/e/enlarge-person'
            },
            {   name: 'Lesser Restoration',
                lvl: 2,
                link: 'https://www.d20pfsrd.com/magic/all-spells/f/fog-cloud'
            },
            {   name: 'Neutralize Poison',
                lvl: 3,
                link: 'https://www.d20pfsrd.com/magic/all-spells/m/magic-vestment'
            },
            {   name: 'Restoration',
                lvl: 4,
                link: 'https://www.d20pfsrd.com/magic/all-spells/w/wall-of-fire'
            },
            {   name: 'Breath of Life',
                lvl: 5,
                link: 'https://www.d20pfsrd.com/magic/all-spells/r/righteous-might'
            },
            {   name: 'Heal',
                lvl: 6,
                link: 'https://www.d20pfsrd.com/magic/all-spells/b/bull-s-strength'
            },
            {   name: 'Greater Restoration',
                lvl: 7,
                link: 'https://www.d20pfsrd.com/magic/all-spells/c/control-weather'
            },
            {   name: 'Mass Heal',
                lvl: 8,
                link: 'https://www.d20pfsrd.com/magic/all-spells/e/earthquake'
            },
            {   name: 'True Resurrection',
                lvl: 9,
                link: 'https://www.d20pfsrd.com/magic/all-spells/s/storm-of-vengeance'
            },
        ],
        
        hex: [
            {
                name: 'Curse of Suffering',
                type: '(Su)',
                desc: 'The shaman causes a creature within 30 feet to take more damage from bleed effects and causes its wounds to heal at a slower rate. When the cursed creature takes bleed damage, it takes 1 additional point of bleed damage (even if the bleed is ability damage). Furthermore, when the target is subject to an effect that would restore its hit points, that effect restores only half the normal amount of hit points. This curse lasts for a number of rounds equal to the shaman’s level. A creature affected by this hex cannot be affected by it again for 24 hours.'
            }, {
                name: 'Deny Succor',
                type: '(Su)',
                desc: 'The shaman can place this hex on a single creature within 30 feet. The target does not heal damage from cure spells and does not benefit from any spells or effects that remove conditions. This effect lasts for a number of rounds equal to 1/2 the shaman’s level. A successful Will saving throw negates this effect. Whether or not the saving throw is successful, the creature cannot be the target of this hex again for 24 hours.'
            }, {
                name: 'Enhanced Cures',
                type: '(Su)',
                desc: 'When the shaman casts a cure spell, the maximum number of hit points healed is based on her shaman level, not the limit imposed by the spell. For example an 11th-level shaman with this hex can cast cure light wounds to heal 1d8+11 hit points instead of the normal 1d8+5 maximum.'
            }, {
                name: 'Life Link',
                type: '(Su)',
                desc: 'The shaman creates a bond between herself and another creature within 30 feet. Each round at the start of the shaman’s turn, if the bonded creature is wounded for 5 or more hit points below its maximum hit points, it heals 5 hit points and the shaman takes 5 points of damage. The shaman can have one bond active per shaman level. The bond continues until the bonded creature dies, the shaman dies, the distance between her and the bonded creature exceeds 100 feet, or the shaman ends it as an immediate action. If the shaman has multiple bonds active, she can end as many as she wants with the same immediate action.'
            }, {
                name: 'Life Sight',
                type: '(Ex)',
                desc: 'The shaman can see the states of life, death, and general health of those around her. When she uses this ability, she can tell whether or not creatures within 30 feet of her that she can see are living, wounded, dying, or dead. She can also tell if those creatures are confused, disabled, diseased, nauseated, poisoned, sickened or staggered. At 12th level, when using life sight she is able to sense all nearby living creatures; this functions similar to blindsight, but only for living creatures within 30 feet of her. The shaman can use this ability a number of rounds per day equal to her shaman level, but these rounds do not need to consecutive.'
            }
        ],

        spiritAnimal: {
            desc: 'The shaman’s spirit animal appears to be a beautiful and very healthy version of its species, and seems especially vibrant and full of life. Her animal companion gains fast healing 1; if the spirit animal already has fast healing, instead its fast healing increases by 1.'
        },

        baseSpiritAbility: {
            name: 'Channel',
            type: '(Su)',
            desc: 'The shaman can channel positive energy like a cleric, using her shaman level as her effective cleric level when determining the amount of damage healed (or dealt to undead) and the DC. The shaman can use this ability a number of times per day equal to 1 + her Charisma modifier.',
        },

        greaterSpiritAbility: {
            name: 'Healer\'s Touch',
            type: '(Su)',
            desc: 'The shaman gains a +4 bonus on Heal checks. As a standard action, the shaman can move up to half her speed and touch up to six dying creatures. Each creature is automatically stabilized without the need of a Heal check.'
        },

        trueSpiritAbility: {
            name: 'Quick Healing',
            type: '(Su)',
            desc: 'The shaman calls upon her spirit to enhance the speed of her healing abilities. This ability allows her to channel positive energy or cast a cure spell as a swift action. The shaman can use this ability a number of times per day equal to her Charisma modifier.'
         },

        manifest: 'Upon reaching 20th level, the shaman becomes a perfect channel for life energy. She gains immunity to bleed, death attacks, and negative energy, as well as to the exhausted, fatigued, nauseated, and sickened conditions. Ability damage and drain cannot reduce her to below 1 in any ability score. She automatically succeeds at saving throws against massive damage. When she is reduced to below 0 hit points, she doesn’t die until her negative hit point total exceeds double her Constitution score.',

        source: 'Pathfinder Roleplaying Game: Advanced Class Guide'
    },

    lifeAlt: {
        name: 'Restoration',
        desc: 'A shaman who selects the life spirit appears more vibrant than most mortals. Her skin seems to glow, and her teeth are a pearly white. When she calls upon one of this spirit’s abilities, her eyes and hair shimmer in the light.',
        id: 5,

        spells: [
            {   name: 'Remove Sickness',
                lvl: 1,
                link: 'https://www.d20pfsrd.com/magic/all-spells/e/enlarge-person'
            },
            {   name: 'Lesser Restoration',
                lvl: 2,
                link: 'https://www.d20pfsrd.com/magic/all-spells/f/fog-cloud'
            },
            {   name: 'Neutralize Poison',
                lvl: 3,
                link: 'https://www.d20pfsrd.com/magic/all-spells/m/magic-vestment'
            },
            {   name: 'Restoration',
                lvl: 4,
                link: 'https://www.d20pfsrd.com/magic/all-spells/w/wall-of-fire'
            },
            {   name: 'Breath of Life',
                lvl: 5,
                link: 'https://www.d20pfsrd.com/magic/all-spells/r/righteous-might'
            },
            {   name: 'Heal',
                lvl: 6,
                link: 'https://www.d20pfsrd.com/magic/all-spells/b/bull-s-strength'
            },
            {   name: 'Greater Restoration',
                lvl: 7,
                link: 'https://www.d20pfsrd.com/magic/all-spells/c/control-weather'
            },
            {   name: 'Mass Heal',
                lvl: 8,
                link: 'https://www.d20pfsrd.com/magic/all-spells/e/earthquake'
            },
            {   name: 'True Resurrection',
                lvl: 9,
                link: 'https://www.d20pfsrd.com/magic/all-spells/s/storm-of-vengeance'
            },
        ],
        
        hex: [
            {
                name: 'Shell of Succor',
                type: '(Su)',
                desc: 'The shaman surrounds one touched creature with a ward of succoring energy, granting the target a number of temporary hit points equal to her Wisdom bonus + an additional 1d6 temporary hit points per 2 shaman levels she has (maximum 10d6). These temporary hit points last a number of minutes equal to the shaman’s level. The target always loses these temporary hit points first, even before other temporary hit points (including those from a kineticist’s force ward defense wild talent). If an attack deals fewer points of damage than the target’s temporary hit points from this shell of succor ability, it still reduces those temporary hit points but otherwise counts as a miss for the purpose of abilities that trigger on a hit or a miss. The shaman can use this hex a number of times per day equal to 1 + her Charisma bonus.'
            }, {
                name: 'Spirit Boost',
                type: '(Su)',
                desc: 'Whenever the shaman casts a healing spell that heals a target up to its maximum hit points, any excess hit points persist for 1 round per shaman level as temporary hit points (up to a maximum number of temporary hit points equal to the shaman’s level).'
            }, {
                name: 'Enhanced Cures',
                type: '(Su)',
                desc: 'When the shaman casts a cure spell, the maximum number of hit points healed is based on her shaman level, not the limit imposed by the spell. For example an 11th-level shaman with this hex can cast cure light wounds to heal 1d8+11 hit points instead of the normal 1d8+5 maximum.'
            }, {
                name: 'Life Link',
                type: '(Su)',
                desc: 'The shaman creates a bond between herself and another creature within 30 feet. Each round at the start of the shaman’s turn, if the bonded creature is wounded for 5 or more hit points below its maximum hit points, it heals 5 hit points and the shaman takes 5 points of damage. The shaman can have one bond active per shaman level. The bond continues until the bonded creature dies, the shaman dies, the distance between her and the bonded creature exceeds 100 feet, or the shaman ends it as an immediate action. If the shaman has multiple bonds active, she can end as many as she wants with the same immediate action.'
            }, {
                name: 'Life Sight',
                type: '(Ex)',
                desc: 'The shaman can see the states of life, death, and general health of those around her. When she uses this ability, she can tell whether or not creatures within 30 feet of her that she can see are living, wounded, dying, or dead. She can also tell if those creatures are confused, disabled, diseased, nauseated, poisoned, sickened or staggered. At 12th level, when using life sight she is able to sense all nearby living creatures; this functions similar to blindsight, but only for living creatures within 30 feet of her. The shaman can use this ability a number of rounds per day equal to her shaman level, but these rounds do not need to consecutive.'
            }
        ],

        spiritAnimal: {
            desc: 'The shaman’s spirit animal appears to be a beautiful and very healthy version of its species, and seems especially vibrant and full of life. Her animal companion gains fast healing 1; if the spirit animal already has fast healing, instead its fast healing increases by 1.'
        },

        baseSpiritAbility: {
            name: 'Channel',
            type: '(Su)',
            desc: 'The shaman can channel positive energy like a cleric, using her shaman level as her effective cleric level when determining the amount of damage healed (or dealt to undead) and the DC. The shaman can use this ability a number of times per day equal to 1 + her Charisma modifier.',
        },

        greaterSpiritAbility: {
            name: 'Healer\'s Touch',
            type: '(Su)',
            desc: 'The shaman gains a +4 bonus on Heal checks. As a standard action, the shaman can move up to half her speed and touch up to six dying creatures. Each creature is automatically stabilized without the need of a Heal check.'
        },

        trueSpiritAbility: {
            name: 'Spirit of Life',
            type: '(Su)',
            desc: 'The shaman’s spirit animal transforms into a conduit of life energy able to store succoring magic that can keep the shaman’s allies safe. This allows the spirit animal to cast stabilize as a spell-like ability at will using the shaman’s level as the spell’s caster level. In addition, the shaman can transfer any cure spell (a spell with “cure” in its name) she casts to her spirit animal as a swift action, provided that the spirit animal is within 30 feet of her. This functions like imbue with spell ability, except a spirit animal can be imbued with a cure spell of any spell level that its master can cast regardless of the spirit animal’s Intelligence or Wisdom score. The spirit animal can hold the spell indefinitely, but the shaman cannot prepare a new spell in the imbued spell’s spell slot until her spirit animal uses the spell or it is slain, or until she dismisses the imbue with spell ability effect (a free action). A spirit animal can be imbued with only one spell at a time in this manner. If the spirit animal is slain while it is imbued with a cure spell, that spell is lost'
         },

        manifest: 'Upon reaching 20th level, the shaman becomes a perfect channel for life energy. She gains immunity to bleed, death attacks, and negative energy, as well as to the exhausted, fatigued, nauseated, and sickened conditions. Ability damage and drain cannot reduce her to below 1 in any ability score. She automatically succeeds at saving throws against massive damage. When she is reduced to below 0 hit points, she doesn’t die until her negative hit point total exceeds double her Constitution score.',

        source: 'Pathfinder Roleplaying Game: Advanced Class Guide'
    },

    lore: {
        name: 'Lore',
        desc: 'A shaman who selects the lore spirit appears far wiser and knowing that her age would suggest. Though she can seem unassuming, her eyes give the impression she is peering deep into all she looks at, seeing the secrets of the essential merely by concentrating.',
        id: 5,

        spells: [
            {   name: 'Identify',
                lvl: 1,
                link: 'https://www.d20pfsrd.com/magic/all-spells/e/enlarge-person'
            },
            {   name: 'Tongues',
                lvl: 2,
                link: 'https://www.d20pfsrd.com/magic/all-spells/f/fog-cloud'
            },
            {   name: 'Locate Object',
                lvl: 3,
                link: 'https://www.d20pfsrd.com/magic/all-spells/m/magic-vestment'
            },
            {   name: 'Legend Lore',
                lvl: 4,
                link: 'https://www.d20pfsrd.com/magic/all-spells/w/wall-of-fire'
            },
            {   name: 'Contact Other Plane',
                lvl: 5,
                link: 'https://www.d20pfsrd.com/magic/all-spells/r/righteous-might'
            },
            {   name: 'Mass Owl\'s Wisdom',
                lvl: 6,
                link: 'https://www.d20pfsrd.com/magic/all-spells/b/bull-s-strength'
            },
            {   name: 'Vision',
                lvl: 7,
                link: 'https://www.d20pfsrd.com/magic/all-spells/c/control-weather'
            },
            {   name: 'Moment of Prescience',
                lvl: 8,
                link: 'https://www.d20pfsrd.com/magic/all-spells/e/earthquake'
            },
            {   name: 'Time Stop',
                lvl: 9,
                link: 'https://www.d20pfsrd.com/magic/all-spells/s/storm-of-vengeance'
            },
        ],
        
        hex: [
            {
                name: 'Arcane Enlightenment',
                type: '(Su)',
                desc: 'The shaman’s native intelligence grants her the ability to tap into arcane lore. The shaman can add a number of spells from the sorcerer/wizard spell list equal to her Charisma modifier (minimum 1) to the list of shaman spells she can prepare. To cast these spells she must have an Intelligence score equal to at least 10 + the spell’s level, but the saving throw DCs of these spells are based on her Wisdom rather than Intelligence. When she casts these spells, they are treated as divine rather than arcane. Each time the shaman gains a level after taking this hex, she can choose to replace one of these spells for a new spell on the wizard/sorcerer spell list.'
            }, {
                name: 'Benefit of Wisdom',
                type: '(Ex)',
                desc: 'The shaman relies on wisdom rather than intellect to gain and retain knowledge. She can use her Wisdom modifier instead of her Intelligence modifier on all Intelligence-based skill checks.'
            }, {
                name: 'Brain Drain',
                type: '(Su)',
                desc: 'As a standard action, the shaman violently probes the mind of a single intelligent enemy within 30 feet. The target can attempt a Will saving throw to negate the effect. If it succeeds, it immediately knows the source of the mental prying; otherwise, it’s wracked with pain and takes 1d4 points of damage for every 2 levels the shaman possesses. On the round following her successful use of this ability, the shaman can take a full-round action to sort through the jumble of stolen thoughts and memories to attempt a single Knowledge check using the victim’s bonus with that skill. The random stolen thoughts remain in the shaman’s mind for a number of rounds equal to her Charisma modifier (minimum 1), and she can treat the knowledge gained as if she used detect thoughts. This is a mind-affecting effect. Once she successfully affects a creature, she cannot use this hex on that creature again for 24 hours.'
            }, {
                name: 'Confusion Curse',
                type: '(Ex)',
                desc: 'The shaman’s command of lore can cause weaker minds to become mired in confusion. The shaman chooses a single intelligent target within 30 feet. That creature must succeed at a Will saving throw or become confused for a number of rounds equal to the shaman’s Charisma modifier (minimum 1). Once affected by this hex, the creature cannot be the target of this hex again for 24 hours.'
            }, {
                name: 'Share Knowledge',
                type: '(Ex)',
                desc: 'The shaman targets a single willing ally within 30 feet and shares her knowledge and experience with that target for a number of minutes equal to her Charisma modifier. During that time, the subject knows the languages that the shaman does and uses the shaman’s skill modifier on all Knowledge checks instead of its own. A creature affected by this hex cannot be affected by it again for 24 hours.'
            }
        ],

        spiritAnimal: {
            desc: 'The shaman’s spirit animal appears to be quiet and unassuming. It gains a +2 bonus on Initiative checks and a +4 bonus on Stealth checks.'
        },

        baseSpiritAbility: {
            name: 'Monstrous Insight',
            type: '(Su)',
            desc: 'The shaman can identify creatures and gain insight into their strengths and weaknesses. As a standard action, the shaman can attempt a Knowledge skill check to identify a creature and its abilities (using the appropriate skill for the monster’s type) with an insight bonus equal to her shaman level. Whether or not the check is successful, she also gains a +2 insight bonus for 1 minute on attack rolls made against that creature and a +2 insight bonus to her AC against attacks made by that creature. These bonuses last for 1 minute. The shaman can use this ability a number of times per day equal to 3 + her Charisma modifier.',
        },

        greaterSpiritAbility: {
            name: 'Automatic Writing',
            type: '(Su)',
            desc: 'Once per day, the shaman can spend 10 minutes in uninterrupted meditation to tap into greater understanding. During this period, her hands produce mysterious writings pertaining to the future. This writing takes the form of divination with 90% effectiveness. The shaman can use this ability an additional time per day at 12th, 16th, and 20th levels.'
        },

        trueSpiritAbility: {
            name: 'Perfect Knowledge',
            type: '(Ex)',
            desc: 'The shaman gains the benefit of the tongues spell permanently. She also gains a +10 competence bonus on all Knowledge, Linguistics, and Spellcraft checks.'
         },

        manifest: 'Upon reaching 20th level, the shaman becomes an unending font of knowledge and lore. She can take 20 on all Knowledge skill checks, including those she isn’t trained in. Her understanding of the fundamental underpinnings of reality has also become so advanced that she can cast wish once per day. This doesn’t require a material component, but the wish cannot be used to grant ability score bonuses or replicate spells with expensive material components.',

        source: 'Pathfinder Roleplaying Game: Advanced Class Guide'
    },

    mammoth: {
        name: 'Mammoth',
        desc: 'A shaman who selects the mammoth spirit is abnormally tall and stocky, with thick shaggy hair. When she uses a special ability of this spirit, her muscles ripple and flex, and her stature seems even greater than before. At times, particularly when she uses her most powerful abilities, a ghostly image of a mammoth may seem to rise around her as a visible aura of ghostly power.',
        id: 5,

        spells: [
            {   name: 'Enlarge Person',
                lvl: 1,
                link: 'https://www.d20pfsrd.com/magic/all-spells/e/enlarge-person'
            },
            {   name: 'Bull\'s Strength',
                lvl: 2,
                link: 'https://www.d20pfsrd.com/magic/all-spells/f/fog-cloud'
            },
            {   name: 'Rage',
                lvl: 3,
                link: 'https://www.d20pfsrd.com/magic/all-spells/m/magic-vestment'
            },
            {   name: 'Stoneskin',
                lvl: 4,
                link: 'https://www.d20pfsrd.com/magic/all-spells/w/wall-of-fire'
            },
            {   name: 'Beast Shape III',
                lvl: 5,
                link: 'https://www.d20pfsrd.com/magic/all-spells/r/righteous-might'
            },
            {   name: 'Tar Pool',
                lvl: 6,
                link: 'https://www.d20pfsrd.com/magic/all-spells/b/bull-s-strength'
            },
            {   name: 'Summon Nature\'s Ally VII',
                lvl: 7,
                link: 'https://www.d20pfsrd.com/magic/all-spells/c/control-weather'
            },
            {   name: 'Frightful Aspect',
                lvl: 8,
                link: 'https://www.d20pfsrd.com/magic/all-spells/e/earthquake'
            },
            {   name: 'Polar Midnight',
                lvl: 9,
                link: 'https://www.d20pfsrd.com/magic/all-spells/s/storm-of-vengeance'
            },
        ],
        
        hex: [
            {
                name: 'Burden of the Beast',
                type: '(Su)',
                desc: 'The shaman causes one creature within 30 feet to become heavy and lethargic. The creature is treated as if it were carrying a medium load. If the creature is already carrying a medium load, it is instead treated as if it were carrying a heavy load. If the creature is carrying a heavy load, its maximum Dexterity bonus to AC is reduced to +0, it takes a –9 armor check penalty, and its movement is reduced to 5 feet. The effect lasts for a number of rounds equal to the shaman’s level. A successful Will saving throw negates this effect. Whether or not the save is successful, the creature cannot be the target of this hex again for 24 hours.'
            }, {
                name: 'Mammoth\'s Hide',
                type: '(Su)',
                desc: 'The shaman can touch a willing ally and cause its skin to thicken and sprout thick, shaggy fur. The creature gains a +2 enhancement bonus to natural armor and cold resistance 5 for 10 minutes. At 9th level, the enhancement bonus increases to +3 and the cold resistance to 10. At 15th level, this enhancement bonus increases to +4 and the cold resistance to 15. The shaman can use this ability a number of times per day equal to 3 + her Charisma bonus.'
            }, {
                name: 'Phantom Stampede',
                type: '(Su)',
                desc: 'The shaman summons a host of ghostly herd beasts to trample a single creature. These phantom beasts affect only the target creature, which is buffeted and pummeled by their passing. The creature takes no damage from the ability, but takes a -4 penalty to its CMD against bull rush, overrun, and trip attempts. Additionally, spellcasters under the effect of this ability take a -4 penalty on concentration checks. The target receives no saving throw to negate this effect. This effect lasts a number of rounds equal to the shaman’s level. The creature can’t be the target of this hex again for 24 hours.'
            }, {
                name: 'Primal Speaker',
                type: '(Ex)',
                desc: 'The shaman can speak with mammoths and any other megafauna or elephant creatures as if she were under the effects of speak with animals. At 5th level, the shaman gains a bonus on Handle Animal checks when dealing with those animals equal to half her shaman level. At 10th level, the shaman can affect one such animal within 30 feet as if she’d cast charm animal (Will negates). Whether or not the target succeeds at the saving throw, it can’t be the target of this hex again for 24 hours.'
            }, {
                name: 'Thunder Foot',
                type: '(Ex)',
                desc: 'The shaman’s body thickens and becomes more muscular. For the purpose of the overrun combat maneuver, she treats her shaman level as her base attack bonus when calculating her CMB and CMD. At 7th level, the shaman gains Improved Overrun as a bonus feat. At 11th level, the shaman gains Greater Overrun as a bonus feat. The shaman doesn’t need to meet the prerequisites of these feats.'
            }
        ],

        spiritAnimal: {
            desc: 'The shaman’s spirit animal appears more primal and prehistoric than an ordinary animal of its kind. It gains a +2 inherent bonus to its Strength score. The spirit animal loses this bonus when it manifests as a megafauna companion from the true spirit ability.'
        },

        baseSpiritAbility: {
            name: 'Powerful Smash',
            type: '(Ex)',
            desc: 'As a standard action, the shaman can attack an enemy with an unarmed strike as if she had the Improved Unarmed Strike feat. If the shaman hits a creature in this way, that creature must succeed at a Fortitude save (DC = 10 + half the shaman’s class level + her Charisma modifier) or be dazed for 1 round. The shaman can use this ability a number of times per day equal to 3 + her Charisma modifier.',
        },

        greaterSpiritAbility: {
            name: 'Strength of the Beast',
            type: '(Ex)',
            desc: 'The shaman gains a +2 enhancement bonus to her Strength score. This bonus increases by 2 every 6 shaman levels thereafter (at 14th and 20th levels for her spirit, and at 18th level for her wandering spirit).'
        },

        trueSpiritAbility: {
            name: 'Megafauna Companion',
            type: '(Su)',
            desc: 'The shaman’s spirit animal transforms into a megafauna animal companion, using the shaman’s shaman level as her effective druid level. The shaman must choose an arsinoitherium, baluchitherium, brontotherium, chalicotherium, deinotherium, elasmotherium, glyptodon, mastodon, megaloceros, megatherium, uintatherium, or another mammalian megafauna (including most dire animals) that has animal companion statistics. It retains its Intelligence score and the special abilities it gains from the spirit animal class feature, but it also has the statistics and abilities of an animal companion. If the animal companion is dismissed, lost, or dies, it can be replaced in the same way as a normal spirit animal.'
         },

        manifest: 'At 20th level, the shaman can transform into any animal listed under the megafauna or elephant heading. This ability works as per beast shape IV , but the shaman can activate and dismiss the ability as often as she likes and the duration is permanent.',

        source: 'Pathfinder Roleplaying Game Adventurer’s Guide'
    },

    nature: {
        name: 'Nature',
        desc: 'A shaman who selects the nature spirit takes on an appearance that reflects the aspect of the natural world she has the closest connection to. A nature shaman from the forest has a green tinge to her skin and hair, with eyes of sparkling emerald and the scent of green leaves and flowers about her. A nature shaman from the tundra is typically alabaster pale, with platinum hair and crystal blue eyes, and her skin always seems strangely cold.',
        id: 5,

        spells: [
            {   name: 'Charm Animal',
                lvl: 1,
                link: 'https://www.d20pfsrd.com/magic/all-spells/e/enlarge-person'
            },
            {   name: 'Barkskin',
                lvl: 2,
                link: 'https://www.d20pfsrd.com/magic/all-spells/f/fog-cloud'
            },
            {   name: 'Speak with Plants',
                lvl: 3,
                link: 'https://www.d20pfsrd.com/magic/all-spells/m/magic-vestment'
            },
            {   name: 'Grove of Respite',
                lvl: 4,
                link: 'https://www.d20pfsrd.com/magic/all-spells/w/wall-of-fire'
            },
            {   name: 'Awaken',
                lvl: 5,
                link: 'https://www.d20pfsrd.com/magic/all-spells/r/righteous-might'
            },
            {   name: 'Stone Tell',
                lvl: 6,
                link: 'https://www.d20pfsrd.com/magic/all-spells/b/bull-s-strength'
            },
            {   name: 'Creeping Doom',
                lvl: 7,
                link: 'https://www.d20pfsrd.com/magic/all-spells/c/control-weather'
            },
            {   name: 'Animal Shapes',
                lvl: 8,
                link: 'https://www.d20pfsrd.com/magic/all-spells/e/earthquake'
            },
            {   name: 'World Wave',
                lvl: 9,
                link: 'https://www.d20pfsrd.com/magic/all-spells/s/storm-of-vengeance'
            },
        ],
        
        hex: [
            {
                name: 'Entangling Curse',
                type: '(Su)',
                desc: 'The shaman entangles a creature within 30 feet for a number of rounds equal to the shaman’s Charisma modifier (minimum 1). A successful Reflex saving throw negates this effect. Whether or not the save is successful, the creature cannot be the target of this hex again for 24 hours.'
            }, {
                name: 'Erosion Curse',
                type: '(Su)',
                desc: 'The shaman summons the powers of nature to erode a construct or object within 30 feet. This erosion deals 1d6 points of damage per 2 shaman levels, ignoring hardness and damage reduction. If used against a construct or an object in another creature’s possession, the construct or the creature possessing the object can attempt a Reflex saving throw to halve the damage. Once an object or a construct is damaged by this erosion, it cannot be the target of this hex again for 24 hours.'
            }, {
                name: 'Friends to Animal',
                type: '(Su)',
                desc: 'The shaman can spontaneously cast summon nature’s ally spells as a druid. In addition, all animals within 30 feet of the shaman receive a sacred bonus on all saving throws equal to the shaman’s Charisma modifier.'
            }, {
                name: 'Speak with Animals',
                type: '(Ex)',
                desc: 'Choose a specific kind of animal: eagle, fox, dog, and so on. The shaman gains the ability to converse with that type of animal as if she were under the effects of speak with animal. The shaman gains the ability to communicate with an additional kind of animal for every 3 shaman levels she possesses (two animals at 3rd level, three at 6th, up to a maximum of seven at 18th level).'
            }, {
                name: 'Stormwalker',
                type: '(Su)',
                desc: 'The shaman can move through non-magical fog, rain, mist, snow, and other environmental effects without penalty (see Weather). She is never slowed by such effects, and she doesn’t need to attempt Acrobatics skill checks to move across such surfaces. She can also move through magical environmental effects that she created. At 10th level, the shaman can see twice as far as normal through environmental effects, whether or not they are magical in nature.'
            }
        ],

        spiritAnimal: {
            desc: 'The shaman’s spirit animal looks feral, and appears to be in peak physical form. The animal can move through any sort of undergrowth or natural difficult terrain at its normal speed without taking damage or suffering any other impairment. If the animal has a fly speed, it can ignore the penalty on Fly skill checks for winds up to windstorm strength.'
        },

        baseSpiritAbility: {
            name: 'Storm Burst',
            type: '(Su)',
            desc: 'As a standard action, the shaman causes a small storm of swirling wind and rain to form around one creature within 30 feet. This storm causes the target to treat all foes as if they had concealment, suffering a 20% miss chance for 1 round plus 1 round for every 4 shaman levels she possesses. The shaman can use this ability a number of times per day equal to 3 + her Charisma modifier. At 11th level, any weapon she wields is treated as a thundering weapon.',
        },

        greaterSpiritAbility: {
            name: 'Spirit of Nature',
            type: '(Su)',
            desc: 'Whenever the shaman is reduced to below 0 hit points, she automatically stabilizes and gains fast healing 1 for 1d4 rounds. At 15th level, this increases to fast healing 3.'
        },

        trueSpiritAbility: {
            name: 'Companion Animal',
            type: '(Su)',
            desc: 'The shaman’s spirit animal takes the form of an animal companion of her choice, using her shaman level as her effective druid level. The animal retains all the special abilities and the Intelligence score of the spirit animal, but also has the statistics and abilities of an animal companion. If the animal is dismissed, is lost, or dies, it can be replaced in the same way as a normal spirit animal'
         },

        manifest: 'Upon reaching 20th level, the shaman becomes a spirit of nature. Once per day, she can surround herself with an organic cocoon of silk as a full-round action. While enclosed in the cocoon, she’s considered helpless. Eight hours later, she emerges, having changed her type to plant, animal, or humanoid, and having gained superficial physical characteristics of the chosen type as appropriate. She must choose a type that is different from her current type. This effect change doesn’t alter her Hit Dice, hit points, saving throws, skill ranks, class skills, or proficiencies. The effect is permanent, until the shaman chooses to transform again. Each time the transformation is made, the shaman is cleansed of all poisons or diseases, restored to full hit points, and healed of all ability damage.',

        source: 'Pathfinder Roleplaying Game: Advanced Class Guide'
    },

    slums: {
        name: 'Slums',
        desc: 'A shaman who selects the slums spirit gains the city’s alleys and avenues as steadfast allies. The rats in the gutter, the torches along the walls, the coins that flow through the market are all a part of her and serve her whim.',
        id: 5,

        spells: [
            {   name: 'Charm Person',
                lvl: 1,
                link: 'https://www.d20pfsrd.com/magic/all-spells/e/enlarge-person'
            },
            {   name: 'Summon Swarm',
                lvl: 2,
                link: 'https://www.d20pfsrd.com/magic/all-spells/f/fog-cloud'
            },
            {   name: 'Hold Person',
                lvl: 3,
                link: 'https://www.d20pfsrd.com/magic/all-spells/m/magic-vestment'
            },
            {   name: 'Confusion',
                lvl: 4,
                link: 'https://www.d20pfsrd.com/magic/all-spells/w/wall-of-fire'
            },
            {   name: 'Wall of Stone',
                lvl: 5,
                link: 'https://www.d20pfsrd.com/magic/all-spells/r/righteous-might'
            },
            {   name: 'Mislead',
                lvl: 6,
                link: 'https://www.d20pfsrd.com/magic/all-spells/b/bull-s-strength'
            },
            {   name: 'Mass Hold Person',
                lvl: 7,
                link: 'https://www.d20pfsrd.com/magic/all-spells/c/control-weather'
            },
            {   name: 'Maze',
                lvl: 8,
                link: 'https://www.d20pfsrd.com/magic/all-spells/e/earthquake'
            },
            {   name: 'Imprisonment',
                lvl: 9,
                link: 'https://www.d20pfsrd.com/magic/all-spells/s/storm-of-vengeance'
            },
        ],
        
        hex: [
            {
                name: 'Accident',
                type: '(Su)',
                desc: 'The shaman causes a target within 30 feet to stumble and fall. The shaman attempts a caster level check with a DC equal to the target’s CMD against trip attempts. On a successful check, the target falls prone and takes 1d6 points of damage. If the target is adjacent to a pit or similar drop-off, he must also succeed at a Reflex save (with a DC equal to the shaman’s caster level check) or fall into the pit. Observers must succeed at a Perception or Sense Motive check with a DC equal to the shaman’s caster level check to identify her as the source of the accident.'
            }, {
                name: 'Bad Penny',
                type: '(Su)',
                desc: 'As a standard action, the shaman can curse a coin. The next bearer of the cursed coin takes a –2 penalty on all saving throws and skill checks as long he has the coin on his person. Once the coin leaves his person, the curse ends and the coin becomes a mundane piece of tender again. At 8th level, the penalty becomes –4. If the shaman curses a new coin, the previous curse ends. This is a curse effect.'
            }, {
                name: 'City Spirit',
                type: '(Su)',
                desc: 'As a swift action, the shaman channels the city’s spirit through herself, gaining a +4 bonus on all Dexterity– and Wisdom-based skill checks. She can use this ability for a number of rounds per day equal to 3 + her Charisma modifier. These rounds need not be consecutive.'
            }, {
                name: 'Ward of the City',
                type: '(Su)',
                desc: 'The spirit of the city shrouds one creature the shaman touches from the hazards of the slums. The warded creature gains a +5 bonus on saves against disease and poison, and a +25% bonus on percentage chances to negate critical hits and sneak attacks. (This stacks with effects such as fortification, or abilities that grant a creature with no chance to negate critical hits a flat 25% chance.) Each time the ward is used (whether the roll is successful or not), the bonuses are reduced by 1 and 5%, respectively. The ward ends when the bonuses are reduced to 0, when the shaman wards a new creature, or after 24 hours, whichever comes first. At 8th level and 16th level, the ward’s starting bonuses increase by 2 and 10%, respectively. A creature affected by this hex cannot be affected by it again for 24 hours.'
            }
        ],

        spiritAnimal: {
            desc: 'The shaman’s spirit animal looks like a leaner version of its species, with hungry eyes and a wiry frame. It gains a +4 bonus on initiative checks.'
        },

        baseSpiritAbility: {
            name: 'Doors to Everywhere',
            type: '(Ex)',
            desc: 'As a standard action, the shaman can step through any door and instantly exit through another distant doorway. Regardless of what spell this functions as, it can transport only you, and both your departure and arrival spaces must be adjacent to a door or similar opening. Initially, this functions as per jester’s jaunt. At 9th level, the shaman can use this ability as per dimension door. At 14th level, the shaman can use this ability as per tree stride (treating all doors as generic coniferous trees). You can use this ability three times per day, plus one additional time per day at 12th level and at 20th level.',
        },

        greaterSpiritAbility: {
            name: 'City\'s Shroud',
            type: '(Su)',
            desc: 'When in an urban environment, the shaman blends into the streets around her, making her difficult to pin down. She gains the evasion and improved uncanny dodge class features.'
        },

        trueSpiritAbility: {
            name: 'Paragon of the City',
            type: '(Su)',
            desc: 'As a standard action, the shaman assumes a spirit-infused paragon form that makes her a lethal stalker of the alleys and shadows. She gains the ability to make sneak attacks as a rogue of her shaman level for 1 minute or until dismissed. She can use this ability a number of times per day equal to 3 + her Charisma modifier.'
         },

        manifest: 'Upon reaching 20th level, the shaman becomes a spirit of the slums. She is immune to all diseases and poisons. When in an urban environment, she gains a +4 insight bonus to her AC and on Reflex saves.',

        source: 'Pathfinder Roleplaying Game: Advanced Class Guide'
    },

    stone: {
        name: 'Stone',
        desc: 'The skin of a shaman who selects the stone spirit takes on a rough, stony appearance. When the shaman calls upon one of this spirit’s abilities, tiny gemstones underneath her flesh pulse with a bright glow, like phosphorescent geodes glittering in a dark cave.',
        id: 5,

        spells: [
            {   name: 'Magic Stone',
                lvl: 1,
                link: 'https://www.d20pfsrd.com/magic/all-spells/e/enlarge-person'
            },
            {   name: 'Stone Call',
                lvl: 2,
                link: 'https://www.d20pfsrd.com/magic/all-spells/f/fog-cloud'
            },
            {   name: 'Meld into Stone',
                lvl: 3,
                link: 'https://www.d20pfsrd.com/magic/all-spells/m/magic-vestment'
            },
            {   name: 'Wall of Stone',
                lvl: 4,
                link: 'https://www.d20pfsrd.com/magic/all-spells/w/wall-of-fire'
            },
            {   name: 'Stoneskin',
                lvl: 5,
                link: 'https://www.d20pfsrd.com/magic/all-spells/r/righteous-might'
            },
            {   name: 'Stone Tell',
                lvl: 6,
                link: 'https://www.d20pfsrd.com/magic/all-spells/b/bull-s-strength'
            },
            {   name: 'Statue',
                lvl: 7,
                link: 'https://www.d20pfsrd.com/magic/all-spells/c/control-weather'
            },
            {   name: 'Repeal Metal and Stone',
                lvl: 8,
                link: 'https://www.d20pfsrd.com/magic/all-spells/e/earthquake'
            },
            {   name: 'Clashing Rocks',
                lvl: 9,
                link: 'https://www.d20pfsrd.com/magic/all-spells/s/storm-of-vengeance'
            },
        ],
        
        hex: [
            {
                name: 'Crystal Sight',
                type: '(Ex)',
                desc: 'The shaman sees through stone, earth, or sand as easily as if it were transparent crystal. Her gaze can penetrate a number of feet equal to her shaman level (or 1/12th this thickness of metal). The shaman can use this ability a number of rounds per day equal to her shaman level, but these rounds do not need to be consecutive.'
            }, {
                name: 'Lodestone',
                type: '(Su)',
                desc: 'The shaman causes one creature within 30 feet to become heavy and lethargic. The creature is treated as if it were carrying a medium load. If the creature is already carrying a medium load, it is instead treated as if it were carrying a heavy load. If the creature is carrying a heavy load, its maximum Dexterity bonus to AC is reduced to +0, it takes a –9 armor check penalty, and its movement is reduced to 5 feet. The effect lasts for a number of rounds equal to the shaman’s level. A successful Will saving throw negates this effect. Whether or not the save is successful, the creature cannot be the target of this hex again for 24 hours.'
            }, {
                name: 'Metal Curse',
                type: '(Su)',
                desc: 'The shaman causes a creature within 30 feet to become slightly magnetic until the end of the shaman’s next turn. Whenever the creature is attacked with a melee or ranged weapon constructed primarily of metal, it takes a –2 penalty to AC. At 8th and 16th levels, the penalty increases by –2 and the duration extends by 1 round. Once affected, the creature cannot be the target of this hex again for 24 hours.'
            }, {
                name: 'Stone Stability',
                type: '(Ex)',
                desc: ' The shaman receives a +4 bonus to her CMD when resisting bull rush or trip attempts as long as she is standing on the ground. At 5th level, the shaman receives Improved Trip as a bonus feat. At 10th level, the shaman receives Greater Trip as a bonus feat. The shaman does not need to meet the prerequisites of these feats.'
            }, {
                name: 'Ward of Stone',
                type: '(Su)',
                desc: 'The shaman touches a willing creature (including herself ) and grants a ward of stoene. The next time the warded creature is struck with a melee attack, it is treated as if it has DR 5/adamantine. This ward lasts for 1 minute, after which it fades away if not already expended. At 8th and 16th levels, the ward lasts for one additional attack. A creature affected by this hex cannot be affected by it again for 24 hours.'
            }
        ],

        spiritAnimal: {
            desc: 'The shaman’s spirit animal looks as though it’s made out of earth and stone, with tiny gemstones embedded in its flesh. The animal gains DR 5/adamantine.'
        },

        baseSpiritAbility: {
            name: 'Touch of Acid',
            type: '(Su)',
            desc: 'As a standard action, the shaman can make a melee touch attack that deals 1d6 points of acid damage + 1 point for every 2 shaman levels she possesses. A shaman can use this ability a number of times per day equal to 3 + her Charisma modifier. At 11th level, any weapon she wields is treated as a corrosive weapon..',
        },

        greaterSpiritAbility: {
            name: 'Body of Earth',
            type: '(Su)',
            desc: 'The shaman gains DR 2/adamantine. This DR increases by 1 for every 4 levels beyond 8th the shaman possesses. In addition, as a standard action, she can cause jagged pieces of stone to explode from her body in a 10-foot-radius burst. This deals 1d6 points of piercing damage per 2 shaman levels she possesses. A successful Reflex saving throw halves this damage. The shaman can use this ability three times per day, but she must wait 1d4 rounds between each use.'
        },

        trueSpiritAbility: {
            name: 'Elemental Form',
            type: '(Su)',
            desc: 'As a standard action, the shaman assumes the form of a Huge (or smaller) earth elemental, as elemental body IV with a duration of 1 hour per level. The shaman can use this ability once per day'
         },

        manifest: 'Upon reaching 20th level, the shaman becomes a being of acid and earth. The shaman gains acid resistance 30. She can also apply any one of the following feats to any acid or earth spell she casts without increasing the spell’s level or casting time: Enlarge Spell, Extend Spell, Silent Spell, or Still Spell. She doesn’t need to possess these feats to use this ability.',

        source: 'Pathfinder Roleplaying Game: Advanced Class Guide'
    },

    tribe: {
        name: 'Tribe',
        desc: 'A shaman who selects the tribe spirit strives to protect her allies, whether they be a traditional tribal unit or a chosen group of adventuring companions.',
        id: 5,

        spells: [
            {   name: 'Bless',
                lvl: 1,
                link: 'https://www.d20pfsrd.com/magic/all-spells/e/enlarge-person'
            },
            {   name: 'Shield Other',
                lvl: 2,
                link: 'https://www.d20pfsrd.com/magic/all-spells/f/fog-cloud'
            },
            {   name: 'Create Food and Water',
                lvl: 3,
                link: 'https://www.d20pfsrd.com/magic/all-spells/m/magic-vestment'
            },
            {   name: 'Spiritual Ally',
                lvl: 4,
                link: 'https://www.d20pfsrd.com/magic/all-spells/w/wall-of-fire'
            },
            {   name: 'Life Bubble',
                lvl: 5,
                link: 'https://www.d20pfsrd.com/magic/all-spells/r/righteous-might'
            },
            {   name: 'Battlemind Link',
                lvl: 6,
                link: 'https://www.d20pfsrd.com/magic/all-spells/b/bull-s-strength'
            },
            {   name: 'Vision',
                lvl: 7,
                link: 'https://www.d20pfsrd.com/magic/all-spells/c/control-weather'
            },
            {   name: 'Discern Location',
                lvl: 8,
                link: 'https://www.d20pfsrd.com/magic/all-spells/e/earthquake'
            },
            {   name: 'Mass Heal',
                lvl: 9,
                link: 'https://www.d20pfsrd.com/magic/all-spells/s/storm-of-vengeance'
            },
        ],
        
        hex: [
            {
                name: 'Curse of Faltering',
                type: '(Su)',
                desc: 'As an immediate action when an enemy within 30 feet threatens a critical hit, the shaman can force the creature to reroll its original attack roll with a penalty equal to the shaman’s Charisma modifier. The target can attempt a Will save to negate this ability. Whether or not the save is successful, the creature cannot be the target of this hex again for 24 hours. This is a curse effect'
            }, {
                name: 'Curse of Isolation',
                type: '(Ex)',
                desc: 'The shaman makes an enemy within 30 feet keenly feel its status outside the tribe. For a number of rounds equal to the shaman’s level, the target gains no benefit from flanking or the aid another action, and it doesn’t benefit from morale bonuses. The target can attempt a Will save to negate this ability. Whether or not the save is successful, the creature cannot be the target of this hex again for 24 hours. This is a curse effect.'
            }, {
                name: 'Steadfast Example',
                type: '(Su)',
                desc: 'The shaman touches a willing creature and bolsters its mental and emotional defenses. The next time the target attempts a Will saving throw, the subject can use the shaman’s Will saving throw bonus instead of his own. The shaman can have only one creature under the effect of this hex at a time, and a creature affected by this hex cannot be affected by it again for 24 hours.'
            }, {
                name: 'Threatening Coordination Hex',
                type: '(Su)',
                desc: 'The shaman causes a creature within 30 feet to view the shaman’s allies as obstacles. The target treats squares adjacent to the shaman’s allies as difficult terrain for a number of rounds equal to the shaman’s level, or for 1 round if the target succeeds at a Will saving throw. Whether or not the save is successful, a creature affected by this hex cannot be the target of it again for 24 hours.'
            }, {
                name: 'Touch of Succor',
                type: '(Su)',
                desc: 'The shaman can touch a willing creature as a standard action to remove one of the following conditions: fatigued, shaken, or sickened. At 8th level, she adds confused and frightened to the list of conditions she can remove. At 12th level, she also adds dazed, nauseated, and panicked. The shaman can use this ability a number of times per day equal to her shaman level'
            }
        ],

        spiritAnimal: {
            desc: 'The shaman’s spirit animal has colorations or markings that resemble a totem or important symbol for the shaman’s tribe. When the spirit animal successfully performs the aid another action, the bonus it provides increases by 1.'
        },

        baseSpiritAbility: {
            name: 'Tribal Cooperation',
            type: '(Su)',
            desc: 'The shaman gains a teamwork feat as a bonus feat. She must meet the feat’s prerequisites. As a standard action, the shaman can grant one of her teamwork feats to all allies within 30 feet who can see and hear her. Allies retain the use of this bonus feat for 3 rounds plus 1 round for every 2 levels the shaman has. Allies do not need to meet the prerequisites of this bonus feat. The shaman can use this ability a number of times per day equal to 3 + her Charisma modifier.',
        },

        greaterSpiritAbility: {
            name: 'Tribal Bond',
            type: '(Sp)',
            desc: 'The shaman and her tribe share a transcendent bond. Once per day when she communes with her spirit animal to regain spells, the shaman can select a number of creatures equal to half her shaman level to serve as her honorary tribe. These creatures can constantly communicate with each other, as telepathic bond.'
        },

        trueSpiritAbility: {
            name: 'Guardian of the Tribe',
            type: '(Su)',
            desc: 'The shaman can cast a harmless spell with a range of touch on a member of her tribal bond as long as that creature is within 30 feet. The shaman can use this ability a number of times per day equal to her Charisma modifier (minimum 1). In addition, she is constantly aware of the condition of all members of her tribal bond ability, as status.'
         },

        manifest: 'Upon reaching 20th level, the shaman embodies the strength and unity of her tribe. She gains a bonus on all of her saving throws equal to her Charisma modifier and becomes immune to compulsion spells and spell-like abilities. Once per day as a standard action, she can attempt to revive a creature connected to her by her tribal bond ability who has died within 1 round as breath of life, except that the spell can be cast at any range as long as the target is on the same plane, and the target regains a number of hit points equal to 10 × the shaman’s level (maximum 200).',

        source: 'Pathfinder Player Companion: Wilderness Origins'
    },
    
    waves: {
        name: 'Waves',
        desc: 'A shaman who selects the waves spirit has a fluid grace that exhibits itself whenever she moves. When she calls upon one of this spirit’s abilities, floating orbs dance about her, sublimating between icy crystals, misty vapors, and globules of water.',
        id: 5,

        spells: [
            {   name: 'Hydraulic Push',
                lvl: 1,
                link: 'https://www.d20pfsrd.com/magic/all-spells/e/enlarge-person'
            },
            {   name: 'Slipstream',
                lvl: 2,
                link: 'https://www.d20pfsrd.com/magic/all-spells/f/fog-cloud'
            },
            {   name: 'Water Breathing',
                lvl: 3,
                link: 'https://www.d20pfsrd.com/magic/all-spells/m/magic-vestment'
            },
            {   name: 'Wall of Ice',
                lvl: 4,
                link: 'https://www.d20pfsrd.com/magic/all-spells/w/wall-of-fire'
            },
            {   name: 'Geyser',
                lvl: 5,
                link: 'https://www.d20pfsrd.com/magic/all-spells/r/righteous-might'
            },
            {   name: 'Fluid Form',
                lvl: 6,
                link: 'https://www.d20pfsrd.com/magic/all-spells/b/bull-s-strength'
            },
            {   name: 'Vortex',
                lvl: 7,
                link: 'https://www.d20pfsrd.com/magic/all-spells/c/control-weather'
            },
            {   name: 'Seamantle',
                lvl: 8,
                link: 'https://www.d20pfsrd.com/magic/all-spells/e/earthquake'
            },
            {   name: 'Tsunami',
                lvl: 9,
                link: 'https://www.d20pfsrd.com/magic/all-spells/s/storm-of-vengeance'
            },
        ],
        
        hex: [
            {
                name: 'Beckoning Chill',
                type: '(Su)',
                desc: 'The shaman causes one creature within 30 feet to become more susceptible to the sapping powers of cold for 1 minute. When a creature takes cold damage while under this effect, it is entangled for 1 round. If the creature takes cold damage while already entangled by beckoning chill, the duration of the entangled condition increases by 1 round. Once affected, the creature cannot be the target of this hex again for 24 hours.'
            }, {
                name: 'Crashing Waves',
                type: '(Su)',
                desc: 'The force of a waves shaman’s water spells can bring even the mightiest of foes to the ground. When the shaman casts a spell with the water descriptor, she does so at 1 caster level higher. If that spell deals damage, the target must succeed at a Fortitude saving throw or be knocked prone. At 8th level, the shaman casts water spells at 2 caster levels higher. At 16th level, her ability to knock creatures prone extends to any spell that deals damage.'
            }, {
                name: 'Fluid Magic',
                type: '(Su)',
                desc: 'The shaman’s magic is not constrained by the reservoirs of magic that hold others back. She is able to prepare her spirit magic spells in her regular spell slots. If the shaman changes her wandering spirit, any prepared spirit magic spell belonging to that spirit becomes an open spell slot.'
            }, {
                name: 'Mist\'s Shroud',
                type: '(Su)',
                desc: 'The shaman touches a willing creature (including herself ) and enshrouds that creature in mist. This grants the creature concealment as the blur spell. The mist dissipates after it causes an attack to miss because of concealment or after 1 minute, whichever comes first. At 8th and 16th levels, the mist lasts for one additional attack. A creature affected by this hex cannot be affected by it again for 24 hours.'
            }, {
                name: 'Water Sight',
                type: '(Su)',
                desc: 'The shaman sees through fog and mist without penalty as long as there is enough light to otherwise allow her to see normally. At 7th level, she can use can use scrying, using any calm pool of water that’s at least 1 foot in diameter as the sole focus. At 15th level, this functions as greater scrying. She can use these abilities for a number of rounds per day equal to her shaman level, but these rounds do not need to be consecutive.'
            }
        ],

        spiritAnimal: {
            desc: 'The skin of the shaman’s spirit animal constantly distorts, much as a pond’s surface ripples when drops of water fall gently into it. The animal gains Mobility as a bonus feat. The animal doesn’t need to meet the prerequisites for this feat. In addition, the animal can breathe underwater.'
        },

        baseSpiritAbility: {
            name: 'Wave Strike',
            type: '(Su)',
            desc: 'As a standard action, the shaman can perform a melee touch attack that drenches a creature and pushes it away. The opponent takes 1d6 points of nonlethal damage + 1 point for every 2 shaman levels they possess and is pushed 5 feet directly away from the shaman. This movement does not provoke attacks of opportunity. A shaman can use this ability a number of times per day equal to 3 + her Charisma modifier. At 11th level, any melee weapon she wields is treated as if it had the quenching weapon special ability.',
        },

        greaterSpiritAbility: {
            name: 'Fluid Mastery',
            type: '(Su)',
            desc: 'The shaman gains a swim speed equal to her base land speed, as well as the ability to breathe underwater. In addition, she can unleash a torrent of ice and water from her hands in a 15-foot cone as a standard action. This torrent deals 1d4 points of cold damage per 2 shaman level she possesses, and pushes affected creatures back 5 feet directly away from the shaman. A successful Reflex saving throw halves the damage and negates the push. The shaman can use this ability three times per day, but she must wait 1d4 rounds between each use.'
        },

        trueSpiritAbility: {
            name: 'Elemental Form',
            type: '(Su)',
            desc: 'As a standard action, the shaman assumes the form of a Huge (or smaller) water elemental, as elemental body IV with a duration of 1 hour per level. The shaman can use this ability once per day.'
         },

        manifest: 'Upon reaching 20th level, the shaman becomes a master of cold and water. The shaman gains cold resistance 30. She can also apply any one of the following feats to any cold or water spell she casts without increasing the spell’s level or casting time: Enlarge Spell, Extend Spell, Silent Spell, or Still Spell. She doesn’t need to possess these feats to use this ability.',

        source: 'Pathfinder Roleplaying Game: Advanced Class Guide'
    },
    
    wind: {
        name: 'Wind',
        desc: 'A shaman who selects the wind spirit appears windswept, and her movements seem lithe and carefree.',
        id: 5,

        spells: [
            {   name: 'Alter Winds',
                lvl: 1,
                link: 'https://www.d20pfsrd.com/magic/all-spells/e/enlarge-person'
            },
            {   name: 'Gust of Wind',
                lvl: 2,
                link: 'https://www.d20pfsrd.com/magic/all-spells/f/fog-cloud'
            },
            {   name: 'Cloak of Winds',
                lvl: 3,
                link: 'https://www.d20pfsrd.com/magic/all-spells/m/magic-vestment'
            },
            {   name: 'River of Wind',
                lvl: 4,
                link: 'https://www.d20pfsrd.com/magic/all-spells/w/wall-of-fire'
            },
            {   name: 'Control Winds',
                lvl: 5,
                link: 'https://www.d20pfsrd.com/magic/all-spells/r/righteous-might'
            },
            {   name: 'Sirocco',
                lvl: 6,
                link: 'https://www.d20pfsrd.com/magic/all-spells/b/bull-s-strength'
            },
            {   name: 'Control Weather',
                lvl: 7,
                link: 'https://www.d20pfsrd.com/magic/all-spells/c/control-weather'
            },
            {   name: 'Whirlwind',
                lvl: 8,
                link: 'https://www.d20pfsrd.com/magic/all-spells/e/earthquake'
            },
            {   name: 'Winds of Vengeance',
                lvl: 9,
                link: 'https://www.d20pfsrd.com/magic/all-spells/s/storm-of-vengeance'
            },
        ],
        
        hex: [
            {
                name: 'Air Barrier',
                type: '(Su)',
                desc: 'The shaman creates an invisible shell of air that grants her a +4 armor bonus to AC. At 7th level and every 4 levels thereafter, this bonus increases by 2. At 13th level, this barrier causes incoming arrows, rays, and other ranged attacks requiring an attack roll against her to suffer a 50% miss chance. The shaman can use this barrier for 1 hour per shaman level. This duration does not need to be consecutive, but it must be spent in 1-hour increments.'
            }, {
                name: 'Sparking Aura',
                type: '(Su)',
                desc: 'The shaman causes a creature within 30 feet to spark and shimmer with electrical energy. Though this does not harm the creature, it does cause the creature to emit light like a torch, preventing it from gaining any benefit from concealment or invisibility. Furthermore, while the aura lasts, whenever the target is hit with a metal melee weapon, it also takes an amount of electricity damage equal to the shaman’s Charisma modifier. The sparking aura lasts a 1 round for every 2 shaman levels the shaman possesses. A creature affected by this hex cannot be affected by it again for 24 hours.'
            }, {
                name: 'Vortex Spells',
                type: '(Su)',
                desc: 'Whenever the shaman confirms a critical hit against an opponent with a spell, the target is staggered for 1 round. At 11th level, the duration increases to 1d4 rounds.'
            }, {
                name: 'Wind Sight',
                type: '(Su)',
                desc: 'The shaman ignores the penalties on Perception checks caused by wind and the first 100 feet of distance. At 7th level she can, as a standard action, hear or see into any area—as clairaudience or clairvoyance, using that spell’s range—provided that there’s an unobstructed path for air to travel between the shaman and the target area. This doesn’t require line of effect, meaning the path can turn corners and go through spaces as narrow as 1 inch in diameter. The shaman can use this ability a number of rounds per day equal to her shaman level, but these rounds do not need to be consecutive.'
            }, {
                name: 'Wind Ward',
                type: '(Su)',
                desc: 'The shaman can touch a willing creature (including herself ) and grants a ward of wind. This ward lasts for a number of rounds equal to the shaman’s level. When a warded creature is attacked with an arrow, ray, or other ranged attack that requires an attack roll, that attack suffers a 20% miss chance. At 8th level, the ward lasts for 1 minute for every level the shaman possesses. At 16th level, the miss chance increases to 50%. Once affected, the creature cannot be the target of this hex again for 24 hours.'
            }
        ],

        spiritAnimal: {
            desc: 'The shaman’s spirit animal crackles with electrical energy when it moves, giving off light like a candle. This electricity deals no damage to the animal or any creature that touches the animal. The animal gains electricity resistance 10'
        },

        baseSpiritAbility: {
            name: 'Shocking Touch',
            type: '(Su)',
            desc: 'As a standard action, the shaman can make a melee touch attack that deals 1d6 points of electricity damage + 1 point for every 2 shaman levels she possesses. A shaman can use this ability a number of times per day equal to 3 + her Charisma modifier. At 11th level, any weapon she wields is treated as a shocking weapon.',
        },

        greaterSpiritAbility: {
            name: 'Spark Soul',
            type: '(Su)',
            desc: 'The shaman gains electricity resistance 10. In addition, as a standard action she can unleash a 20-foot line of sparks from her fingertips, dealing 1d4 points of electricity damage per shaman level she possesses. A successful Reflex saving throw halves this damage. The shaman can use this ability three times per day, but she must wait 1d4 rounds between each use.'
        },

        trueSpiritAbility: {
            name: 'Elemental Form',
            type: '(Su)',
            desc: 'As a standard action, the shaman assumes the form of a Huge (or smaller) lightning elemental, as if using elemental body IV with a duration of 1 hour per level. The shaman can use this ability once per day.'
         },

        manifest: 'Upon reaching 20th level, the shaman becomes a being of air and electricity. The shaman gains electricity resistance 30. She can also apply any one of the following feats to any air or electricity spell she casts without increasing the spell’s level or casting time: Enlarge Spell, Extend Spell, Silent Spell, or Still Spell. She doesn’t need to possess these feats to use this ability.',

        source: 'Pathfinder Roleplaying Game: Advanced Class Guide'
    },
    
    wood: {
        name: 'Wood',
        desc: 'A shaman who selects the wood spirit has a skin tone similar to the coloration of trees in her home region. Her vibrant hair is fragrant and resembles leaves and blossoms.',
        id: 5,

        spells: [
            {   name: 'Shillelagh',
                lvl: 1,
                link: 'https://www.d20pfsrd.com/magic/all-spells/e/enlarge-person'
            },
            {   name: 'Barkskin',
                lvl: 2,
                link: 'https://www.d20pfsrd.com/magic/all-spells/f/fog-cloud'
            },
            {   name: 'Minor Creation (Wood items only)',
                lvl: 3,
                link: 'https://www.d20pfsrd.com/magic/all-spells/m/magic-vestment'
            },
            {   name: 'Thorn Body',
                lvl: 4,
                link: 'https://www.d20pfsrd.com/magic/all-spells/w/wall-of-fire'
            },
            {   name: 'Tree Stride',
                lvl: 5,
                link: 'https://www.d20pfsrd.com/magic/all-spells/r/righteous-might'
            },
            {   name: 'Ironwood',
                lvl: 6,
                link: 'https://www.d20pfsrd.com/magic/all-spells/b/bull-s-strength'
            },
            {   name: 'Transmute Metal to Wood',
                lvl: 7,
                link: 'https://www.d20pfsrd.com/magic/all-spells/c/control-weather'
            },
            {   name: 'Changestaff',
                lvl: 8,
                link: 'https://www.d20pfsrd.com/magic/all-spells/e/earthquake'
            },
            {   name: 'Wooden Phalanx',
                lvl: 9,
                link: 'https://www.d20pfsrd.com/magic/all-spells/s/storm-of-vengeance'
            },
        ],
        
        hex: [
            {
                name: 'Hex of Lignification',
                type: '(Su)',
                desc: 'The shaman causes a creature within 30 feet to turn into a twisted, treelike shape for 2 rounds. The target gains hardness 5 but is staggered, and can negate the effect with a successful Fortitude saving throw. Whether or not the target succeeds at its save, it can’t be the target of this hex again for 24 hours.'
            }, {
                name: 'Nature\'s Gift',
                type: '(Su)',
                desc: 'Once per day, the shaman can command trees and other plants to yield magical berries and fruit. This ability functions as goodberry, except the maximum number of hit points it can restore to a subject in a 24-hour period from this hex is equal to the shaman’s Charisma modifier (minimum 1 hit point per day).'
            }, {
                name: 'Spines and Brambles',
                type: '(Su)',
                desc: 'With a beckoning gesture, the shaman conjures spiny shrubs in a number of squares equal to her Charisma modifier (minimum 1) within 30 feet. The squares become filled with light undergrowth. The shaman can pass through the affected squares without impediment. When the shaman uses this hex again, any previously conjured undergrowth withers away.'
            }, {
                name: 'Verdant Path',
                type: '(Sp)',
                desc: 'Even the most tangled briars make way for the shaman, and suitable roots and branches appear to support her feet. The shaman gains woodland stride, as per the druid ability of the same name. At 8th level, she can use air walk at will whenever she is within 10 feet of a tree, though the effect ends instantly when she moves farther than 10 feet from a tree.'
            }, {
                name: 'Whispering Leaves',
                type: '(Sp)',
                desc: 'Whenever the shaman is within 10 feet of a tree or undergrowth, she can cast whispering wind as a spell-like ability with a caster level equal to her shaman level. The targeted area must also contain trees or undergrowth, which relay the message in a gentle, rustling voice. At 8th level, the shaman can also listen to the targeted area as though she were using clairaudience/clairvoyance for the 1 round during which the hex is delivering the message.'
            }
        ],

        spiritAnimal: {
            desc: 'The shaman’s spirit animal looks like a wooden figurine or a vaguely animal-shaped tree branch when it is motionless. The animal gains freeze as per the universal monster rule.'
        },

        baseSpiritAbility: {
            name: 'Tree Limb',
            type: '(Su)',
            desc: 'As a swift action, the shaman can turn one of her arms into a heavy, branch-like limb. She must drop anything held in that hand, and she can’t use this ability if she is wearing a shield on that arm. Until the beginning of her next turn, she gains a slam attack that deals 1d8 points of damage (for a Medium shaman; 1d6 if Small, 2d6 if Large). A shaman can use this ability a number of times per day equal to 3 + her Charisma modifier. At 8th level, the reach of this slam attack increases by 5 feet. At 16th level, the shaman can transform both of her arms, gaining two slam attacks.',
        },

        greaterSpiritAbility: {
            name: 'Bloody Roots',
            type: '(Sp)',
            desc: 'As a standard action, the shaman can cause a field of thick roots to burrow up from the ground. This ability functions as black tentacles with a caster level equal to the shaman’s level. The area is centered on the shaman when she activates the ability but remains stationary if she then moves. The shaman is unaffected by the roots. Her allies treat the area as difficult terrain, but the roots don’t attack them. The shaman can end the effect as a free action. She can use this ability a number of rounds per day equal to 3 + her Charisma modifier, but these rounds do not need to be consecutive.'
        },

        trueSpiritAbility: {
            name: 'Tree Form',
            type: '(Sp)',
            desc: 'As a standard action, the shaman can assume the form of a plant creature as per plant shape III with a duration of 1 hour per level. She can use this ability once per day.'
         },

        manifest: 'Upon reaching 20th level, the shaman becomes a living creature of wood. She is forevermore treated as a plant creature rather than her original creature type for the purposes of spells and magical effects. Her skin takes on the appearance of polished wood grain, and she gains a +4 natural armor bonus to her Armor Class and damage reduction 10/— against wooden weapons and the natural attacks of wooden and wood-like creatures. She gains immunity to paralysis, poison, polymorph, sleep, and stun. At will, the shaman can meld with any tree or single block of wood (as per meld into stone, except she can meld only with wood and has no limit on how long she can remain in the wood).',

        source: 'Pathfinder Roleplaying Game Ultimate Wilderness'
    }
}

export default spirit