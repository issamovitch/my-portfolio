import { useState, useRef } from 'react';
import gsap from 'gsap';

const projects = [
    {
        id: 1,
        title: "Luxury Travel Website",
        subtitle: "React / GSAP / Responsive UI",
        img: "/img/portfolio-1.jpg",
        preview: "https://travel.issamovitch.dev",
        details: "https://github.com/issamovitch/luxury-travel-platform",
        category: "web-des",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
    {
        id: 2,
        title: "E-Commerce Platform",
        subtitle: "Next.js / Tailwind / Stripe",
        img: "/img/portfolio-2.jpg",
        preview: "https://shop.issamovitch.dev",
        details: "https://github.com/issamovitch/ecommerce-platform",
        category: "web-dev",
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
    },
    {
        id: 3,
        title: "Fitness Tracker App",
        subtitle: "React Native / Firebase",
        img: "/img/portfolio-3.jpg",
        preview: "https://fitness.issamovitch.dev",
        details: "https://github.com/issamovitch/fitness-tracker",
        category: "app-dev",
        description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident."
    }
];

export default function Portfolio() {
    const [selectedProject, setSelectedProject] = useState(null);
    const modalOverlayRef = useRef(null);
    const modalContentRef = useRef(null);

    const openModal = (project) => {
        setSelectedProject(project);
        
        // GSAP Animation for showing modal
        const tl = gsap.timeline();
        tl.to(modalOverlayRef.current, {
            autoAlpha: 1,
            duration: 0.3,
            ease: "power2.out"
        })
        .fromTo(modalContentRef.current, 
            { scale: 0.5, opacity: 0 },
            { scale: 1, opacity: 1, duration: 0.4, ease: "back.out(1.7)" },
            "-=0.2"
        );
    };

    const closeModal = () => {
        const tl = gsap.timeline({
            onComplete: () => setSelectedProject(null)
        });
        
        tl.to(modalContentRef.current, {
            scale: 0.5,
            opacity: 0,
            duration: 0.3,
            ease: "power2.in"
        })
        .to(modalOverlayRef.current, {
            autoAlpha: 0,
            duration: 0.2,
            ease: "power2.in"
        }, "-=0.1");
    };

    return (
        <section className="portfolio" id="portfolio">
            <div className="container">
                <header className="section-header">
                    <h3 className="section-title">My Portfolio</h3>
                    <p>
                        Real project focused on UI, performance, and user experience.
                    </p>
                </header>

                <div className="row portfolio-container">
                    {projects.map((project) => (
                        <div key={project.id} className={`col-lg-4 col-md-6 portfolio-item ${project.category}`}>
                            <div className="portfolio-wrap">
                                <figure className="portfolio-shadow">
                                    <img src={project.img} className="img-fluid" alt={project.title} />
                                    <a 
                                        href="#" 
                                        className="link-preview" 
                                        title="Preview"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            openModal(project);
                                        }}
                                    >
                                        <i className="fa fa-eye"></i>
                                    </a>
                                    <a target="_blank" href={project.details} className="link-details" title="More Details" rel="noreferrer">
                                        <i className="fa fa-code"></i>
                                    </a>
                                    <h4 className="portfolio-title">
                                        {project.title} <span>{project.subtitle}</span>
                                    </h4>
                                </figure>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            <div 
                className="modal-overlay" 
                ref={modalOverlayRef} 
                onClick={closeModal}
                style={{ display: selectedProject ? 'flex' : 'none' }}
            >
                <div 
                    className="modal-content" 
                    ref={modalContentRef} 
                    onClick={(e) => e.stopPropagation()}
                >
                    <span className="modal-close" onClick={closeModal}>&times;</span>
                    {selectedProject && (
                        <>
                            <h3 className="modal-title">{selectedProject.title}</h3>
                            <div className="modal-body">
                                <p><strong>Tech Stack:</strong> {selectedProject.subtitle}</p>
                                <p>{selectedProject.description}</p>
                                <div className="mt-4 d-flex gap-3">
                                    <a href={selectedProject.preview} target="_blank" className="btn btn-primary" rel="noreferrer" style={{ background: '#AF9483', border: 'none', padding: '10px 20px', color: '#fff', textDecoration: 'none', borderRadius: '5px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                        <i className="fa fa-external-link"></i> Visit Live Site
                                    </a>
                                    <a href={selectedProject.details} target="_blank" className="btn btn-secondary" rel="noreferrer" style={{ background: '#666', border: 'none', padding: '10px 20px', color: '#fff', textDecoration: 'none', borderRadius: '5px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                        <i className="fa fa-github"></i> GitHub Repo
                                    </a>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </section>
    );
}
