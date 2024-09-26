class MainHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header>
        <section id="announcements">
            <p>Announcements</p>
        </section>
        
        
        <!-- Navigation section -->
        <nav>
            <div id="logo">
                <a href=""><img class="logo" src="../../img/logo.png" alt="Phanda Ispani logo" width="122px" height="100px"></a>
            </div>

            <!-- Mobile menu toggle -->
            <div id="menu_toggle">
                <div class="bar"></div>
                <!-- <div class="bar"></div> -->
                <div class="bar"></div>
            </div>

            <section id="nav_bar">
                <ul class="links browse">
                    <li><a href="#">Discover</a></li>
                    <li><a href="../../pages/job_board.html">Job Search</a></li>
                    <li><a href="#">For Recruiters</a></li>
                </ul>

                <ul class="links account">
                    <li><a href="../../pages/Signin_page.html" class="btn btn_fill">Get Started</a></li>
                </ul>
            </section>
        </nav>
    </header>
    `
    }
}

customElements.define('main-header', MainHeader);