const button = document.querySelector('button')
const seconds = document.querySelector('#sec')
const hint = document.querySelector('.hint')
let sec = 30
let remain = 30
let time = null

update()
function update() {
    time = clearInterval(time)
    time = setInterval(() => {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            let tab = tabs[0]
            chrome.tabs.update(tab.id, {url: tab.url})
            remain = sec
        })
    }, sec * 1000)
}

setInterval(() => {
    hint.innerHTML = `<span>${remain} seconds</span>`
    remain--;
}, 1000)

seconds.addEventListener('input', e => {
    hint.innerHTML = `${e.target.value} seconds`
    sec = +e.target.value
    remain = sec
    update()
})


// button.addEventListener('click', e => {
//     refresh = !refresh
//     button.innerHTML = text[+refresh]
//     update()
// })
