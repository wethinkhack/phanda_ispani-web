class JobComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <section class="job green">
                <h3>Cleaner</h3>
                <p>Strong ability to engage with customers, providing personalized solutions that enhanced satisfaction and loyalty.</p>
                <button class='btn btn_fill beige'>Remove</button>
            </section>
        `
    }
}

customElements.define('job-component', JobComponent);
