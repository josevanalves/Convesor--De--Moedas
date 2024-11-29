const convertButton = document.querySelector(".convert-Button");
const currencySelect = document.querySelector(".currency-select");

function convertValues() {
  const inputCurrencyValue = document.querySelector(".input-currency").value;
  const currencyValueToConvert = document.querySelector(".currency-value-to-convert" ); // Valor em Real
  const currencyValueConverted = document.querySelector(".currency-value"); // Outras moedas

  const dolarTuday = 5.2
  const euroTuday = 6.2

  if (currencySelect.value == "dolar") {
    // Se o select  estive slecionado  o  vaor  do dolar, entre aqui
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputCurrencyValue / dolarTuday);
  }

  if (currencySelect.value == "euro") {
    // Se o select  estive slecionado  o  vaor  do euro , entre aqui
    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputCurrencyValue / euroTuday);
  }

  currencyValueToConvert.innerHTML = new Intl.NumberFormat("Pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(inputCurrencyValue);

}

   function changeCurrency(){
       const currencyName = document.getElementById("currency-name")
       const currencyImagem = document.querySelector(".currency-img")

       if(currencySelect.value == "dolar" ){    
         currencyName.innerHTML = "dolar americano"
         currencyImagem.src = "assets/Dólar.png"
      }

       if(currencySelect.value == "euro"){
         currencyName.innerHTML = "euro"
         currencyImagem.src = "assets/Euro.png"
      }
      convertValues()
   }
  currencySelect.addEventListener("change", changeCurrency)
  convertButton.addEventListener("click", convertValues)
