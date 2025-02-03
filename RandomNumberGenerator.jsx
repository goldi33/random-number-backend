import { useState, useEffect } from "react";

export default function RandomNumberGenerator() {
    const [number, setNumber] = useState("-");
    const [countdown, setCountdown] = useState(60);

    async function fetchNumber() {
        try {
            // Hier kann eine neue Logik für die Nummerngenerierung eingefügt werden
            const randomNum = Math.floor(Math.random() * 100) + 1;
            setNumber(randomNum);
            startCountdown(Math.floor(Date.now() / 1000));
        } catch (error) {
            console.error("Error generating number:", error);
        }
    }

    function startCountdown(serverTimestamp) {
        let currentTime = Math.floor(Date.now() / 1000);
        let timeLeft = 60 - (currentTime - serverTimestamp);
        setCountdown(timeLeft);

        const interval = setInterval(() => {
            setCountdown((prev) => {
                if (prev <= 1) {
                    clearInterval(interval);
                    fetchNumber();
                    return 60;
                }
                return prev - 1;
            });
        }, 1000);
    }

    useEffect(() => {
        fetchNumber();
    }, []);

    return (
        <div className="flex flex-col items-center mt-10 text-center">
            <h1 className="text-2xl font-bold">Random Number Generator</h1>
            <p className="text-lg">Next number in: <span className="text-red-500 text-xl">{countdown}</span> seconds</p>
            <p className="text-4xl font-bold">Random Number: {number}</p>
        </div>
    );
}
