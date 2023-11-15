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

async function hankiSaato() {
    const kaupunki = document.getElementById('kaupunki').value;

    if (!kaupunki) {
        alert('Syötä kaupunki!');
        return;
    }

    const apiUrl = `https://weatherapi-com.p.rapidapi.com/current.json?q=${encodeURIComponent(kaupunki)}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '15829214b6msh9c4710cf4a12b88p1cbd3ejsnd900b9744da4',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(apiUrl, options);
        const result = await response.json();
        const saatoTulosDiv = document.getElementById('saatoTulos');
        saatoTulosDiv.innerHTML = `Lämpötila ${kaupunki}ssa on ${result.current.temp_c}°C.`;
    } catch (error) {
        console.error(error);
        alert('Virhe haettaessa säätietoja.');
    }
}


async function hankiRakkausprosentti() {
    const miehenNimi = document.getElementById('miehenNimi').value;
    const naisenNimi = document.getElementById('naisenNimi').value;

    if (!miehenNimi || !naisenNimi) {
        alert('Syötä molempien nimet!');
        return;
    }

    const apiUrl = `https://love-calculator.p.rapidapi.com/getPercentage?sname=${encodeURIComponent(miehenNimi)}&fname=${encodeURIComponent(naisenNimi)}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '15829214b6msh9c4710cf4a12b88p1cbd3ejsnd900b9744da4',
            'X-RapidAPI-Host': 'love-calculator.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(apiUrl, options);
        const result = await response.json();
        const rakkausTulosDiv = document.getElementById('rakkausTulos');
        rakkausTulosDiv.innerHTML = `Rakkausprosentti ${miehenNimi} ja ${naisenNimi} välillä on ${result.percentage}% (${result.result}).`;
    } catch (error) {
        console.error(error);
        alert('Virhe haettaessa rakkausprosenttia.');
    }
}


async function haeElokuvat() {
    await haeTiedot('movies');
}

async function haeSarjat() {
    await haeTiedot('tv-shows');
}

async function haeTiedot(tyyppi) {
    const aloitusvuosi = document.getElementById('aloitusvuosi').value;
    const lopetusvuosi = document.getElementById('lopetusvuosi').value;
    const kieli = document.getElementById('kieli').value;
    const tyyppiKentta = document.getElementById('tyyppi').value;

    const apiUrl = `https://movies-tv-shows-database.p.rapidapi.com/?${tyyppi}details`;
    const options = {
        method: 'GET',
        headers: {
            Type: 'get-movie-details',
            'X-RapidAPI-Key': '15829214b6msh9c4710cf4a12b88p1cbd3ejsnd900b9744da4',
            'X-RapidAPI-Host': 'movies-tv-shows-database.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(apiUrl, options);
        const result = await response.json();
        const tuloksetDiv = document.getElementById('tulokset');
        tuloksetDiv.innerHTML = JSON.stringify(result, null, 2);
    } catch (error) {
        console.error(error);
        alert('Virhe hakemisessa.');
    }
}
