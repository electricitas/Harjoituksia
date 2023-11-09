async function getDadJoke() {
    const url = 'https://dad-jokes.p.rapidapi.com/random/joke';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '1dce696c0emsh14ec5020bfe3772p159f4bjsn7e9fa38c17e0',
            'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        document.getElementById("vitsi").innerHTML = result.body[0].setup + "<br/>" + result.body[0].punchline;
    } catch (error) {
        console.error(error);
    }
}

async function getInfo() {
    const url = 'https://geosource-api.p.rapidapi.com/countries.php';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '1dce696c0emsh14ec5020bfe3772p159f4bjsn7e9fa38c17e0',
            'X-RapidAPI-Host': 'geosource-api.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        const maaObjekti = result[0];
        const maaNimi = maaObjekti.countryName;
        const maaAlue = maaObjekti.Region;
        document.getElementById("maa").innerHTML =
            "Nimi: " + maaNimi + "<br/>" +
            "Alue: " + maaAlue + "<br/>";
    } catch (error) {
        console.error(error);
    }
}