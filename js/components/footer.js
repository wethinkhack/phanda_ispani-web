// Footer component
class MainFooter extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        let path = window.location.href;
        path = path.substring(0, path.split('/', 4).join('/').length + 1);
        
        this.innerHTML = `
        <!-- Footer section -->
        <footer>
            <div class="links">
                <div class="logo">
                    <img src="${path}img/logo.png" alt="Phanda Ispani logo" width="183px" height="150px">
                </div>
        
                <div class="company">
                    <h2>Company</h2>
                    <ul>
                        <li><a href="${path}pages/about.html">About</a></li>
                        <li><a href="${path}pages/terms.html">Terms</a></li>
                        <li><a href="${path}pages/privacy.html">Privacy & Cookies</a></li>
                    </ul>
                </div>
            </div>

            <p>Copyright &copy; Phanda Ispani. All rights reserved.</p>
        </footer>
        `;
    }
}

customElements.define('main-footer', MainFooter);