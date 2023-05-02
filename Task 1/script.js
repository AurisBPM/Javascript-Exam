/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: rezultatas turi būti matomas pateikus formą ir atvaizduojamas
<div id="output"></div> viduje. Gautus atsakymus stilizuokite naudojant CSS;
------------------------------------------------------------------- */

const form = document.querySelector("form");

if (form){
    form.addEventListener("submit", event => {
        event.preventDefault();
    const input = document.getElementById("search").value;
    if ( input != ""){
        const output = document.getElementById("output");
        output.innerHTML = "";
        const weightLb = parseInt(input) * 2.2046;
        const weightG = parseInt(input) / 0.0010000;
        const weightOz = parseInt(input) * 35.274;
        const weightLbDiv = document.createElement("div");
        const weightGDiv = document.createElement("div");
        const weightOzDiv = document.createElement("div");
        weightLbDiv.textContent = `Weight in lb: ${weightLb.toFixed(2)}lb`;
        weightGDiv.textContent = `Weight in g: ${weightG}g`;
        weightOzDiv.textContent = `Weight in oz: ${weightOz.toFixed(2)}oz`

output.append(weightLbDiv, weightGDiv, weightOzDiv);
    } else {
        return;
    }
    })
}