// Professor, peço desculpas pelos meus atrasos mas ultimamente esive com o tempo muito corrido e não consegui prestar atenção direito nas aulas de javascript, fiz esse formulario com a ajuda de videos, chatgpt, e vendo algumas videoaulas basicas de javascript mas ainda sim to com dificuldades, vou recorrer a kick para que eu possa rever as aulas de javascript que você já deu e recuperar a matéria e o tempo que está em atraso :)

const form = document.getElementById('cadastroForm');
const nome = document.getElementById('nome');
const email = document.getElementById('email');
const senha = document.getElementById('senha');

function validarFormulario(event) {

    let formValido = true;

    if (nome.value == '') {
        document.getElementById('errorNome').style.display = 'block';
        formValido = false;
    } else {
        document.getElementById('errorNome').style.display = 'none';
    }

    if (email.value == '') {
        document.getElementById('errorEmail').style.display = 'block';
        formValido = false;
    } else {
        document.getElementById('errorEmail').style.display = 'none';
    }

    if (senha.value == '') {
        document.getElementById('errorSenha').style.display = 'block';
        formValido = false;
    } else {
        document.getElementById('errorSenha').style.display = 'none';
    }

    if (formValido) {
        form.submit();
    }
}

//Professor, peço desculpas pelos meus atrasos mas ultimamente esive com o tempo muito corrido e não consegui prestar atenção direito nas aulas de javascript, fiz esse formulario com a ajuda de videos, chatgpt, e vendo algumas videoaulas basicas de javascript mas ainda sim to com dificuldades, vou recorrer a kick para que eu possa rever as aulas de javascript que você já deu e recuperar a matéria e o tempo que está em atraso :)