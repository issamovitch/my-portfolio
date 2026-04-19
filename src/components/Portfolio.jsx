export default function Portfolio() {
    return (
        <section className="portfolio" id="portfolio">
            <div className="container">
                <header className="section-header">
                    <h3 className="section-title">My Portfolio</h3>
                    <p>
                        Real project focused on UI, performance, and user experience.
                    </p>
                </header>

                {/*
                <div className="row">
                    <div className="col-lg-12">
                        <ul id="portfolio-flters">
                            <li data-filter="*" className="filter-active">All</li>
                            <li data-filter=".web-des">Web Design</li>
                            <li data-filter=".web-dev">Web Development</li>
                            <li data-filter=".app-dev">App Development</li>
                        </ul>
                    </div>
                </div>
                */}

                <div className="row portfolio-container">
                    <div className="col-lg-4 col-md-6 portfolio-item web-des">
                        <div className="portfolio-wrap">
                            <figure className="portfolio-shadow">
                                <img src="/img/portfolio-1.jpg" className="img-fluid" alt="" />
                                <a target="_blank" href="https://travel.issamovitch.dev" className="link-preview" title="Preview"><i className="fa fa-eye"></i></a>
                                <a target="_blank" href="https://github.com/issamovitch/luxury-travel-platform" className="link-details" title="More Details"><i className="fa fa-code"></i></a>
                                <h4 className="portfolio-title">
                                    Luxury Travel Website <span>React / GSAP / Responsive UI</span>
                                </h4>
                            </figure>
                        </div>
                    </div>
                </div>
                
            </div>
        </section>
    );
}