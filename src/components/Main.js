import React from 'react';
import '../styles/Global.css';
import '../styles/Main.css';

const public_images = process.env.PUBLIC_URL + `images/`;

const usr_greet = "Hi! I'm Mckinley.";
const usr_curr_job = "Business Analyst/Full Stack Developer";
const usr_short_desc = `IT professional with wide range of skillsets. 8 years of industry experience incl. Software Dev. & Support, Upgrades & Migration + Hardware/Networks.`;
const usr_job1 = '';

function Main() {
  return (
    <main className="_body_container" id="_top">
                <section className="_body_container_inner_bg"></section>
                <section className="_body_container_inner"> 
                    <article className="_card_container_home">
                        <article className="_card_container_inner_home">
                            <figure className="home-content-2">
                                <img src={public_images + 'Self-Portrait-BW.png'} alt="Self-Portrait of Mac" title="Hi! This is me."/>
                            </figure>
                            <aside className="home-content-1">
                                <span className="greet">{usr_greet}</span>
                                <strong>{usr_curr_job}</strong>
                                <span className="greet-desc">{usr_short_desc}</span>
                                <div className="next"><a href="#about-me">&gt; More about me &gt;</a></div>
                            </aside>
                        </article>  
                        <aside className="home-content-3">
                            <ul className="timeline">
                                <li data-year="2011" data-text="Software Support Executive"></li>
                                <li data-year="2013" data-text="Systems Analyst"></li>
                                <li data-year="2016" data-text="Technical Lead"></li>
                                <li data-year="2019" data-text="Vehicle Detailer"></li>
                                <li data-year="2021" data-text="Business Analyst/Web Developer"></li>
                            </ul>
                        </aside>
                    </article>
                    <article className="card-content" id="about-me">
                        <article className="card-content-inner">
                            <aside className="Storyline-A">
                                <p className="paragraph-context">
                                    My nickname is "Mac". Residing in Geelong, Australia.</p>
                                <p className="paragraph-context">
                                    I have a degree in Computing & Software Engineering with extensive knowledge in applications development. The core languages I used were Visual Basic, VB.Net, ASP.Net, HTML, CSS and SQL.</p>
                                <p className="paragraph-context">
                                    I started my career as an IT Support Specialist, accruing hours of IT managed services for corporate clients in <a href="https://en.wikipedia.org/wiki/Brunei" target="_blank">Brunei Darussalam</a>. The position provided me with the chance to deal with real-world situations while also honing my skills in working with a wide range of application systems, including but not limited to Accounting, Stock Inventory, HR, ERP, and POS. I had managed and led hundreds of projects over the years that includes system upgrades and migration, as well as software development.</p>
                                <p className="paragraph-context">
                                    I moved to Australia after 8 years for the purpose of a better life, but had difficulties due to visa work rights limitations. I worked as a Vehicle detailer for two years until my regional skilled visa was granted, providing full work rights to which gave me the opportunity to focus on rebuilding my career.</p> 
                                <p className="paragraph-context"> 
                                    I am currently enrolled in an online Full Stack Flex course by Monash University, Melbourne. The course is a game changer, it has all the resources that helped me land a promising career as a Business Analyst for a respective employer. My knowledge will continue to expand and I will strive to progress through continuing development.</p> 
                            </aside>
                            <aside className="Storyline-B">
                                <div className="next"><a href="#my-work">&gt; Career Achievements &gt;</a></div>
                                <figure>
                                    <img src="./assets/images/TBS.jpg" alt="TBS Solutions Logo" title="TBS Malaysia"/>
                                    <figcaption>TBS Software Systems</figcaption>
                                </figure>
                                <figure>
                                    <img src="./assets/images/FVP.png" alt="Visual FoxPro Logo" title="Visual FoxPro"/>
                                    <figcaption>Visual FoxPro</figcaption>
                                </figure>
                                <figure>
                                    <img src="./assets/images/MySQL.png" alt="MySQL Logo" title="MySQL"/>
                                    <figcaption>MySQL DB Tools</figcaption>
                                </figure>
                                <figure>
                                    <img src="./assets/images/C1.png" alt="ComponentOne Logo" title="ComponentOne Reports Designer"/>
                                    <figcaption>C1 Report Designer</figcaption>
                                </figure>
                            </aside>
                        </article>  
                    </article>
                    <article className="card-content" id="my-work">
                        <article className="work-content-inner">
                            <h2>Monash BootCamp Web Dev. - Repositories</h2>
                            <aside id="work-content-container" className="work-content-container">
                            </aside>
                            <h2>Systems Analyst - Previous Overseas Employment</h2>
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
                            </aside>
                            <div className="work-content-footer"><span>*Images are copyright and have been originally taken throughout my career.</span></div>
                                <div className="next"><a href="#contact-me">&gt; Get in touch &gt;</a>
                                </div>
                        </article>  
                    </article>
                    <article className="card-content" id="contact-me">
                        <article className="contact-content-inner">
                                <aside>
                                    <h3>Contact Details:</h3>
                                    <p>Phone: +61-416781287</p>
                                    <p>Email: <a href="mailto:mckinleyvj@gmail.com" className="download-resume">mckinleyvj@gmail.com</a></p>
                                    <i className="fa fa-file-text"><a href="./assets/docs/Resume-MckinleyJimenez.pdf" className="download-resume" download>Download my Resume</a></i>
                                </aside>
                        </article>  
                    </article>
                </section>
        </main>
  );
}

export default Main;
