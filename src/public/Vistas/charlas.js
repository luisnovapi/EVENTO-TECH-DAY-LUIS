import express from 'express'

//Visualización de las Charlas

//Definiendo Template

var charlasTemplate= `
<div> 
<h3>{{NOMBRE}}</h3>
<h5> by: <span style"color: grey"> <a href="#"  id="expositor_view"> {{EXPOSITORID}} </a> </span>  - {{TAGS}}  </h5>
<p>{{HORA}}</p>    
<hr/>   
</div>
`


//Función para ver todas las Charlas

function showCharlas(){
    console.log('Show Charlas');
   /* document.getElementById('app').innerHTML = '<h1>Post List</h1>';*/
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
                            .replace ('{{EXPOSITORID}}', Element.expositor["nombre"])
                            
            }
    
            );


            //Lo que muestra en html las charlas
            
            document.getElementById('app').innerHTML = charlasView;
        } 
        )

}


export default vistaCharlas
