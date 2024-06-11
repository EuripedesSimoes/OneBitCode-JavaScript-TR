function conf_pass() {
    const senha_dom = document.getElementById('senha')
    const senhaconf_dom = document.getElementById('senhaconf')

    if (senha_dom == senhaconf_dom) {
        window.alert('Senhas conferem. Usuário criado')
    }
        else {
            window.alert('Senhas não batem, favor redigitar')
        }
    
}