const doSomethingAsync = () => {
    return new Promise((resolve, reject) =>{
        (true)
            ? setTimeout(() => resolve("Hola aqui estoy jotos"), 3000)
            : reject("Hola pendejo no paso nada pinshe wey")
    })
}

const doSomethig = async () =>{
    const somethig = await doSomethingAsync();
    console.log(somethig);
}

console.log("before")
doSomethig();


const anotherDoSomething = async () => {
    try {
        const somethig = await doSomethingAsync();
        console.log("Con buena practica: ")
        console.log(somethig);
    } catch (error) {
        console.error(error);
    }
}
anotherDoSomething();