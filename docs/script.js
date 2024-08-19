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

//functions
let on=(id)=>{
    let overlay = document.getElementById(id);
    overlay.style.display = "flex";
}
let off=(id)=>{
    let overlay = document.getElementById(id);
    overlay.style.display = "none";
}
