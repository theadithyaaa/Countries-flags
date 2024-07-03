fetch("https://restcountries.com/v3.1/all")
    .then(res => res.json())
    .then(data => {
        let countriesContainer = document.getElementById("countriesContainer");

        let cards = '';

        data.forEach(element => {
            cards += `<div class="country-card">
                        <img src="${element.flags.png}" alt="Flag of ${element.name.common}">
                        <h2>${element.name.common}</h2>
                       
                      </div>`;
        });

        countriesContainer.innerHTML = cards;
    });

function searchCountry() {
    let searchValue = document.getElementById("txtSearchValue").value;

    let offitalName = document.getElementById("offitalName");
    let name = document.getElementById("name");
    let img = document.getElementById("img");
    let region= document.getElementById("Region");
    let capital= document.getElementById("capital");
    let population = document.getElementById("population");
    

    fetch(`https://restcountries.com/v3.1/name/${searchValue}`)
        .then(res => res.json())
        .then(data => {
            data.forEach(obj => {
                offitalName.innerText = obj.name.official;
                name.innerText = obj.name.common;
                region.innerText = "Region -" +obj.region;
                capital.innerText = "Capital -"+obj.capital;
                population.innerText = "Population -"+obj.population;
                img.innerHTML = `<img src="${obj.flags.png}" alt="Flag of ${obj.name.common}">`;
            });
        });
}
