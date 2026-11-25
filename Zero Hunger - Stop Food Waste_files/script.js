None selected

Skip to content
Using Gmail with screen readers
1 of 168
test
Inbox

shinnie sim <shinnie.sim99@gmail.com>
10:09 PM (2 minutes ago)
to me

// 功能 1：點擊上方按鈕時，切換顯示對應的分頁
function openTab(evt, tabId) {
    let contents = document.getElementsByClassName("tab-content");
    for (let i = 0; i < contents.length; i++) {
        contents[i].classList.remove("active");
    }

    let buttons = document.getElementsByClassName("tab-btn");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("active");
    }

    document.getElementById(tabId).classList.add("active");
    evt.currentTarget.classList.add("active");
}

// 功能 2：第 4 分頁「互動小測驗」的對錯判斷
function checkAnswer(isCorrect) {
    let msg = document.getElementById("quiz-msg");
    if (isCorrect) {
        msg.style.color = "green";
        msg.innerHTML = "✅ Correct! 'Best Before' is about quality, not safety.";
    } else {
        msg.style.color = "red";
        msg.innerHTML = "❌ Incorrect! Try again. Throwing it away immediately causes unnecessary waste.";
    }
}

// 功能 3：第 4 分頁「意見回饋表單」送出後的互動提示
function sendFeedback(event) {
    event.preventDefault();

    let name = document.getElementById("userName").value;
    alert("Thank you, " + name + "! Your feedback has been submitted.");

    event.target.reset();
}


Displaying style.css.Next 