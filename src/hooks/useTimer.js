import { useState, useEffect } from "react";

export const useTimer = () => {
    const [time, setTime] = useState("00:00:00");

    useEffect(() => {
        const startTimer = () => {
            let timer = 0;
            const intervalId = setInterval(() => {
                timer++;
                const hours = Math.floor(timer / 3600);
                const min = Math.floor((timer % 3600) / 60);
                const sec = timer % 60;
                setTime(
                    `${hours.toString().padStart(2, "0")}: ${min.toString().padStart(2, "0")}: ${sec.toString().padStart(2, "0")}`
                );
            }, 1000);
            return intervalId;
        };
        const intervalId = startTimer();
        return () => clearInterval(intervalId);
    }, []);

    return time;
};

