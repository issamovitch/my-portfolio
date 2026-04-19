import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";


export default function ScrollToTop() {

    const [show, setShow] = useState(false);
    const ref = useRef();

    useEffect(() => {
        window.onscroll = () => setShow(window.scrollY > 100);
    }, []);

    useEffect(() => {
        if (!ref.current) return;

        gsap.to(ref.current, {
            autoAlpha: show ? 1 : 0, // opacity + visibility
            y: show ? 0 : 20,
            duration: 2,
        });
    }, [show]);
    
    return (<>
            {show && <a ref={ref} href="#"  style={{ opacity: 0 }} className="back-to-top" onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }}><i className="fa fa-chevron-up"></i></a>}
    </>
        
    );
}