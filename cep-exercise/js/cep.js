const cep = document.getElementById('cep');
const rua = document.getElementById('rua');
const numero = document.getElementById('numero');
const bairro = document.getElementById('bairro');
const uf = document.getElementById('uf');
const cidade = document.getElementById('cidade');
const popup = document.getElementById('popup');
const closePopup = document.getElementById('close-popup');
const btnSave = document.getElementById('btnSalvar');
const btnLimpar = document.getElementById('btnLimpar');

let numeroRua = '';

async function findCep(cep){
    const apiCep = `https://viacep.com.br/ws/${cep}/json/`;

    const res = await fetch(apiCep).then(resp => resp.json())
        .then( field =>{
        console.log(field)
        rua.value = field.logradouro,
        numeroRua = numero.value,
        bairro.value = field.bairro,
        uf.value = field.uf,
        cidade.value = field.localidade

       
    });

    return res;
}

cep.addEventListener('blur', () => {
    let campoCep = cep.value;
    findCep(campoCep);
})

btnLimpar.addEventListener('click', () => {
    limparFormulario()
})

btnSave.addEventListener('click', () =>{
    localStorage.setItem('Address', JSON.stringify({

        cep : cep.value,
        endereco: rua.value,
        numero: numero.value,
        bairro: bairro.value, 
        uf: uf.value,
        cidade: cidade.value
    
    }));
    // Mostrar o pop-up
    popup.style.display = 'flex';
    //limpando formulário
    limparFormulario()
})

function limparFormulario(){
        cep.value = '';
        rua.value = '';
        numero.value = '';
        bairro.value = '';
        uf.value = '';
        cidade.value = '';
}

closePopup.addEventListener('click', () => {
    // Esconder o pop-up
    popup.style.display = 'none';
});




