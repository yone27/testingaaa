import React from 'react'
import './Card.css';

function Card({ img, url, title, summary, tech, classCustom }) {
    return (
        <article className={`card ${tech[0]} ${classCustom}`} >
            <aside className="card__aside">
                <a href={url} target="_blank" rel="noopener noreferrer">
                    <figure>
                        <img src={`/${img}`} className="card__img" alt={title} />
                    </figure>
                </a>
            </aside>
            <header className="card__header">
                <h3 className="card__title">
                    <a href={url} target="_blank" rel="noopener noreferrer">
                        {title}
                    </a>
                </h3>
                <p>
                    {summary}
                    {
                        tech.map((value,index) => (
                            <span key={index} className="tag">
                                {value}
                            </span>
                        ))
                    }
                </p>
            </header>
        </article>
    )
}

export default Card
