window.onload = function() {

        let container = document.querySelector(".container");


        container.addEventListener("click", (event) => {
            console.log("hi")
            console.log("X", event.target)
            console.log("2", event.currentTarget)
        })

        let candy = document.querySelector(".candy")

        candy.addEventListener("click", (e) => {
                    console.log("add oil")
                    console.log("3", e.target)
                    console.log("4", e.currentTarget)
                    e.stopPropagation()