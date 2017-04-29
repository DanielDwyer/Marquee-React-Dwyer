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

      //props passed to component
      console.log("PROPS via this.props\n",this.props);
      console.log("this.props.size:",this.props.Size);//html element p, h1, h6 ...
      console.log("this.props.NumberOfOptions:",this.props.NumberOfOptions);//number of indices in the array of marquee sayings
      console.log("this.props.Index0:",this.props.Index0);
      console.log("this.props.Index1:",this.props.Index1);
      console.log("this.props.Index2:",this.props.Index2);
      console.log("this.props.Index3:",this.props.Index3);
      console.log("this.props.Index4:",this.props.Index4);
      console.log("this.props.index5:",this.props.Index5);
      console.log("this.props.Index6:",this.props.Index6);
      console.log("this.props.Index7:",this.props.Index7);
      console.log("this.props.TimeToCross:",this.props.TimeToCross);
      console.log("this.props.TimeToChange:",this.props.TimeToChange);
      console.log("this.props.IsRandom",this.props.IsRandom);

      //props used > 1 set to variable
      var numberOfOptions = this.props.NumberOfOptions;
      var isRandom = this.props.IsRandom;

      //placeholder for various marquee strings
      var marqueeArr = [];

      //for loop to place marquee sayings into the placeholder array for easy access either in order or randomly
      for(var i = 0; i < Number(numberOfOptions); i++){
          if(i === 0) {
            this.state.marqueeArr.push(this.props.Index0)
            console.log("pushed Index 0=>",this.props.Index0);
          }else if( i === 1){
            this.state.marqueeArr.push(this.props.Index1)
            console.log("pushed Index 1=>",this.props.Index1);
          }else if( i === 2){
            this.state.marqueeArr.push(this.props.Index2)
            console.log("pushed Index 2=>",this.props.Index2);
          }else if( i === 3){
            this.state.marqueeArr.push(this.props.Index3)
            console.log("pushed Index 3=>",this.props.Index3);
          }else if( i === 4){
            this.state.marqueeArr.push(this.props.Index4)
            console.log("pushed Index 4=>",this.props.Index4);
          }else if( i === 5){
            this.state.marqueeArr.push(this.props.Index5)
            console.log("pushed Index 5=>",this.props.Index5);
          }else if( i === 6){
            this.state.marqueeArr.push(this.props.Index6)
            console.log("pushed Index 6=>",this.props.Index6);
          }else if( i === 7){
            this.state.marqueeArr.push(this.props.Index7)
            console.log("pushed Index 7=>",this.props.Index7);
          }
      }

      //some things need to be numbers not strings
      var timeToChange = Number(this.props.TimeToChange)//the time in ms that each marquee saying changes

      if(this.props.IsRandom == "true"){
        var changeMarquee = setInterval(this.changeMarqueeI, timeToChange);
      }else{
        var changeMarquee = setInterval(this.changeMarqueeII, timeToChange);
      }
    }

    changeMarqueeI (){
      console.log("Hi");
      console.log("Random #", (Math.random()*(this.props.NumberOfOptions-1)).toFixed(0));
      var randomIndex = (Math.random()*(this.props.NumberOfOptions-1)).toFixed(0);
      this.setState({marquee: this.state.marqueeArr[randomIndex]})
    }

    changeMarqueeII (){
      console.log("Hi");
      this.setState({marquee: this.state.marqueeArr[counter]})
      counter++;
      if(counter > (this.props.NumberOfOptions -1)){
        console.log("START OVER");
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

            <section id="home">
              <this.props.Size style={styling1}><span style={styling2}>{ marquee }</span></this.props.Size>
            </section>

        );
    }
}
