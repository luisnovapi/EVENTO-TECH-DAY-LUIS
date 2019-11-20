import express from 'express'

//Vista de Expositores

var expositorTemplate= `
<div>
<h3>{{NOMBRE}}</h3>
<h5> {{CORREO}} - <span style"color: grey"><a href="#"> {{CUENTA_GITHUB}} </a> </span> </h5> 
<hr/>   
</div>
`

function showExpositor(){
    console.log('Show Expositor');
   /* document.getElementById('app').innerHTML = '<h1>Post List</h1>';*/
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


export default vistaExpositor