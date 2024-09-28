class EducationHistory extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <section class="education_history">
                <h3>High School Diploma</h3>
                <p>ABC High School, Cape Town, South Africa</p>
                <p><i>Graduated: December 2021</i></p>
                <p>Top 10% of graduating class with distinctions in Mathematics and Business Studies.</p>
            </section>
        `
    }
}

customElements.define('education-history', EducationHistory);