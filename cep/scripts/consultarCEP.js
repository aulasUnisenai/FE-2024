// Importando módulos necessários
import { formatarCEP } from './formatarCEP.js';
import { mostrarResultadoModal } from './modal.js';
import { mostrarConteudo, esconderConteudo } from './animacao.js';

// Classe para lidar com a consulta de CEP
export default class ConsultaCEP {
  constructor() {
    // Inicializa os elementos do DOM
    this.iniciarElementos();
    // Inicializa os eventos
    this.iniciarEventos();
  }

  // Inicializa os elementos do DOM
  iniciarElementos() {
    this.botaoConsultar = document.getElementById('consultar');
    this.botaoLocalizacao = document.getElementById('geolocalizacao');
    this.inputCEP = document.getElementById('cep-input');
    this.wrapCta = document.getElementById('wrap-cta');
    this.conteudo = document.getElementById('conteudo');
    this.formularioCEP = document.getElementById('formulario-cep');
    this.botaoCta = document.getElementById('cta');
    this.botaoFechar = document.getElementById('fechar');
  }

  // Inicializa os eventos
  iniciarEventos() {
    // Evento de clique no botão de consulta
    this.botaoConsultar.addEventListener('click', () => this.realizarConsulta());
    // Evento de pressionar tecla no campo de entrada de CEP
    this.inputCEP.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        this.realizarConsulta();
      } else if (e.key === 'Escape') {
        this.limparDados();
      }
    });
    // Evento de clique no botão de geolocalização
    this.botaoLocalizacao.addEventListener('click', () => {
      this.obterLocalizacao()
        .then(({ latitude, longitude }) => this.buscarCepPorCoordenadas(latitude, longitude))
        .then((cep) => {
          this.inputCEP.value = cep;
          this.realizarConsulta();
        })
        .catch((error) => this.mostrarErro(error));
    });
    // Evento de clique no botão de conteúdo
    this.botaoCta.addEventListener('click', () => mostrarConteudo(this.wrapCta, this.conteudo));
    // Evento de clique no botão de fechar conteúdo
    this.botaoFechar.addEventListener('click', () => esconderConteudo(this.conteudo, this.wrapCta));
    // Evento de input no campo de CEP
    this.inputCEP.addEventListener('input', () => formatarCEP(this.inputCEP));
    // Evento de envio do formulário
    this.formularioCEP.addEventListener('submit', (e) => {
      e.preventDefault();
      this.realizarConsulta();
    });
  }

  // Realiza a consulta do CEP
  async realizarConsulta() {
    const cep = this.inputCEP.value.trim().replace(/\D/g, '');
    if (!cep || cep.length !== 8) {
      alert('Por favor, digite um CEP válido.');
      return;
    }

    try {
      const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const dados = await resposta.json();

      if (dados.erro) {
        alert('CEP não encontrado.');
      } else {
        const resultado = `Logradouro: ${dados.logradouro} <br> Bairro: ${dados.bairro} <br> Cidade: ${dados.localidade}/${dados.uf}`;
        mostrarResultadoModal(resultado);
      }
    } catch (error) {
      this.mostrarErro('Ocorreu um erro na consulta.');
    }
  }

  // Limpa os dados do campo de CEP
  limparDados() {
    this.inputCEP.value = '';
  }

  // Obtém a localização do usuário
  obterLocalizacao() {
    return new Promise((resolver, rejeitar) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (posicao) => resolver(posicao.coords),
          (erro) => rejeitar(erro)
        );
      } else {
        rejeitar(new Error('Geolocalização não é suportada pelo seu navegador.'));
      }
    });
  }

  // Busca o CEP com base nas coordenadas de latitude e longitude
  async buscarCepPorCoordenadas(latitude, longitude) {
    const resposta = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`);
    const dados = await resposta.json();

    if (!dados.address.postcode) {
      throw new Error('Não foi possível determinar o CEP a partir das coordenadas fornecidas.');
    }

    return dados.address.postcode;
  }

  // Exibe erro no console em caso de falha na consulta
  mostrarErro(erro) {
    console.error(erro);
  }
}

// Função para iniciar a consulta de CEP
export const iniciarConsultaCEP = () => {
  new ConsultaCEP();
};