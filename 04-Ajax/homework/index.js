let amigos = $.get('http://localhost:5000/amigos')

// Mostrar lista:

$('#boton').click(function () {
    for(let i = 0; i < amigos.responseJSON.length; i++) {
        $("ul").append(`<li>${amigos.responseJSON[i].name}</li>`);
    }
})

// Mostrar amigo segun id:

$('#search').click(function() {
    var id = $('#input').val();
    for(let i = 0; i < amigos.responseJSON.length; i++) {
        if(amigos.responseJSON[i].id === Number(id)) {
            $("#amigo").append(`<h2>${amigos.responseJSON[i].name}</h2>`)
        }
    }
})

// Eliminar de la lista:


$('#delete').click(() => {
    let inputValue = $('#inputDelete').val();
    $.ajax ({
        url: http://localhost:5000/amigos/${inputValue},
        type:'DELETE',
        sucess: () => {
            $('#sucess').text('El amigo fue borrado exitosamente');
        }
    });
});