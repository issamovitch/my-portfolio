export default function Services(){
    
    return (
        <section className="services" id="services">
            <div className="container">
                <header className="section-header">
                    <h3>My Services</h3>
                    <p>
                        I build fast, scalable digital products that don’t just look good, they drive real business results. Using modern technologies like React, Next.js, and React Native, 
                        I help businesses launch high-performing websites, web apps, and mobile experiences that are optimized for speed, usability, and growth from day one.
                    </p>
                </header>
                <div className="row">
                    <div className="col-sm-6 col-md-4">
                        <div className="single-service">
                            <span></span>
                            <div className="service-icon"><i className="fa fa-solid fa-globe"></i></div>
                            <h4>High-Converting Websites</h4>
                            <p>React / Next.js <br/>Fast, SEO-optimized sites that turn visitors into clients</p>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4">
                        <div className="single-service">
                            <span></span>
                            <div className="service-icon"> <i className="fa fa-laptop"></i> </div>
                            <h4>Custom Web Applications</h4>
                            <p>React + Node.js / APIs <br/>Automate workflows and scale your business operations</p>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4">
                        <div className="single-service">
                            <span></span>
                            <div className="service-icon"> <i className="fa fa-android"></i> </div>
                            <h4>Mobile Apps (iOS & Android)</h4>
                            <p>React Native / Expo <br/>Reach users everywhere with one efficient codebase</p>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4">
                        <div className="single-service">
                            <span></span>
                            <div className="service-icon"> <i className="fa fa-solid fa-server"></i> </div>
                            <h4>Backend & API Development</h4>
                            <p>REST / GraphQL / Auth <br/>Secure, scalable systems powering your product</p>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4">
                        <div className="single-service">
                            <span></span>
                            <div className="service-icon"> <i className="fa fa-signal"></i> </div>
                            <h4>Performance & Optimization</h4>
                            <p>Core Web Vitals / Caching <br/> load times → better UX and higher conversions</p>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4">
                        <div className="single-service">
                            <span></span>
                            <div className="service-icon"> <i className="fa fa-cloud"></i> </div>
                            <h4>Deployment & Maintenance</h4>
                            <p>Azure / AWS / Vercel / Docker <br/> launches + ongoing support, zero headaches</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
    
}