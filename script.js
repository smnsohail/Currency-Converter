const BASE_URL = `https://2024-03-06.currency-api.pages.dev/v1/currencies/${fromCurrency}/${toCurrency}.json`;

const dropdowns= document.querySelectorAll('.dropdown select');
const btn = document.querySelector("form button");

for( let select of dropdowns){
    for(const currCode in countryList){
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value= currCode;
        
        if (select.name === "fromCurrency" && currCode==="USD") {
            newOption.selected = "selected";
        }else if (select.name === "toCurrency" && currCode==="INR") {
            newOption.selected = "selected";
        }
        select.append(newOption);
        
    }

    select.addEventListener("change", (selectEvent)=>{
        updateFlag(selectEvent.target);
    });
    
}

const updateFlag= (element) => {
   let currCode = element.value;
   let countryCode = countryList[currCode];
   let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
   let img = element.parentElement.querySelector("img");
   img.src = newSrc;
}
btn.addEventListener("click", (btnEvent)=>{
    btnEvent.preventDefault();
    let fromCurrency = document.querySelector("form select[name='fromCurrency']").value;
    let toCurrency = document.querySelector("form select[name='toCurrency']").value;
    // fetch(BASE_URL)
    // .then(response => response.json())
    // .then(data => {
    //     let result = data.rates[toCurrency];
    //     let resultElement = document.createElement ("p");
    //     document.querySelector( "form" ).append(resultElement);
    //     resultElement.innerText = `1 ${fromCurrency} = ${result} ${toCurrency}`;

    // })
});

