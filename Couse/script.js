const courseId = "1-1";

const completeBtn =
document.getElementById("completeBtn");

const courseData =
JSON.parse(
    localStorage.getItem("courseProgress")
) || {};

/* 初期状態 */
if(courseData[courseId]){

    completeBtn.innerText =
    "✓ 完了済み（クリックで取り消し）";

    completeBtn.classList.add(
        "completed"
    );

}

/* ボタン */
completeBtn.addEventListener("click", () => {

    const isCompleted =
    courseData[courseId];

    if(isCompleted){

        const result = confirm(
            "完了を取り消しますか？"
        );

        if(result){

            delete courseData[courseId];

            localStorage.setItem(
                "courseProgress",
                JSON.stringify(courseData)
            );

            completeBtn.innerText =
            "✓ この講座を完了する";

            completeBtn.classList.remove(
                "completed"
            );

        }

    }else{

        const result = confirm(
            "この講座を完了しますか？"
        );

        if(result){

            courseData[courseId] = true;

            localStorage.setItem(
                "courseProgress",
                JSON.stringify(courseData)
            );

            completeBtn.innerText =
            "✓ 完了済み（クリックで取り消し）";

            completeBtn.classList.add(
                "completed"
            );

        }

    }

});