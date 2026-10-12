let increment = document.querySelector(".increment");
let height = document.documentElement.scrollHeight - document.documentElement.clientHeight

window.addEventListener("scroll", () => {
    let scrollBottom = document.documentElement.scrollTop
increment.style.width = `${(scrollBottom / height) * 100}%`
})