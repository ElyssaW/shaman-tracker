const fs = require('fs')

// fs.readFile('SpellData.txt', function (err, data) {
//     let newSpells = []
//     data = JSON.parse(data)

//     let classes = ['summonerunchained', 'hunter', 'investigator', 'skald', 'spiritualist', 'occultist', 'mesmerist', 'medium', 'psychic', 'shaman', 'bloodrager', 'magus', 'antipaladin', 'oracle', 'inquisitor', 'witch', 'summoner', 'alchemist', 'paladin', 'bard', 'ranger', 'druid', 'cleric', 'sor', 'wiz']

//     let effects = ['acid', 'air', 'choatic', 'cold', 'curse', 'darkness', 'death', 'disease', 'earth', 'electricity', 'emotion', 'evil', 'fear', 'fire', 'force', 'good', 'lawful', 'languagedependent', 'light', 'mindaffecting', 'pain', 'poison', 'shadow', 'sonic', 'water']

//     data.forEach(spell => {
//         let newSpell = {}
//         newSpell.classes = {}
//         newSpell.effects = {}

//         for (const property in spell) {

//             if (classes.includes(property) && spell[property] != 'NULL') {
//                 newSpell.classes[property] = spell[property]
//             } else if (effects.includes(property) && spell[property] != 0) {
//                 newSpell.effects[property] = 1
//             } else if (property != 'fulltext' && property != 'descriptionformatted' && spell[property] != 0 && spell[property] != 'NULL') {
//                 newSpell[property] = spell[property]
//             }

//         }

//         newSpells.push(newSpell)
//     })
    
//     fs.writeFile('SpellData.txt', JSON.stringify(newSpells), function(err) {
//         if (err) {console.log(err)}
//         console.log('Saved')
//     })
// })

// fs.readFile('SpellData.txt', function (err1, data) {
//     fs.readFile('SpiritData.txt', function (err2, SpiritData) {
//         if (err1) throw err1;
//         if (err2) throw err2;

//         let parsedSpellData = JSON.parse(data)
//         SpiritData = JSON.parse(SpiritData)
        
//         let newSpirits = []
//         for (const spirit in SpiritData) {
//             let newSpells = []
//             let newSpirit = {}
    
//             SpiritData[spirit].spells.forEach(spell => {
    
//                 for (let i = 0; i < parsedSpellData.length; i++) {
//                     if (spell.name == parsedSpellData[i].name) {
//                         newSpells.push(parsedSpellData[i])
//                         break
//                     }
//                 }
    
//             })
    
//             newSpirit = SpiritData[spirit]
//             console.log(newSpirit)
//             newSpirit.spells = newSpells
//             newSpirits.push(newSpirit)
//         }
    
//         fs.writeFile('newSpirits.txt', JSON.stringify(newSpirits), function (err) {
//             if (err) throw err;
            
//             console.log('Saved!');
//         })
//     })
//})

fs.readFile('SpellData.js', function(err, spellData) {
    spellData = JSON.parse(spellData)
    let shamanSpells = spellData.filter(spell => {
        return spell.classes.shaman
    })

    shamanSpellsSorted = [[], [], [], [], [], [], [], [], [], []]

    shamanSpells.forEach(spell => {
        if (spell.level.includes('shaman 0')) {
            shamanSpellsSorted[0].push(spell)
        } else if (spell.level.includes('shaman 1')) {
            shamanSpellsSorted[1].push(spell)
        } else if (spell.level.includes('shaman 2')) {
            shamanSpellsSorted[2].push(spell)
        } else if (spell.level.includes('shaman 3')) {
            shamanSpellsSorted[3].push(spell)
        } else if (spell.level.includes('shaman 4')) {
            shamanSpellsSorted[4].push(spell)
        } else if (spell.level.includes('shaman 5')) {
            shamanSpellsSorted[5].push(spell)
        } else if (spell.level.includes('shaman 6')) {
            shamanSpellsSorted[6].push(spell)
        } else if (spell.level.includes('shaman 7')) {
            shamanSpellsSorted[7].push(spell)
        } else if (spell.level.includes('shaman 8')) {
            shamanSpellsSorted[8].push(spell)
        } else if (spell.level.includes('shaman 9')) {
            shamanSpellsSorted[9].push(spell)
        }
    })

    fs.writeFile('ShamanSpells.js', JSON.stringify(shamanSpellsSorted), function(err) {
        if (err) throw err
        console.log('Saved')
    })
})