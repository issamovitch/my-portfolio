import {useEffect, useState} from 'react'
import Header from "./components/Header.jsx";
import Sticky from "react-stickynode";
import ScrollToTop from "./components/ScrollToTop.jsx";
import About from "./components/About.jsx";
import Experiences from "./components/Experiences.jsx";
import Counters from "./components/Counters.jsx";
import Top from "./components/Top.jsx";
import Services from "./components/Services.jsx";
import Portfolio from "./components/Portfolio.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import Loader from "./components/Loader.jsx";

function App() {

    useEffect(() => {
        // Initialize the remaining external scripts if they exist
        if (window.jQuery) {
            const $ = window.jQuery;

            // Testimonials carousel
            if ($.fn.owlCarousel) {
                $(".testimonials-carousel").owlCarousel({
                    autoplay: true, dots: true, loop: true, items: 1
                });
            }
        }

    }, []);

    const smoothScroll = (targetY, duration = 1500) => {
        const startY = window.scrollY;
        const header = document.querySelector('.header');
        const headerHeight = header?.offsetHeight || 0;

        const diff = (targetY - headerHeight) - startY;
        let start;

        const ease = (t) => t < 0.5 ? Math.pow(2, 20 * t - 10) / 2 : (2 - Math.pow(2, -20 * t + 10)) / 2;

        const step = (ts) => {
            if (!start) start = ts;
            const p = Math.min((ts - start) / duration, 1);
            window.scrollTo(0, startY + diff * ease(p));
            if (p < 1) requestAnimationFrame(step);
        };

        requestAnimationFrame(step);
    };

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => setLoading(false), 5000);
    }, []);

    const [mobileNavOpen, setMobileNavOpen] = useState(false);

    return (<div>
            <Loader/>
            <Top/>
            <Sticky enabled={true} top={0}>
                <Header smoothScroll={smoothScroll} mobileNavOpen={mobileNavOpen} setMobileNavOpen={setMobileNavOpen}/>
            </Sticky>
            {mobileNavOpen && (<>
                    <nav id="mobile-nav">
                        <ul>
                            <li><a href="#top-header">Home</a></li>
                            <li><a href="#about">About me</a></li>
                            <li><a href="#experience">Experience</a></li>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#portfolio">Portfolio</a></li>
                            <li><a href="#contact">Contact me</a></li>
                        </ul>
                    </nav>
                    <div id="mobile-body-overly" style={{display: "block"}} onClick={() => {
                        setMobileNavOpen(false);
                        document.body.classList.remove("mobile-nav-active");
                    }}/>
                </>)}
            <About smoothScroll={smoothScroll}/>
            <Experiences/>
            <Services/>
            <Counters/>
            <Portfolio/>
            <Testimonials/>
            <Contact/>
            <Footer/>
            <ScrollToTop/>
        </div>)
}

export default App
