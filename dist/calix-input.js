"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var CalixInputText = function CalixInputText(_ref) {
  var value = _ref.value,
    onChange = _ref.onChange,
    name = _ref.name,
    placeholder = _ref.placeholder;
  return /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    name: name,
    value: value,
    placeholder: placeholder,
    onChange: onChange
  });
};
var _default = CalixInputText;
exports["default"] = _default;