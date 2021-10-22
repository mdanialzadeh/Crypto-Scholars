const About = document.querySelector(".home")
const pre_register = document.querySelector(".pre_register")
const roadmap = document.querySelector(".roadmap")
const info = document.querySelector(".moreinfo")
const NFT = document.querySelector(".nft")
const navButtons = document.querySelectorAll("button")
const overlaybuttons = info.querySelectorAll("button")
const overlay = document.querySelectorAll(".overlay")
const scriptURL = 'https://script.google.com/macros/s/AKfycbxrbw8A_7ep-TUgjgZECnFQThPjhNaXrYvL0AHCwtHXUPdcmxHE/exec'
const form = document.getElementById("preRegister")
const form_results = document.querySelector(".email_result")
const chessboard = document.querySelector(".chessboard_container")



    window.onbeforeunload = function () {
        About.scrollIntoView({behavior:"smooth"});
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

navButtons[5].addEventListener('click', () => {
    chessGame();
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




function overlays() {

    const buttonsarray = [...overlaybuttons]

    function newoverlay() {
        overlay.forEach(element => element.style.visibility = "hidden")
        overlaybuttons.forEach(element => element.classList.remove("active"))
    }

    newoverlay()

    function active(x,b) {
        overlay[x].style.visibility = "visible"
        b.classList.add("active")
    }
  
    overlaybuttons.forEach(button => {
            button.addEventListener('click', () => {
                newoverlay()
                active(buttonsarray.indexOf(button),button)
            })
        })
   
}

overlays()
    


    const blackPeices = [
    {
        image: "source/peices/b_pawn.png",
        name: "pawn",
        color: "black",
        row: 2 ,
        columns: 1,
    },
    {
        image: "source/peices/b_pawn.png",
        name: "pawn",
        color: "black",
        row: 2 ,
        columns: 2,
    },
    {
        image: "source/peices/b_pawn.png",
        name: "pawn",
        color: "black",
        row: 2 ,
        columns: 3,
    },
    {
        image: "source/peices/b_pawn.png",
        name: "pawn",
        color: "black",
        row: 2 ,
        columns: 4,
    },
    {
        image: "source/peices/b_pawn.png",
        name: "pawn",
        color: "black",
        row: 2 ,
        columns: 5,
    },
    {
        image: "source/peices/b_pawn.png",
        name: "pawn1b",
        color: "black",
        row: 2 ,
        columns: 6,
    },
    {
        image: "source/peices/b_pawn.png",
        name: "pawn3b",
        color: "black",
        row: 2 ,
        columns: 7,
    },
    {
        image: "source/peices/b_pawn.png",
        name: "pawn2b",
        color: "black",
        row: 2 ,
        columns: 8,
    },
    {
        image: "source/peices/b_bishop.png",
        name: "bishop",
        color: "black",
        row: 1 ,
        columns: 3 ,
    },
    {
    image: "source/peices/b_bishop.png",
    name: "bishop",
    color: "black",
    row: 1 ,
    columns: 6
    },
    {
        image: "source/peices/b_knight.png",
        name: "knight",
        color: "black",
        row: 1 ,
        columns: 2,
    },
    {
        image: "source/peices/b_knight.png",
        name: "knight",
        color: "black",
        row: 1 ,
        columns: 7
    },  
    {
        image: "source/peices/b_rook_1x.png",
        name: "rook",
        color: "black",
        row: 1 ,
        columns: 1
    },
    {
        image: "source/peices/b_rook_1x.png",
        name: "rook",
        color: "black",
        row: 1 ,
        columns: 8
    },
    {
        image: "source/peices/b_queen_1x.png",
        name: "queen",
        color: "black",
        row: 1 ,
        columns: 4
    },
    {
        image: "source/peices/b_king.png",
        name: "king",
        color: "black",
        row: 1 ,
        columns: 5
    },
]
    
 

const whitePeices = [
    
{
    image: "source/peices/w_pawn_1x.png",
    name: "pawn",
    color: "white",
    row: 7 ,
    columns: 1,
},
{
    image: "source/peices/w_pawn_1x.png",
    name: "pawn",
    color: "white",
    row: 7 ,
    columns: 2,
},
{
    image: "source/peices/w_pawn_1x.png",
    name: "pawn",
    color: "white",
    row: 7 ,
    columns: 3,
},
{
    image: "source/peices/w_pawn_1x.png",
    name: "pawn1w",
    color: "white",
    row: 7 ,
    columns: 4,
},
{
    image: "source/peices/w_pawn_1x.png",
    name: "pawn2w",
    color: "white",
    row: 7 ,
    columns: 5,
},
{
    image: "source/peices/w_pawn_1x.png",
    name: "pawn",
    color: "white",
    row: 7 ,
    columns: 6,
},
{
    image: "source/peices/w_pawn_1x.png",
    name: "pawn",
    color: "white",
    row: 7 ,
    columns: 7,
},
{
    image: "source/peices/w_pawn_1x.png",
    name: "pawn",
    color: "white",
    row: 7 ,
    columns: 8,
},
{
    image: "source/peices/w_bishop_1x.png",
    name: "bishop1w",
    color: "white",
    row: 8 ,
    columns: 3,
},
{
    image: "source/peices/w_bishop_1x.png",
    name: "bishop",
    color: "white",
    row: 8 ,
    columns: 6,
},
{
    image: "source/peices/w_knight_1x.png",
    name: "knight",
    color: "white",
    row: 8 ,
    columns: 2,
}, 
{
    image: "source/peices/w_knight_1x.png",
    name: "knight",
    color: "white",
    row: 8 ,
    columns: 7,
}, 
{
    image: "source/peices/w_rook_1x.png",
    name: "rook",
    color: "white",
    row: 8 ,
    columns: 1,
},
{
    image: "source/peices/w_rook_1x.png",
    name: "rook",
    color: "white",
    row: 8 ,
    columns: 8,
},
{
    image: "source/peices/w_queen_1x.png",
    name: "queen",
    color: "white",
    row: 8 ,
    columns: 4
},
{
    image: "source/peices/w_king_1x.png",
    name: "king",
    color: "white",
    row: 8 ,
    columns: 5
},
]

    
function setUp (x) {

   
        const newpeice = document.createElement("img")
        newpeice.classList = x.name;
        newpeice.src = x.image
        newpeice.setAttribute("color",x.color)
        newpeice.setAttribute("draggable",false)
        newpeice.style.gridColumn = x.columns;
        newpeice.style.maxWidth = "70%"
        newpeice.style.gridRow = x.row;
        chessboard.insertAdjacentElement('beforeend',newpeice)

}
   

 
    
 blackPeices.forEach(element => setUp(element))   
 whitePeices.forEach(element => setUp(element))

    const pawn1w = document.getElementsByClassName("pawn1w");
    const pawn1b = document.getElementsByClassName("pawn1b");
    const bishop1w = document.getElementsByClassName("bishop1w");

function chessGame() {


    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }

    async function turnOne() {


        pawn1w[0].classList.add ("jump_up")
        await sleep (700)
        pawn1w[0].classList.remove ("jump_up")
        pawn1w[0].attributes[4].value = "grid-area: 6 / 4 / auto / auto; max-width: 70%;"
        pawn1w[0].classList.add('jump_down')
        pawn1w[0].classList.remove('jump_down')


        await sleep (1000)
        pawn1w[0].classList.add ("jump_up")
        await sleep (700)
        pawn1w[0].classList.remove ("jump_up")
        pawn1w[0].attributes[4].value = "grid-area: 5 / 4 / auto / auto; max-width: 70%;"
        pawn1w[0].classList.add('jump_down')
        pawn1w[0].classList.remove('jump_down')
                
        await sleep (1000)



 


        pawn1b[0].attributes[4].value = "grid-area: 3 / 6 / auto / auto; max-width: 70%;"

        await sleep (700)
       
        pawn1b[0].attributes[4].value = "grid-area: 4 / 6 / auto / auto; max-width: 70%;"

    }



     

 
    
    turnOne()
   

  //  function turnTwo () {
  ///      bishop1w[0].attributes[4].value = "grid-area: 4/7/auto/auto; max-width: 70%";
  //  }
}




