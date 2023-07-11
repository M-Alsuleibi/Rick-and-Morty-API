const url = "https://rickandmortyapi.com/api/character";

async function retrieveStatus(url) {
    try {
        const response = await fetch(url);
        const body = await response.json();
        for (let i = 0; i < body.results.length; i++) {
            if (body.results[i].status === "Alive") {
                const newli = document.createElement("li");
                const newContent = document.createTextNode(body.results[i].name);
                newli.appendChild(newContent);
                const currentUl = document.getElementById("characterList");
                document.body.insertBefore(newli, currentUl);


                // console.log(body.results[i].name, body.results[i].image,
                //              body.results[i].location,
                //              body.results[i].species, body.results[i].gender);
            };
        }
        // console.log(body.results[7].status);
    } catch (error) {
        console.log("ERROR!!", error);
    }


};
retrieveStatus(url);
// let  response =await fetch("https://rickandmortyapi.com/api/character")
// let body = await response.json();
//
// body.results[18].status
