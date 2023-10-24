function updateCountdown() {
    const targetDate = new Date("2023-12-31 00:00:00"); // ターゲットの日時を設定
    const currentDate = new Date();

    const timeDifference = targetDate - currentDate;
    if (timeDifference <= 0) {
        // タイマーが終了した場合
        document.getElementById("timer").innerHTML = "カウントダウン終了";
    } else {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        document.getElementById("days").textContent = days;
        document.getElementById("hours").textContent = hours;
        document.getElementById("minutes").textContent = minutes;
        document.getElementById("seconds").textContent = seconds;
    }
}

// 初回のカウントダウン更新
updateCountdown();

// 1秒ごとにカウントダウンを更新
setInterval(updateCountdown, 1000);
