function colorgen(){
    let r=Math.floor(Math.random()*256)
    let g=Math.floor(Math.random()*256)
    let b=Math.floor(Math.random()*256)
    return `rgb(${r}, ${g}, ${b})`
}


console.log(colorgen())

/*for(let i=0; i<7; i++){
    let a= document.querySelector(".anya").childNodes[i]
    a.
    
}*/

let squareArr=document.querySelectorAll('.square')
let colors=[]

function init(){
    colors=[]
    document.querySelector('h1').style.backgroundColor="white"
    document.querySelector(".msg").textContent="?"
    for(let obj of squareArr){
        //console.log(obj)
        let color=colorgen()
        colors.push(color)
        obj.style.backgroundColor=color;

    }

    let index=Math.floor(Math.random()*6)
    document.getElementById("color").innerHTML=colors[index]
}

init()
//console.log(colors)

function verify(e){
    console.log(e.target.style.backgroundColor)
    let clickedcolor=e.target.style.backgroundColor
    if(clickedcolor==document.getElementById("color").innerHTML){
        document.querySelector("h1").style.backgroundColor=clickedcolor
        document.querySelector(".msg").textContent="😊"

    }else{
        document.querySelector(".msg").textContent="😒"
    }
}