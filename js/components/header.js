class MainHeader extends HTMLElement {
    constructor() {
        super();
    }
    
    connectedCallback() {
        let path = window.location.href;
        path = path.substring(0, path.split('/', 4).join('/').length + 1);

        this.innerHTML = `
            <header>
                <section id="announcements">
                    <p>Announcements</p>
                </section>
            
            
                <!-- Navigation section -->
                <nav>
                    <div id="logo">
                        <a href="${path}"><img class="logo" src="${path}img/logo.png" alt="Phanda Ispani logo" width="122px" height="100px"></a>
                    </div>

                    <!-- Mobile menu toggle -->
                    <div id="menu_toggle">
                        <div class="bar"></div>
                        <!-- <div class="bar"></div> -->
                        <div class="bar"></div>
                    </div>

                    <section id="nav_bar">
                        <ul class="links browse">
                            <li><a href="${path}pages/home.html">Discover</a></li>
                            <li><a href="${path}pages/job_board.html">Job Search</a></li>
                            <li><a href="${path}pages/job_posting.html">For Recruiters</a></li>
                        </ul>
                    </section>
                    ${this.getSignInState(path)}
                </nav>
            </header>
        `;
    }

    getSignInState(path) {
        if (!this.userSignedIn(path)) {
            return `
                <ul class="links account">
                    <li><a href="${path}pages/account.html" class="btn btn_fill">Get Started</a></li>
                </ul>
            `;
        }
        
        return `
            <section class="top">
                <div class="utility">
                    <svg class="icon notifications" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <title>bell</title>
                        <path
                            d="M21,19V20H3V19L5,17V11C5,7.9 7.03,5.17 10,4.29C10,4.19 10,4.1 10,4A2,2 0 0,1 12,2A2,2 0 0,1 14,4C14,4.1 14,4.19 14,4.29C16.97,5.17 19,7.9 19,11V17L21,19M14,21A2,2 0 0,1 12,23A2,2 0 0,1 10,21" />
                    </svg>

                    <div class="user">
                        <a href="${path}pages/profile.html"><img class="avatar" src="${path}img/avatar-1.jpg" alt="User avatar" /></a>
                    </div>
                </div>
            </section>
        `;
    }

    userSignedIn() {
        let path = window.location.href;
        if (path.indexOf('profile') >= 0) {
            return true;
        }
        return false;
    }
}

customElements.define('main-header', MainHeader);