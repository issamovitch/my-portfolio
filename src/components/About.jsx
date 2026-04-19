import {useEffect} from "react";


export default function About({smoothScroll}) {
    
    useEffect(() => {
        // Skills progress bar animation using IntersectionObserver
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const progressBars = entry.target.querySelectorAll('.progress-bar');
                    progressBars.forEach(bar => {
                        bar.style.width = bar.getAttribute('aria-valuenow') + '%';
                    });
                }
            });
        }, { threshold: 0.8 });

        const skillsSections = document.querySelectorAll('.skills');
        skillsSections.forEach(section => observer.observe(section));
        
        return () => {
            skillsSections.forEach(section => observer.unobserve(section));
        };
        
    }, []);
    
    return (
        <section className="about" id="about">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6 col-lg-4">
                        <img className="img-fluid" src="/img/about-us.png" />
                    </div>
                    <div className="col-md-6 col-lg-8">
                        <header className="section-header">
                            <h2>About Me</h2>
                        </header>
                        <h3><strong>Name:</strong> Issamovitch</h3>
                        <h4><strong>Profession:</strong> React Developer | Next.js | React Native</h4>
                        <p>
                            I build fast, scalable digital products using React, Next.js, and React Native. My focus is simple: deliver clean, high-performance solutions that solve real business problems and drive measurable results.
                        </p>
                        <p>
                            From custom web apps to mobile experiences, I design and develop systems that are reliable, maintainable, and optimized from day one. I prioritize performance, usability, and clear architecture over unnecessary complexity.
                        </p>
                        <p>
                            I work with businesses that value efficiency, speed, and long-term scalability, turning ideas into production-ready products with zero fluff.
                        </p>
                        <a href="#" onClick={(e)=>{
                            e.preventDefault();
                            smoothScroll(document.getElementById('contact').offsetTop);
                        }}>Hire Me</a>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="skills">
                            <h3>Front End Skills</h3>

                            <div className="skill-name">
                                <p>React / Next.js</p><p>95%</p>
                            </div>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>

                            <div className="skill-name">
                                <p>React Native</p><p>90%</p>
                            </div>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" aria-valuenow="90"></div>
                            </div>

                            <div className="skill-name">
                                <p>TypeScript</p><p>90%</p>
                            </div>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" aria-valuenow="90"></div>
                            </div>

                            <div className="skill-name">
                                <p>HTML / CSS</p><p>85%</p>
                            </div>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" aria-valuenow="85"></div>
                            </div>

                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="skills">
                            <h3>Back End Skills</h3>

                            <div className="skill-name">
                                <p>Node.js / APIs</p><p>85%</p>
                            </div>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" aria-valuenow="85"></div>
                            </div>

                            <div className="skill-name">
                                <p>PHP / Laravel / Wordpress</p><p>90%</p>
                            </div>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" aria-valuenow="90"></div>
                            </div>

                            <div className="skill-name">
                                <p>MySQL</p><p>85%</p>
                            </div>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" aria-valuenow="85"></div>
                            </div>

                            <div className="skill-name">
                                <p>Azure / AWS /Docker</p><p>80%</p>
                            </div>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" aria-valuenow="80"></div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}