import randomNum from './randomNum'
export default function randomMove(divs, width, height, count) {
    let X = []
    //   let Y = []
    for (let i = 0; i < height; i++) {
        X.push(randomNum(0, width - 2))
    }
    X.forEach((el, i) => {
        let a = divs[el + i * width].style.left
        let b = divs[el + i * width].style.top
        let c = el + i * width+width+1
        divs[el + i * width].style.left = divs[c].style.left
        divs[el + i * width].style.top = divs[c].style.top
        divs[el + i * width].style.transition = '1.5s'
        divs[c].style.left = a
        divs[c].style.top = b
        divs[c].style.transition = '1.5s'
    })
    //   if(0 === 0){
    // for (let i = 0; i < height; i++) {
    //     divcount = randomNum(i * width, width * (i + 1) -2)
    //     let a = divs[divcount].style.left
    //     divs[divcount].style.left = divs[divcount+1].style.left
    //     divs[divcount].style.transition = '1.9s'
    //     divs[divcount+1].style.left= a
    //     divs[divcount+1].style.transition = '1.9s'

    //   }
    // } else {
    //   
    //   for (let i = 0; i < width; i++) {
    //     divcount = randomNum(0, height -2)
    //     let a = divs[width*(divcount) + i].style.top
    //     divs[width*divcount + i].style.top = divs[width*(divcount+1) + i].style.top
    //     divs[width*divcount + i].style.transition = '1.9s'
    //     divs[width*(divcount+1) + i].style.top = a
    //     divs[width*(divcount+1) + i].style.transition = '1.9s'
    //   }
    // }
}
// 0 1 2 3 4
// 5 6 7 8 9
// 10 11 12 13