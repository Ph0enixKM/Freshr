const button = document.querySelector('button')
const seconds = document.querySelector('#sec')
const hint = document.querySelector('.hint')
let sec = 30
let time = null

update()
function update() {
    time = clearInterval(time)
    time = setInterval(() => {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            let tab = tabs[0]
            chrome.tabs.update(tab.id, {url: tab.url})
        })
    }, sec * 1000)
}

seconds.addEventListener('input', e => {
    hint.innerHTML = e.target.value
    sec = +e.target.value
    update()
})


button.addEventListener('click', e => {
    refresh = !refresh
    button.innerHTML = text[+refresh]
    update()
})

chrome.storage.local.get(['key'], function(result) {
    console.log('Value currently is ' + result.key);
})
