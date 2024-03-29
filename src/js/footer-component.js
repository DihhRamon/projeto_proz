const footerTemplate = document.createElement('template');

footerTemplate.innerHTML = `
  <link rel="stylesheet" href="/src/css/footer.css"/>

  <footer>
        <section class="logo1">
          <h2>Musicalizando</h2>
          
          <ul>
            <img src="/src/assets/logo_1.png" alt="Logo Musicalizando">
            <li>
              <h3>Institucional</h3>
              <a href="/src/index.html">Home</a>
              <a href="/src/pages/category/teclas/teclas.html" target="_blank">Teclas</a>
              <a href="/src/pages/category/sopros/sopros.html">Sopros</a>
              <a href="/src/pages/category/cordas/cordas.html" target="_blank">Cordas</a>
              <a href="/src/pages/category/percussao/percussao.html" target="_blank">Percussão</a>
              <a href="/src/pages/contato.html">Contato</a>
            </li>
            <li>
              <h3>Onde nos Encontrar</h3>
              <a href="#"><img src="/src/assets/facebook.png" alt="Ícone Logo Facebook">Facebook</a>
              <a href="#"><img src="/src/assets/instagram.png" alt="Ícone Logo Instagram">Instagram</a>
              <a href="#"><img src="/src/assets/youtube.png" alt="Ícone Logo Youtube">Youtube</a>
              <a href="#"><img src="/src/assets/twitter.png" alt="Ícone Logo Twitter">Twitter</a>
            </li>
          </ul>
        </section>
    
        <section class="bottom">
          &copy; Aline Raldi - Diego Ramon - Débora Rodrigues - Samara Alves
        </section>
      </footer>
`;


class Footer extends HTMLElement {
  constructor() {
    super();
    this._root = this.attachShadow({ mode: 'closed' });
  }

  connectedCallback() {

    this._root.appendChild(footerTemplate.content);
  }
    
  
}

customElements.define('footer-component', Footer);