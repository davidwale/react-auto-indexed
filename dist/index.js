"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReactAutoIndex = ReactAutoIndex;
var _react = _interopRequireWildcard(require("react"));
require("./styles.css");
var _excluded = ["value", "placeholder", "onChange", "className"];
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function ReactAutoIndex(_ref) {
  var value = _ref.value,
    placeholder = _ref.placeholder,
    onChange = _ref.onChange,
    className = _ref.className,
    rest = _objectWithoutProperties(_ref, _excluded);
  var _useState = (0, _react.useState)({}),
    _useState2 = _slicedToArray(_useState, 2),
    fields = _useState2[0],
    setFields = _useState2[1];
  var handleProjectsChange = function handleProjectsChange(e) {
    var value = e.target.value;
    var lines = value.split('\n');
    var formattedValue = lines.map(function (line) {
      var match = line.match(/^\d+\.\s*(.*)/);
      return match ? match[1] : line;
    });
    setFields(function (prevFields) {
      return _objectSpread(_objectSpread({}, prevFields), {}, {
        projects: formattedValue
      });
    });
    onChange && onChange(formattedValue);
  };
  var handleProjectsBackspace = function handleProjectsBackspace(e) {
    var value = e.target.value;
    var lines = value.split('\n');
    var cursorIndex = e.target.selectionStart;
    var currentLine = 0;
    var characterCount = 0;
    for (var i = 0; i < lines.length; i++) {
      var line = lines[i];
      var lineLength = line.length;
      characterCount += lineLength + 1;
      if (cursorIndex <= characterCount) {
        currentLine = i;
        break;
      }
    }
    var cursorColumn = cursorIndex - characterCount + lines[currentLine].length;
    if (e.key === 'Backspace') {
      var setCursor = 2;
      if (lines[currentLine].trim().length === 3 && lines[currentLine].trim().split(/\s+/).filter(function (word) {
        return word.length > 0;
      }).length === 1) {
        setCursor = 3;
      }
      if (cursorColumn === setCursor && lines[currentLine].trim()) {
        lines.splice(currentLine, 1);
        var newLine = currentLine === 0 ? 0 : currentLine - 1;
        if (newLine === 0 && lines.length === 0) {
          e.target.addEventListener('focus', function () {
            e.target.selectionStart = e.target.selectionEnd = 0;
          });
        } else {
          var previousLineLength = lines[newLine].length;
          var newCursorPosition = Math.min(cursorColumn, previousLineLength);
          e.target.selectionStart = e.target.selectionEnd = characterCount + lines[newLine].length - newCursorPosition;
        }
      }
    }
    e.target.value = lines.join('\n');
  };
  (0, _react.useEffect)(function () {
    if (value && Array.isArray(value)) {
      setFields({
        projects: value
      });
    }
  }, [value]);
  var indexedValue = (fields.projects || []).map(function (desc, index) {
    return "".concat(index + 1, ". ").concat(desc);
  }).join('\n');
  return /*#__PURE__*/_react["default"].createElement("textarea", _extends({
    value: indexedValue,
    onChange: handleProjectsChange,
    onKeyDown: handleProjectsBackspace,
    placeholder: placeholder,
    className: "text-area-style ".concat(className)
  }, rest));
}