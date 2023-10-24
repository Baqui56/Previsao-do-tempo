
const key = "280df87b5361b9696578f6c10ee4ea5b"


    function dadosNaTela(dados) {

        document.querySelector(".estados").innerHTML = "Tempo em " + dados.name
        document.querySelector(".graus").innerHTML = Math.floor(dados.main.temp) + "°C"
        document.querySelector(".tempo").innerHTML = dados.weather[0].description
        document.querySelector(".umidade").innerHTML = dados.main.humidity + " % de Umidade "
        document.querySelector(".img").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
    }


    async   function buscarCidade(cidade) {
        const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then( resposta => resposta.json())
        
        dadosNaTela(dados)
    }

    function cliqueBotao() {
        const cidade = document.querySelector(".input").value

        buscarCidade(cidade)
    }
