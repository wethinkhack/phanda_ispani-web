class SkillComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <section class="skill">
                <h3>Customer Service & Sales</h3>
                <p>Strong ability to engage with customers, providing personalized solutions that enhanced satisfaction and loyalty.</p>
            </section>
        `
    }
}

customElements.define('skill-component', SkillComponent);