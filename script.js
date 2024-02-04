const request = obj => {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open(obj.method, obj.url, true);
      xhr.send();
  
      xhr.addEventListener('load', () => {
        if(xhr.status >= 200 && xhr.status < 300) {
          resolve(xhr.responseText);
        } else {
          reject(xhr.statusText);
        }
      });
    });
  };
  
  document.addEventListener('click', e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();
  
    if (tag === 'a') {
      e.preventDefault();
      carregaPagina(el);
    }
});
  
async function carregaPagina(el) {
    try{
        const href = el.getAttribute('href');
    const response = await fetch(href);
    if(response.status !== 200){
        throw new Error ('ERRO 404 NOSSO')
    }
    const html = await response.text();
    carregaResultado(html)
   }catch (e){
    console.log(e)
   }
}
    

function carregaResultado(response) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
}
  

//fetch retorna por padrao uma promise 

// fetch ('pagina1.html')
// .then(resposta =>{
//     if(resposta.status !== 200){
//         throw new Error ('ERRO 404 NOSSO')
//     }
//     return resposta.text();
// })
// .catch(e => console.log(e));

//existem tambem console.warn e console.error

//console.warn apresenta um erro em amarelo 
//console.erro apresenta o erro em vermelho
