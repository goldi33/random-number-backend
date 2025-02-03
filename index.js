<script>
    async function fetchNumber() {
        try {
            const response = await fetch('https://random-number-backend-rho.vercel.app/random');
            if (!response.ok) throw new Error("Server error");

            const data = await response.json();
            if (!data.number || !data.timestamp) throw new Error("Invalid response data");

            document.getElementById("number").textContent = data.number;
            startCountdown(data.timestamp);
        } catch (error) {
            console.error("Error fetching number:", error);
            document.getElementById("number").textContent = "Error!";
        }
    }

    function startCountdown(serverTimestamp) {
        let currentTime = Math.floor(Date.now() / 1000);
        let timeLeft = 60 - (currentTime - serverTimestamp);
        if (timeLeft < 0) timeLeft = 60;

        document.getElementById("countdown").textContent = timeLeft;
        let countdownInterval = setInterval(() => {
            timeLeft--;
            document.getElementById("countdown").textContent = timeLeft;
            if (timeLeft <= 0) {
                clearInterval(countdownInterval);
                fetchNumber();
            }
        }, 1000);
    }

    fetchNumber();
</script>
