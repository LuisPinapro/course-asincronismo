const isapromise = () => {
    return new Promise((resolve, reject) =>{
        if(true){
            resolve("Hola si funciono");
        }
        else{
            reject("Chale, ya fallo todo");
        }
    });
};
const isapromise2 = () =>{
    return new Promise((resolve, reject) => {
        if(true){
            setTimeout(() => {
                resolve("Si funciono y con tiempo, papa")
            }, 2000)
        }
        else{
            const error = new Error("Chale no funcione");
            reject(error)
        }
    })
}
isapromise()
    .then(response => console.log(response))
    .catch(err => console.error(err))

isapromise2()
    .then(response => console.log(response))
    .catch(err => console.error(err));

Promise.all([isapromise(), isapromise2()])
    .then(response => console.log("Estos son los resultados", response))
    .catch(err => console.error(err));