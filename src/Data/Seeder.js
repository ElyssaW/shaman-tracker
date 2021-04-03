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

fs.readFile('SpellData.txt', function (err1, data) {
    fs.readFile('SpiritData.txt', function (err2, SpiritData) {
        if (err1) throw err1;
        if (err2) throw err2;

        let parsedSpellData = JSON.parse(data)
        SpiritData = JSON.parse(SpiritData)
        
        let newSpirits = []
        for (const spirit in SpiritData) {
            let newSpells = []
            let newSpirit = {}
    
            SpiritData[spirit].spells.forEach(spell => {
    
                for (let i = 0; i < parsedSpellData.length; i++) {
                    if (spell.name == parsedSpellData[i].name) {
                        newSpells.push(parsedSpellData[i])
                        break
                    }
                }
    
            })
    
            newSpirit = SpiritData[spirit]
            console.log(newSpirit)
            newSpirit.spells = newSpells
            newSpirits.push(newSpirit)
        }
    
        fs.writeFile('newSpirits.txt', JSON.stringify(newSpirits), function (err) {
            if (err) throw err;
            
            console.log('Saved!');
        })
    })
})