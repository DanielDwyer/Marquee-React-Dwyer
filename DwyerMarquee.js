'use strict'

//<Marquee Size={"h1"} NumberOfOptions={"9"} Index0={"Hey There"} Index1={"I was"} Index2={"looking for a marquee"} Index3={"to use in a"} Index4={"react application."} Index5={"I never"} Index6={"found a good one."} Index7={"So I made one for us all."} Index8={"Your help is welcome."} TimeToCross={"10000"} TimeToChange={"2000"} IsRandom={"true"}></Marquee>

import React from 'react'
var counter = 0;

export default class Marquee extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            marquee: this.props.Index0,
            marqueeArr: []
        };
        this.changeMarqueeI = this.changeMarqueeI.bind(this);
        this.changeMarqueeII = this.changeMarqueeII.bind(this);
    }

    componentWillMount(){
      var numberOfOptions = this.props.NumberOfOptions;
      var isRandom = this.props.IsRandom;
      var marqueeArr = [];

      for(var i = 0; i < Number(numberOfOptions); i++){
          if(i === 0) {
            this.state.marqueeArr.push(this.props.Index0)
          }else if( i === 1){
            this.state.marqueeArr.push(this.props.Index1)
          }else if( i === 2){
            this.state.marqueeArr.push(this.props.Index2)
          }else if( i === 3){
            this.state.marqueeArr.push(this.props.Index3)
          }else if( i === 4){
            this.state.marqueeArr.push(this.props.Index4)
          }else if( i === 5){
            this.state.marqueeArr.push(this.props.Index5)
          }else if( i === 6){
            this.state.marqueeArr.push(this.props.Index6)
          }else if( i === 7){
            this.state.marqueeArr.push(this.props.Index7)
          }
      }

      var timeToChange = Number(this.props.TimeToChange)//the time in ms that each marquee saying changes

      if(this.props.IsRandom == "true"){
        var changeMarquee = setInterval(this.changeMarqueeI, timeToChange);
      }else{
        var changeMarquee = setInterval(this.changeMarqueeII, timeToChange);
      }
    }

    changeMarqueeI (){
      var randomIndex = (Math.random()*(this.props.NumberOfOptions-1)).toFixed(0);
      this.setState({marquee: this.state.marqueeArr[randomIndex]})
    }

    changeMarqueeII (){
      console.log("Hi");
      this.setState({marquee: this.state.marqueeArr[counter]})
      counter++;
      if(counter > (this.props.NumberOfOptions -1)){
        counter = 0;
      }
    }

    render() {

      var marquee = this.state.marquee;

      let styling1 =  {
          margin: '0 auto',
          whiteSpace: 'nowrap',
          overflow: 'hidden'
      }

      let styling2 = {
          display: 'inline-block',
          paddingLeft: '100%',
          animation: 'marquee '+Number(this.props.TimeToCross)+'ms linear infinite'
      }

        return (

            `<section>
              <this.props.Size style={styling1}><span style={styling2}>{ marquee }</span></this.props.Size>
            </section>`

        );
    }
}
