class JobRecommendation extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <section class="job_recommendation">
                <h3>E-Commerce Sales Coordinator</h3>
                <p>Assist in managing online sales channels for retail companies, including product listings, pricing updates, and promotional campaigns.</p>
            </section>
        `
    }
}

customElements.define('job-recommendation', JobRecommendation);