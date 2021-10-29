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



if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
} else {
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }
}

function buttons () {
    
navButtons[0].addEventListener('click', () => {
    About.scrollIntoView()
})

navButtons[1].addEventListener('click', () => {
    roadmap.scrollIntoView()
})

navButtons[2].addEventListener('click', () => {
    NFT.scrollIntoView()
})

navButtons[3].addEventListener('click', () => {
    info.scrollIntoView()
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
    name: "queenw",
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
    const pawn2b = document.getElementsByClassName("pawn2b")
    const pawn3b = document.getElementsByClassName("pawn3b")
    const pawn2w = document.getElementsByClassName("pawn2w")
    const queenw = document.getElementsByClassName("queenw")
    var active = "false"

function chessGame() {




    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }

    async function turnOne() {
       
        await sleep (500)
        pawn1w[0].classList.add ("jump_up")
        await sleep (240)
        pawn1w[0].attributes[4].value = "grid-area: 6 / 4 / auto / auto; max-width: 70%;"
        pawn1w[0].classList.remove ("jump_up")
        await sleep (300)
        pawn1w[0].classList.add ("jump_up")
        await sleep (240)
        pawn1w[0].attributes[4].value = "grid-area: 5 / 4 / auto / auto; max-width: 70%;"
        pawn1w[0].classList.remove ("jump_up")
        await sleep (500)

        pawn1b[0].classList.add ("jump_down")
        await sleep (240)
        pawn1b[0].attributes[4].value = "grid-area: 3 / 6 / auto / auto; max-width: 70%;"
        pawn1b[0].classList.remove ("jump_down")
        await sleep (300)
        pawn1b[0].classList.add ("jump_down")
        await sleep (240)
        pawn1b[0].attributes[4].value = "grid-area: 4 / 6 / auto / auto; max-width: 70%;"
        pawn1b[0].classList.remove ("jump_down")

        await sleep (300)
 
        const x = document.querySelector(".roadmap_container");
        const road_div = document.createElement("span");
        road_div.classList = "roadmapinfo"
        const roadimg = document.createElement("img");
        roadimg.setAttribute("src", "source/peices/b_pawn.png")
        const roadinfo = document.createElement("p")
        roadinfo.innerText = "Q4 2021" + "\n" + " Pre-Registration Window open for potential players to show interest. "
        road_div.append(roadimg)
        road_div.append(roadinfo)
        x.append(road_div)

        
        await sleep (2000)
        turnTwo();
        
    }

    turnOne()
    

 
  async function turnTwo () {
        bishop1w[0].classList.add ("jump_side")
        await sleep (240)
        bishop1w[0].classList.remove("jump_side")
        bishop1w[0].attributes[4].value = "grid-area: 7/4/auto/auto; max-width: 70%";
        await sleep (300)

        bishop1w[0].classList.add ("jump_side")
        await sleep (240)
        bishop1w[0].attributes[4].value = "grid-area: 6/5/auto/auto; max-width: 70%";
        bishop1w[0].classList.remove("jump_side")
        await sleep (300)
        
        bishop1w[0].classList.add ("jump_side")
        await sleep (240)
        bishop1w[0].attributes[4].value = "grid-area: 5/6/auto/auto; max-width: 70%";
        bishop1w[0].classList.remove("jump_side")
        await sleep (300)

        bishop1w[0].classList.add ("jump_side")
        await sleep (240)
        bishop1w[0].attributes[4].value = "grid-area: 4/7/auto/auto; max-width: 70%";
        bishop1w[0].classList.remove("jump_side")
        await sleep (500)

        pawn2b[0].classList.add ("jump_down")
        await sleep (240)
        pawn2b[0].attributes[4].value = "grid-area: 3/8/auto/auto; max-width: 70%";
        pawn2b[0].classList.remove("jump_down")
        await sleep (300)

        const x = document.querySelector(".roadmap_container");
        const road_div = document.createElement("span");
        road_div.classList = "roadmapinfo"
        const roadimg = document.createElement("img");
        roadimg.setAttribute("src", "source/peices/b_knight.png")
        const roadinfo = document.createElement("p")
        roadinfo.innerText = "Q1- 2022:" + "\n" + "NFT Sales, if we get enough demand from pre-registrations"
        road_div.append(roadimg)
        road_div.append(roadinfo)
        x.append(road_div)
        await sleep (2000)
        turnThree()
  }

  async function turnThree () {
    bishop1w[0].classList.add ("jump_side_down")
    await sleep (240)
    bishop1w[0].attributes[4].value = "grid-area: 5/8/auto/auto; max-width: 70%";
    bishop1w[0].classList.remove("jump_side_down")
    await sleep (500)

    pawn3b[0].classList.add ("jump_down")
    await sleep (240)
    pawn3b[0].attributes[4].value = "grid-area: 3 / 7 / auto / auto; max-width: 70%;"
    pawn3b[0].classList.remove ("jump_down")
    await sleep (300)
    pawn3b[0].classList.add ("jump_down")
    await sleep (240)
    pawn3b[0].attributes[4].value = "grid-area: 4 / 7 / auto / auto; max-width: 70%;"
    pawn3b[0].classList.remove ("jump_down")

    await sleep (500)

    const x = document.querySelector(".roadmap_container");
    const road_div = document.createElement("span");
    road_div.classList = "roadmapinfo"
    const roadimg = document.createElement("img");
    roadimg.setAttribute("src", "source/peices/b_bishop.png")
    const roadinfo = document.createElement("p")
    roadinfo.innerText = "Q2 2022:" + "\n" + "Game Development begins"
    road_div.append(roadimg)
    road_div.append(roadinfo)
    x.append(road_div)
    await sleep (2000)
    
    turnFour()
  }

  async function turnFour() {
    pawn2w[0].classList.add ("jump_up")
    await sleep (240)
    pawn2w[0].attributes[4].value = "grid-area: 6 / 5 / auto / auto; max-width: 70%;"
    pawn2w[0].classList.remove ("jump_up")
    await sleep (300)
    pawn2w[0].classList.add ("jump_up")
    await sleep (240)
    pawn2w[0].attributes[4].value = "grid-area: 5 / 5 / auto / auto; max-width: 70%;"
    pawn2w[0].classList.remove ("jump_up")
    await sleep (500)
    pawn1b[0].classList.add ("jump_left_down")
    await sleep (240)
    pawn2w[0].classList.add ("exit") 
    pawn1b[0].attributes[4].value = "grid-area: 5 / 5 / auto / auto; max-width: 70%;"
    pawn1b[0].classList.remove ("jump_left_down")
    await sleep (500)

    const x = document.querySelector(".roadmap_container");
    const road_div = document.createElement("span");
    road_div.classList = "roadmapinfo"
    const roadimg = document.createElement("img");
    roadimg.setAttribute("src", "source/peices/b_rook_1x.png")
    const roadinfo = document.createElement("p")
    roadinfo.innerText = "Q3 2022:" + "\n" + "Smart Contract Integration begins"
    road_div.append(roadimg)
    road_div.append(roadinfo)
    x.append(road_div)
    await sleep (2000)

    turnFive()
  }

  async function turnFive () {

    queenw[0].classList.add ("jump_side")
    await sleep (240)
    queenw[0].classList.remove("jump_side")
    queenw[0].attributes[4].value = "grid-area: 7/5/auto/auto; max-width: 70%";
    await sleep (300)

    queenw[0].classList.add ("jump_side")
    await sleep (240)
    queenw[0].attributes[4].value = "grid-area: 6/6/auto/auto; max-width: 70%";
    queenw[0].classList.remove("jump_side")
    await sleep (300)
    
    queenw[0].classList.add ("jump_side")
    await sleep (240)
    queenw[0].attributes[4].value = "grid-area: 5/7/auto/auto; max-width: 70%";
    queenw[0].classList.remove("jump_side")
    await sleep (300)

    queenw[0].classList.add ("jump_side")
    await sleep (240)
    queenw[0].attributes[4].value = "grid-area: 4/8/auto/auto; max-width: 70%";
    queenw[0].classList.remove("jump_side")
    await sleep (500)

    const x = document.querySelector(".roadmap_container");
    const road_div = document.createElement("span");
    road_div.classList = "roadmapinfo"
    const roadimg = document.createElement("img");
    roadimg.setAttribute("src", "source/peices/b_queen_1x.png")
    const roadinfo = document.createElement("p")
    roadinfo.innerText = "Q4 2022:" + "\n" + "High School Game is open – first round of scholarship awarded for 2023"
    road_div.append(roadimg)
    road_div.append(roadinfo)
    x.append(road_div)
    await sleep (2000)

  }
}
window.addEventListener('scroll', function() {
	
	var position = chessboard.getBoundingClientRect();

	// detecting if element is fully visible
	if(position.top >= 0 && position.bottom <= window.innerHeight) {
        if (active == "false") {
            chessGame();
            active = true;
        }
	} 
});
    
    
