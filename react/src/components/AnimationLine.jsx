import { useState, useEffect } from "react";

export function AnimatedLine({ totalTime }) {
    const [elapsedTime, setElapsedTime] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setElapsedTime((prevElapsedTime) => prevElapsedTime + 1);
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    const percentElapsed = (elapsedTime / totalTime) * 100;
    const color = percentElapsed < 50 ? "orange" : "red";
    const gradient = `linear-gradient(to right, ${color} ${percentElapsed}%, transparent ${percentElapsed}%)`;

    const style = {
        width: "100%",
        height: "4px",
        background: gradient,
        // transition: "background  1s linear",
    };

    return <div style={style} />;
}
