import React from 'react';
import './Skills.css';

const Skills = () => {

            const groups = [
        {
            title: "Languages & Core",
            icon: "bx bx-code-alt",
            items: ["Python", "C++", "JavaScript / TypeScript", "SQL (MySQL)"]
        },
        {
            title: "Machine Learning",
            icon: "bx bx-brain",
            items: ["scikit-learn", "TensorFlow & Keras", "PyTorch", "Optuna"]
        },
        {
            title: "Natural Language Processing",
            icon: "bx bx-message-dots",
            items: ["Hugging Face Transformers (SciBERT)", "NLTK & gensim (Word2Vec)", "TF-IDF & classical pipelines", "arXiv API data collection"]
        },
        {
            title: "Data & Analysis",
            icon: "bx bx-bar-chart-alt-2",
            items: ["pandas & NumPy", "Matplotlib & Seaborn", "ETL & star-schema modeling", "Jupyter / Google Colab"]
        },
        {
            title: "Web & Infrastructure",
            icon: "bx bx-server",
            items: ["FastAPI & REST APIs", "React (Vite & CRA)", "Docker & Caddy", "Linux VPS · DNS · Git"]
        },
        {
            title: "Human Languages",
            icon: "bx bx-globe",
            items: ["Croatian - native", "English - C2", "Spanish - C2", "Icelandic - B2"]
        }
    ];

    return (
        <section className="skills section" id="skills">
            <h2 className="section__title">What I work with</h2>
            <span className="section__subtitle">Tools, stacks & languages</span>

            <div className="skills__container container grid">
                {groups.map((group, index) => (
                    <div key={index} className="skills__group">
                        <h3 className="skills__group-title">
                            <i className={group.icon}></i> {group.title}
                        </h3>
                        <ul className="skills__list">
                            {group.items.map((item, i) => (
                                <li key={i} className="skills__item">
                                    <i className='bx bx-check'></i> {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
