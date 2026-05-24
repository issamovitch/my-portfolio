export default function Footer() {
    return(
        <div className="footer">
            <div className="container">
                <div className="copyright">
                    <p>
                        &copy; {new Date().getFullYear()} <a target="_blank" href="https://issamovitch.dev/">Issamovitch.dev</a><br/>
                        All rights reserved.
                    </p>
                </div>
            </div>
        </div>
    )
}