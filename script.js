const linexs = document.querySelectorAll(".line-X");
const lineys = document.querySelectorAll(".line-Y");
const restart = document.querySelector("#reset")
const play1 = document.querySelector(".play1")
const play2 = document.querySelector(".play2")

let i = 1
let ii = 9
let win_linX = [i,ii]
let j = 1
let jj = 9
let win_linY = [j,jj]

let = B_list_X = []
let = R_list_X = []
let = B_list_Y = []
let = R_list_Y = []

let turn = true;
function boad(turn){
    linexs.forEach((linex)=>{
        linex.addEventListener("click",()=>{
            while (i <= linexs.length-1) {
                i++
                ii++
                win_linX.push(i)
                win_linX.push(ii)
                // console.log(`i = ${i} , ii = ${ii}`)
            }
            console.log(win_linX)
            console.log("a")
            
            console.log(linex.textContent)
            if(turn){
                turn = false;
                R_list_X.push(linex.textContent)
                
                let k=0;
                while (k != win_linX.length) {
                    // console.log(win_linX[k])
                    let R_Lenth_X = R_list_X.length
                    let B_Lenth_X = B_list_X.length
                    if (R_Lenth_X <= 2){
                        if(win_linX[k] == R_list_X[0] | win_linX[k+1] == R_list_X[0]){
                            if(win_linX[k] == B_list_X[0] | win_linX[k+1] == B_list_X[0]){
                                console.log(`${R_list_X[0]} ${B_list_X[0]} yes`)
                            }
                        }
                    }
                    if (R_Lenth_X > 0){
                        for(let v=0;v != R_Lenth_X;v++){
                            for(let v1=1; v1 != R_Lenth_X;v1++){
                                if (win_linX[k] == R_list_X[v] & win_linX[k+1] == R_list_X[v1]){
                                    console.log(`${R_list_X[v]} ${R_list_X[v1]} yes`)
                                }else if (win_linX[k] == R_list_X[v] | win_linX[k+1] == R_list_X[v]) {
                                    if (B_Lenth_X >= 2){
                                        for(let v2=0;v2 != R_Lenth_X;v2++){
                                            if (win_linX[k] == B_list_X[v2] | win_linX[k+1] == B_list_X[v2]){
                                                console.log(`${R_list_X[v]} ${B_list_X[v2]} yes`)
                                            }
                                        }
                                    }
                                }else{
                                    console.log("no")
                                }
                            }
                        }
                    }
                    k = k + 2
                }
                play2.style.border =  "none";
                play1.style.border =  "3px solid";
                linex.style.backgroundColor = "red";
                // linex.textContent = 0
            }else{
                turn = true;
                console.log("ff")
                B_list_X.push(linex.textContent)
                let k=0
                while (k != win_linX.length) {
                    // console.log(win_linX[k])
                    let B_Lenth_X = B_list_X.length
                    let R_Lenth_X = R_list_X.length
                    if (B_Lenth_X > 0){
                        for(let v=0;v != B_Lenth_X;v++){
                            for(let v1=1; v1 != B_Lenth_X;v1++){
                                if (win_linX[k] == B_list_X[v] & win_linX[k+1] == B_list_X[v1]){
                                    console.log(`${B_list_X[v]} yes`)
                                }else{
                                    console.log("no")
                                }
                            }
                        }
                    }
                    k = k + 2
                    if (B_Lenth_X === 2){
                        let h1=0;
                        while (h1 != win_linX.length) {
                            // console.log(win_linX[k-2],":",win_linX[h1])
                            if (B_list_X[1] == win_linX[h1] & R_list_X[0] == win_linX[k-2]){
                                console.log("yes")
                                break;
                            }else{
                                console.log("no")
                            }
                            h1 = h1 + 2;
                        }
                    }
                }
                play1.style.border =  "none";
                play2.style.border =  "3px solid";
                linex.style.backgroundColor = "blue";
                // linex.textContent = 0
            }
            linex.style.pointerEvents = "none";
            reset(linex)
            console.log("B_list_X :",B_list_X)
            console.log("R_list_X :",R_list_X)
            
        });
    });
    lineys.forEach((liney)=>{
        liney.addEventListener("click",()=>{
            while (j <= lineys.length-1) {
                j++
                jj++
                win_linY.push(j)
                win_linY.push(jj)
                // console.log(`i = ${i} , ii = ${ii}`)
            }
            console.log(win_linX)
            console.log("b")
            console.log(liney.textContent)
            if(turn){
                turn = false;
                R_list_Y.push(liney.textContent)
                
                let k=0
                while (k != win_linY.length) {
                    // console.log(win_linX[k])
                    let R_Lenth_Y = R_list_Y.length
                    if (R_Lenth_Y >= 2){
                        for(let v=0;v != R_Lenth_Y;v++){
                            if (win_linY[k] == R_list_Y[v] & win_linY[k+1] == R_list_Y[v+1]){
                                console.log(`${R_list_Y[v]} yes`)
                            }else{
                                console.log("no")
                            }
                        }
                    }
                    k++
                }
                // liney.textContent = 0
                play2.style.border =  "none";
                play1.style.border =  "3px solid";
                liney.style.backgroundColor = "red";
            }else{

                turn = true;
                B_list_Y.push(liney.textContent)
                let k=0
                while (k != win_linY.length) {
                    // console.log(win_linX[k])
                    let B_Lenth_Y = B_list_Y.length
                    if (B_Lenth_Y >= 2){
                        for(let v=0;v != B_Lenth_Y;v++){
                            if (win_linY[k] == B_list_Y[v] & win_linY[k+1] == B_list_Y[v+1]){
                                console.log(`${B_list_Y[v]} yes`)
                            }else{
                                console.log("no")
                            }
                        }
                    }
                    k++
                }
                play1.style.border =  "none";
                play2.style.border =  "3px solid";
                liney.style.backgroundColor = "blue";
                // liney.textContent = 0
            }
            liney.style.pointerEvents = "none";
            reset(liney)
            console.log(B_list_Y)
            console.log(R_list_Y)
        });
    });
}
boad()

function reset(line){
    restart.addEventListener("click",()=>{
        turn = true;
        line.style.backgroundColor = "rgba(166, 146, 146, 0.178)";
        line.style.pointerEvents = "";
        B_list_X = []
        R_list_X = []
        B_list_Y = []
        R_list_Y = []

    })
}