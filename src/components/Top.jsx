import {useEffect, useRef} from "react";
import Typed from "typed.js";

export default function Top(){


    const typedElement = useRef(null);
    
    useEffect(() => {
        const typedStrings = "Next.js Developer, React Developer, TypeScript Developer, Frontend Engineer";
        const typed = new Typed(typedElement.current, {
            strings: typedStrings.split(', '),
            typeSpeed: 60,
            backSpeed: 20,
            smartBackspace: false,
            loop: true
        });
        return () => {
            typed.destroy();
        };
    }, [])
    
    return (
        <section className="top-header" id="top-header">
            <div className="container text-center">
                <div className="row">
                    <div className="col-md-12">
                        <img src="/img/profile-pic.png" alt="Anamul Hasan" />
                    </div>

                    <div className="col-md-12">
                        <h1>I'm Issamovitch</h1>
                    </div>

                    <div className="col-md-12">
                        <p style={{display: 'none'}}>React Developer, Next.js Developer, TypeScript Developer, Frontend Engineer</p>
                        <h2 ref={typedElement}></h2>
                    </div>
                </div>
            </div>
        </section>
    );
}