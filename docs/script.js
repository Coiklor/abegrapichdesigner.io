/*let overlays = ["overlay1", "overlay2", "overlay3", "overlay4","overlay4","overlay6"];
function on(){
    document.getElementById(overlays).style.display="flex"
}
function off(){
    document.getElementById(overlays).style.display="none"
}
*/

/*
class Overlays {
    constructor(nombre){
        this.overlay = nombre
    }
    on(){
        document.getElementById(`${this.overlay}`).style.display="flex"
    }
    off(){
        document.getElementById(`${this.overlay}`).style.display="none"
    }

}

const overlay1 = new Overlays ('overlay1')
const overlay2 = new Overlays ('overlay2')
const overlay3 = new Overlays ('overlay3')
const overlay4 = new Overlays ('overlay4')
const overlay5 = new Overlays ('overlay5')
const overlay6 = new Overlays ('overlay6')

*/






/* let on = () => {
        document.getElementById("overlay4").style.display="flex"
}
let off = () =>{
        document.getElementById("overlay4").style.display="none"
} */

let over1 = document.getElementById("overlay1")
let over2 = document.getElementById("overlay2")
let over3 = document.getElementById("overlay3")
let over4 = document.getElementById("overlay4")
let over5 = document.getElementById("overlay5")
let over6 = document.getElementById("overlay6") 

//functions
let on=()=>{
    over1.style.display="flex"
}
let off=()=>{
    over1.style.display="none"
}
let on1=()=>{
    over2.style.display="flex"
}
let off1=()=>{
    over2.style.display="none"
}
let on2=()=>{
    over3.style.display="flex"
}
let off2=()=>{
    over3.style.display="none"
}
let on3=()=>{
    over4.style.display="flex"
}
let off3=()=>{
    over4.style.display="none"
}
let on4=()=>{
    over5.style.display="flex"
}
let off4=()=>{
    over5.style.display="none"
} 
let on5 =()=>{
    over6.style.display="flex"
}
let off5=()=>{
    over6.style.display="none"
}

/* let contents = document.getElementsByClassName("contents")
let overs = document.getElementsByClassName("fila")

 

for(let i = 0; i< contents.length; i++){
    contents[i].addEventListener("click", function(){
        hideAllPageContents();
        clearAllNavItemSelection();
        overs[i].style.display = "block";

    });
    if (i > 0){
        overs[i].style.display = "none"
    }    
}

function hideAllPageContents(){
    for(let i = 0; i<overs.length; i++){
        overs[i],style.display = "none";
    }
}

function clearAllNavItemSelection(){
    for (let i = 0; i< contents.length; i++){
        contents[i].className = 'contents'
    }
} */

/* contents[0].className += "vertical-item-selected";
 */







/* let overlays = [over1, over2, over3, over4, over5, over6]
switch(overlays){
    case over1:
        function on(){
            over1.style.display="flex"
        }
        function off(){
            over1.style.display="none"
        }
        break;
    case over2:
        function on1(){
            over2.style.display="flex"
        }
        function off1(){
            over2.style.display="none"
        }
        break;
    case over3:
        function on2(){
            over3.style.display="flex"
        }
        function off2(){
            over3.style.display="none"
        }
        break;
    case over4:
        function on3(){
            over4.style.display="flex"
        }
        function off3(){
            over4.style.display="none"
        }
        break;
    case over5:
            function on4(){
                over5.style.display="flex"
            }
            function off4(){
                over5.style.display="none"
            }
            break;
     case over6:
        function on5(){
            over6.style.display="flex"
        }
        function off5(){
            over6.style.display="none"
        }
        break;
} */






/*
switch(overlays){
    case 'overlay1':
        function on(){
            document.getElementById('overlay1').style.display="flex"
        }
        function off(){
            document.getElementById('overlay1').style.display="none"
        }
        break;
    case 'overlay2':
        function on(){
            document.getElementById('overlay2').style.display="flex"
        }
        function off(){
            document.getElementById('overlay2').style.display="none"
        }
        break;
    case 'overlay3':
        function on(){
            document.getElementById('overlay3').style.display="flex"
        }
        function off(){
            document.getElementById('overlay3').style.display="none"
        }
        break;
    case 'overlay4':
        function on(){
            document.getElementById('overlay4').style.display="flex"
        }
        function off(){
            document.getElementById('overlay4').style.display="none"
        }
        break;
    case 'overlay5':
            function on(){
                document.getElementById('overlay5').style.display="flex"
            }
            function off(){
                document.getElementById('overlay5').style.display="none"
            }
            break;
     case 'overlay6':
        function on(){
            document.getElementById('overlay6').style.display="flex"
        }
        function off(){
            document.getElementById('overlay6').style.display="none"
        }
        break;
}
*/