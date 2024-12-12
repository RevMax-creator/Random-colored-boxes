function getRandomColor() {
    let a = Math.floor(Math.random() * 255)
    let b = Math.floor(Math.random() * 255)
    let c = Math.floor(Math.random() * 255)
    return `rgb(${a}, ${b}, ${c})`
}
document.title = "Random colored boxes"
changecolor = () => {
    document.querySelectorAll(".box").forEach((e) => {
        e.style.backgroundColor = getRandomColor();
        e.style.color = getRandomColor()
    })
}
changecolor()
