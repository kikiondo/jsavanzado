//Código Fronend

function parImparFrontend(){
    let numero =  prompt('Ingresa un numero'), //Es el de los navegadores
        modulo = numero % 2,
        par = `El número ${numero} es Par`,
        impar = `EL numero ${numero} es Impar` //Template string de es6
    
    //Operador ternario
    //Variable = (condicion) ? verdadera: falsa
    console.log( (modulo === 0) ? par : impar )
}

parImparFrontend()

//Código Backend
function parImparBackend(){
    //Para interactuar con datos de consola debos de utiliza el objeto process
    process.stdout.write('Ingresa un número: ') //Ya que quiero escribir

    process.stdin.once('data', numero => {
        let modulo = numero % 2,
            par = `El número ${numero} es Par \n`,
            impar = `EL numero ${numero} es Impar \n`,
            residuo = (modulo === 1) ?impar : par
        process.stdout.write(residuo)
        process.exit()//Para que no se trabe la terminal
    }) //Es su listener
}
parImparBackend()

