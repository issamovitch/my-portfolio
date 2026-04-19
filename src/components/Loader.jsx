// Loader.jsx
import "../css/Loader.css";

export default function Loader({ fading }) {
    return (
        <div className="loader-wrap">
            <div className="orbit-stage">
                <div className="orbit-ring ring1"></div>
                <div className="orbit-ring ring2"></div>
                <div className="orbit-ring ring3"></div>
                <div className="center-dot"></div>
            </div>

            <div className="code-block">
                <div className="code-line c1"><span>import</span> {"{ Portfolio }"} <span>from</span> <em>'./issam'</em></div>
                <div className="code-line c2"><span>const</span> dev = <em>await</em> Portfolio.<span>load</span>()</div>
                <div className="code-line c3"><span>render</span>(<em>{"<App dev={dev} />"}</em>)</div>
            </div>

            <div className="progress-track">
                <div className="progress-fill"></div>
            </div>

            <div className="dots-row">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
            </div>

            <div className="label">Building something great...</div>
        </div>
    );
}