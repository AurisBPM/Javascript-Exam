/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, kuris vartotojui atėjus į tinklapį kreipsis į cars.json failą ir 
atvaizduos visus automobilių gamintojus bei pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.

Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';
const output = document.getElementById("output");

const getCars = async () => {

try {
    const response = await fetch(ENDPOINT);
    const data = await response.json();
  console.log(data);
data.forEach(element => {
    const models = element.models;
    const card = document.createElement("div");
    card.className = "card-brand";
    const cardBrand = document.createElement("h2");
    const cardModelsDiv = document.createElement("div");
    cardModelsDiv.className = "card-models-div";
    cardBrand.textContent = element.brand;
    card.append(cardBrand, cardModelsDiv);

    models.forEach((car) => {
        const modelEl = document.createElement("p");
        modelEl.textContent = car;
        cardModelsDiv.append(modelEl);
    });
    output.append(card);
});
}
catch(error) {
    console.log(error);
}

}

getCars();