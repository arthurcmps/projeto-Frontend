
const btnPlus = document.getElementById("btnPlus")
const btnMinus = document.getElementById("btnMinus")

let root = document.documentElement

let rootStyles = getComputedStyle(root)
let html = document.getElementsByTagName("html")[0]
btnPlus.addEventListener("click",function(e){
    let currentSMSize = Number(rootStyles.getPropertyValue("--sm-txt").replace("rem",""))
    let currentSize = Number(rootStyles.getPropertyValue("--txt-size").replace("rem",""))
    let currentBIGSize = Number(rootStyles.getPropertyValue("--big-txt").replace("rem",""))
    let newSizes =[
        ["--txt-size",(currentSize + 0.25).toString() + "rem"],
        ["--sm-txt",(currentSMSize + 0.25).toString() + "rem"],
        ["--big-txt",(currentBIGSize + 0.125).toString() + "rem"]

    ]
    if (currentSize === 2.5) return
    else return newSizes.map((element) => {
        html.style.setProperty(element[0],element[1])
    });
})

btnMinus.addEventListener("click",function(e){
    let currentSMSize = Number(rootStyles.getPropertyValue("--sm-txt").replace("rem",""))
    let currentSize = Number(rootStyles.getPropertyValue("--txt-size").replace("rem",""))
    let currentBIGSize = Number(rootStyles.getPropertyValue("--big-txt").replace("rem",""))
    let newSizes =[
        ["--txt-size",(currentSize - 0.25).toString() + "rem"],
        ["--sm-txt",(currentSMSize - 0.25).toString() + "rem"],
        ["--big-txt",(currentBIGSize - 0.125).toString() + "rem"]

    ]
    if (currentSize === 1) return
    else return newSizes.map((element) => {
        html.style.setProperty(element[0],element[1])
    });
})
