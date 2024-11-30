  const convertButton = document.querySelector(".convert-Button");
  const currencySelect = document.querySelector(".currency-select");


  function convertValues() {
  const inputCurrencyValue = document.querySelector(".input-currency").value;
  const currencyValueToConvert = document.querySelector(".currency-value-to-convert" ); // Valor em Real
  const currencyValueConverted = document.querySelector(".currency-value"); // Outras moedas

  const dolarTuday = 5.2
  const euroTuday = 6.2
  const libraTuday = 7.69
  const bitcoinTuday = 584467.36 


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

  if (currencySelect.value == "libra") {
       currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
         style:"currency",
         currency:"GBP",
      }).format(inputCurrencyValue / libraTuday)
   }
  
  if(currencySelect.value == "bitcoin")   {
      currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US",{ 
          style:"currency",
          currency:"BTC",
      }).format(inputCurrencyValue / bitcoinTuday)
     
     }
   

  currencyValueToConvert.innerHTML = new Intl.NumberFormat("Pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(inputCurrencyValue );

  }

   function changeCurrency(){
       const currencyName = document.getElementById("currency-name")
       const currencyImagem = document.querySelector(".currency-img")

       if(currencySelect.value == "dolar" ){    
         currencyName.innerHTML = "Dolar americano"
         currencyImagem.src = "assets/Dólar.png"
      }

       if(currencySelect.value == "euro"){
         currencyName.innerHTML = "Euro"
         currencyImagem.src = "assets/Euro.png"
      }

     if(currencySelect.value == "libra"){
          currencyName.innerHTML = "Libra"
          currencyImagem.src = "assets/libra 1.png"
     }

     if(currencySelect.value == "bitcoin"){
          currencyName.innerHTML = "bitcoin"
          currencyImagem.src = "assets/bitcoin 1.png"
     }

      convertValues()

   }
  currencySelect.addEventListener("change", changeCurrency)
  convertButton.addEventListener("click", convertValues)
