import React from 'react'
import './CoolBackground.css'
import randomNum from '../../js/randomNum'
import randomMove from '../../js/randomMove'

export default class CoolBackground extends React.Component{
  constructor() {
    super()
    this.state = {
      colors: ['#DBE2EC','#D8D3CD','lightgray',
               '#E7E8EC','#E8E5DE','#C8D7D2',
               '#F5F6F0','#E3BFCD','#ECDCDF','#F3D2C9',
               '#F8D6BA','#F0DBA6'
              ],
      count: 0,
      divblocks: null
    }
  }
  divsrender() {
    let divs = []
    for (let index = 0; index < 512; index++) {
      divs.push(<div className="divblock" key={index}></div>)
    }
    return divs
  }
  divsshow(colors) {
    let divblocks = document.querySelectorAll('.divblock')
    divblocks.forEach((el,i) => {
      // let color1 = colors[randomNum(0,colors.length-1)]
      // let color2 = colors[randomNum(0,colors.length-1)]
      let X = i % 16
      let Y = (i - X) / 16
      el.style.left = X * 6.25 + 'vw'
      el.style.top =  Y * 12.5 + 'vh'
      el.style.backgroundColor = colors[randomNum(0,colors.length-1)]
      // el.style.backgroundImage = `linear-gradient(to right, ${color1} , ${color2})`
      el.style.opacity = '1'
      el.style.transition = '0.6s' 
    })
  }
  divrandommove(divs, count) {
    // let divblocks = document.querySelectorAll('.divblock')
    randomMove(divs, 16, 8, count)
  }
  componentDidMount() {
    this.setState({
      divblocks: document.querySelectorAll('.divblock')
    })
    this.timer = setTimeout(() => {
      this.divsshow(this.state.colors)
      setInterval(() => {
        let a = this.state.count
        a++
        this.divrandommove(this.state.divblocks, this.state.count)
        this.setState({
          count: a
        })
      }, 2000)
    }, 0)
  }
  componentWillUnmount() {
    clearInterval(this.timer)
  }
  render() {
    return(
      <div className="CoolBackground">
        {this.divsrender()}
      </div>
    )
  }
}