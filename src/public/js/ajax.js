loadComentario();

    $("#formComentario").on("submit", function(event){
        event.preventDefault();
        let nombre= $("#txtNombre").val();
        let comentario= $("#txtComentario").val();
        let rating= $("#txtRating").val();
       
        
        $.ajax({
            url: "/new-comentario",
            method: "POST",
            contentType: "application/json",
            data: JSON.stringify({nombre: nombre, comentario: comentario, rating: rating}),
            success: function(res){
                loadComentario();
                $('#modal-comentario').modal('hide');
                alert('Gracias por dejarnos tu comentario');
            }
        })
    })

    function loadComentario(){
        fetch('/get-comentario', {method: 'GET'})
        .then(res => res.json())
        .then(data => {
            const comentario = document.querySelector('#comentario-container');
            let html = '';
            var i=0;
            var j=1;
            
                        
                      
            html+= '<div class="carousel-inner">';
            data.comentario.forEach(comentario=>{
                    if (j==1) {
                        html+= '<div class="carousel-item active" data-bs-interval="3000">';
                        html+= '<div class="card">';
                        html+= '<div class="card-body">';
                        html+= '<h5 class="card-title">'+comentario.nombre+'</h5>'
                        html+= '<h6 class="card-subtitle mb-2 text-muted">';
                        while (i<comentario.rating) {
                            html += '<i class="rating bi bi-star-fill"></i>';
                            i++;
                        }
                        html+= '</h6>';
                        html+= '<p class="card-text">"'+comentario.comentario+'"</p>';
                        html+= '</div>';
                        html+= '</div>';
                        html+= '</div>';
                        
                        i=0;
                        j++;
                    }
                else{
                    html+= '<div class="carousel-item" data-bs-interval="3000">';
                    html+= '<div class="card">';
                    html+= '<div class="card-body">';
                    html+= '<h5 class="card-title">'+comentario.nombre+'</h5>'
                    html+= '<h6 class="card-subtitle mb-2 text-muted">';
                    while (i<comentario.rating) {
                        html += '<i class="rating bi bi-star-fill"></i>';
                        i++;
                    }
                    html+= '</h6>';
                    html+= '<p class="card-text">"'+comentario.comentario+'"</p>';
                    html+= '</div>';
                    html+= '</div>';
                    html+= '</div>';
                
                i=0;
                j++;
                }
            });
            j=0;
            html += '</div>';
            comentario.innerHTML=html;
        });
    }
