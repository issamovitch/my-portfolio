import { useState, useRef } from 'react';
import gsap from 'gsap';

const projects = [
    {
        id: 1,
        title: "Luxury Travel Experience Platform",
        subtitle: "React / GSAP / Framer Motion / Locomotive Scroll / Styled Components",
        img: "/img/portfolio-1.jpg",
        preview: "https://travel.issamovitch.dev",
        details: "https://github.com/issamovitch/luxury-travel-platform",
        category: "web-des",
        show: false,
        bullets: [
            "High-end travel platform concept (fictional brand: Vero Italia) designed for luxury tourism and experience-based travel agencies.",
            "Built immersive scroll-driven storytelling using Locomotive Scroll for cinematic, seamless navigation between sections.",
            "Crafted dynamic animations and fluid page transitions with GSAP timelines and Framer Motion.",
            "Architected modular, theme-based styling with Styled Components for maintainable, scalable CSS-in-JS.",
            "Designed curated sections (Home with video background, About, Experiences, Journeys) to showcase premium brand storytelling.",
            "Fully responsive across mobile, tablet, and desktop, with routing handled via React Router.",
            "Stack: React · GSAP · Framer Motion · Locomotive Scroll · Styled Components · React Router."
        ]
    },
    {
        id: 2,
        title: "Zid SaaS E-commerce Platform",
        subtitle: "React / TypeScript / Next.js / React Query / Radix UI",
        img: "/img/portfolio-2.jpg",
        preview: "https://zid.sa/en",
        details: null,
        category: "web-dev",
        show: true,
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
        show: true,
        bullets: [
            "Built a multi-module Turkish healthcare dashboard for scheduling, patient records, and document workflows.",
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
        show: true,
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
        show: true,
        bullets: [
            "Built a production AI chatbot platform with dashboard interfaces and AI Agent workflows.",
            "Developed responsive frontend features using React.js with backend integration through Laravel/Inertia.js.",
            "Implemented product workflows, user-facing SaaS features, and API-connected functionality.",
            "Collaborated on full-stack feature delivery across frontend and backend systems."
        ]
    },
    {
        id: 6,
        title: "Liwan E-commerce Platform",
        subtitle: "Next.js / React / TypeScript / Magento (headless)",
        img: "/img/portfolio-6.jpg",
        preview: "https://liwan.com.kw",
        details: null,
        category: "web-dev",
        show: true,
        bullets: [
            "Built with Next.js, React, and TypeScript on a headless architecture (Magento backend).",
            "Full bilingual Arabic/English experience with RTL layout switching.",
            "SSR/SSG for SEO and performance, optimized image delivery via Next.js Image.",
            "Custom product carousels and \"Shop by Look\" interactive hotspots.",
            "Complete shopping flow: catalog, filters, cart, checkout, video reviews.",
            "Integrated WhatsApp Business, Google Tag Manager, and SEO (meta/OG tags, canonical URLs).",
            "Stack: Next.js · React · TypeScript · Tailwind · Magento (headless) · i18n (AR/EN + RTL) · GTM."
        ]
    },
    {
        id: 7,
        title: "Owais Capital | Regulated FinTech Platform",
        subtitle: "Next.js / React / TypeScript / i18n (EN/AR + RTL)",
        img: "/img/portfolio-8.jpg",
        preview: "https://owais.sa/en",
        details: null,
        category: "web-dev",
        show: true,
        bullets: [
            "Built the frontend for Owais Capital, a regulated FinTech investment platform in Saudi Arabia (licensed by the Capital Market Authority).",
            "Served 49,000+ users with 405M+ SAR in financing across 200+ issuances.",
            "Developed with Next.js, React, and TypeScript — featuring full bilingual EN/AR with RTL layout switching.",
            "Built multi-step investor & borrower onboarding flows with authentication.",
            "Implemented an account management dashboard for investors.",
            "Collaborated with mobile teams to ensure UX consistency across platforms."
        ]
    },
    {
        id: 8,
        title: "AXA Partners | Multi-Country Corporate Websites",
        subtitle: "Nuxt / Vue.js / Prismic CMS / i18n",
        img: "/img/portfolio-7.jpg",
        preview: "https://www.axapartners.pt/pt",
        details: null,
        category: "web-dev",
        show: true,
        bullets: [
            "Contributed to the rebuild of AXA Partners' corporate websites at Capgemini Engineering.",
            "Served multiple European markets across different country domains (.pt, .es, .it, .fr, .be, and more), each with multi-language support.",
            "Built with Nuxt and Vue, integrated with Prismic CMS on a shared multi-country, multi-language architecture.",
            "Implemented reusable component systems aligned with AXA Partners' insurance and assistance business lines.",
            "Collaborated within a large team on an enterprise-scale frontend system spanning multiple regional domains."
        ]
    },
    {
        id: 9,
        title: "Lifecare Pharmacy | Online Pharmacy",
        subtitle: "Next.js / React / TypeScript / i18n (EN/AR + RTL)",
        img: "/img/portfolio-9.jpg",
        preview: "https://lifecarepharmacykw.com/",
        details: null,
        category: "web-dev",
        show: true,
        bullets: [
            "Built the frontend for Lifecare Pharmacy, a licensed online pharmacy in Kuwait.",
            "Served 1,200+ customers with 2,000+ completed orders.",
            "Developed with Next.js, React, and TypeScript — featuring bilingual EN/AR with RTL layout.",
            "Built product catalog with brand/category/health-condition filtering.",
            "Implemented cart, checkout, wishlist, order history, and promotional bundles.",
            "Integrated WhatsApp Business for direct customer communication."
        ]
    },
    {
        id: 10,
        title: "Tofav | Multilingual Bookmark Manager",
        subtitle: "Vue.js / Inertia.js / Laravel / i18n (EN/AR/FR)",
        img: "/img/portfolio-10.jpg",
        preview: "https://tofav.com/en",
        details: null,
        category: "web-dev",
        show: false,
        bullets: [
            "Built a multilingual web platform for discovering and managing favorite websites.",
            "Developed with Vue.js and Inertia.js on a Laravel backend.",
            "Full Arabic/English/French support with RTL layout switching.",
            "Implemented social authentication and embeddable favorite buttons.",
            "Built bookmark import system and public/private collection management.",
            "Developed an admin dashboard for platform moderation.",
            "Stack: Vue.js · Inertia.js · JavaScript · Laravel · Bootstrap · i18n (EN/AR/FR)."
        ]
    },
    {
        id: 11,
        title: "BluePages | Business Directory Platform",
        subtitle: "React / Next.js / i18n (EN/AR + RTL)",
        img: "/img/portfolio-11.jpg",
        preview: "https://bluepages.com.sa/en",
        details: null,
        category: "web-dev",
        show: true,
        bullets: [
            "Frontend rebuild of BluePages, an established Saudi business directory platform (originally launched in 2005), migrated to a modern React stack.",
            "Built with React and later Next.js, featuring bilingual EN/AR with RTL.",
            "Implemented advanced search and filtering by country/city/category.",
            "Developed company verification workflows and user accounts with ad management.",
            "Integrated Google Maps for location-based discovery.",
            "Built a content/blog module for SEO and engagement.",
            "Platform also available as iOS and Android apps."
        ]
    },
    {
        id: 12,
        title: "BDG | Retail E-commerce Application",
        subtitle: "PHP / JavaScript / Responsive UI",
        img: "/img/portfolio-12.jpg",
        preview: "https://www.bdg.tn/site",
        details: null,
        category: "web-dev",
        show: false,
        bullets: [
            "Built a production corporate website using PHP for a client-facing business platform.",
            "Implemented responsive UI components and content pages.",
            "Developed custom frontend and backend functionality.",
            "Delivered as part of an agency team at Web Technologies Djerba."
        ]
    }
];

export default function Portfolio() {
    const [selectedProject, setSelectedProject] = useState(null);
    const modalOverlayRef = useRef(null);
    const modalContentRef = useRef(null);

    const visibleProjects = projects.filter((project) => project.show);

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
                        Real projects focused on UI, performance, and user experience.
                    </p>
                </header>

                <div className="row portfolio-container">
                    {visibleProjects.map((project) => (
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
                                    {selectedProject.preview && selectedProject.preview !== "#" && (
                                        <a href={selectedProject.preview} target="_blank" rel="noreferrer" style={{ background: '#AF9483', border: 'none', padding: '10px 20px', color: '#fff', textDecoration: 'none', borderRadius: '5px', display: 'flex', alignItems: 'center', gap: '8px', marginRight: "10px" }}>
                                            <i className="fa fa-external-link"></i> Visit Live Site
                                        </a>
                                    )}
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