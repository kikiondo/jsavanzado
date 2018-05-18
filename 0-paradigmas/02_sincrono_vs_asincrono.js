const fs = require('fs'),
    file = './assets/archivo.txt'

/** CÓDIGO SÍNCRONO */
console.time('Síncrono')
    console.log('Abriendo Archivo')
    let content
    try{
        content = fs.readFileSync(file, 'utf8')
        console.log(content)
    }catch(err){
        //Los objetos en js tienen una propiedad llamado message
        console.log(err.message)
    }

    console.log('\nHaciendo otra cosa ')
    console.log('\nHaciendo otra cosa más')

console.timeEnd('Síncrono')

/**ASÍNCRONO*/

console.time('Asíncrono')
    console.log('\nAbriendo un Archivo')

    let content2 = fs.readFile(file, 'utf8', (err, content) => (err) ? console.log(err.message): console.log(content) )
    console.log('\nHaciendo otra cosa ')
    console.log('\nHaciendo otra cosa más')

console.timeEnd('Asíncrono')

