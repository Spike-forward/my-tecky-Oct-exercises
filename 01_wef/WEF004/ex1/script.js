//Method 1
//const firstBox = document.querySelector('box');
const firstBox = document.querySelector(".gameboard")
firstBox.addEventListener('click', () => {
    firstBox.innerHTML = `<img src='./circle.svg class='circle'>`
        //console.log("testing");//very insecure in this way 
        //easy to put something here 2) sql injection
});