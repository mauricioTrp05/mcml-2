
           
    const bSubmit= document.querySelector('#bSubmit');
    loadComentario();
    bSubmit.addEventListener('click', ()=>{
        
        //validar campos
        var nombre=document.querySelector('#txtNombre').value;
        var comentario=document.querySelector('#txtComentario').value;
        var rating=document.querySelector('#txtRating').value;
        alert(nombre+comentario+rating);
        if(nombre.trim()===''||comentario==='') return false;

        //mandar solicitud POST a /new
        fetch('/new-comentario',{
        method: 'POST', 
        headers: {'Content-type': 'application/json'}, 
        body: JSON.stringify({nombre: nombre, comentario: comentario, rating: rating})
    })
    .then(res=>res.text())
    .then(data=>{
        //mostrar mensaje de error/exito
        alert(data);
        //actualizar lista de peliculas
        loadComentario();
    });
       
    });

    function loadComentario(){
        fetch('/get-comentario', {method: 'GET'})
        .then(res => res.json())
        .then(data => {
            const comentario = document.querySelector('#comentario-container');
            let html = '';
            var i=0;
            data.comentario.forEach(comentario=>{
                html += '<div>'+comentario.nombre+'</div>';
                html += '<div>'+comentario.comentario+'</div>';
                html += '<div>';
                while (i<comentario.rating) {
                    html += '<i class="rating bi bi-star-fill"></i>';
                    i++;
                }
                html += '</div>';
                i=0;
            });
            comentario.innerHTML=html;
        });
    }
