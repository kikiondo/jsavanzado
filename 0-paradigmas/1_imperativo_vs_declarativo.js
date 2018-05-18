const numbers = [1,2,3,4,5]

/**CÓDIGO IMPERATIVO */

/*El objeto console tiene muchos metodos */
console.time('Imperativo')//String que lo identifique
function squared(numbers){
    let arr = []

    //forEach es un metodo funcional no imperativo
    for( let i = 0; i < numbers.length; i++){
        arr.push( numbers[i]* numbers[i] ) //Modifico el mismo arr
    }

    return console.log(arr)
}
squared(numbers)
console.timeEnd('Imperativo')


/**CÓDIGO DECLARATIVO */

console.time('Declarativo')
console.log( numbers.map(num => num * num) )
console.timeEnd('Declarativo')

