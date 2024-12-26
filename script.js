const BASE_URL = `https://v6.exchangerate-api.com/v6/1f736223321320fe60f7823c/latest/${fromCurrency.value}`;

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
});
