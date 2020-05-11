'use strict';
import React from 'react';
/*
Example useage
<Marquee
  Size={'h1'}
  NumberOfOptions={'9'}
  Index0={'Hey There'}
  Index1={'I was'}
  Index2={'looking for a marquee'}
  Index3={'to use in a'}
  Index4={'react application.'}
  Index5={'I never'}
  Index6={'found a good one.'}
  Index7={'So I made one for us all.'}
  Index8={'Your help is welcome.'}
  TimeToCross={'10000'}
  TimeToChange={'2000'}
  IsRandom={'true'}
  Color={'red'}
/>
*/

class Marquee extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        totalDisplays:10,
        display1: 'a',
        display2: 'b',
        display3: 'c',
        display4: 'd',
        display5: 'e',
        display6: 'f',
        display7: 'g',
        display8: 'h',
        display9: 'i',
        display10: 'j',
        changeTime: 1000,
        crossTime: 10000,
        randomDisplayChange: false,
        htmlTag: 'h1',
        color: 'purple',
        currentlyDisplayedIndex: 1,
        currentlyDisplayedData: 'loading...'
      };
      this.marqueeDisplayChange = this.marqueeDisplayChange.bind(this);
  }

  componentDidMount(){
    const rand = this.props.IsRandom === 'true';

    this.setState({
      currentlyDisplayed: this.props.Index0,
      totalDisplays: this.props.NumberOfOptions || 1,
      changeTime: this.props.TimeToChange || 2000,
      crossTime: this.props.TimeToCross || 8000,
      randomDisplayChange: rand || false,
      htmlTag: this.props.Size || 'h3',
      color: this.props.Color || 'purple'
    })

    this.props.Index0 ? this.setState({display1: this.props.Index0}) : delete this.state.display1
    this.props.Index1 ? this.setState({display2: this.props.Index1}) : delete this.state.display2
    this.props.Index2 ? this.setState({display3: this.props.Index2}) : delete this.state.display3
    this.props.Index3 ? this.setState({display4: this.props.Index3}) : delete this.state.display4
    this.props.Index4 ? this.setState({display5: this.props.Index4}) : delete this.state.display5
    this.props.Index5 ? this.setState({display6: this.props.Index5}) : delete this.state.display6
    this.props.Index6 ? this.setState({display7: this.props.Index6}) : delete this.state.display7
    this.props.Index7 ? this.setState({display8: this.props.Index7}) : delete this.state.display8
    this.props.Index8 ? this.setState({display9: this.props.Index8}) : delete this.state.display9
    this.props.Index9 ? this.setState({display10: this.props.Index9}) : delete this.state.display10

    setTimeout(function() { this.marqueeDisplayChange() }.bind(this), 250);
  }

    marqueeDisplayChange () {
      if(this.state.randomDisplayChange){
        setInterval(() => {
          const randomIndex = Math.floor((Math.random() * this.state.totalDisplays) + 1)
          this.setState({
            currentlyDisplayedData: this.state['display'+randomIndex]
          });
        }, this.state.changeTime);
      }else{
        setInterval(() => {
          var nextIndex = this.state.currentlyDisplayedIndex
          var updateStateWith = nextIndex + 1
          if (updateStateWith == (Number(this.state.totalDisplays)+1)) updateStateWith = 1;
          else updateStateWith = nextIndex + 1;
          this.setState({ 
            currentlyDisplayedData: this.state['display'+nextIndex],
            currentlyDisplayedIndex: updateStateWith
          });
        }, this.state.changeTime);

      }
    }

    render() {
      var marquee = this.state.currentlyDisplayedData;
      let style1 =  {
        margin: '0 auto',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
      };
      let style2 = {
        display: 'inline-block',
        paddingLeft: '100%',
        animation: 'marquee ' + Number(this.state.crossTime) + 'ms linear infinite',
        color: this.state.color,
      };
      return (
        <section id='marquee'>
          <this.state.htmlTag style={ style1 }>
            <span style={ style2 }>{ marquee }</span>
          </this.state.htmlTag>
        </section>
      );
    }
}

export default Marquee;
