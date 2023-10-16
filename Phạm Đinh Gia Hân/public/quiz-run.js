alert("Be careful! There are some scary features.")
let questionNum = 1
const option = document.getElementsByClassName("option");
const right = document.getElementById("right")
const wrong = document.getElementById("wrong")
const ghost=document.getElementById("ghost")
const container = document.getElementsByClassName("container")[0]
// question
const ques = document.getElementById("ques")
let brightness = 100
checkAns()
function jumpscare(){
    if (brightness == 20) {
        document.body.style.transition="all 0s"
        document.body.style.filter = "brightness(30%)"
        ghost.play()
        container.style.display = "none"
        document.body.style.backgroundImage = "url(./assets/Ghost-Watchers-1-678x381.jpg)";
    }
}
function checkAns() {
    for (let i = 0; i < option.length; i++) {
        option[i].addEventListener("click", function () {
            // câu 1
            if (questionNum == 1) {
                if (option[i].id == "b") {
                    right.play()
                    questionNum++
                    changeStage(questionNum)
                }
                else {
                    wrong.play()
                    brightness -= 10
                    document.body.style.filter = "brightness(" + brightness + "%)"
                }
                jumpscare()
            }
            // câu 2
            else if (questionNum == 2) {

                if (option[i].id == "c") {
                    right.play()
                    questionNum++
                    changeStage(questionNum)
                }
                else {
                    wrong.play()
                    brightness -= 10
                    document.body.style.filter = "brightness(" + brightness + "%)"
                }
                jumpscare()
            }
            // câu 3
            else if (questionNum == 3) {
                if (option[i].id == "a") {
                    right.play()
                    questionNum++
                    changeStage(questionNum)
                }
                else {
                    wrong.play()
                    brightness -= 10
                    document.body.style.filter = "brightness(" + brightness + "%)"
                }
                jumpscare()
            }
            // câu 4
            else if (questionNum == 4) {
                if (option[i].id == "b") {
                    right.play()
                    questionNum++
                    changeStage(questionNum)
                }
                else {
                    wrong.play()
                    brightness -= 10
                    document.body.style.filter = "brightness(" + brightness + "%)"
                }
                jumpscare()
            }
            else if (questionNum == 5) {
                if (option[i].id == "b") {
                    right.play()
                    questionNum++
                    changeStage(questionNum)
                }
                else {
                    wrong.play()
                    brightness -= 10
                    document.body.style.filter = "brightness(" + brightness + "%)"
                }
                jumpscare()
            }
            else if (questionNum == 6) {
                if (option[i].id == "a") {
                    right.play()
                    questionNum++
                    changeStage(questionNum)
                }
                else {
                    wrong.play()
                    brightness -= 10
                    document.body.style.filter = "brightness(" + brightness + "%)"
                }
                jumpscare()
            }
            else if (questionNum == 7) {
                if (option[i].id == "b") {
                    right.play()
                    questionNum++
                    changeStage(questionNum)
                }
                else {
                    wrong.play()
                    brightness -= 10
                    document.body.style.filter = "brightness(" + brightness + "%)"
                }
                jumpscare()
            }
            else if (questionNum == 8) {
                if (option[i].id == "d") {
                    right.play()
                    questionNum++
                    changeStage(questionNum)
                }
                else {
                    wrong.play()
                    brightness -= 10
                    document.body.style.filter = "brightness(" + brightness + "%)"
                }
                jumpscare()
            }
            else if (questionNum == 9) {
                if (option[i].id == "d") {
                    right.play()
                    questionNum++
                    changeStage(questionNum)
                }
                else {
                    wrong.play()
                    brightness -= 10
                    document.body.style.filter = "brightness(" + brightness + "%)"
                }
                jumpscare()
            }
            else if (questionNum == 10) {
                if (option[i].id == "c") {
                    right.play()
                    questionNum++
                    changeStage(questionNum)
                }
                else {
                    wrong.play()
                    brightness -= 10
                    document.body.style.filter = "brightness(" + brightness + "%)"
                }
                jumpscare()
            }
        })
    }
}

function changeStage(stage) {
    if (stage == 2) {
        ques.innerHTML = "What is the name of the Halloween's lantern?"
        option[0].innerHTML = "A. Pumpkin lantern"
        option[1].innerHTML = "B. Trick or Treat"
        option[2].innerHTML = "C. Jack-o'-lantern"
        option[3].innerHTML = "D. Ghost's Light"
    }
    else if (stage == 3) {
        ques.innerHTML = "What is Trick or Treat?"
        option[0].innerHTML = "A. An event of Halloween"
        option[1].innerHTML = "B. A costume"
        option[2].innerHTML = "C. A dish of Halloween"
        option[3].innerHTML = "D. A Halloween Story"
    }
    else if (stage == 4) {
        ques.innerHTML = "What is Halloween celebrated for?"
        option[0].innerHTML = "A. For children to have fun"
        option[1].innerHTML = "B. To ward off spirits"
        option[2].innerHTML = "C. For the cosplayers to express"
        option[3].innerHTML = "D. To summon evil then worship them for peace"
    }
    else if (stage == 5) {
        ques.innerHTML = "Where was Halloween first celebrated in?"
        option[0].innerHTML = "A. Brazil"
        option[1].innerHTML = "B. Iceland"
        option[2].innerHTML = "C. India"
        option[3].innerHTML = "D. Germany"
    }
    else if (stage == 6) {
        ques.innerHTML = "What is the most common Halloween costume in America according to Google?"
        option[0].innerHTML = "A. Witch"
        option[1].innerHTML = "B. Peter Pan"
        option[2].innerHTML = "C. Pumpkin"
        option[3].innerHTML = "D. Clown"
    }
    else if (stage == 7) {
        ques.innerHTML = "What does the skeleton image represent for?"
        option[0].innerHTML = "A. Putrefaction"
        option[1].innerHTML = "B. Withering"
        option[2].innerHTML = "C. Death"
        option[3].innerHTML = "D. Ghost"
    }
    else if (stage == 8) {
        ques.innerHTML = "What does the black cat represent for?"
        option[0].innerHTML = "A. A deceased relative"
        option[1].innerHTML = "B. A kind of demon"
        option[2].innerHTML = "C. A witch"
        option[3].innerHTML = "D. Unluckiness"
    }
    else if (stage == 9) {
        ques.innerHTML = "Who made the first Jack - o - lantern?"
        option[0].innerHTML = "A. Robert"
        option[1].innerHTML = "B. An unknown person made it accidentally"
        option[2].innerHTML = "C. Me"
        option[3].innerHTML = "D. Jack"
    }
    else if (stage == 10) {
        ques.innerHTML = "Who made the first Jack - o - lantern?"
        option[0].innerHTML = "A. Robert"
        option[1].innerHTML = "B. An unknown person made it accidentally"
        option[2].innerHTML = "C. Me"
        option[3].innerHTML = "D. Jack"
    }
}
