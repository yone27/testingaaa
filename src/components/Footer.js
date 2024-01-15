import React from 'react'
import './Footer.css';

function Footer() {
    return (
        <section className="footer icons icons--color4">
            <header>
                <h2>Contáctame:</h2>
            </header>
            <article className="icon-box">
                <aside className="icon">
                    <i className="fa fa-phone"></i>
                </aside>
                <header className="info">
                    <h4>Celular</h4>
                    <p>+58 424 182 7991</p>
                </header>
            </article>
            <article className="icon-box">
                <aside className="icon">
                    <i className="fa fa-envelope"></i>
                </aside>
                <header className="info">
                    <h4>Email</h4>
                    <p>yonex27000@gmail.com</p>
                </header>
            </article>
        </section>
    )
}

export default Footer
