var charlasTemplate= `
<title> Charlas </title>
<div id="template">
<h3>{{NOMBRE}}</h3>
 by:  <a   id="expositor_view" href="javascript:showExpositorunico({{EXPOSITORID}})">{{EXPOSITORNOMBRE}}</a>   - {{TAGS}} 
<p>{{HORA}}</p>    
<hr/> 
</div>  
`
function showCharlas(){
    console.log('Show Charlas');
    fetch('http://localhost:3000/api/charlas')
    .then(res => res.json() ) 
    .then(res =>
        { 
            var charlasView ='<h2> *** Lista de Charlas *** </h2>';
            res.forEach( Element => {
                charlasView = charlasView +
                charlasTemplate.replace ('{{NOMBRE}}', Element.nombre)
                            .replace ('{{TAGS}}', Element.tags)
                            .replace ('{{HORA}}', Element.hora)
                            .replace ('{{EXPOSITORNOMBRE}}', Element.expositor["nombre"])
                            .replace ('{{EXPOSITORID}}', Element.expositorId)

                            
            }
    
            );
            
            document.getElementById('app').innerHTML = charlasView;
        } 
        )

}


//Vista de Expositores

var expositorTemplate= `
<title> Expositor </title>
<div>
<h3>{{NOMBRE}}</h3>
<h5> {{CORREO}} - {{CUENTA_GITHUB}}  </h5> 
<hr/>   
</div>
`

function showExpositor(){
    console.log('Show Expositor');
    fetch('http://localhost:3000/api/expositors')
    .then(res => res.json() ) 
    .then(res =>
        { 
            var expositorView ='<h2> *** Lista de Expositores *** </h2>';
            res.forEach( Element => {
                expositorView = expositorView +
                expositorTemplate.replace ('{{NOMBRE}}', Element.nombre)
                            .replace ('{{CORREO}}', Element.correo)
                            .replace ('{{CUENTA_GITHUB}}', Element.cuenta_github)
                            
            }
    
            );
            
            document.getElementById('app').innerHTML = expositorView;
        } 
        )

}


//Vista por expositor

function showExpositorunico(expositorId){
    console.log('Show Expositor');

    fetch('http://localhost:3000/api/expositors/'+expositorId)
    .then(res => res.json() ) 
    .then(res =>
        { 
            var expositorView ='<h2> *** Expositor de la Charla *** </h2>';
            res.forEach( Element => {
                expositorView = expositorView +
                expositorTemplate.replace ('{{NOMBRE}}', Element.nombre)
                            .replace ('{{CORREO}}', Element.correo)
                            .replace ('{{CUENTA_GITHUB}}', Element.cuenta_github)
                            
            }
    
            );
            
            document.getElementById('app').innerHTML = expositorView;
        } 
        )

}


window.onload = function()
{
    console.log("Working");

    document.getElementById("charlas_view")
    .addEventListener('click',showCharlas);

    document.getElementById("expositor_view")
    .addEventListener('click',showExpositor);
}



