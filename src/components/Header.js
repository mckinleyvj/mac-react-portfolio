import React from 'react';
import '../styles/Global.css';
import '../styles/Header.css';

const portfolio_title = "DEV_Mac //"
const linkedin_url = 'https://www.linkedin.com/in/mckinleyjimenez';
const github_url = "https://github.com/mckinleyvj";
const instagram_url = "https://www.instagram.com/macmikemarkmax";

function Header() {
  return (
    <header className="_header_container">
            <section className="_header_container_main">
                <div id="time-now"></div>
                <section className="_header_inner_container _no_transition">
                    <h2 className="_no_transition">{portfolio_title}</h2>
                    <nav className="_header_inner_external_links">
                        <ul className="_no_transition">
                            <li className="_no_transition"><a className="_no_transition" href={linkedin_url}><i className="fa fa-linkedin-square"></i></a></li>
                            <li className="_no_transition"><a className="_no_transition" href={github_url}><i className="fa fa-github-square"></i></a></li>
                            <li className="_no_transition"><a className="_no_transition" href={instagram_url}><i className="fa fa-instagram"></i></a></li>
                        </ul>
                    </nav>
                </section>
                <section className="_header_inner_container_1 _no_transition">
                    <nav className="_header_inner_internal_links">
                        <ul className="_no_transition">
                            <li className="_no_transition"><a className="_no_transition" href="#_top">Home</a></li>
                            <li className="_no_transition"><a className="_no_transition" href="#about-me">About</a></li>
                            <li className="_no_transition"><a className="_no_transition" href="#my-work">Portfolio</a></li>
                            <li className="_no_transition"><a className="_no_transition" href="#contact-me">Contact</a></li>
                        </ul>
                    </nav>
                </section>
            </section>
        </header> 
  );
}

export default Header;
