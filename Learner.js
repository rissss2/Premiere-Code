const toggle = document.getElementById("groupToggle");

const taskList = document.getElementById("taskList");

/* 完了データ取得 */
const courseData =
JSON.parse(
    localStorage.getItem("courseProgress")
) || {};

/* 1-1 状態反映 */
const course11 =
document.getElementById("course-1-1");

if(courseData["1-1"]){

    course11.classList.remove("pending");
    course11.classList.add("completed");

    course11.querySelector(".status")
    .classList.remove("pending-status");

    course11.querySelector(".status")
    .innerText = "完了";

}else{

    course11.classList.remove("completed");
    course11.classList.add("pending");

    course11.querySelector(".status")
    .classList.add("pending-status");

    course11.querySelector(".status")
    .innerText = "未完了";

}

/* 元の順番 */
const originalCards = Array.from(
    document.querySelectorAll(".task-card")
);

/* 描画 */
function renderTasks(){

    taskList.innerHTML = "";

    if(toggle.checked){

        const pending = [];
        const completed = [];

        originalCards.forEach(card => {

            if(card.classList.contains("pending")){

                pending.push(card);

            }else{

                completed.push(card);

            }

        });

        /* 未完了 */
        if(pending.length > 0){

            const pendingTitle =
            document.createElement("h2");

            pendingTitle.className =
            "group-title";

            pendingTitle.innerText =
            "🕒 未完了";

            taskList.appendChild(pendingTitle);

            pending.forEach(card => {

                taskList.appendChild(card);

            });

        }

        /* 完了 */
        if(completed.length > 0){

            const completedTitle =
            document.createElement("h2");

            completedTitle.className =
            "group-title";

            completedTitle.innerText =
            "✅ 完了";

            taskList.appendChild(completedTitle);

            completed.forEach(card => {

                taskList.appendChild(card);

            });

        }

    }else{

        originalCards.forEach(card => {

            taskList.appendChild(card);

        });

    }

}

toggle.addEventListener(
    "change",
    renderTasks
);

renderTasks();