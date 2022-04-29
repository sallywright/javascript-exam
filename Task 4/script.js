/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotjui atėjus į tinkaį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';

const getData = async () => await (await fetch(ENDPOINT)).json();

const displayData = (data) => {

    const outputEl = document.getElementById('output');
    outputEl.replaceChildren();
    data.forEach(element => {
        const divEl = document.createElement('div');
        const brandEl = document.createElement("h1");
        const modelsDivEl = document.createElement('div');

        element.models.forEach(model => {
            const modelEl = document.createElement("h2");
            modelEl.textContent = model;
            modelsDivEl.append(modelEl);
        });

        brandEl.textContent = element.brand;

        divEl.append(brandEl, modelsDivEl);

        outputEl.append(divEl);

    });
}

window.onload = async () => {

    data = await getData();
    displayData(data);

};