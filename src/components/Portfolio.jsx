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
        title: "Zid SaaS E-commerce Platform",
        subtitle: "React / TypeScript / Next.js / React Query / Radix UI",
        img: "/img/portfolio-2.jpg",
        preview: "https://zid.sa/en",
        details: null,
        category: "web-dev",
        bullets: [
            "Built and maintained core dashboard modules (orders, customers, products, carts, billing, subscriptions) in a large-scale multi-tenant system.",
            "Built analytics & reporting interfaces (sales, visits, financial data) with complex data flows and large datasets (5k+ records).",
            "Designed state-heavy UI systems across multiple interconnected modules.",
            "Implemented store configuration systems (payments, shipping, taxes, domain names).",
            "Reduced unnecessary re-renders and API calls using React Query caching and memoization, improving dashboard responsiveness (~20–40% faster data load in key views).",
            "Integrated frontend with backend services via REST APIs across multiple business domains."
        ]
    },
    {
        id: 3,
        title: "Cordelia Patient Management",
        subtitle: "React / TypeScript / React Router / Zod / Framer Motion",
        img: "/img/portfolio-3.jpg",
        preview: "https://www.cordelia.app/",
        details: null,
        category: "web-dev",
        bullets: [
            "Built a multi-module healthcare dashboard for scheduling, patient records, and document workflows.",
            "Supported 500+ active users and 10,000+ completed appointments.",
            "Built performant calendar UI handling dense time-slot data with minimal re-renders.",
            "Developed dynamic form systems with Zod validation for complex data entry flows.",
            "Managed cross-module state and UI synchronization across interconnected features.",
            "Built search, filtering, and data tables for large patient datasets.",
            "Implemented protected routing and navigation flows using React Router."
        ]
    },
    {
        id: 4,
        title: "AXA Corporate Website",
        subtitle: "Next.js / React / Prismic CMS",
        img: "/img/portfolio-4.jpg",
        preview: "https://www.axa.com",
        details: null,
        category: "web-dev",
        bullets: [
            "Contributed to a high-traffic enterprise platform (~1M+ monthly visits across regional sites — SimilarWeb estimate).",
            "Built and maintained content-driven pages using Next.js and Prismic CMS.",
            "Implemented UI updates and redesign iterations across different sections of the platform.",
            "Fixed production bugs and improved overall site stability and performance.",
            "Improved page load performance and SEO scores (Core Web Vitals / Lighthouse improvements).",
            "Collaborated within a large team setup on an enterprise-scale frontend system."
        ]
    },
    {
        id: 5,
        title: "FusionBot SaaS AI Chatbot Builder",
        subtitle: "React.js / Laravel / Inertia.js",
        img: "/img/portfolio-5.jpg",
        preview: "https://fusionbotai.com/",
        details: "https://github.com/issamovitch/FusionBot",
        category: "web-dev",
        bullets: [
            "Built a production AI chatbot platform with dashboard interfaces and AI Agent workflows.",
            "Developed responsive frontend features using React.js with backend integration through Laravel/Inertia.js.\n",
            "Implemented product workflows, user-facing SaaS features, and API-connected functionality.\n",
            "Collaborated on full-stack feature delivery across frontend and backend systems.",
        ]
    },
    {
        id: 6,
        title: "Liwan E-commerce Platform",
        subtitle: "React.js / Laravel / Inertia.js",
        img: "/img/portfolio-6.jpg",
        preview: "https://liwan.com.kw",
        details: null,
        category: "web-dev",
        bullets: [
            "Built with Next.js, React, and TypeScript on a headless architecture (Magento backend)",
            "Full bilingual Arabic/English experience with RTL layout switching",
            "SSR/SSG for SEO and performance, optimized image delivery via Next.js Image",
            "Custom product carousels and \"Shop by Look\" interactive hotspots",
            "Complete shopping flow: catalog, filters, cart, checkout, video reviews",
            "Integrated WhatsApp Business, Google Tag Manager, and SEO (meta/OG tags, canonical URLs)",
            "Stack: Next.js · React · TypeScript · Tailwind · Magento (headless) · i18n (AR/EN + RTL) · GTM",
        ]
    }
];

export default function Portfolio() {
    const [selectedProject, setSelectedProject] = useState(null);
    const modalOverlayRef = useRef(null);
    const modalContentRef = useRef(null);

    const openModal = (project) => {
        setSelectedProject(project);

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
                                    <img src={project.img} className="img-fluid" alt={project.title} style={{ width: '100%', height: '220px', display: 'block' }} />
                                    <a
                                        href="#"
                                        className="link-preview"
                                        title="Preview"
                                        style={!project.details ? { left: '50%', transform: 'translateX(-50%)' } : {}}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            openModal(project);
                                        }}
                                    >
                                        <i className="fa fa-eye"></i>
                                    </a>
                                    {project.details && (
                                        <a target="_blank" href={project.details} className="link-details" title="More Details" rel="noreferrer">
                                            <i className="fa fa-code"></i>
                                        </a>
                                    )}
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
                                {selectedProject.bullets ? (
                                    <ul style={{ paddingLeft: '18px', lineHeight: '1.8' }}>
                                        {selectedProject.bullets.map((point, i) => (
                                            <li key={i}>{point}</li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p>{selectedProject.description}</p>
                                )}
                                <div className="mt-4 d-flex gap-3">
                                    <a href={selectedProject.preview} target="_blank" rel="noreferrer" style={{ background: '#AF9483', border: 'none', padding: '10px 20px', color: '#fff', textDecoration: 'none', borderRadius: '5px', display: 'flex', alignItems: 'center', gap: '8px', marginRight: "10px" }}>
                                        <i className="fa fa-external-link"></i> Visit Live Site
                                    </a>
                                    {selectedProject.details && (
                                        <a href={selectedProject.details} target="_blank" rel="noreferrer" style={{ background: '#666', border: 'none', padding: '10px 20px', color: '#fff', textDecoration: 'none', borderRadius: '5px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                            <i className="fa fa-github"></i> GitHub Repo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </section>
    );
}