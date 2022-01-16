import React from 'react';
import { useState, useEffect } from 'react';
import '../styles/Global.css';
import '../styles/Main.css';
// import moment from 'moment';

import githubapi from '../utils/API';

export default function Main({ userdetails, gitUsrname, public_images, public_docs, image_ext }) {

    const [results, setResults] = useState([]);

    const searchUserRepo = async (user) => {
        try {
            const response = await githubapi(user);
            setResults(response.data);
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        searchUserRepo(gitUsrname);
      },[gitUsrname]);

      return (
    <main className="_body_container" id="_top">
                <section className="_body_container_inner_bg"></section>
                <section className="_body_container_inner"> 
                    <article className="_card_container_home">
                        <article className="_card_container_inner_home">
                            <figure className="home-content-2">
                                <img src={public_images + userdetails.photo.name} alt={userdetails.photo.alt_text} title={userdetails.photo.title}/>
                            </figure>
                            <aside className="home-content-1">
                                <span className="greet">Hi! I'm {userdetails.firstname} {userdetails.lastname.charAt(0).toUpperCase()}</span>
                                <strong>{userdetails.curr_job}</strong>
                                <span className="greet-desc">{userdetails.short_desc}</span>
                                <div className="next"><a href="#about-me">&gt; More about me &gt;</a></div>
                            </aside>
                        </article>
                    </article>
                    <article className="card-content" id="about-me">
                        <article className="card-content-inner">
                            <aside className="Storyline-A">
                            {userdetails.about_me.map((me) => (
                            <p className="paragraph-context" key={me.desc}>
                                {`${me.desc}`}
                            </p>
                            ))}
                            </aside>
                            <aside className="Storyline-B">
                                <div className="next"><a href="#my-work">&gt; Career Achievements &gt;</a></div>
                            </aside>
                        </article>  
                    </article>
                    <article className="card-content" id="my-work">
                        <article className="work-content-inner">
                            <h2>Portfolio</h2>
                            <aside id="work-content-container" className="work-content-container">
                            {results.map((repos) => 
                                (
                                    <figure key={repos.id}>
                                    <a href={repos.html_url} className="fig-container" >
                                    <figcaption id="#fig-glow">REPOSITORY: {repos.name.toUpperCase()}</figcaption>
                                    <img src={public_images + repos.name.toLowerCase() + image_ext.toLowerCase()} alt={repos.name}/>
                                    <div className="flex-fig-table">
                                        <div className="fig-table">Description:
                                        <span className="fig-desc">{repos.description}</span>
                                        <br/>
                                        Language:    
                                        <span className="fig-lang">{repos.language}</span>
                                        </div>
                                    </div>
                                    </a>
                                    </figure>
                                ))}
                            </aside>
                            <hr/>
                            <aside id="work-content-container" className="work-content-container-2">
                            {userdetails.prev_jobs.map((prevJ) => 
                                (
                                        <figure key={prevJ.job}>
                                            <figcaption id="#fig-glow">{prevJ.job.toUpperCase()}</figcaption>
                                            <img src={public_images + prevJ.job + image_ext.toLowerCase()} alt={prevJ.job}/>
                                            <div className="fig-table"><span className="fig-desc">{prevJ.desc}</span></div>
                                        </figure>
                                 ))}
                                 </aside>
                            <div className="work-content-footer"><span>{userdetails.portfolio_desc}</span></div>
                                <div className="next"><a href="#contact-me">&gt; Get in touch &gt;</a>
                                </div>
                        </article>  
                    </article>
                    <article className="card-content" id="contact-me">
                        <article className="contact-content-inner">
                                <aside>
                                    <h3>Contact Details:</h3>
                                    <p>Phone: {userdetails.phone_number}</p>
                                    <p>Email: <a href={'mailto:' + userdetails.email} className="download-resume">{userdetails.email}</a></p>
                                    <i className="fa fa-file-text"><a href={public_docs + '/Resume-MckinleyJimenez.pdf'} className="download-resume" download>Download my Resume</a></i>
                                </aside>
                        </article>  
                    </article>
                </section>
        </main>
  );
}