const About = document.querySelector(".home")
const pre_register = document.querySelector(".pre_register")
const roadmap = document.querySelector(".roadmap")
const info = document.querySelector(".moreinfo")
const NFT = document.querySelector(".nft")
const navButtons = document.querySelectorAll("button")
const scriptURL = 'https://script.google.com/macros/s/AKfycbxrbw8A_7ep-TUgjgZECnFQThPjhNaXrYvL0AHCwtHXUPdcmxHE/exec'
const form = document.getElementById("preRegister")
const form_results = document.querySelector(".email_result")



window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }

function buttons () {
    
    navButtons[0].addEventListener('click', () => {
        About.scrollIntoView({behavior: "smooth"})
})

navButtons[1].addEventListener('click', () => {
    roadmap.scrollIntoView({behavior: "smooth"})
})

navButtons[2].addEventListener('click', () => {
    NFT.scrollIntoView({behavior: "smooth"})
})

navButtons[3].addEventListener('click', () => {
    info.scrollIntoView({behavior: "smooth"})
})

}

buttons ()

function disableBtn() {
    submit_button.disabled = true;
}

function enableBtn() {
    submit_button.disabled = false;
}

function emailResult () {
    form_results.innerHTML = "Succes! thank you for Preregistering"
}

form.addEventListener('submit', e => {
    if(!e.detail || e.detail == 1){e.preventDefault()
  disableBtn();
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        console.log('Success!', response)
        form.reset();
        emailResult();
        })
    .catch(error => enableBtn())
    }
})


const blackpawn = "source/peices/b_pawn.png"
const blackbishop = "source/peices/b_bishop.png"
const blackknight = "source/peices/b_knight.png"
const blackrook = "source/peices/b_rook_1x.png"
const blackqueen = "source/peices/b_queen_1x.png"
const blackking = "source/peices/b_king.png"







