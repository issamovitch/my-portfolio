import {useEffect, useState} from "react";

export default function Header({smoothScroll, mobileNavOpen, setMobileNavOpen}) {
    
    const toggleMobileNav = () => {
        setMobileNavOpen(prev => {
            const next = !prev;
            document.body.classList.toggle("mobile-nav-active", next);
            return next;
        });
    };

    useEffect(() => {
        const handleScroll = (e) => {
            const targetId = e.currentTarget.getAttribute("href");
            if (targetId && targetId.startsWith("#")) {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    smoothScroll(targetElement.offsetTop);
                    document
                        .querySelectorAll(".nav-menu .menu-active")
                        .forEach(el => el.classList.remove("menu-active"));
                    e.target.closest("li")?.classList.add("menu-active");
                }
                setMobileNavOpen(false);
                document.body.classList.remove("mobile-nav-active");
            }
        };

        const navLinks = document.querySelectorAll(".nav-menu a, #mobile-nav a");
        navLinks.forEach(link => link.addEventListener("click", handleScroll));

        return () => {
            navLinks.forEach(link => link.removeEventListener("click", handleScroll));
        };
    }, [mobileNavOpen]);

    useEffect(() => {
        const sections = document.querySelectorAll("section[id]");
        const navLinks = document.querySelectorAll('.nav-menu a:not([href="#top-header"])');

        const onScroll = () => {
            let currentId = "";
            sections.forEach(sec => {
                if (window.scrollY >= sec.offsetTop - 150) currentId = sec.id;
            });
            navLinks.forEach(link => {
                link.parentElement.classList.remove("menu-active");
                if (link.getAttribute("href") === `#${currentId}`) {
                    link.parentElement.classList.add("menu-active");
                }
            });
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    

    return (<div className="header">
            <div className="container">

                <div className="logo pull-left">
                    <h1><a href="/">Issamovitch.dev</a></h1>
                </div>

                <button type="button" id="mobile-nav-toggle" onClick={toggleMobileNav}>
                    <i className={mobileNavOpen ? "fa fa-times" : "fa fa-bars"}></i>
                </button>

                <nav id="nav-menu-container">
                    <ul className="nav-menu">
                        <li><a href="#top-header">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#experience">Experience</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#portfolio">Portfolio</a></li>
                        <li><a href="#contact">Contact me</a></li>
                    </ul>
                </nav>


                <nav className="nav social-nav pull-right d-none d-lg-inline">
                    <a href="https://github.com/issamovitch" target="_blank" rel="noreferrer">
                        <i className="fa fa-github"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/issam-hamed-02a1a1a0/" target="_blank" rel="noreferrer">
                        <i className="fa fa-linkedin"></i>
                    </a>
                </nav>
            </div>
        </div>);
}