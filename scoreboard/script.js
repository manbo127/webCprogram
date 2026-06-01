// 九队分数
let scores = Array(9).fill(0);

// 当前模式
let currentMode = 0;

const teamsContainer = document.getElementById("teamsContainer");
const modeText = document.getElementById("modeText");

const buttons = {
    btnMinus: document.getElementById("btnMinus"),
    btn10: document.getElementById("btn10"),
    btn20: document.getElementById("btn20"),
    btn30: document.getElementById("btn30")
};

// 设置模式
function setMode(value, text, buttonId) {
    currentMode = value;

    modeText.innerText = "当前模式：" + text;

    // 清除所有按钮高亮
    Object.values(buttons).forEach(btn => {
        btn.classList.remove("active");
    });

    // 当前按钮高亮
    document.getElementById(buttonId).classList.add("active");
}

// 按钮事件
buttons.btnMinus.addEventListener("click", () => {
    setMode(-10, "-10", "btnMinus");
});

buttons.btn10.addEventListener("click", () => {
    setMode(10, "+10", "btn10");
});

buttons.btn20.addEventListener("click", () => {
    setMode(20, "+20", "btn20");
});

buttons.btn30.addEventListener("click", () => {
    setMode(30, "+30", "btn30");
});

// 创建九个队伍
for (let i = 0; i < 9; i++) {

    const teamDiv = document.createElement("div");

    teamDiv.className = "team";

    teamDiv.innerHTML = `
        <div class="team-name">队伍 ${i + 1}</div>
        <div class="score" id="score-${i}">0</div>
    `;

    // 点击队伍加减分
    teamDiv.addEventListener("click", () => {

        if (currentMode === 0) {
            alert("请先选择加减模式");
            return;
        }

        scores[i] += currentMode;

        document.getElementById(`score-${i}`).innerText = scores[i];
    });

    teamsContainer.appendChild(teamDiv);
}