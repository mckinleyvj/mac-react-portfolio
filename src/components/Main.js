import React from 'react';
import { useState, useEffect } from 'react';
import '../styles/Global.css';
import '../styles/Main.css';
import moment from 'moment';

import githubapi from '../utils/API';

export default function Main({ userdetails, public_images, public_docs, image_ext }) {

    const [results, setResults] = useState([]);

    const searchUserRepo = async (user) => {
        const response = await githubapi(user);
        setResults(response.data);
      };

    useEffect(() => {
        searchUserRepo('mckinleyvj');
      }, []);

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
                        {/* <aside className="home-content-3">
                            <ul className="timeline">
                                <li data-year="2011" data-text="Software Support Executive"></li>
                                <li data-year="2013" data-text="Systems Analyst"></li>
                                <li data-year="2016" data-text="Technical Lead"></li>
                                <li data-year="2019" data-text="Vehicle Detailer"></li>
                                <li data-year="2021" data-text="Business Analyst/Web Developer"></li>
                            </ul>
                        </aside> */}
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
                                {/* <figure>
                                    <img src={public_images + "/TBS.jpg"} alt="TBS Solutions Logo" title="TBS Malaysia"/>
                                    <figcaption>TBS Software Systems</figcaption>
                                </figure>
                                <figure>
                                    <img src={public_images + "FVP.png"} alt="Visual FoxPro Logo" title="Visual FoxPro"/>
                                    <figcaption>Visual FoxPro</figcaption>
                                </figure>
                                <figure>
                                    <img src={public_images + "MySQL.png"} alt="MySQL Logo" title="MySQL"/>
                                    <figcaption>MySQL DB Tools</figcaption>
                                </figure>
                                <figure>
                                    <img src={public_images + "C1.png"} alt="ComponentOne Logo" title="ComponentOne Reports Designer"/>
                                    <figcaption>C1 Report Designer</figcaption>
                                </figure> */}
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
                                    <div className="fig-table">
                                    <span className="fig-desc">Description:<br/>
                                    {repos.description}</span>
                                    <span className="fig-desc">Language: {repos.language}</span>
                                    {/* <span className="fig-desc">Last update: {repos.date_updtd}</span> */}
                                    {/* <span className="fig-desc">Live URL: <a href="https://{repos.owner.login}.github.io/{repos.name}" className="fig-desc" target="_blank">https://{repos.owner.login}.github.io/{repos.name}</a></span> */}
                                    </div>
                                    </div>
                                    </a>
                                    </figure>
                                ))}
                            </aside>
                            {/* {userdetails.prev_jobs.map((prevJ) => 
                                (
                                    
                                )} */}
                            {/* <h2>Systems Analyst - Previous Overseas Employment</h2>
                            <aside id="work-content-container" className="work-content-container">
                                <figure>
                                    <figcaption id="#fig-glow">Server/Desktop Repairs</figcaption>
                                    <img src="./assets/images/Work1.jpeg" alt="Typical Work Day 1"/>
                                    <div className="fig-table"><span className="fig-desc">IT Support: Hardware Troubleshooting, Installation/Configuration of internal modular components</span></div>
                                </figure>

                                <figure>
                                    <figcaption id="#fig-glow">System Testing</figcaption>
                                    <img src="./assets/images/Work2.jpeg" alt="Typical Work Day 2"/>
                                    <div className="fig-table"><span className="fig-desc">IT Support: Accounting, Stock Inventory, Point of Sales, ERP, Payroll and other management softwares</span></div>
                                </figure>

                                <figure>
                                    <figcaption id="#fig-glow">System Upgrade/Migration</figcaption>
                                    <img src="./assets/images/Work3.jpeg" alt="Typical Work Day 3"/>
                                    <div className="fig-table"><span className="fig-desc">IT Support: Client projects implementing of system upgrades and data migration</span></div>
                                </figure>

                                <figure>
                                    <figcaption id="#fig-glow">System Support</figcaption>
                                <img src="./assets/images/Work4.jpeg" alt="Typical Work Day 4"/>
                                <div className="fig-table"><span className="fig-desc">IT Support: Routine housekeeping jobs, numeric file deletion, backup file integrity and hardware device checks</span></div>
                                </figure>

                                <figure>
                                    <figcaption id="#fig-glow">Operating Systems</figcaption>
                                    <img src="./assets/images/Work5.jpeg" alt="Typical Work Day 5"/>
                                    <div className="fig-table"><span className="fig-desc">IT Support: Fresh Installation, Reinstallation, Recovery, Ghosting of Windows Desktop/Server Operating Systems</span></div>
                                </figure>

                                <figure>
                                    <figcaption id="#fig-glow">Coding</figcaption>
                                    <img src="./assets/images/Work6.jpeg" alt="Typical Work Day 6"/>
                                    <div className="fig-table"><span className="fig-desc">IT Support: Visual Foxpro, Visual Basic, HTML, CSS, ASP.Net, VBScript, XML, SQL</span></div>
                                </figure> 
                            </aside> */}
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