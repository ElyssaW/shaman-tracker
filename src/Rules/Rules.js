import React, { Component } from 'react'
import Section from './Components/Section'
import Contents from './Components/Contents.js'

class Rules extends Component {
    render () {
        return (
            <div>
                <h1>Shaman</h1>

                < Contents 
                    contents={[
                        {id: 'skills', name:'Skills'},
                        {id: 'profs', name:'Proficiencies'},
                        {id: 'spirit', name:'Spirit'},
                        {id: 'spirit-animal', name:'Spirit Animal'},
                        {id: 'spirit-magic', name:'Spirit Magic'},
                        {id: 'hex', name:'Hex'},
                        {id: 'wand-spirit', name:'Wandering Spirit'},
                        {id: 'wand-hex', name:'Wandering Hex'},
                        {id: 'manifestation', name:'Manifestation'},
                        {id: 'hex-mastery', name:'Hex Mastery'}
                    ]}
                />

                <p>
                While some heroes speak to gods or consort with otherworldly muses, shamans commune with the spirits of the world and the energies that exist in every living thing. These divine adventurers draw upon their power to shape the world and expand the influence of their spiritual patrons. Shamans have strong ties to natural spirits. They form powerful bonds with particular spirits, and as their power grows they learn to call upon other spirits in times of need.
                </p>

                <p>
                Shamans make for potent divine spellcasters, capable of using divine spells and the power of their spirits to aid their allies and destroy their foes. While they aren’t the healers that clerics are, they can still fill that role when needed.
                </p>

                <p>
                <b>Alignment</b>: Any.
                </p>
                
                <p>
                <b>Hit Die:</b> d8.
                </p>

                <p>
                <b>Parent Classes:</b> Oracle and witch.
                </p>

                <p>
                <b>Starting Wealth:</b> 3d6 × 10 gp (average 105 gp.) In addition, each character begins play with an outfit worth 10 gp or less.
                </p>

                < Section 
                    id='skills'
                    title='Skills'
                    text={
                    <>
                        <p>
                        The shaman’s class skills are <b>Craft</b> (Int), <b>Diplomacy</b> (Cha), <b>Fly</b> (Dex), <b>Handle Animal</b> (Cha), <b>Heal</b> (Wis), <b>Knowledge (nature)</b> (Int), <b>Knowledge (planes)</b> (Int), <b>Knowledge (religion)</b> (Int), <b>Profession</b> (Wis), <b>Ride</b> (Dex), <b>Spellcraft</b> (Int), and <b>Survival</b> (Wis).
                        </p>
                        <p><b>Skill Ranks per Level</b>: 4 + Int modifier</p>
                    </>}
                />

                < Section
                    id='prof'
                    title='Weapon and Armor Proficiency' 
                    text='A shaman is proficient with all simple weapons, and with light and medium armor.'
                />

                < Section
                    id='spells'
                    title='Spell Casting' 
                    text={
                        <>
                            <p>
                            A shaman casts divine spells drawn from the shaman spell list. A shaman must choose and prepare her spells in advance.
                            </p>

                            <p>
                            To prepare or cast a spell, a shaman must have a Wisdom score equal to at least 10 + the spell’s level. The saving throw DC against a shaman’s spell is 10 + the spell’s level + the shaman’s Wisdom modifier.
                            </p>

                            <p>
                            Like other spellcasters, a shaman can cast only a certain number of spells of each spell level per day. Her base daily spell allotment is given on Table: Shaman. In addition, she receives bonus spells per day if she has a high Wisdom score.
                            </p>

                            <p>
                            Shamans commune with their spirit animals to prepare their spells. Each shaman must choose a time when she must spend 1 hour each day in quiet contemplation with her spirit animal to regain her daily allotment of spells. A shaman can prepare and cast any spell on the shaman spell list, provided that she can cast spells of that level, but she must choose which spells to prepare during her daily communion.
                            </p>
                        </>
                    }

                    subsections={[
                        {title: 'Orisons', text: 'Shamans can prepare a number of orisons, or 0-level spells. These spells are cast like any other spell, but they are not expended when cast and may be used again.'}
                    ]}
                /> 

                < Section 
                    id='spirit'
                    title='Spirit (Su)'
                    text={
                    <>
                        <p>
                        A shaman forms a mystical bond with the spirits of the world. She forms a lasting bond with a single spirit, which grants a number of abilities and defines many of her other class features.
                        </p>

                        <p>
                        At 1st level, a shaman gains the spirit ability granted by her chosen spirit. She adds the spells granted by that spirit to the list of spells that she can cast using spirit magic. She also adds the hexes possessed by that spirit to the list of hexes that she can use with the hex and wandering hex class features.
                        </p>

                        <p>
                        At 8th level, the shaman gains the abilities listed in the greater version of her selected spirit. At 16th level, the shaman gains the abilities listed for the true version of her selected spirit.
                        </p>

                        <p>
                        If the shaman takes levels in another class that grants a mystery (such as the oracle), the spirit and mystery must match, even if that means one of them must change. Subject to GM discretion, the shaman can change her former mystery or spirit to make them conform.
                        </p>
                    </>
                    }

                    subsections={[
                        {   title: 'Spirit DCs', 
                            text: 
                            <p>
                                Unless otherwise noted, the DC to save against the special abilities granted by a spirit is equal to 10 + 1/2 the shaman’s level + the shaman’s Wisdom modifier.
                            </p> 
                        },

                        {   title: 'Spirit Animal', 
                            text:
                            <>
                                <p>
                                At 1st level, a shaman forms a close bond with a spirit animal tied to her chosen spirit. This animal is her conduit to the spirit world, guiding her along the path to enlightenment. The animal also aids a shaman by granting her a special ability. A shaman must commune with her spirit animal each day to prepare her spells. While the spirit animal does not store the spells like a witch’s familiar does, the spirit animal serves as her conduit to divine power. If a shaman’s spirit animal is slain, she cannot prepare new spells or use her spirit magic class feature until the spirit animal is replaced.
                                </p>
                
                                <p>  
                                By communing with the incredible powers of her spirit, the shaman forges a cherished bond with one specific servant of that spirit—known as a spirit animal. A spirit animal is a creature chosen by a shaman to serve as a conduit, allowing her to more fully access the magic of her spirit on a daily basis. The shaman’s spirit animal also grants her special powers. This ability uses the same rules as the wizard’s arcane bond class feature and is treated as a familiar, except as noted below.
                                </p>
                
                                <p>
                                A shaman uses her level as her effective wizard level when determining the abilities of her spirit animal. A shaman can select any familiar available to wizards to serve as her spirit animal, although her spirit animal is augmented by the power of her chosen spirit. Once selected, the spirit animal cannot be changed. Although a shaman’s spirit animal uses the statistics of a specific animal, it is treated as an outsider with the native subtype for the purposes of spells and abilities that affect it.
                                </p>
                
                                <p>
                                Levels of different classes that are entitled to familiars stack with shaman levels for the purpose of determining any spirit animal abilities that depend on the shaman’s level. If a shaman possesses such levels in other classes, her spirit animal always uses the shaman rules for spirit animals, not those used by familiars of other classes (such as witches, wizards, or sorcerers with the arcane bloodline). If the shaman has witch levels, her spirit animal also serves as the conduit to her patron and stores her witch spells. The shaman’s spirit animal is treated as a familiar for the purposes of all spells, effects, and abilities that affect familiars.
                                </p>
                
                                <p>
                                If a spirit animal is lost or dies, it can be replaced after 24 hours through a special ritual that consumes material components worth 500 gp per shaman level. The ritual takes 8 hours to complete. The new spirit animal must be of the same sort of creature as the previous one.
                                </p>
                            </>
                        }, 

                        {   title: 'Spirit Animal Abilities',
                            text: 
                            <>
                                <p>
                                At 1st level, a shaman’s spirit animal gains specific abilities, depending upon the type of spirit selected by the shaman using her spirit class feature. These abilities affect the animal’s appearance and grant it special abilities that can aid it in serving the shaman and the spirit it represents and is connected to. These abilities are described in the spirit animal section of each individual spirit description.
                                </p>
                
                                <p>
                                Deliver Touch Spells (Su): If a shaman is 3rd level or higher, her spirit animal can deliver touch spells or hexes for her. If the shaman and the spirit animal are in contact at the time the shaman casts a touch spell, she can designate her animal as the “toucher.” The spirit animal can then deliver the touch spell just as the shaman would. If the shaman casts another spell before the touch is delivered, the touch spell dissipates. If the shaman activates a hex, her spirit animal can be used to make the touch; she doesn’t have to be in contact with the animal to use this ability with hexes.
                                </p>
                            </> },
            
                        {
                            title: 'Spirit Magic',
                            text: 
                            <p>
                                A shaman can spontaneously cast a limited number of spells per day beyond those she prepared ahead of time. She has one spell slot per day of each shaman spell level she can cast, not including orisons. She can choose these spells from the list of spells granted by her spirits (see the spirit class feature and the wandering spirit class feature) at the time she casts them. She can enhance these spells using any metamagic feat that she knows, using up a higher-level spell slot as required by the feat and increasing the time to cast the spell (see Spontaneous Casting and Metamagic Feats).
                            </p>
                        }
                    ]}
                />       

                < Section
                    id='hex'
                    title='Hex'
                    text={
                        <>
                        <p>
                        A shaman learns a number of magical tricks, called hexes, which grant her powers or weaken foes. At 2nd level, a shaman learns one hex. At 4th, 8th, 10th, 12th, 16th, 18th, and 20th level, the shaman learns new hexes. A shaman can select from any of the following hexes or from any of the hexes listed in the description of her chosen spirit. A shaman cannot select a hex more than once unless noted otherwise.
                        </p>

                        <p>
                        Using a hex is a standard action that doesn’t provoke an attack of opportunity unless otherwise noted. The saving throw DC to resist a hex is equal to 10 + 1/2 the shaman’s level + the shaman’s Wisdom modifier.
                        </p>
                        </>
                    }
                />
                
                < Section 
                    id='wand-spirit'
                    title='Wandering Spirit'
                    text={  
                    <p>
                    At 4th level, a shaman can form a temporary bond with a spirit other than the one selected using her spirit class feature. She must make this selection each day when preparing her spells. While this feature is active, she gains the spirit ability granted by the spirit. She also adds the spells granted by that spirit to her list of spells that she can cast using spirit magic. She does not add the hexes from her wandering spirit to her list of hexes that she can choose from with the hex class feature. At 12th level, she gains the abilities listed in the greater version of her wandering spirit. At 20th level, she gains the ability listed in the true version of her wandering spirit.
                    </p>
                    }
                />

                < Section 
                    id='wand-hex'
                    title='Wandering Hex'
                    text={  
                        <p>
                        At 6th level, a shaman can temporarily gain the use of one of the hexes possessed by either one of her spirits. She must make this selection each day when she prepares her spells. For the purposes of this ability, she can select any hex possessed by her spirit or wandering spirit. If she selects it from her wandering spirit, she loses the hex immediately if she bonds with another spirit, although she can then select a different hex to gain using this ability, from either her spirit or her new wandering spirit. At 14th level, a shaman can select two wandering hexes each day instead of one. This ability otherwise functions as the hex class feature.
                        </p>
                    }
                />

                < Section 
                    id='manifestation'
                    title='Manifestation'
                    text={
                        <p>
                        Upon reaching 20th level, a shaman undergoes a transformation as she manifests as a pinnacle of her main spirit. The nature of this manifestation depends on the shaman’s spirit, and is described in its entry.
                        </p>
                    }
                />

                < Section 
                    id='hex-mastery'
                    title='Hex Mastery'
                    text={
                        <p>
                        At 20th level, the shaman has learned ever more terrible hexes. She can select one grand hex from the list available to witches.
                        </p>
                    }
                />
                
            </div>
        )
    }
}

export default Rules