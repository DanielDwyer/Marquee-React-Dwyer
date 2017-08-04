'use strict'

/*
<Marquee
  Size={"h1"}
  NumberOfOptions={"9"}
  Index0={"Hey There"}
  Index1={"I was"}
  Index2={"looking for a marquee"}
  Index3={"to use in a"}
  Index4={"react application."}
  Index5={"I never"}
  Index6={"found a good one."}
  Index7={"So I made one for us all."}
  Index8={"Your help is welcome."}
  TimeToCross={"10000"}
  TimeToChange={"2000"}
  IsRandom={"true"}
  Color={"red"}
/>
*/

/*
@keyframes marquee {
    0%   { transform: translate(0, 0); animation-timing-function: ease-in;}
    100% { transform: translate(-100%, 0); animation-timing-function: ease-out;}
}
*/

import React from 'react'
var counter = 0;

class Marquee extends React.Component {
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
      console.log("here");
      /*
      +++ Uncomment any line(s) to see the props being passed to the marquee
      */

      console.log("this.props\n",this.props);//all props
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
      console.log("this.props.Index8:",this.props.Index8);
      console.log("this.props.Index9:",this.props.Index9);
      console.log("this.props.Index10:",this.props.Index10);
      console.log("this.props.TimeToCross:",this.props.TimeToCross);
      console.log("this.props.TimeToChange:",this.props.TimeToChange);
      console.log("this.props.IsRandom",this.props.IsRandom);

      var numberOfOptions = this.props.NumberOfOptions;
      var isRandom = this.props.IsRandom;

      //for loop to place marquee sayings into the placeholder array for easy access either in order or randomly
      for(var i = 0; i < Number(numberOfOptions); i++){
        console.log("looping:",i);
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
            // console.log("pushed Index 5=>",this.props.Index5);
          }else if( i === 6){
            this.state.marqueeArr.push(this.props.Index6)
            console.log("pushed Index 6=>",this.props.Index6);
          }else if( i === 7){
            this.state.marqueeArr.push(this.props.Index7)
            console.log("pushed Index 7=>",this.props.Index7);
          }else if( i === 8){
            this.state.marqueeArr.push(this.props.Index8)
            console.log("pushed Index 8=>",this.props.Index8);
          }else if( i === 9){
            this.state.marqueeArr.push(this.props.Index9)
            console.log("pushed Index 9=>",this.props.Index9);
          }else if( i === 10){
            this.state.marqueeArr.push(this.props.Index10)
            console.log("pushed Index 10=>",this.props.Index10);
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
      var randomIndex = (Math.random()*(this.props.NumberOfOptions-1)).toFixed(0);
      console.log(this.state.marqueeArr[randomIndex]);
      this.setState({marquee: this.state.marqueeArr[randomIndex]})
    }

    changeMarqueeII (){
      console.log(this.state.marqueeArr[counter]);
      this.setState({marquee: this.state.marqueeArr[counter]})
      counter++;
      if(counter > (this.props.NumberOfOptions -1)){
        counter = 0;
      }
    }

    render() {

      var marquee = this.state.marquee;
      console.log("render:",marquee);

      let styling1 =  {
          margin: '0 auto',
          whiteSpace: 'nowrap',
          overflow: 'hidden'
      }

      let styling2 = {
          display: 'inline-block',
          paddingLeft: '100%',
          animation: 'marquee '+Number(this.props.TimeToCross)+'ms linear infinite',
          color: this.props.Color
      }

        return (

            <section id="marquee">
              <this.props.Size style={styling1}><span style={styling2}>{ marquee }</span></this.props.Size>
            </section>

        );
    }
}

export default Marquee;
