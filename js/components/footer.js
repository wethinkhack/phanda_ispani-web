// Footer component
class MainFooter extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <!-- Footer section -->
        <footer>
            <div class="links">
                <div class="logo">
                    <img src="/img/logo.png" alt="Phanda Ispani logo" width="183px" height="150px">
                </div>
        
                <div class="company">
                    <h2>Company</h2>
                    <ul>
                        <li><a href="/pages/about.html">About</a></li>
                        <li><a href="/pages/terms.html">Terms</a></li>
                        <li><a href="/pages/privacy.html">Privacy & Cookies</a></li>
                    </ul>
                </div>
            </div>

            <p>Copyright &copy; Phanda Ispani. All rights reserved.</p>
        </footer>
        `;
    }
}

customElements.define('main-footer', MainFooter);