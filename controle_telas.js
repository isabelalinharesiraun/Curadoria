async function processo_cadastro_usuario(){
    const form_cadastro_usuario = document.getElementById('form_cadastro_usuario');
    const dados_form = new FormData(form_cadastro_usuario);
    const corpo_playload = Object.fromEntries(dados_form.entries());
    console.log(corpo_playload);

    rota_api_register(corpo_playload)
}