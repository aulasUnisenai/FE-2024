const wrapCta = document.getElementById('wrap-cta');
const conteudo = document.getElementById('conteudo');
const polymorph = document.querySelector('.polymorph');

export const mostrarConteudo = () => {
  wrapCta.classList.remove('ativo');
  conteudo.classList.add('ativo');

  anime({
    targets: polymorph,
    easing: 'easeOutQuad',
    duration: 600,
    loop: false,
    points: [
      { value: '200,0 0,110 0,110 0,200'}
    ],
  });
};

export const esconderConteudo = () => {
  conteudo.classList.remove('ativo');
  wrapCta.classList.add('ativo');

  anime({
    targets: polymorph,
    easing: 'easeOutQuad',
    duration: 600,
    loop: false,
    points: [
      { value: '100,100 0,100 0,0 100,0' }
    ],
  });
};