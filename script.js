window.onload = function(){

    function resultadoBusca(dadosEnd){

        for(let campo in dadosEnd){

            if(document.querySelector(`#${campo}`)){
                document.querySelector(`#${campo}`).value= dadosEnd[campo];
            }
        }
    }

    
    let dadosCep = async function(cep){

        let url = `https://viacep.com.br/ws/${cep}/json/`;
      try {
        let dadosFetch = await fetch(url);
        let dadosJson = await dadosFetch.json();
        resultadoBusca(dadosJson);
      } catch(error){

            alert(error);
      }
    }

    const btnBuscar = document.querySelector("#botao");
    const CEP_      = document.querySelector("#cep");
    

    btnBuscar.addEventListener('click',function(){

        dadosCep(CEP_.value);


    })
}