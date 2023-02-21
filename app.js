
fetch('appi.json').then(response =>{ 
    return response.json();   
        }).then(articulos =>   
        {
            let html = '';
            
            for ( let i = 0;i < articulos.length; i++) {
                html += `<section>`
                html += `<p>ARTICULO: ${articulos[i].articulo}</p>`;
                html += `<p>MARCA: ${articulos[i].marca}</p>`;
                html += `<img src="../../${articulos[i].imagen}" alt="${articulos[i].articulo}" />`
                html += `<p>COLOR:${articulos[i].color}</p>`;
                    if (articulos[i].otrosColores) {
                        html += `<ol>`;
                        html += `<li>${articulos[i].otrosColores[0].color}</li>`;
                        html += `</ol>`;
                    }
                html += `<p>$ ${articulos[i].precio}`;
                html += `</section>`; 
                
            }  
             
                parrafo.innerHTML = html;
           llamarSelect(articulos)
        })
function llamarSelect(articulos) {
    let htmls = ``;
        htmls += `<ul>`;
    for( let items in articulos) {
    htmls += `<li>${articulos[items].marca}`
    }
        htmls += `</ul>`
        select.innerHTML = htmls;
}