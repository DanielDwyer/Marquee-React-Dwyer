# marquee-react-dwyer
![Downloads](https://img.shields.io/npm/dm/marquee-react-dwyer.svg)
![Downloads](https://img.shields.io/npm/dt/marquee-react-dwyer.svg)
![npm version](https://img.shields.io/npm/v/marquee-react-dwyer.svg)
![License](https://img.shields.io/npm/l/marquee-react-dwyer.svg)

A horizontal marquee component for React.js. All you do is install, require, and plug in your props and you have a full fledged marquee!

# Alert
You must add these lines to your CSS or the marquee will NOT work:
```shell
@keyframes marquee {
    0%   { transform: translate(0, 0); animation-timing-function: ease-in;}
    100% { transform: translate(-100%, 0); animation-timing-function: ease-out;}
}
```


- Live Example: http://four-rock.surge.sh/
- Example Repo: https://github.com/DanielDwyer/marquee-react-dwyer-example

## Getting Started

Install it via npm:

```shell
npm i --save marquee-react-dwyer
```


## Example

```html
import React, { Component } from 'react';
import Marquee from 'marquee-react-dwyer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
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
      </div>
    );
  }
}
```

## Props

### Size
The HTML element you want your marquee displayed as, h1, h2..., h6, p.

- Type: string
- Required

### NumberOfOptions
How many text options. Will always be one more than the biggest index supplied, due to zero being the first index. i.e If your last string is Index3, your NumberOfOptions will be 4.

- Type: String
- Required



### Index#
Since you can have various strings appear in your marquee, you can assign them here. If you only want one string, simply provide Index0. The maximum number of different string you can provide is 11, thus Index10 will be the last input.

- Type: String
- Minimum 1: Index0, Maximum 11: Index10

### TimeToCross
The time in milliseconds that it takes the text to go from the right side of the screen to the left side of the screen.

- Type: Number in Milliseconds
- Required

### TimeToChange
The time in milliseconds that it takes for the sting being displayed in the marquee to rotate to the next string. If this time is equal to TimeToCross the marquee will display one unique string per one pass of the screen.

- Type: Number
- Default: `0`


### IsRandom
If true, the strings you provided for the marquee will be randomly rotated and displayed. If set to false or an empty string, the strings will appear in order of index, zero first.

- Type: Boolean String
- Required

### Color
The color of the text in the marquee.

- Type: CSS Color or hexadecimal color code
- Required

## License

MIT
