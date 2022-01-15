import React from 'react';
import '../styles/Global.css';
import '../styles/Header.css';

export default function Header({ userdetails }) {
  return (
    <header className="_header_container">
            <section className="_header_container_main">
                <div id="time-now"></div>
                <section className="_header_inner_container _no_transition">
                    <h2 className="_no_transition">{userdetails.title}</h2>
                    <nav className="_header_inner_external_links">
                        <ul className="_no_transition">
                            <li className="_no_transition"><a className="_no_transition" href={userdetails.linkedin_url}><i className="fa fa-linkedin-square"></i></a></li>
                            <li className="_no_transition"><a className="_no_transition" href={userdetails.github_url}><i className="fa fa-github-square"></i></a></li>
                            <li className="_no_transition"><a className="_no_transition" href={userdetails.instagram_url}><i className="fa fa-instagram"></i></a></li>
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