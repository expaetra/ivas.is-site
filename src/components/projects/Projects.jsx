import React from 'react';
import "./Projects.css";

const Projects = () => {

    const projects = [
        {
            title: "CS Paper Classifier",
            subtitle: "Classifies computer science research papers by discipline and field from a PDF upload. 78k arXiv abstracts, TF-IDF + Logistic Regression tuned with Optuna, benchmarked against SciBERT. FastAPI + React, self-hosted with Docker and Caddy.",
            year: 2026,
            link: "https://classifier.ivas.is",
            repo: "https://github.com/expaetra/cs-paper-classifier"
        },
        {
            title: "Ugljan by Boat",
            subtitle: "Production website for a boat rental and tour business in the Zadar archipelago, Croatia - built, deployed and maintained for a paying client. Originally WordPress on managed hosting; rebuilt in React in 2026 on a Dockerised VPS, cutting hosting costs by ~60% and clearing the way for NLP-based search.",
            year: "2025 · rebuilt 2026",
            link: "https://www.ugljanbyboat.com",
            repo: "https://github.com/expaetra/ugljan-by-boat"
        },
        {
            title: "Croatian Tourism Analytics",
            subtitle: "End-to-end data pipeline examining Croatian tourism around the country's 2023 Schengen accession. Python ETL loads 94k observations from official statistics into a MySQL star schema; six research questions implemented as SQL views, served through an Express API to a React dashboard. Deployed as a static build with pre-computed views - no database running in production.",
            year: 2026,
            link: "https://tourism.ivas.is",
            repo: "https://github.com/expaetra/croatian-tourism-analytics"
        },
    ]
    return (
        <section className='projects section' id="projects">
            <h2 className="section__title">Latest projects</h2>
            <span className='section__subtitle'>Selected work</span>
            <div className='projects__container container grid'>
                <ul className='projects__list'>
                    {projects.map((project, index) => (
                        <li key={index} className="projects__item">
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="projects__link">
                                <h3 className="projects__title">{project.title}</h3>
                                <p className="projects__subtitle">{project.subtitle}</p>
                                <span className="projects__year">{project.year}</span>
                            </a>
                            {project.repo && (
                                <a href={project.repo} target="_blank" rel="noopener noreferrer" className="projects__subtitle">
                                    <i className='bx bxl-github'></i> source code
                                </a>
                            )}
                        </li>
                    ))}
                </ul>
            </div>

        </section>
    )
}

export default Projects
