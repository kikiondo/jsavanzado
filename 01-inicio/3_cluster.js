let contador =  (()=>{
    //Por convención, a las variables privadas se les antepone un '_' delante
    let _contador = 0

    function incrementar(){
        return _contador++
    }
    
    function decrementar(){
        return _contador--
    }
    function valor () {
        return _contador
    }

    //Le voy a retornar elementos para que puedan ser accesibles en el contexto global
    return {
        incrementar: incrementar,
        decrementar: decrementar,
        valor: valor
    }
})();

//Encapsular y dar privacidad a nuestros elementos c:
console.log( contador.valor() )
console.log( contador.decrementar() )
console.log( contador.decrementar() )
console.log( contador.valor() )
