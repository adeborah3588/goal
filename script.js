function updateTimeAndDay() {
    const utcTimeElement = document.getElementById('utc-time');
    const currentDayElement = document.getElementById('current-day');

    // Fetch current time from a reliable server or use an API that provides accurate UTC time
    fetch('https://worldtimeapi.org/api/timezone/Africa/Lagos')
        .then(response => response.json())
        .then(data => {
            const utcTime = new Date(data.utc_datetime).toLocaleTimeString('en-US', {
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric'
            });
            const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            const currentDay = days[new Date(data.utc_datetime).getUTCDay()];

            utcTimeElement.textContent = utcTime;
            currentDayElement.textContent = currentDay;
        })
        .catch(error => {
            console.error('Error fetching time:', error);
        });
}

// Update time and day initially
updateTimeAndDay();

// Update time and day every minute
setInterval(updateTimeAndDay, 60000);
