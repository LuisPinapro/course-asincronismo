let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const fetchData = (url_appi) => {
    return new Promise((resolve, reject) => {
        const xhtpp = new XMLHttpRequest();
        xhtpp.open('GET', url_appi, true);
        xhtpp.onreadystatechange = (() =>{
            if(xhtpp.readyState === 4){
                (xhtpp.status === 200)
                    ?resolve(JSON.parse(xhtpp.responseText))
                    :reject(new Error(error, url_appi))
            };
        });
        xhtpp.send();
    })
};
module.exports = fetchData;