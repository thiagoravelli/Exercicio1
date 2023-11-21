var listas = document.querySelectorAll('li');
        listas.forEach(function(lista) {
            lista.addEventListener('click', function(event) {
                event.target.style.backgroundColor = '#28a745';
                event.target.style.color = '#fff';
            });
        });

function resetarCores() {
    var itens = document.querySelectorAll('li');
    itens.forEach(function(item) {
        item.style.backgroundColor = '#f0f0f0';
        item.style.color = '#333';
    });
}