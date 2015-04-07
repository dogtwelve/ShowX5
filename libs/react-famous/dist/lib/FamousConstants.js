"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var React = _interopRequire(require("react"));

var SURFACE_EVENTS = [{ prop: "onClick", type: "click" }, { prop: "onKeyDown", type: "keydown" }, { prop: "onKeyPress", type: "keypress" }, { prop: "onKeyUp", type: "keyup" }, { prop: "onMouseDown", type: "mousedown" }, { prop: "onMouseMove", type: "mousemove" }, { prop: "onMouseOut", type: "mouseout" }, { prop: "onMouseOver", type: "mouseover" }, { prop: "onMouseUp", type: "mouseup" }, { prop: "onTouchCancel", type: "touchcancel" }, { prop: "onTouchEnd", type: "touchend" }, { prop: "onTouchMove", type: "touchmove" }, { prop: "onTouchStart", type: "touchstart" }];

exports.SURFACE_EVENTS = SURFACE_EVENTS;
var SURFACE_PROPTYPES = {
  eventKey: React.PropTypes.any,
  onClick: React.PropTypes.func,
  onKeyDown: React.PropTypes.func,
  onKeyPress: React.PropTypes.func,
  onKeyUp: React.PropTypes.func,
  onMouseDown: React.PropTypes.func,
  onMouseMove: React.PropTypes.func,
  onMouseOut: React.PropTypes.func,
  onMouseOver: React.PropTypes.func,
  onMouseUp: React.PropTypes.func,
  onTouchCancel: React.PropTypes.func,
  onTouchEnd: React.PropTypes.func,
  onTouchMove: React.PropTypes.func,
  onTouchStart: React.PropTypes.func
};

exports.SURFACE_PROPTYPES = SURFACE_PROPTYPES;
exports["default"] = {
  SURFACE_EVENTS: SURFACE_EVENTS,
  SURFACE_PROPTYPES: SURFACE_PROPTYPES
};