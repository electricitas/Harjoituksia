const lahetaNappi = document.getElementById("lahetaNappi");

lahetaNappi.addEventListener("click", function () {
    const etunimi = document.getElementById("etu").value;
    const sukunimi = document.getElementById("suku").value;

    console.log("Etunimi: " + etunimi);
    console.log("Sukunimi: " + sukunimi);
});

const form = document.querySelector(".kouluun form");
form.addEventListener("submit", function (event) {
    event.preventDefault();

    const selectedOption = document.querySelector("input[name='kulkuvalinta']:checked");
    if (selectedOption) {
        const selectedValue = selectedOption.value;
        console.log("Valitsit kulkuvalinnaksi: " + selectedValue);
    } else {
        console.log("Valitse kulkuvalinta ennen kuin jatkat.");
    }
});