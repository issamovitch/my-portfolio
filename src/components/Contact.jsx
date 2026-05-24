import {useState} from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

export default function Contact() {

    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            await emailjs.sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID, 
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID, 
                e.target, 
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );
            toast.success("Message sent successfully!");
            e.target.reset();
        } catch(er) {
            toast.error("Failed to send message. Please try again.");
            console.error(er);
        }

        setLoading(false);
    };

    return (<section className="contact" id="contact">
            <Toaster position="top-right" toastOptions={{ duration: 3000 }} />
            <div className="container">
                <div className="section-header">
                    <h3>Contact Me</h3>
                    <p>Tell me what you need built — I’ll help you turn it into a working product.</p>
                </div>

                <div className="row">
                    <div className="col-md-6">
                        <div className="contact-info">
                            <p><i className="fa fa-user"></i>Issamovitch (Issam Hamed)</p>
                            <p><i className="fa fa-tag"></i>React Developer | Next.js | Typescript</p>
                            <p><i className="fa fa-map-marker"></i>Porto, Portugal</p>
                            <p>
                                <i className="fa fa-envelope"></i>
                                <a href="mailto:hamedissam@gmail.com">hamedissam@gmail.com</a>
                            </p>
                            <p>
                                <i className="fa fa-phone"></i>
                                <a href="tel:+351913707108">+351 913 707 108</a>
                            </p>

                            <div className="social">
                                <a href="https://github.com/issamovitch" target="_blank" rel="noreferrer">
                                    <i className="fa fa-github"></i>
                                </a>
                                <a href="https://www.linkedin.com/in/issam-hamed-02a1a1a0/" target="_blank"
                                   rel="noreferrer">
                                    <i className="fa fa-linkedin"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="form">
                            <form onSubmit={handleSubmit}>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <input name="name" type="text" className="form-control" placeholder="Your Name"
                                               required/>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <input name="email" type="email" className="form-control"
                                               placeholder="Your Email" required/>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <input name="subject" type="text" className="form-control"
                                           placeholder="Project / Subject"/>
                                </div>

                                <div className="form-group">
                                    <textarea name="message" className="form-control" rows="5"
                                              placeholder="What do you want to build?" required></textarea>
                                </div>

                                <div>
                                    <button type="submit" disabled={loading}>
                                        {loading ? "Sending..." : "Send Message"}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
     
    );
}