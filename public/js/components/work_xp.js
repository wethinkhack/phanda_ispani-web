class WorkExperience extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <section class="job">
                <h3>Sales Associate</h3>
                <p>XYZ Retail Store, Cape Town, South Africa</p>
                <p><i>January 2022 – June 2023</i></p>
                <p>Delivered exceptional customer service, increasing customer satisfaction ratings by 15%</p>
            </section>
        `
    }
}

customElements.define('work-experience', WorkExperience);