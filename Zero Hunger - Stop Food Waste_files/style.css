// 功能 1：點擊上方按鈕時，切換顯示對應的分頁

function openTab(evt, tabId) {

    // 找出所有分頁內容

    const contents = document.getElementsByClassName("tab-content");

    // 隱藏所有分頁

    for (let i = 0; i < contents.length; i++) {

        contents[i].classList.remove("active");

    }

    // 找出所有分頁按鈕

    const buttons = document.getElementsByClassName("tab-btn");

    // 移除所有按鈕的 active 狀態

    for (let i = 0; i < buttons.length; i++) {

        buttons[i].classList.remove("active");

    }

    // 顯示所選擇的分頁

    const selectedTab = document.getElementById(tabId);

    if (selectedTab) {

        selectedTab.classList.add("active");

    }

    // 將目前按鈕設為 active

    if (evt && evt.currentTarget) {

        evt.currentTarget.classList.add("active");

    }

}

// 功能 2：第 4 分頁「互動小測驗」的對錯判斷

function checkAnswer(isCorrect) {

    const msg = document.getElementById("quiz-msg");

    if (!msg) {

        return;

    }

    if (isCorrect) {

        msg.style.color = "green";

        msg.innerHTML =

            "✅ Correct! 'Best Before' is about quality, not safety.";

    } else {

        msg.style.color = "red";

        msg.innerHTML =

            "❌ Incorrect! Try again. Throwing it away immediately causes unnecessary waste.";

    }

}

// 功能 3：第 4 分頁「意見回饋表單」送出後的互動提示

function sendFeedback(event) {

    // 阻止表單重新載入網頁

    event.preventDefault();

    const nameInput = document.getElementById("userName");

    if (!nameInput) {

        return;

    }

    const name = nameInput.value.trim();

    // 顯示感謝訊息

    alert(

        "Thank you, " +

        name +

        "! Your feedback has been submitted."

    );

    // 清空表單

    event.target.reset();

}

 
