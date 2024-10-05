// Handle job posts
function job(title, description) {
    return {
        title: title,
        description: description
    };
}

// List of vacancies
vacancies = [];

// Handle 'add job' button
document.querySelector('#add_job').addEventListener('click', () => {
    document.querySelector('dialog').showModal()
});

// Handle 'post vacancy' button click
document.querySelector('#post_vacancy').addEventListener('click', (event) => {
    event.preventDefault()

    title = document.querySelector('#jobTitle').value;
    description = document.querySelector('#jobDescription').value;

    vacancies.push(job(title, description));
    show_jobs();
    document.querySelector('dialog').close()
});

// Render jobs
function show_jobs() {
    document.querySelector('.jobs-container').removeChild(document.querySelector('.jobs'));
    let section = document.createElement('section');
    section.classList.add('jobs');
    document.querySelector('.jobs-container').appendChild(section);

    vacancies.forEach(job => {
        let job_element = document.createElement('job-component');
        job_element[title] = job.title; 
        job_element[description] = job.description; 
        document.querySelector('.jobs').appendChild(job_element);
    });
}