const axios = require('axios');

const cep = "03694000"

async function requisicaoAPI() {
    try {
        const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
        if (response.status === 200) {
            console.log(response.data);
        }
    } catch (error) {
        console.log('Erro na requisição', error);
    }
}

requisicaoAPI();
