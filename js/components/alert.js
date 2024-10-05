class AlertComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <section class="alert">
                <h3>New Application</h3>
                <p>Ms. BK Sibiya applied for cleaner position.</p>
            </section>
        `
    }
}

customElements.define('alert-component', AlertComponent);