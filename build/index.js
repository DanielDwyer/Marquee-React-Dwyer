module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var counter = 0;

var Marquee = function (_React$Component) {
  _inherits(Marquee, _React$Component);

  function Marquee(props) {
    _classCallCheck(this, Marquee);

    var _this = _possibleConstructorReturn(this, (Marquee.__proto__ || Object.getPrototypeOf(Marquee)).call(this, props));

    _this.state = {
      marquee: _this.props.Index0,
      marqueeArr: []
    };
    _this.changeMarqueeI = _this.changeMarqueeI.bind(_this);
    _this.changeMarqueeII = _this.changeMarqueeII.bind(_this);
    return _this;
  }

  _createClass(Marquee, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      console.log("here");
      /*
      +++ Uncomment any line(s) to see the props being passed to the marquee
      */

      console.log("this.props\n", this.props); //all props
      console.log("this.props.size:", this.props.Size); //html element p, h1, h6 ...
      console.log("this.props.NumberOfOptions:", this.props.NumberOfOptions); //number of indices in the array of marquee sayings
      console.log("this.props.Index0:", this.props.Index0);
      console.log("this.props.Index1:", this.props.Index1);
      console.log("this.props.Index2:", this.props.Index2);
      console.log("this.props.Index3:", this.props.Index3);
      console.log("this.props.Index4:", this.props.Index4);
      console.log("this.props.index5:", this.props.Index5);
      console.log("this.props.Index6:", this.props.Index6);
      console.log("this.props.Index7:", this.props.Index7);
      console.log("this.props.Index8:", this.props.Index8);
      console.log("this.props.Index9:", this.props.Index9);
      console.log("this.props.Index10:", this.props.Index10);
      console.log("this.props.TimeToCross:", this.props.TimeToCross);
      console.log("this.props.TimeToChange:", this.props.TimeToChange);
      console.log("this.props.IsRandom", this.props.IsRandom);

      var numberOfOptions = this.props.NumberOfOptions;
      var isRandom = this.props.IsRandom;

      //for loop to place marquee sayings into the placeholder array for easy access either in order or randomly
      for (var i = 0; i < Number(numberOfOptions); i++) {
        console.log("looping:", i);
        if (i === 0) {
          this.state.marqueeArr.push(this.props.Index0);
          console.log("pushed Index 0=>", this.props.Index0);
        } else if (i === 1) {
          this.state.marqueeArr.push(this.props.Index1);
          console.log("pushed Index 1=>", this.props.Index1);
        } else if (i === 2) {
          this.state.marqueeArr.push(this.props.Index2);
          console.log("pushed Index 2=>", this.props.Index2);
        } else if (i === 3) {
          this.state.marqueeArr.push(this.props.Index3);
          console.log("pushed Index 3=>", this.props.Index3);
        } else if (i === 4) {
          this.state.marqueeArr.push(this.props.Index4);
          console.log("pushed Index 4=>", this.props.Index4);
        } else if (i === 5) {
          this.state.marqueeArr.push(this.props.Index5);
          // console.log("pushed Index 5=>",this.props.Index5);
        } else if (i === 6) {
          this.state.marqueeArr.push(this.props.Index6);
          console.log("pushed Index 6=>", this.props.Index6);
        } else if (i === 7) {
          this.state.marqueeArr.push(this.props.Index7);
          console.log("pushed Index 7=>", this.props.Index7);
        } else if (i === 8) {
          this.state.marqueeArr.push(this.props.Index8);
          console.log("pushed Index 8=>", this.props.Index8);
        } else if (i === 9) {
          this.state.marqueeArr.push(this.props.Index9);
          console.log("pushed Index 9=>", this.props.Index9);
        } else if (i === 10) {
          this.state.marqueeArr.push(this.props.Index10);
          console.log("pushed Index 10=>", this.props.Index10);
        }
      }

      //some things need to be numbers not strings
      var timeToChange = Number(this.props.TimeToChange); //the time in ms that each marquee saying changes

      if (this.props.IsRandom == "true") {
        var changeMarquee = setInterval(this.changeMarqueeI, timeToChange);
      } else {
        var changeMarquee = setInterval(this.changeMarqueeII, timeToChange);
      }
    }
  }, {
    key: 'changeMarqueeI',
    value: function changeMarqueeI() {
      var randomIndex = (Math.random() * (this.props.NumberOfOptions - 1)).toFixed(0);
      console.log(this.state.marqueeArr[randomIndex]);
      this.setState({ marquee: this.state.marqueeArr[randomIndex] });
    }
  }, {
    key: 'changeMarqueeII',
    value: function changeMarqueeII() {
      console.log(this.state.marqueeArr[counter]);
      this.setState({ marquee: this.state.marqueeArr[counter] });
      counter++;
      if (counter > this.props.NumberOfOptions - 1) {
        counter = 0;
      }
    }
  }, {
    key: 'render',
    value: function render() {

      var marquee = this.state.marquee;
      console.log("render:", marquee);

      var styling1 = {
        margin: '0 auto',
        whiteSpace: 'nowrap',
        overflow: 'hidden'
      };

      var styling2 = {
        display: 'inline-block',
        paddingLeft: '100%',
        animation: 'marquee ' + Number(this.props.TimeToCross) + 'ms linear infinite',
        color: this.props.Color
      };

      return _react2.default.createElement(
        'section',
        { id: 'marquee' },
        _react2.default.createElement(
          this.props.Size,
          { style: styling1 },
          _react2.default.createElement(
            'span',
            { style: styling2 },
            marquee
          )
        )
      );
    }
  }]);

  return Marquee;
}(_react2.default.Component);

exports.default = Marquee;

/***/ })
/******/ ]);