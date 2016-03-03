'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var Header = (function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header() {
    _classCallCheck(this, Header);

    _React$Component.apply(this, arguments);
  }

  Header.prototype.render = function render() {
    var headerContent = [];
    var imageAsBackground = this.props.image ? { backgroundImage: 'url(' + this.props.image + ')' } : {};
    var mobileImageAsBackground = this.props.mobileImage ? { backgroundImage: 'url(' + this.props.mobileImage + ')' } : {};
    if (this.props.flyTitle && !this.props.smallMode) {
      headerContent.push(_react2['default'].createElement(
        'h2',
        {
          className: 'header__flytitle',
          itemProp: 'alternativeHeadline',
          key: 'flytitle'
        },
        this.props.flyTitle
      ));
    }
    var title = this.props.title;
    if (this.props.link) {
      title = _react2['default'].createElement(
        'a',
        _extends({}, this.props.link, { className: 'header__title-link' }),
        this.props.title
      );
    }
    headerContent.push(_react2['default'].createElement(
      'h1',
      {
        className: 'header__title',
        itemProp: 'headline',
        key: 'title'
      },
      title
    ));
    if (this.props.text && !this.props.smallMode) {
      headerContent.push(_react2['default'].createElement('div', {
        className: 'header__text',
        itemProp: 'description',
        key: 'text',
        /* eslint-disable react/no-danger */
        dangerouslySetInnerHTML: {
          '__html': this.props.text
        }
      }));
    }
    if (this.props.children) {
      headerContent.push(_react2['default'].createElement(
        'div',
        {
          className: 'header__additional-element',
          key: 'additional'
        },
        this.props.children
      ));
    }
    var text = _react2['default'].createElement(
      'div',
      { className: 'header__content' },
      headerContent
    );

    var className = 'header';
    if (this.props.className) {
      className += ' ' + this.props.className;
    }
    if (this.props.smallMode) {
      className += ' header--small-mode';
    } else {
      className += ' header--large-mode';
    }

    return _react2['default'].createElement(
      'header',
      {
        className: className,
        itemScope: true, itemType: this.props.itemType, itemProp: this.props.itemProp,
        role: 'header',
        style: imageAsBackground
      },
      _react2['default'].createElement(
        'div',
        { className: 'header__mobile-image', style: mobileImageAsBackground },
        _react2['default'].createElement(
          'div',
          { className: 'header__wrapper' },
          text
        )
      )
    );
  };

  _createClass(Header, null, [{
    key: 'propTypes',
    get: function get() {
      return {
        image: _react2['default'].PropTypes.string,
        mobileImage: _react2['default'].PropTypes.string,
        flyTitle: _react2['default'].PropTypes.string,
        smallMode: _react2['default'].PropTypes.bool,
        title: _react2['default'].PropTypes.string.isRequired,
        text: _react2['default'].PropTypes.string,
        itemType: _react2['default'].PropTypes.string,
        itemProp: _react2['default'].PropTypes.string,
        className: _react2['default'].PropTypes.string,
        children: _react2['default'].PropTypes.node,
        link: _react2['default'].PropTypes.object
      };
    }
  }, {
    key: 'defaultProps',
    get: function get() {
      return {
        itemType: 'http://schema.org/Article',
        itemProp: 'article'
      };
    }
  }]);

  return Header;
})(_react2['default'].Component);

exports['default'] = Header;
module.exports = exports['default'];