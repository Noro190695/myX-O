const start = document.querySelector('.start')
let audeo = document.querySelector(".audeo")

start.addEventListener("click", startGame);
let user1 = document.querySelector(".user1"),
    user2 = document.querySelector(".user2");
let user1Count = localStorage.getItem("user1"),
    user2Count = localStorage.getItem("user2");
window.addEventListener("load", () => {
    user1.innerText = "X : " + user1Count
    user2.innerText = "O : " + user2Count
})



function startGame(e) {
    const game = document.querySelector('.game');
    for (let i = 1; i <= 9; i++) {
        let gameElements = document.createElement("div")
        gameElements.classList.add('gameElementsStyle')
        game.appendChild(gameElements)
    }
    this.style = "display: none;"
    let blocks = game.querySelectorAll('div');
    let control = false
    blocks.forEach(e => {
        e.addEventListener('click', users, { once: true });
    })


    function users() {

        if (control == false) {

            this.style = "background:green"
            this.innerText = "X"
            control = true

            if (
                blocks[0].innerText == "X" &&
                blocks[1].innerText == "X" &&
                blocks[2].innerText == "X" ||
                blocks[3].innerText == "X" &&
                blocks[4].innerText == "X" &&
                blocks[5].innerText == "X" ||
                blocks[6].innerText == "X" &&
                blocks[7].innerText == "X" &&
                blocks[8].innerText == "X" ||
                blocks[0].innerText == "X" &&
                blocks[3].innerText == "X" &&
                blocks[6].innerText == "X" ||
                blocks[1].innerText == "X" &&
                blocks[4].innerText == "X" &&
                blocks[7].innerText == "X" ||
                blocks[2].innerText == "X" &&
                blocks[5].innerText == "X" &&
                blocks[8].innerText == "X" ||
                blocks[0].innerText == "X" &&
                blocks[4].innerText == "X" &&
                blocks[8].innerText == "X" ||
                blocks[2].innerText == "X" &&
                blocks[4].innerText == "X" &&
                blocks[6].innerText == "X"

            ) {
                audeo.play()
                user1Count++;
                localStorage.setItem("user1", user1Count)
                blocks.forEach(e => {

                    setTimeout(() => {
                        e.innerText = ""
                        e.style = "background:none"
                        location.reload()

                    }, 2000);
                })
            }




        } else {
            this.style = "background:red";
            this.innerText = "O"
            control = false
        }
        if (
            blocks[0].innerText == "O" &&
            blocks[1].innerText == "O" &&
            blocks[2].innerText == "O" ||
            blocks[3].innerText == "O" &&
            blocks[4].innerText == "O" &&
            blocks[5].innerText == "O" ||
            blocks[6].innerText == "O" &&
            blocks[7].innerText == "O" &&
            blocks[8].innerText == "O" ||
            blocks[0].innerText == "O" &&
            blocks[3].innerText == "O" &&
            blocks[6].innerText == "O" ||
            blocks[1].innerText == "O" &&
            blocks[4].innerText == "O" &&
            blocks[7].innerText == "O" ||
            blocks[2].innerText == "O" &&
            blocks[5].innerText == "O" &&
            blocks[8].innerText == "O" ||
            blocks[0].innerText == "O" &&
            blocks[4].innerText == "O" &&
            blocks[8].innerText == "O" ||
            blocks[2].innerText == "O" &&
            blocks[4].innerText == "O" &&
            blocks[6].innerText == "O"
        ) {
            audeo.play()
            user2Count++
            localStorage.setItem("user2", user2Count++)
            user2Count = localStorage.getItem("user2");
            blocks.forEach(e => {

                setTimeout(() => {

                    e.innerText = ""
                    e.style = "background:none"
                    location.reload()
                }, 2000);
            })
        }

        if (
            blocks[0].innerText != "" &&
            blocks[1].innerText != "" &&
            blocks[2].innerText != "" &&
            blocks[3].innerText != "" &&
            blocks[4].innerText != "" &&
            blocks[5].innerText != "" &&
            blocks[6].innerText != "" &&
            blocks[7].innerText != "" &&
            blocks[8].innerText != "" &&
            blocks[0].innerText != "" &&
            blocks[3].innerText != "" &&
            blocks[6].innerText != "" &&
            blocks[1].innerText != "" &&
            blocks[4].innerText != "" &&
            blocks[7].innerText != "" &&
            blocks[2].innerText != "" &&
            blocks[5].innerText != "" &&
            blocks[8].innerText != "" &&
            blocks[0].innerText != "" &&
            blocks[4].innerText != "" &&
            blocks[8].innerText != "" &&
            blocks[2].innerText != "" &&
            blocks[4].innerText != "" &&
            blocks[6].innerText != ""
        ) {



            setTimeout(() => {
                location.reload()

            }, 1000);

        }




    }

}


let clear = document.querySelector(".clear")

clear.addEventListener("click", () => {
    localStorage.setItem("user1", 0)
    localStorage.setItem("user2", 0)
    location.reload()
})