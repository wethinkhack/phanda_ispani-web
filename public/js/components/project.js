class ProjectComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <section class="user_project">
                <h3>Retail Sales Dashboard</h3>
                <p>Personal Project</p>
                <p><i>March 2023 – May 2023</i></p>
                <p>Developed an interactive sales dashboard using HTML, CSS, JavaScript, and Google Sheets to track and analyze daily sales performance.</p>
            </section>
        `
    }
}

customElements.define('project-component', ProjectComponent);