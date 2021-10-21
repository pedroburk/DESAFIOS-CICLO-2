// window.onload = function(){
    // produtos
    
   


    (()=>{
    
        let produtos = [
            {descricao:"Mamão Papaia", precoProd:2.20},
            {descricao:"Laranja", precoProd:3.20},
            {descricao:"Manga", precoProd:4.20},
            {descricao:"Melão", precoProd:1.80},
            {descricao:"Melancia", precoProd:5.80},
        
        ]
        
        let mostrarProdutosCliente = document.querySelector("#content-produtos > ul#produtos");
        for(let idx in produtos){
            mostrarProdutosCliente.innerHTML +=
            `<li class='itemProdutoGeral' data-preco=${produtos[idx].precoProd} > ${produtos[idx].descricao}  </li>`
        }
    
    })()
    
    
   function itens (){
    
    const itemProduto = document.querySelectorAll("#produtos > li.itemProdutoGeral");
    const cestaDoCliente = document.querySelector("ul#cestaDoCliente");
    const mostraTotalCompra = document.querySelector("#mostraTotalCompra");
    
    const armazenaIten=[];
    let totalPedido = 0;
    
    itemProduto.forEach((item)=>{
    
        item.addEventListener('click',()=>{
    
            if(armazenaIten.indexOf(item.textContent) != -1)    {
    
                    alert (`Este item ${item.textContent} já está na sua cesta`);
            
            } else {
    
              let  li = document.createElement("li");
                armazenaIten.push(item.textContent);
                cestaDoCliente.appendChild(li).textContent = item.textContent;
                totalPedido += Number(item.dataset.preco);
                mostraTotalCompra.value = totalPedido.toLocaleString('pt-BR', 
                {style: 'currency', currency:'BRL'});
                
    
            }
    
          
        })
        
    })
    
}
    export {itens};
    
    // }
    
    