const container = document.querySelector('.container'),
      searchBtn = container.querySelector("button"),
      countryDetalies = container.querySelector('.output-part'),
      inputFiled = container.querySelector("input")
      invalid = container.querySelector('.invalid'); 
searchBtn.addEventListener('click' , () =>{
    get()
   
});
async function get() {
    if (inputFiled.value !== "") {
        let countery = inputFiled.value
        const response = await fetch(`https://restcountries.com/v3.1/name/${countery}?fullText=true`),
              data = await response.json();
        if (data.message ==='Not Found') {
            invalid.classList.add('active');
            countryDetalies.classList.remove('active')
        }else{
            invalid.classList.remove('active');
            countryDetalies.classList.add('active')
            console.log(data);     
            const country = data[0].name.common,
                  capital = data[0].capital[0],
                  continents = data[0].continents[0]
                  population = data[0].population,
                  {name , symbol}= data[0].currencies[Object.keys(data[0].currencies)[0]],
                  language = data[0].languages[Object.keys(data[0].languages)[0]],
                  flag = data[0].flags.svg
            container.querySelector('.output-part img').src = flag;
            container.querySelector('.output-part span').innerText = countery;
            container.querySelector('.bottom-detailes #capital span').innerText = capital;
            container.querySelector('.bottom-detailes #continent span').innerText = continents;
            container.querySelector('.bottom-detailes #population span').innerText = population;
            container.querySelector('.bottom-detailes #currancy span').innerText = name + " " + symbol;
            container.querySelector('.bottom-detailes #language span').innerText = language;
            console.log(country , capital, continents, population, name , symbol, language, flag);
        }
    }
}