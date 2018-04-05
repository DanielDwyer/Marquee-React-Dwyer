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

var Marquee = function (_React$Component) {
  _inherits(Marquee, _React$Component);

  function Marquee(props) {
    _classCallCheck(this, Marquee);

    var _this = _possibleConstructorReturn(this, (Marquee.__proto__ || Object.getPrototypeOf(Marquee)).call(this, props));

    _this.state = {
      totalDisplays: 10,
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
    _this.marqueeDisplayChange = _this.marqueeDisplayChange.bind(_this);
    return _this;
  }

  _createClass(Marquee, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.IsRandom === "false") {
        var rand = false;
      } else {
        var rand = true;
      }
      this.setState({
        currentlyDisplayed: this.props.Index0,
        totalDisplays: this.props.NumberOfOptions || 1,
        changeTime: this.props.TimeToChange || 2000,
        crossTime: this.props.TimeToCross || 8000,
        randomDisplayChange: rand || false,
        htmlTag: this.props.Size || 'h3',
        color: this.props.Color || 'purple'
      });
      this.props.Index0 ? this.setState({ display1: this.props.Index0 }) : delete this.state.display1;
      this.props.Index1 ? this.setState({ display2: this.props.Index1 }) : delete this.state.display2;
      this.props.Index2 ? this.setState({ display3: this.props.Index2 }) : delete this.state.display3;
      this.props.Index3 ? this.setState({ display4: this.props.Index3 }) : delete this.state.display4;
      this.props.Index4 ? this.setState({ display5: this.props.Index4 }) : delete this.state.display5;
      this.props.Index5 ? this.setState({ display6: this.props.Index5 }) : delete this.state.display6;
      this.props.Index6 ? this.setState({ display7: this.props.Index6 }) : delete this.state.display7;
      this.props.Index7 ? this.setState({ display8: this.props.Index7 }) : delete this.state.display8;
      this.props.Index8 ? this.setState({ display9: this.props.Index8 }) : delete this.state.display9;
      this.props.Index9 ? this.setState({ display10: this.props.Index9 }) : delete this.state.display10;

      setTimeout(function () {
        this.marqueeDisplayChange();
      }.bind(this), 250);
    }
  }, {
    key: 'marqueeDisplayChange',
    value: function marqueeDisplayChange() {
      if (this.state.randomDisplayChange) {

        var that = this;
        var intervalTime = this.state.changeTime;

        setInterval(function () {
          var randomIndex = Math.floor(Math.random() * that.state.totalDisplays + 1);
          that.setState({
            currentlyDisplayedData: that.state["display" + randomIndex]
          });
        }, intervalTime);
      } else {

        var that = this;
        var intervalTime = this.state.changeTime;

        setInterval(function () {
          var nextIndex = that.state.currentlyDisplayedIndex;
          var updateStateWith = nextIndex + 1;
          if (updateStateWith == Number(that.state.totalDisplays) + 1) {
            updateStateWith = 1;
          } else {
            updateStateWith = nextIndex + 1;
          }
          that.setState({ currentlyDisplayedData: that.state["display" + nextIndex], currentlyDisplayedIndex: updateStateWith });
        }, intervalTime);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var marquee = this.state.currentlyDisplayedData;
      var style1 = { margin: '0 auto', whiteSpace: 'nowrap', overflow: 'hidden' };
      var style2 = { display: 'inline-block', paddingLeft: '100%', animation: 'marquee ' + Number(this.state.crossTime) + 'ms linear infinite', color: this.state.color };

      return _react2.default.createElement(
        'section',
        { id: 'marquee' },
        _react2.default.createElement(
          this.state.htmlTag,
          { style: style1 },
          _react2.default.createElement(
            'span',
            { style: style2 },
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