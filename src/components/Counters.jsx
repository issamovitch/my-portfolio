import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

function CounterItem({ end, icon, label }) {
    const { ref, inView } = useInView({ triggerOnce: true });

    return (
        <div className="col-md-3 col-sm-6" ref={ref}>
            <div className="counter">
                <div className="counter-icon-box">
                    <i className={`fa ${icon}`}></i>
                </div>

                <div className="number">
                    {inView && <CountUp end={end} duration={2} />}
                </div>

                <h4 className="font-weight">{label}</h4>
            </div>
        </div>
    );
}

export default function Counters() {
    return (
        <section className="counters">
            <div className="container">
                <div className="row">
                    <CounterItem end={10} icon="fa-calendar" label="Years of Experience" />
                    <CounterItem end={40} icon="fa-check" label="Completed Projects" />
                    <CounterItem end={25} icon="fa-users" label="Clients Worked With" />
                    <CounterItem end={6} icon="fa-mobile" label="Mobile Apps Developed" />
                </div>
            </div>
        </section>
    );
}