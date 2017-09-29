(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-dom"], factory);
	else if(typeof exports === 'object')
		exports["ReactScrollableListView"] = factory(require("react"), require("react-dom"));
	else
		root["ReactScrollableListView"] = factory(root["react"], root["react-dom"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(1).default;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _templateObject = _taggedTemplateLiteral(['\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  overflow-y: scroll;\n  overflow-x: hidden;\n  opacity: ', ';\n\n  -webkit-overflow-scrolling: touch;\n'], ['\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  overflow-y: scroll;\n  overflow-x: hidden;\n  opacity: ', ';\n\n  -webkit-overflow-scrolling: touch;\n']),
	    _templateObject2 = _taggedTemplateLiteral(['\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n'], ['\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n']),
	    _templateObject3 = _taggedTemplateLiteral(['\n  position: absolute;\n  height: 1px;\n  width: 1px;\n  transform: ', ';\n'], ['\n  position: absolute;\n  height: 1px;\n  width: 1px;\n  transform: ', ';\n']);

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(3);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _propTypes = __webpack_require__(4);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _styledComponents = __webpack_require__(14);

	var _styledComponents2 = _interopRequireDefault(_styledComponents);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

	// Next Features:
	//  * Tombstones

	var ITEM_TYPES = {
	  LIST_ITEM: 'LIST_ITEM',
	  STICKY_ITEM: 'STICKY_ITEM'
	};

	var ITEM_TYPES_VALUES = Object.keys(ITEM_TYPES).map(function (type) {
	  return ITEM_TYPES[type];
	});

	var debounce = function debounce(func, wait, immediate) {
	  var timeout = void 0;
	  return function () {
	    var _this = this;

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    var later = function later() {
	      timeout = null;
	      func.apply(_this, args);
	    };
	    if (immediate && !timeout || !immediate) {
	      clearTimeout(timeout);
	      timeout = setTimeout(later, wait);
	    }
	  };
	};

	var getScrollTop = function getScrollTop(element) {
	  return element.scrollTop;
	};

	var isVariableHeight = function isVariableHeight(item) {
	  return ITEM_TYPES_VALUES.indexOf(item.type.listViewComponentType) < 0 || ITEM_TYPES_VALUES.indexOf(item.type.listViewComponentType) >= 0 && !item.props.height;
	};

	var ListViewComponent = _styledComponents2.default.div(_templateObject, function (_ref) {
	  var styledIsHidden = _ref.styledIsHidden;
	  return styledIsHidden ? '0' : '1';
	});

	var ListViewContentComponent = _styledComponents2.default.div(_templateObject2);

	var ListViewRunwayComponent = _styledComponents2.default.div(_templateObject3, function (_ref2) {
	  var styledRunwayHeight = _ref2.styledRunwayHeight;
	  return 'translateY(' + styledRunwayHeight + 'px)';
	});

	var ListView = function (_React$Component) {
	  _inherits(ListView, _React$Component);

	  function ListView(props) {
	    _classCallCheck(this, ListView);

	    // internal this.props.children representation that includes height of dynamic cells
	    var _this2 = _possibleConstructorReturn(this, (ListView.__proto__ || Object.getPrototypeOf(ListView)).call(this, props));

	    _this2.items = {};
	    _this2.stickyItems = [];
	    _this2.listViewBoundingBox = {};

	    _this2.state = {
	      pendingRequest: false,
	      currentAnchorIndex: 0,
	      lastAttachedItemIndex: 0,
	      lastViewportItemIndex: 0,
	      activeStickyItem: null
	    };
	    return _this2;
	  }

	  _createClass(ListView, [{
	    key: 'setInitialState',
	    value: function setInitialState() {
	      this.setState({
	        pendingRequest: false,
	        currentAnchorIndex: 0,
	        lastAttachedItemIndex: 0
	      });

	      // Item at the top of frame
	      this.anchorItem = { index: 0, offset: 0 };
	      this.anchorScrollTop = 0;

	      this.hasVariableHeightCells = false;
	      if (window && this.onResizeHandler) {
	        window.removeEventListener('resize', this.onResizeHandler);
	        this.onResizeHandler = null;
	      }

	      this.processInitialItems();
	      this.calcuateViewportAndFill();
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.scroller.addEventListener('scroll', this.calcuateViewportAndFill.bind(this));
	      this.debouncedRecalculate = debounce(this.recalculateOffset, 100, true).bind(this);

	      this.setInitialState();

	      if (!Number.isNaN(this.props.initialIndex)) {
	        var child = this.props.children[this.props.initialIndex];
	        if (!child) return;

	        var key = child.key;

	        var item = this.items[key];

	        // If item is not registered yet use best guess
	        var itemOffset = item ? item.offsetTop : this.props.aveCellHeight * this.props.initialIndex;

	        this.scroller.scrollTop = itemOffset + (this.headerOffset || 0);
	      }
	    }
	  }, {
	    key: 'processInitialItems',
	    value: function processInitialItems() {
	      var _props = this.props,
	          runwayItems = _props.runwayItems,
	          runwayItemsOpposite = _props.runwayItemsOpposite;

	      var totalRunwayItems = (runwayItems || 0) + (runwayItemsOpposite || 0);
	      for (var i = 0; i < totalRunwayItems; i++) {
	        this.getItemHeight(i);
	      }
	    }
	  }, {
	    key: 'needsMoreItems',
	    value: function needsMoreItems(lastScreenItem) {
	      var loadMoreItem = this.props.children.length - this.props.loadMoreItemOffset + this.props.runwayItems - 1;

	      return this.props.hasMore && loadMoreItem > 0 && !this.state.pendingRequest && this.state.lastViewportItemIndex < loadMoreItem && lastScreenItem.index + this.props.runwayItems >= loadMoreItem;
	    }
	  }, {
	    key: 'possiblyLoadMore',
	    value: function possiblyLoadMore(lastScreenItem) {
	      var _this3 = this;

	      if (this.needsMoreItems(lastScreenItem)) {
	        var loadMorePromise = this.props.loadMore();
	        if (loadMorePromise instanceof Promise) {
	          this.setState({ pendingRequest: true });
	          loadMorePromise.then(function () {
	            return _this3.setState({ pendingRequest: false });
	          });
	        }
	      }
	    }
	  }, {
	    key: 'calcuateViewportAndFill',
	    value: function calcuateViewportAndFill() {
	      if (!this.scroller) return;
	      var scrollerScrollTop = getScrollTop(this.scroller);
	      var scrollDelta = scrollerScrollTop - this.anchorScrollTop;
	      var isScrollUp = scrollDelta < 0;

	      // Special case, if we get to very top, always scroll to top.
	      if (scrollerScrollTop === 0) {
	        this.anchorItem = { index: 0, offset: 0 };
	      } else {
	        this.anchorItem = this.calculateAnchoredItem(this.anchorItem, scrollDelta);
	      }

	      this.anchorScrollTop = scrollerScrollTop;

	      var lastScreenItem = this.calculateAnchoredItem(this.anchorItem, this.scroller.offsetHeight);
	      if (isScrollUp) {
	        this.fill(this.anchorItem.index, lastScreenItem.index + this.props.runwayItemsOpposite);
	      } else {
	        this.possiblyLoadMore(lastScreenItem);

	        this.fill(this.anchorItem.index, lastScreenItem.index + this.props.runwayItems);
	      }
	    }
	  }, {
	    key: 'attachResizeHandler',
	    value: function attachResizeHandler() {
	      if (!window || this.onResizeHandler) return;
	      this.onResizeHandler = this.onResize.bind(this);
	      window.addEventListener('resize', this.onResizeHandler);
	    }
	  }, {
	    key: 'onResize',
	    value: function onResize() {
	      var _this4 = this;

	      // If we are dealing with sticky items, do a full calc
	      if (this.stickyItems.length) return this.calcuateViewportAndFill();

	      this.props.children.forEach(function (child, i) {
	        var item = _this4.items[child.key];
	        if (item && item.calculated) {
	          var height = item.height,
	              componentInstance = item.componentInstance;

	          if (!componentInstance) return;

	          var newHeight = _reactDom2.default.findDOMNode(componentInstance).getBoundingClientRect().height;

	          item.height = newHeight;
	          if (height !== newHeight) _this4.debouncedRecalculate(i + 1);
	        }
	      });
	    }

	    // This will store the child in this.items if it doesn't exist there

	  }, {
	    key: 'getItemHeight',
	    value: function getItemHeight(index) {
	      var child = this.props.children[index];
	      if (!child) return 0;

	      var item = this.items[child.key];
	      if (!item || item.index !== index) {
	        // If we don't have a child at this index exit right away
	        if (!child) return null;
	        if (!child.key) {
	          // eslint-disable-next-line
	          console.warn('ListView items should contain a unique key for stable results');
	        }

	        var height = child.props.height ? Number(child.props.height) : this.props.aveCellHeight;

	        var isSticky = child.type && child.type.listViewComponentType === ITEM_TYPES.STICKY_ITEM;

	        // Add this child to our internal refrence
	        this.items[child.key] = {
	          height: height,
	          offsetTop: this.getOffsetFor(index),
	          child: child,
	          index: index,
	          isSticky: isSticky
	        };

	        if (isSticky && this.stickyItems.filter(function (_item) {
	          return _item.key === child.key;
	        }).length === 0) {
	          this.stickyItems.push(_extends({
	            key: child.key
	          }, this.items[child.key]));
	        }
	      }

	      return this.items[child.key].height;
	    }
	  }, {
	    key: 'getOffsetFor',
	    value: function getOffsetFor(i) {
	      if (i === 0) return 0;

	      var child = this.props.children[i - 1];
	      if (!child) return 0;

	      var item = this.items[child.key];
	      if (!item || typeof item.height === 'undefined') return 0;

	      return item.offsetTop + item.height;
	    }

	    /**
	     * Calculates the item that should be anchored after scrolling by delta from
	     * the initial anchored item.
	     * @param {{index: number, offset: number}} initialAnchor The initial position
	     *     to scroll from before calculating the new anchor position.
	     * @param {number} delta The offset from the initial item to scroll by.
	     * @return {{index: number, offset: number}} Returns the new item and offset
	     *     scroll should be anchored to.
	     */

	  }, {
	    key: 'calculateAnchoredItem',
	    value: function calculateAnchoredItem(initialAnchor, delta) {
	      if (delta === 0) return initialAnchor;

	      // Determine scroll direction based on unmutated delta
	      var isScrollUp = delta < 0;
	      var i = initialAnchor.index;

	      delta += initialAnchor.offset;

	      /*
	       * |--------|
	       * |--------|
	       * ......................
	       * |--------| <--- i    |
	       * |--------|           L viewport
	       * |--------|           |
	       * ......................
	       * |--------|
	       *
	       */

	      if (isScrollUp) {
	        while (delta < 0 && i > 0) {
	          var nextItemHeight = this.getItemHeight(i - 1) || this.props.aveCellHeight;

	          delta += nextItemHeight;

	          i--;

	          /*
	           * This is a one time compinsation for the header in item 0's offset.
	           * It is one time because this should only happen when it changes from index
	           * 1 to index 0
	           */
	          if (i === 0 && !!this.props.header) delta += this.headerOffset || 0;
	        }
	      } else {
	        var shouldBreakLoop = false;

	        while (!shouldBreakLoop && delta > 0) {
	          var _nextItemHeight = this.getItemHeight(i) || this.props.aveCellHeight;
	          if (i === 0 && !!this.props.header) _nextItemHeight += this.headerOffset || 0;

	          delta -= _nextItemHeight;

	          if (delta <= 0) {
	            /*
	             * If scrolling down AND we are in the middle of the anchor item
	             * continue to report this item and it's offset as the ancor item
	             */
	            delta += _nextItemHeight;
	            shouldBreakLoop = true;
	          } else {
	            /*
	             * If we have MOAR scroll to go, continue the loop and check the
	             * next item
	             */
	            i++;
	          }
	        }
	      }

	      return {
	        index: i,
	        offset: delta
	      };
	    }
	  }, {
	    key: 'recalculateOffset',
	    value: function recalculateOffset() {
	      var startingIndex = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

	      var i = startingIndex;
	      while (this.props.children[i]) {
	        var item = this.items[this.props.children[i].key];
	        if (item) {
	          item.offsetTop = this.getOffsetFor(i);
	          this.getItemHeight(i);
	        }
	        i++;
	      }

	      this.forceUpdate();
	    }
	  }, {
	    key: 'fill',
	    value: function fill(start, end) {
	      var newState = {
	        currentAnchorIndex: Math.max(0, start),
	        lastViewportItemIndex: end,
	        lastAttachedItemIndex: Math.max(end, this.props.runwayItems + this.props.runwayItemsOpposite)
	      };

	      if (this.stickyItems.length) {
	        var stickyItems = this.stickyItems.slice().reverse();
	        var activeStickyItems = stickyItems.filter(function (item) {
	          return item.index <= newState.currentAnchorIndex;
	        });
	        var activeStickyItem = activeStickyItems[0];
	        if (activeStickyItem) {
	          newState.activeStickyItem = activeStickyItem.index;
	        } else {
	          newState.activeStickyItem = null;
	        }
	      }

	      this.setState(newState);
	    }
	  }, {
	    key: 'getRunwayHeight',
	    value: function getRunwayHeight() {
	      var currentItems = this.props.children;

	      // Optimistic runwayHeight
	      var runwayHeight = this.props.aveCellHeight ? currentItems.length * this.props.aveCellHeight : 0;

	      if (currentItems && currentItems.length) {
	        var lastChildItem = currentItems[currentItems.length - 1];
	        var lastChildOffset = this.items[lastChildItem.key] && this.items[lastChildItem.key].offsetTop || 0;
	        runwayHeight = Math.max(lastChildOffset, runwayHeight);
	      }

	      return runwayHeight;
	    }
	  }, {
	    key: 'getItems',
	    value: function getItems() {
	      var _this5 = this;

	      var _state = this.state,
	          currentAnchorIndex = _state.currentAnchorIndex,
	          lastAttachedItemIndex = _state.lastAttachedItemIndex,
	          activeStickyItem = _state.activeStickyItem;


	      var firstAttachedItem = Math.max(currentAnchorIndex - this.props.runwayItems, 0);
	      var isStickyPrepended = activeStickyItem !== null && activeStickyItem < firstAttachedItem;
	      var children = this.props.children.slice(firstAttachedItem, lastAttachedItemIndex);

	      if (isStickyPrepended) {
	        children.unshift(this.props.children[activeStickyItem]);
	      }

	      return children.map(function (item, i) {
	        var adjustedIndex = isStickyPrepended ? i - 1 : i;
	        var currentIndex = isStickyPrepended && i === 0 ? activeStickyItem : adjustedIndex + firstAttachedItem;
	        var previousChild = currentIndex !== 0 ? _this5.props.children[currentIndex - 1] : null;
	        var previousItem = previousChild ? _this5.items[previousChild.key] : null;

	        // Item isn't in memory yet, so put it there
	        if (!_this5.items[item.key]) {
	          if (currentIndex !== 0 && typeof previousItem.index === 'number' && previousItem.index !== currentIndex - 1) {
	            _this5.debouncedRecalculate(Math.min(previousItem.index, currentIndex));
	          }
	          _this5.getItemHeight(currentIndex);
	        }

	        // Make sure item is lined up where we think it should be
	        if (_this5.items[item.key] && previousItem && _this5.items[item.key].offsetTop && previousItem.offsetTop + previousItem.height !== _this5.items[item.key].offsetTop) {
	          _this5.debouncedRecalculate(Math.min(previousItem.index, currentIndex));
	        }

	        var offsetTop = _this5.items[item.key].offsetTop;

	        // extra safe fallback
	        if ((previousItem ? previousItem.offsetTop : 0) > offsetTop) {
	          _this5.debouncedRecalculate(currentIndex - 1);
	        }

	        // If it is a variable height
	        if (isVariableHeight(item)) {
	          // Only add the resizeHandler when needed
	          if (!_this5.hasVariableHeightCells) {
	            _this5.hasVariableHeightCells = true;
	            _this5.attachResizeHandler();
	          }

	          // This will allow us to know when the child is rendered so we can
	          // get it's height and store a ref to the current Component's instance
	          // so on resize we can get it's height and reflow if needed
	          item = _react2.default.cloneElement(item, {
	            ref: function () {
	              var index = currentIndex;
	              var items = _this5.items;
	              var currentHeight = items[item.key].height;

	              return function (itemInstance) {
	                if (!itemInstance) return;

	                var DOMNode = _reactDom2.default.findDOMNode(itemInstance);

	                var newHeight = DOMNode.getBoundingClientRect().height;

	                _this5.items[item.key].height = newHeight;
	                _this5.items[item.key].calculated = true;
	                _this5.items[item.key].componentInstance = itemInstance;

	                // If height is different that first thought, reflow all below it
	                if (currentHeight !== newHeight) _this5.debouncedRecalculate(index + 1);
	              };
	            }()
	          });
	        }

	        var style = {
	          display: 'inline-block',
	          width: '100%',
	          position: 'absolute',
	          transform: 'translateY(' + offsetTop + 'px)' // Positions the items
	        };

	        var currentIsSticky = activeStickyItem === currentIndex && _this5.items[item.key].isSticky;
	        var anchorIsSticky = _this5.anchorItem.index === activeStickyItem;
	        var scrollIsInHeader = _this5.anchorItem.offset - _this5.headerOffset < 0;
	        var isStuck = currentIsSticky && (
	        // This makes sure if anchor is index 0 amke sure we are not in header to stick it
	        !anchorIsSticky || currentIndex !== 0 || !_this5.props.header || !scrollIsInHeader && _this5.headerOffset);

	        if (isStuck) {
	          style.position = 'fixed';
	          style.transform = '';
	          style.top = Math.max(_this5.listViewBoundingBoxInitialTop, 0);
	          style.width = _this5.listViewBoundingBox.width;
	          style.zIndex = 9999;
	        }

	        return _react2.default.createElement(
	          'span',
	          {
	            className: isStuck ? 'is-stuck' : '',
	            key: item.key,
	            style: style,
	            'data-index': currentIndex
	          },
	          item
	        );
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this6 = this;

	      var currentItems = this.getItems();
	      var runwayHeight = this.getRunwayHeight();

	      return _react2.default.createElement(
	        ListViewComponent,
	        {
	          className: 'ListView',
	          styledIsHidden: !Number.isNaN(this.props.initialIndex) && !this.scroller,
	          innerRef: function innerRef(ref) {
	            if (!ref) return;
	            _this6.scroller = _reactDom2.default.findDOMNode(ref);
	          }
	        },
	        _react2.default.createElement(
	          ListViewContentComponent,
	          {
	            className: 'ListView-content',
	            innerRef: function innerRef(ref) {
	              if (!ref) return;
	              // Need to capture stats on the ListView position so we can align items
	              _this6.listViewBoundingBox = _reactDom2.default.findDOMNode(ref).getBoundingClientRect();
	              if (!_this6.listViewBoundingBoxInitialTop) {
	                _this6.listViewBoundingBoxInitialTop = _this6.listViewBoundingBox.top;
	              }
	            }
	          },
	          this.props.header ? _react2.default.cloneElement(this.props.header, {
	            ref: function ref(_ref3) {
	              if (!_ref3) return;

	              var previousHeaderOffset = _this6.headerOffset;
	              // We need to measure Header height
	              _this6.headerOffset = _reactDom2.default.findDOMNode(_ref3).getBoundingClientRect().height;
	              if (previousHeaderOffset !== _this6.headerOffset) _this6.onResize();
	            }
	          }) : null,
	          _react2.default.createElement(
	            ListViewRunwayComponent,
	            { className: 'ListView-runway', styledRunwayHeight: runwayHeight },
	            this.state.pendingRequest && this.props.loadingSpinner ? this.props.loadingSpinner : null
	          ),
	          currentItems
	        )
	      );
	    }
	  }]);

	  return ListView;
	}(_react2.default.Component);

	ListView.propTypes = {
	  aveCellHeight: _propTypes2.default.number,
	  children: _propTypes2.default.oneOfType([_propTypes2.default.element, _propTypes2.default.arrayOf(_propTypes2.default.element)]),
	  // Has more Items to load?
	  hasMore: _propTypes2.default.bool,
	  header: _propTypes2.default.oneOfType([_propTypes2.default.element, _propTypes2.default.arrayOf(_propTypes2.default.element)]),
	  loadingSpinner: _propTypes2.default.oneOfType([_propTypes2.default.element, _propTypes2.default.arrayOf(_propTypes2.default.element)]),
	  // Function called when scroll nears bottom
	  // OPTIONAL: can return a promise to control request flow and show loading
	  loadMore: _propTypes2.default.func,
	  // Number of items from the end of the list to call laodMore at
	  loadMoreItemOffset: _propTypes2.default.number,
	  // Number of items to instantiate beyond current view in the scroll direction.
	  runwayItems: _propTypes2.default.number,
	  // Number of items to instantiate beyond current view in the opposite direction.
	  runwayItemsOpposite: _propTypes2.default.number,
	  // Index to start as anchor item
	  initialIndex: _propTypes2.default.number
	};

	ListView.defaultProps = {
	  children: [],
	  runwayItems: 7,
	  runwayItemsOpposite: 5,
	  loadMore: function loadMore() {
	    console.warn('List View `hasMore` content, but loadMore is not provided');
	  },
	  loadMoreItemOffset: 5,
	  hasMore: false
	};

	var createItemWithType = function createItemWithType(type) {
	  var ItemShell = function (_React$Component2) {
	    _inherits(ItemShell, _React$Component2);

	    function ItemShell() {
	      _classCallCheck(this, ItemShell);

	      return _possibleConstructorReturn(this, (ItemShell.__proto__ || Object.getPrototypeOf(ItemShell)).apply(this, arguments));
	    }

	    _createClass(ItemShell, [{
	      key: 'render',
	      value: function render() {
	        return this.props.children;
	      }
	    }]);

	    return ItemShell;
	  }(_react2.default.Component);

	  ItemShell.listViewComponentType = type;
	  ItemShell.propTypes = {
	    children: _propTypes2.default.oneOfType([_propTypes2.default.element, _propTypes2.default.arrayOf(_propTypes2.default.element)])
	  };

	  return ItemShell;
	};

	var ListViewItem = createItemWithType(ITEM_TYPES.LIST_ITEM);
	var ListViewStickyItem = createItemWithType(ITEM_TYPES.STICKY_ITEM);

	exports.default = {
	  ListView: ListView,
	  ListViewItem: ListViewItem,
	  ListViewStickyItem: ListViewStickyItem
	};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	if (process.env.NODE_ENV !== 'production') {
	  var REACT_ELEMENT_TYPE = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 0xeac7;

	  var isValidElement = function isValidElement(object) {
	    return (typeof object === 'undefined' ? 'undefined' : _typeof(object)) === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
	  };

	  // By explicitly using `prop-types` you are opting into new development behavior.
	  // http://fb.me/prop-types-in-prod
	  var throwOnDirectAccess = true;
	  module.exports = __webpack_require__(6)(isValidElement, throwOnDirectAccess);
	} else {
	  // By explicitly using `prop-types` you are opting into new production behavior.
	  // http://fb.me/prop-types-in-prod
	  module.exports = __webpack_require__(13)();
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	'use strict';

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout() {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	})();
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch (e) {
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch (e) {
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e) {
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e) {
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while (len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	process.prependListener = noop;
	process.prependOnceListener = noop;

	process.listeners = function (name) {
	    return [];
	};

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () {
	    return '/';
	};
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function () {
	    return 0;
	};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var emptyFunction = __webpack_require__(7);
	var invariant = __webpack_require__(8);
	var warning = __webpack_require__(9);
	var assign = __webpack_require__(10);

	var ReactPropTypesSecret = __webpack_require__(11);
	var checkPropTypes = __webpack_require__(12);

	module.exports = function (isValidElement, throwOnDirectAccess) {
	  /* global Symbol */
	  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
	  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

	  /**
	   * Returns the iterator method function contained on the iterable object.
	   *
	   * Be sure to invoke the function with the iterable as context:
	   *
	   *     var iteratorFn = getIteratorFn(myIterable);
	   *     if (iteratorFn) {
	   *       var iterator = iteratorFn.call(myIterable);
	   *       ...
	   *     }
	   *
	   * @param {?object} maybeIterable
	   * @return {?function}
	   */
	  function getIteratorFn(maybeIterable) {
	    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
	    if (typeof iteratorFn === 'function') {
	      return iteratorFn;
	    }
	  }

	  /**
	   * Collection of methods that allow declaration and validation of props that are
	   * supplied to React components. Example usage:
	   *
	   *   var Props = require('ReactPropTypes');
	   *   var MyArticle = React.createClass({
	   *     propTypes: {
	   *       // An optional string prop named "description".
	   *       description: Props.string,
	   *
	   *       // A required enum prop named "category".
	   *       category: Props.oneOf(['News','Photos']).isRequired,
	   *
	   *       // A prop named "dialog" that requires an instance of Dialog.
	   *       dialog: Props.instanceOf(Dialog).isRequired
	   *     },
	   *     render: function() { ... }
	   *   });
	   *
	   * A more formal specification of how these methods are used:
	   *
	   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
	   *   decl := ReactPropTypes.{type}(.isRequired)?
	   *
	   * Each and every declaration produces a function with the same signature. This
	   * allows the creation of custom validation functions. For example:
	   *
	   *  var MyLink = React.createClass({
	   *    propTypes: {
	   *      // An optional string or URI prop named "href".
	   *      href: function(props, propName, componentName) {
	   *        var propValue = props[propName];
	   *        if (propValue != null && typeof propValue !== 'string' &&
	   *            !(propValue instanceof URI)) {
	   *          return new Error(
	   *            'Expected a string or an URI for ' + propName + ' in ' +
	   *            componentName
	   *          );
	   *        }
	   *      }
	   *    },
	   *    render: function() {...}
	   *  });
	   *
	   * @internal
	   */

	  var ANONYMOUS = '<<anonymous>>';

	  // Important!
	  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
	  var ReactPropTypes = {
	    array: createPrimitiveTypeChecker('array'),
	    bool: createPrimitiveTypeChecker('boolean'),
	    func: createPrimitiveTypeChecker('function'),
	    number: createPrimitiveTypeChecker('number'),
	    object: createPrimitiveTypeChecker('object'),
	    string: createPrimitiveTypeChecker('string'),
	    symbol: createPrimitiveTypeChecker('symbol'),

	    any: createAnyTypeChecker(),
	    arrayOf: createArrayOfTypeChecker,
	    element: createElementTypeChecker(),
	    instanceOf: createInstanceTypeChecker,
	    node: createNodeChecker(),
	    objectOf: createObjectOfTypeChecker,
	    oneOf: createEnumTypeChecker,
	    oneOfType: createUnionTypeChecker,
	    shape: createShapeTypeChecker,
	    exact: createStrictShapeTypeChecker
	  };

	  /**
	   * inlined Object.is polyfill to avoid requiring consumers ship their own
	   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	   */
	  /*eslint-disable no-self-compare*/
	  function is(x, y) {
	    // SameValue algorithm
	    if (x === y) {
	      // Steps 1-5, 7-10
	      // Steps 6.b-6.e: +0 != -0
	      return x !== 0 || 1 / x === 1 / y;
	    } else {
	      // Step 6.a: NaN == NaN
	      return x !== x && y !== y;
	    }
	  }
	  /*eslint-enable no-self-compare*/

	  /**
	   * We use an Error-like object for backward compatibility as people may call
	   * PropTypes directly and inspect their output. However, we don't use real
	   * Errors anymore. We don't inspect their stack anyway, and creating them
	   * is prohibitively expensive if they are created too often, such as what
	   * happens in oneOfType() for any type before the one that matched.
	   */
	  function PropTypeError(message) {
	    this.message = message;
	    this.stack = '';
	  }
	  // Make `instanceof Error` still work for returned errors.
	  PropTypeError.prototype = Error.prototype;

	  function createChainableTypeChecker(validate) {
	    if (process.env.NODE_ENV !== 'production') {
	      var manualPropTypeCallCache = {};
	      var manualPropTypeWarningCount = 0;
	    }
	    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
	      componentName = componentName || ANONYMOUS;
	      propFullName = propFullName || propName;

	      if (secret !== ReactPropTypesSecret) {
	        if (throwOnDirectAccess) {
	          // New behavior only for users of `prop-types` package
	          invariant(false, 'Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use `PropTypes.checkPropTypes()` to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
	        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
	          // Old behavior for people using React.PropTypes
	          var cacheKey = componentName + ':' + propName;
	          if (!manualPropTypeCallCache[cacheKey] &&
	          // Avoid spamming the console because they are often not actionable except for lib authors
	          manualPropTypeWarningCount < 3) {
	            warning(false, 'You are manually calling a React.PropTypes validation ' + 'function for the `%s` prop on `%s`. This is deprecated ' + 'and will throw in the standalone `prop-types` package. ' + 'You may be seeing this warning due to a third-party PropTypes ' + 'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.', propFullName, componentName);
	            manualPropTypeCallCache[cacheKey] = true;
	            manualPropTypeWarningCount++;
	          }
	        }
	      }
	      if (props[propName] == null) {
	        if (isRequired) {
	          if (props[propName] === null) {
	            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
	          }
	          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
	        }
	        return null;
	      } else {
	        return validate(props, propName, componentName, location, propFullName);
	      }
	    }

	    var chainedCheckType = checkType.bind(null, false);
	    chainedCheckType.isRequired = checkType.bind(null, true);

	    return chainedCheckType;
	  }

	  function createPrimitiveTypeChecker(expectedType) {
	    function validate(props, propName, componentName, location, propFullName, secret) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== expectedType) {
	        // `propValue` being instance of, say, date/regexp, pass the 'object'
	        // check, but we can offer a more precise error message here rather than
	        // 'of type `object`'.
	        var preciseType = getPreciseType(propValue);

	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createAnyTypeChecker() {
	    return createChainableTypeChecker(emptyFunction.thatReturnsNull);
	  }

	  function createArrayOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
	      }
	      var propValue = props[propName];
	      if (!Array.isArray(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
	      }
	      for (var i = 0; i < propValue.length; i++) {
	        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
	        if (error instanceof Error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createElementTypeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      if (!isValidElement(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createInstanceTypeChecker(expectedClass) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!(props[propName] instanceof expectedClass)) {
	        var expectedClassName = expectedClass.name || ANONYMOUS;
	        var actualClassName = getClassName(props[propName]);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createEnumTypeChecker(expectedValues) {
	    if (!Array.isArray(expectedValues)) {
	      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
	      return emptyFunction.thatReturnsNull;
	    }

	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      for (var i = 0; i < expectedValues.length; i++) {
	        if (is(propValue, expectedValues[i])) {
	          return null;
	        }
	      }

	      var valuesString = JSON.stringify(expectedValues);
	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createObjectOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
	      }
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
	      }
	      for (var key in propValue) {
	        if (propValue.hasOwnProperty(key)) {
	          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	          if (error instanceof Error) {
	            return error;
	          }
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createUnionTypeChecker(arrayOfTypeCheckers) {
	    if (!Array.isArray(arrayOfTypeCheckers)) {
	      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
	      return emptyFunction.thatReturnsNull;
	    }

	    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	      var checker = arrayOfTypeCheckers[i];
	      if (typeof checker !== 'function') {
	        warning(false, 'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' + 'received %s at index %s.', getPostfixForTypeWarning(checker), i);
	        return emptyFunction.thatReturnsNull;
	      }
	    }

	    function validate(props, propName, componentName, location, propFullName) {
	      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	        var checker = arrayOfTypeCheckers[i];
	        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
	          return null;
	        }
	      }

	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createNodeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!isNode(props[propName])) {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      for (var key in shapeTypes) {
	        var checker = shapeTypes[key];
	        if (!checker) {
	          continue;
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createStrictShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      // We need to check all keys in case some are required but missing from
	      // props.
	      var allKeys = assign({}, props[propName], shapeTypes);
	      for (var key in allKeys) {
	        var checker = shapeTypes[key];
	        if (!checker) {
	          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' + '\nBad object: ' + JSON.stringify(props[propName], null, '  ') + '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  '));
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }

	    return createChainableTypeChecker(validate);
	  }

	  function isNode(propValue) {
	    switch (typeof propValue === 'undefined' ? 'undefined' : _typeof(propValue)) {
	      case 'number':
	      case 'string':
	      case 'undefined':
	        return true;
	      case 'boolean':
	        return !propValue;
	      case 'object':
	        if (Array.isArray(propValue)) {
	          return propValue.every(isNode);
	        }
	        if (propValue === null || isValidElement(propValue)) {
	          return true;
	        }

	        var iteratorFn = getIteratorFn(propValue);
	        if (iteratorFn) {
	          var iterator = iteratorFn.call(propValue);
	          var step;
	          if (iteratorFn !== propValue.entries) {
	            while (!(step = iterator.next()).done) {
	              if (!isNode(step.value)) {
	                return false;
	              }
	            }
	          } else {
	            // Iterator will provide entry [k,v] tuples rather than values.
	            while (!(step = iterator.next()).done) {
	              var entry = step.value;
	              if (entry) {
	                if (!isNode(entry[1])) {
	                  return false;
	                }
	              }
	            }
	          }
	        } else {
	          return false;
	        }

	        return true;
	      default:
	        return false;
	    }
	  }

	  function isSymbol(propType, propValue) {
	    // Native Symbol.
	    if (propType === 'symbol') {
	      return true;
	    }

	    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
	    if (propValue['@@toStringTag'] === 'Symbol') {
	      return true;
	    }

	    // Fallback for non-spec compliant Symbols which are polyfilled.
	    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
	      return true;
	    }

	    return false;
	  }

	  // Equivalent of `typeof` but with special handling for array and regexp.
	  function getPropType(propValue) {
	    var propType = typeof propValue === 'undefined' ? 'undefined' : _typeof(propValue);
	    if (Array.isArray(propValue)) {
	      return 'array';
	    }
	    if (propValue instanceof RegExp) {
	      // Old webkits (at least until Android 4.0) return 'function' rather than
	      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
	      // passes PropTypes.object.
	      return 'object';
	    }
	    if (isSymbol(propType, propValue)) {
	      return 'symbol';
	    }
	    return propType;
	  }

	  // This handles more types than `getPropType`. Only used for error messages.
	  // See `createPrimitiveTypeChecker`.
	  function getPreciseType(propValue) {
	    if (typeof propValue === 'undefined' || propValue === null) {
	      return '' + propValue;
	    }
	    var propType = getPropType(propValue);
	    if (propType === 'object') {
	      if (propValue instanceof Date) {
	        return 'date';
	      } else if (propValue instanceof RegExp) {
	        return 'regexp';
	      }
	    }
	    return propType;
	  }

	  // Returns a string that is postfixed to a warning about an invalid type.
	  // For example, "undefined" or "of type array"
	  function getPostfixForTypeWarning(value) {
	    var type = getPreciseType(value);
	    switch (type) {
	      case 'array':
	      case 'object':
	        return 'an ' + type;
	      case 'boolean':
	      case 'date':
	      case 'regexp':
	        return 'a ' + type;
	      default:
	        return type;
	    }
	  }

	  // Returns class name of the object, if any.
	  function getClassName(propValue) {
	    if (!propValue.constructor || !propValue.constructor.name) {
	      return ANONYMOUS;
	    }
	    return propValue.constructor.name;
	  }

	  ReactPropTypes.checkPropTypes = checkPropTypes;
	  ReactPropTypes.PropTypes = ReactPropTypes;

	  return ReactPropTypes;
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	"use strict";

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */

	function makeEmptyFunction(arg) {
	  return function () {
	    return arg;
	  };
	}

	/**
	 * This function accepts and discards inputs; it has no side effects. This is
	 * primarily useful idiomatically for overridable function endpoints which
	 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
	 */
	var emptyFunction = function emptyFunction() {};

	emptyFunction.thatReturns = makeEmptyFunction;
	emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
	emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
	emptyFunction.thatReturnsNull = makeEmptyFunction(null);
	emptyFunction.thatReturnsThis = function () {
	  return this;
	};
	emptyFunction.thatReturnsArgument = function (arg) {
	  return arg;
	};

	module.exports = emptyFunction;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */

	'use strict';

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	var validateFormat = function validateFormat(format) {};

	if (process.env.NODE_ENV !== 'production') {
	  validateFormat = function validateFormat(format) {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  };
	}

	function invariant(condition, format, a, b, c, d, e, f) {
	  validateFormat(format);

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(format.replace(/%s/g, function () {
	        return args[argIndex++];
	      }));
	      error.name = 'Invariant Violation';
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	}

	module.exports = invariant;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2014-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */

	'use strict';

	var emptyFunction = __webpack_require__(7);

	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */

	var warning = emptyFunction;

	if (process.env.NODE_ENV !== 'production') {
	  var printWarning = function printWarning(format) {
	    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	      args[_key - 1] = arguments[_key];
	    }

	    var argIndex = 0;
	    var message = 'Warning: ' + format.replace(/%s/g, function () {
	      return args[argIndex++];
	    });
	    if (typeof console !== 'undefined') {
	      console.error(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) {}
	  };

	  warning = function warning(condition, format) {
	    if (format === undefined) {
	      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
	    }

	    if (format.indexOf('Failed Composite propType: ') === 0) {
	      return; // Ignore CompositeComponent proptype check.
	    }

	    if (!condition) {
	      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
	        args[_key2 - 2] = arguments[_key2];
	      }

	      printWarning.apply(undefined, [format].concat(args));
	    }
	  };
	}

	module.exports = warning;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),
/* 10 */
/***/ (function(module, exports) {

	/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/

	'use strict';
	/* eslint-disable no-unused-vars */

	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}

			// Detect buggy property enumeration order in older V8 versions.

			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc'); // eslint-disable-line no-new-wrappers
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
				return false;
			}

			return true;
		} catch (err) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}

	module.exports = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;

		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);

			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}

			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}

		return to;
	};

/***/ }),
/* 11 */
/***/ (function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';

	var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

	module.exports = ReactPropTypesSecret;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	if (process.env.NODE_ENV !== 'production') {
	  var invariant = __webpack_require__(8);
	  var warning = __webpack_require__(9);
	  var ReactPropTypesSecret = __webpack_require__(11);
	  var loggedTypeFailures = {};
	}

	/**
	 * Assert that the values match with the type specs.
	 * Error messages are memorized and will only be shown once.
	 *
	 * @param {object} typeSpecs Map of name to a ReactPropType
	 * @param {object} values Runtime values that need to be type-checked
	 * @param {string} location e.g. "prop", "context", "child context"
	 * @param {string} componentName Name of the component for error messages.
	 * @param {?Function} getStack Returns the component stack.
	 * @private
	 */
	function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
	  if (process.env.NODE_ENV !== 'production') {
	    for (var typeSpecName in typeSpecs) {
	      if (typeSpecs.hasOwnProperty(typeSpecName)) {
	        var error;
	        // Prop type validation may throw. In case they do, we don't want to
	        // fail the render phase where it didn't fail before. So we log it.
	        // After these have been cleaned up, we'll let them throw.
	        try {
	          // This is intentionally an invariant that gets caught. It's the same
	          // behavior as without this statement except with a better message.
	          invariant(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'the `prop-types` package, but received `%s`.', componentName || 'React class', location, typeSpecName, _typeof(typeSpecs[typeSpecName]));
	          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
	        } catch (ex) {
	          error = ex;
	        }
	        warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error === 'undefined' ? 'undefined' : _typeof(error));
	        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
	          // Only monitor this failure once because there tends to be a lot of the
	          // same error.
	          loggedTypeFailures[error.message] = true;

	          var stack = getStack ? getStack() : '';

	          warning(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
	        }
	      }
	    }
	  }
	}

	module.exports = checkPropTypes;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';

	var emptyFunction = __webpack_require__(7);
	var invariant = __webpack_require__(8);
	var ReactPropTypesSecret = __webpack_require__(11);

	module.exports = function () {
	  function shim(props, propName, componentName, location, propFullName, secret) {
	    if (secret === ReactPropTypesSecret) {
	      // It is still safe when called from React.
	      return;
	    }
	    invariant(false, 'Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use PropTypes.checkPropTypes() to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
	  };
	  shim.isRequired = shim;
	  function getShim() {
	    return shim;
	  };
	  // Important!
	  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
	  var ReactPropTypes = {
	    array: shim,
	    bool: shim,
	    func: shim,
	    number: shim,
	    object: shim,
	    string: shim,
	    symbol: shim,

	    any: shim,
	    arrayOf: getShim,
	    element: shim,
	    instanceOf: getShim,
	    node: shim,
	    objectOf: getShim,
	    oneOf: getShim,
	    oneOfType: getShim,
	    shape: getShim,
	    exact: getShim
	  };

	  ReactPropTypes.checkPropTypes = emptyFunction;
	  ReactPropTypes.PropTypes = ReactPropTypes;

	  return ReactPropTypes;
	};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.withTheme = exports.ThemeProvider = exports.injectGlobal = exports.keyframes = exports.css = undefined;

	var _generateAlphabeticName = __webpack_require__(15);

	var _generateAlphabeticName2 = _interopRequireDefault(_generateAlphabeticName);

	var _css = __webpack_require__(16);

	var _css2 = _interopRequireDefault(_css);

	var _injectGlobal = __webpack_require__(24);

	var _injectGlobal2 = _interopRequireDefault(_injectGlobal);

	var _StyledComponent = __webpack_require__(74);

	var _StyledComponent2 = _interopRequireDefault(_StyledComponent);

	var _styled2 = __webpack_require__(81);

	var _styled3 = _interopRequireDefault(_styled2);

	var _keyframes2 = __webpack_require__(83);

	var _keyframes3 = _interopRequireDefault(_keyframes2);

	var _ComponentStyle2 = __webpack_require__(85);

	var _ComponentStyle3 = _interopRequireDefault(_ComponentStyle2);

	var _ThemeProvider = __webpack_require__(78);

	var _ThemeProvider2 = _interopRequireDefault(_ThemeProvider);

	var _withTheme = __webpack_require__(86);

	var _withTheme2 = _interopRequireDefault(_withTheme);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	/* Instantiate singletons */

	/* Import components */

	/* Import singleton constructors */
	var keyframes = (0, _keyframes3.default)(_generateAlphabeticName2.default);

	/* Import Higher Order Components */

	/* Import singletons */

	var styled = (0, _styled3.default)((0, _StyledComponent2.default)((0, _ComponentStyle3.default)(_generateAlphabeticName2.default)));

	/* Export everything */
	exports.default = styled;
	exports.css = _css2.default;
	exports.keyframes = keyframes;
	exports.injectGlobal = _injectGlobal2.default;
	exports.ThemeProvider = _ThemeProvider2.default;
	exports.withTheme = _withTheme2.default;

/***/ }),
/* 15 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

	/* Some high number, usually 9-digit base-10. Map it to base-😎 */
	var generateAlphabeticName = function generateAlphabeticName(code) {
	  var lastDigit = chars[code % chars.length];
	  return code > chars.length ? '' + generateAlphabeticName(Math.floor(code / chars.length)) + lastDigit : lastDigit;
	};

	exports.default = generateAlphabeticName;
	module.exports = exports['default'];

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _interleave = __webpack_require__(17);

	var _interleave2 = _interopRequireDefault(_interleave);

	var _flatten = __webpack_require__(19);

	var _flatten2 = _interopRequireDefault(_flatten);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	var babelPluginFlowReactPropTypes_proptype_RuleSet = __webpack_require__(18).babelPluginFlowReactPropTypes_proptype_RuleSet || __webpack_require__(4).any;

	var babelPluginFlowReactPropTypes_proptype_Interpolation = __webpack_require__(18).babelPluginFlowReactPropTypes_proptype_Interpolation || __webpack_require__(4).any;

	exports.default = function (strings) {
	  for (var _len = arguments.length, interpolations = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	    interpolations[_key - 1] = arguments[_key];
	  }

	  return (0, _flatten2.default)((0, _interleave2.default)(strings, interpolations));
	};

	module.exports = exports['default'];

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var babelPluginFlowReactPropTypes_proptype_Interpolation = __webpack_require__(18).babelPluginFlowReactPropTypes_proptype_Interpolation || __webpack_require__(4).any;

	exports.default = function (strings, interpolations) {
	  return interpolations.reduce(function (array, interp, i) {
	    return array.concat(interp, strings[i + 1]);
	  }, [strings[0]]);
	};

	module.exports = exports['default'];

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	/* todo: I want this to actually be an array of Function | string but that causes errors */

	if (true) Object.defineProperty(exports, "babelPluginFlowReactPropTypes_proptype_GlamorRule", {
	  value: __webpack_require__(4).shape({
	    cssText: __webpack_require__(4).string.isRequired
	  })
	});

	/* eslint-disable no-undef */

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.objToCss = undefined;

	var _hyphenateStyleName = __webpack_require__(20);

	var _hyphenateStyleName2 = _interopRequireDefault(_hyphenateStyleName);

	var _isPlainObject = __webpack_require__(22);

	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	function _toConsumableArray(arr) {
	  if (Array.isArray(arr)) {
	    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
	      arr2[i] = arr[i];
	    }return arr2;
	  } else {
	    return Array.from(arr);
	  }
	}

	var babelPluginFlowReactPropTypes_proptype_Interpolation = __webpack_require__(18).babelPluginFlowReactPropTypes_proptype_Interpolation || __webpack_require__(4).any;

	var objToCss = exports.objToCss = function objToCss(obj, prevKey) {
	  var css = Object.keys(obj).map(function (key) {
	    if ((0, _isPlainObject2.default)(obj[key])) return objToCss(obj[key], key);
	    return (0, _hyphenateStyleName2.default)(key) + ': ' + obj[key] + ';';
	  }).join(' ');
	  return prevKey ? prevKey + ' {\n  ' + css + '\n}' : css;
	};

	var flatten = function flatten(chunks, executionContext) {
	  return chunks.reduce(function (ruleSet, chunk) {
	    /* Remove falsey values */
	    if (chunk === undefined || chunk === null || chunk === false || chunk === '') return ruleSet;
	    /* Flatten ruleSet */
	    if (Array.isArray(chunk)) return [].concat(_toConsumableArray(ruleSet), _toConsumableArray(flatten(chunk, executionContext)));
	    /* Either execute or defer the function */
	    if (typeof chunk === 'function') {
	      return executionContext ? ruleSet.concat.apply(ruleSet, _toConsumableArray(flatten([chunk(executionContext)], executionContext))) : ruleSet.concat(chunk);
	    }

	    /* Handle objects */
	    // $FlowFixMe have to add %checks somehow to isPlainObject
	    return ruleSet.concat((0, _isPlainObject2.default)(chunk) ? objToCss(chunk) : chunk.toString());
	  }, []);
	};

	exports.default = flatten;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * @typechecks
	 */

	'use strict';

	var hyphenate = __webpack_require__(21);

	var msPattern = /^ms-/;

	/**
	 * Hyphenates a camelcased CSS property name, for example:
	 *
	 *   > hyphenateStyleName('backgroundColor')
	 *   < "background-color"
	 *   > hyphenateStyleName('MozTransition')
	 *   < "-moz-transition"
	 *   > hyphenateStyleName('msTransition')
	 *   < "-ms-transition"
	 *
	 * As Modernizr suggests (http://modernizr.com/docs/#prefixed), an `ms` prefix
	 * is converted to `-ms-`.
	 *
	 * @param {string} string
	 * @return {string}
	 */
	function hyphenateStyleName(string) {
	  return hyphenate(string).replace(msPattern, '-ms-');
	}

	module.exports = hyphenateStyleName;

/***/ }),
/* 21 */
/***/ (function(module, exports) {

	'use strict';

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * @typechecks
	 */

	var _uppercasePattern = /([A-Z])/g;

	/**
	 * Hyphenates a camelcased string, for example:
	 *
	 *   > hyphenate('backgroundColor')
	 *   < "background-color"
	 *
	 * For CSS style names, use `hyphenateStyleName` instead which works properly
	 * with all vendor prefixes, including `ms`.
	 *
	 * @param {string} string
	 * @return {string}
	 */
	function hyphenate(string) {
	  return string.replace(_uppercasePattern, '-$1').toLowerCase();
	}

	module.exports = hyphenate;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	/*!
	 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
	 *
	 * Copyright (c) 2014-2017, Jon Schlinkert.
	 * Released under the MIT License.
	 */

	'use strict';

	var isObject = __webpack_require__(23);

	function isObjectObject(o) {
	  return isObject(o) === true && Object.prototype.toString.call(o) === '[object Object]';
	}

	module.exports = function isPlainObject(o) {
	  var ctor, prot;

	  if (isObjectObject(o) === false) return false;

	  // If has modified constructor
	  ctor = o.constructor;
	  if (typeof ctor !== 'function') return false;

	  // If has modified prototype
	  prot = ctor.prototype;
	  if (isObjectObject(prot) === false) return false;

	  // If constructor does not have an Object-specific method
	  if (prot.hasOwnProperty('isPrototypeOf') === false) {
	    return false;
	  }

	  // Most likely a plain Object
	  return true;
	};

/***/ }),
/* 23 */
/***/ (function(module, exports) {

	/*!
	 * isobject <https://github.com/jonschlinkert/isobject>
	 *
	 * Copyright (c) 2014-2017, Jon Schlinkert.
	 * Released under the MIT License.
	 */

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	module.exports = function isObject(val) {
	  return val != null && (typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object' && Array.isArray(val) === false;
	};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _css = __webpack_require__(16);

	var _css2 = _interopRequireDefault(_css);

	var _GlobalStyle = __webpack_require__(25);

	var _GlobalStyle2 = _interopRequireDefault(_GlobalStyle);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	var babelPluginFlowReactPropTypes_proptype_Interpolation = __webpack_require__(18).babelPluginFlowReactPropTypes_proptype_Interpolation || __webpack_require__(4).any;

	var injectGlobal = function injectGlobal(strings) {
	  for (var _len = arguments.length, interpolations = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	    interpolations[_key - 1] = arguments[_key];
	  }

	  var globalStyle = new _GlobalStyle2.default(_css2.default.apply(undefined, [strings].concat(interpolations)));
	  globalStyle.generateAndInject();
	};

	exports.default = injectGlobal;
	module.exports = exports['default'];

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();

	var _parse = __webpack_require__(26);

	var _parse2 = _interopRequireDefault(_parse);

	var _autoprefix = __webpack_require__(50);

	var _autoprefix2 = _interopRequireDefault(_autoprefix);

	var _postcssNested = __webpack_require__(71);

	var _postcssNested2 = _interopRequireDefault(_postcssNested);

	var _flatten = __webpack_require__(19);

	var _flatten2 = _interopRequireDefault(_flatten);

	var _StyleSheet = __webpack_require__(72);

	var _StyleSheet2 = _interopRequireDefault(_StyleSheet);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	var babelPluginFlowReactPropTypes_proptype_RuleSet = __webpack_require__(18).babelPluginFlowReactPropTypes_proptype_RuleSet || __webpack_require__(4).any;

	var ComponentStyle = function () {
	  function ComponentStyle(rules, selector) {
	    _classCallCheck(this, ComponentStyle);

	    this.rules = rules;
	    this.selector = selector;
	  }

	  _createClass(ComponentStyle, [{
	    key: 'generateAndInject',
	    value: function generateAndInject() {
	      if (!_StyleSheet2.default.injected) _StyleSheet2.default.inject();
	      var flatCSS = (0, _flatten2.default)(this.rules).join('');
	      if (this.selector) {
	        flatCSS = this.selector + ' {' + flatCSS + '\n}';
	      }
	      var root = (0, _parse2.default)(flatCSS);
	      (0, _postcssNested2.default)(root);
	      (0, _autoprefix2.default)(root);
	      _StyleSheet2.default.insert(root.toResult().css, { global: true });
	    }
	  }]);

	  return ComponentStyle;
	}();

	exports.default = ComponentStyle;
	module.exports = exports['default'];

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = safeParse;

	var _input = __webpack_require__(27);

	var _input2 = _interopRequireDefault(_input);

	var _safeParser = __webpack_require__(49);

	var _safeParser2 = _interopRequireDefault(_safeParser);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	function safeParse(css, opts) {
	    var input = new _input2.default(css, opts);

	    var parser = new _safeParser2.default(input);
	    parser.tokenize();
	    parser.loop();

	    return parser.root;
	}
	module.exports = exports['default'];

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	}(); // break cyclical dependency deadlock – #87

	__webpack_require__(28);

	var _cssSyntaxError = __webpack_require__(37);

	var _cssSyntaxError2 = _interopRequireDefault(_cssSyntaxError);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}

	// import PreviousMap    from './previous-map';

	var sequence = 0;

	/**
	 * @typedef  {object} filePosition
	 * @property {string} file   - path to file
	 * @property {number} line   - source line in file
	 * @property {number} column - source column in file
	 */

	/**
	 * Represents the source CSS.
	 *
	 * @example
	 * const root  = postcss.parse(css, { from: file });
	 * const input = root.source.input;
	 */

	var Input = function () {

	    /**
	     * @param {string} css    - input CSS source
	     * @param {object} [opts] - {@link Processor#process} options
	     */
	    function Input(css) {
	        var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	        _classCallCheck(this, Input);

	        /**
	         * @member {string} - input CSS source
	         *
	         * @example
	         * const input = postcss.parse('a{}', { from: file }).input;
	         * input.css //=> "a{}";
	         */
	        this.css = css.toString();

	        if (this.css[0] === "\uFEFF" || this.css[0] === "\uFFFE") {
	            this.css = this.css.slice(1);
	        }

	        if (opts.from) {
	            if (/^\w+:\/\//.test(opts.from)) {
	                /**
	                 * @member {string} - The absolute path to the CSS source file
	                 *                    defined with the `from` option.
	                 *
	                 * @example
	                 * const root = postcss.parse(css, { from: 'a.css' });
	                 * root.source.input.file //=> '/home/ai/a.css'
	                 */
	                this.file = opts.from;
	            } else {
	                this.file = path.resolve(opts.from);
	            }
	        }

	        /*
	                let map = new PreviousMap(this.css, opts);
	                if ( map.text ) {
	                    /!**
	                     * @member {PreviousMap} - The input source map passed from
	                     *                         a compilation step before PostCSS
	                     *                         (for example, from Sass compiler).
	                     *
	                     * @example
	                     * root.source.input.map.consumer().sources //=> ['a.sass']
	                     *!/
	                    this.map = map;
	                    let file = map.consumer().file;
	                    if ( !this.file && file ) this.file = this.mapResolve(file);
	                }
	        */

	        if (!this.file) {
	            sequence += 1;
	            /**
	             * @member {string} - The unique ID of the CSS source. It will be
	             *                    created if `from` option is not provided
	             *                    (because PostCSS does not know the file path).
	             *
	             * @example
	             * const root = postcss.parse(css);
	             * root.source.input.file //=> undefined
	             * root.source.input.id   //=> "<input css 1>"
	             */
	            this.id = '<input css ' + sequence + '>';
	        }
	        if (this.map) this.map.file = this.from;
	    }

	    _createClass(Input, [{
	        key: 'error',
	        value: function error(message, line, column) {
	            var opts = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

	            var result = void 0;
	            var origin = this.origin(line, column);
	            if (origin) {
	                result = new _cssSyntaxError2.default(message, origin.line, origin.column, origin.source, origin.file, opts.plugin);
	            } else {
	                result = new _cssSyntaxError2.default(message, line, column, this.css, this.file, opts.plugin);
	            }

	            result.input = { line: line, column: column, source: this.css };
	            if (this.file) result.input.file = this.file;

	            return result;
	        }

	        /**
	         * Reads the input source map and returns a symbol position
	         * in the input source (e.g., in a Sass file that was compiled
	         * to CSS before being passed to PostCSS).
	         *
	         * @param {number} line   - line in input CSS
	         * @param {number} column - column in input CSS
	         *
	         * @return {filePosition} position in input source
	         *
	         * @example
	         * root.source.input.origin(1, 1) //=> { file: 'a.css', line: 3, column: 1 }
	         */

	    }, {
	        key: 'origin',
	        value: function origin(line, column) {
	            if (!this.map) return false;
	            var consumer = this.map.consumer();

	            var from = consumer.originalPositionFor({ line: line, column: column });
	            if (!from.source) return false;

	            var result = {
	                file: this.mapResolve(from.source),
	                line: from.line,
	                column: from.column
	            };

	            var source = consumer.sourceContentFor(from.source);
	            if (source) result.source = source;

	            return result;
	        }
	    }, {
	        key: 'mapResolve',
	        value: function mapResolve(file) {
	            if (/^\w+:\/\//.test(file)) {
	                return file;
	            } else {
	                return path.resolve(this.map.consumer().sourceRoot || '.', file);
	            }
	        }

	        /**
	         * The CSS source identifier. Contains {@link Input#file} if the user
	         * set the `from` option, or {@link Input#id} if they did not.
	         * @type {string}
	         *
	         * @example
	         * const root = postcss.parse(css, { from: 'a.css' });
	         * root.source.input.from //=> "/home/ai/a.css"
	         *
	         * const root = postcss.parse(css);
	         * root.source.input.from //=> "<input css 1>"
	         */

	    }, {
	        key: 'from',
	        get: function get() {
	            return this.file || this.id;
	        }
	    }]);

	    return Input;
	}();

	exports.default = Input;
	module.exports = exports['default'];

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	}();

	var _get = function get(object, property, receiver) {
	    if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
	        var parent = Object.getPrototypeOf(object);if (parent === null) {
	            return undefined;
	        } else {
	            return get(parent, property, receiver);
	        }
	    } else if ("value" in desc) {
	        return desc.value;
	    } else {
	        var getter = desc.get;if (getter === undefined) {
	            return undefined;
	        }return getter.call(receiver);
	    }
	};

	__webpack_require__(29);

	var _container = __webpack_require__(31);

	var _container2 = _interopRequireDefault(_container);

	var _lazyResult = __webpack_require__(45);

	var _lazyResult2 = _interopRequireDefault(_lazyResult);

	var _processor = __webpack_require__(48);

	var _processor2 = _interopRequireDefault(_processor);

	var _warnOnce = __webpack_require__(35);

	var _warnOnce2 = _interopRequireDefault(_warnOnce);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}

	function _possibleConstructorReturn(self, call) {
	    if (!self) {
	        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	} // break cyclical dependency deadlock – #87

	/**
	 * Represents a CSS file and contains all its parsed nodes.
	 *
	 * @extends Container
	 *
	 * @example
	 * const root = postcss.parse('a{color:black} b{z-index:2}');
	 * root.type         //=> 'root'
	 * root.nodes.length //=> 2
	 */
	var Root = function (_Container) {
	    _inherits(Root, _Container);

	    function Root(defaults) {
	        _classCallCheck(this, Root);

	        var _this = _possibleConstructorReturn(this, (Root.__proto__ || Object.getPrototypeOf(Root)).call(this, defaults));

	        _this.type = 'root';
	        if (!_this.nodes) _this.nodes = [];
	        return _this;
	    }

	    _createClass(Root, [{
	        key: 'removeChild',
	        value: function removeChild(child) {
	            child = this.index(child);

	            if (child === 0 && this.nodes.length > 1) {
	                this.nodes[1].raws.before = this.nodes[child].raws.before;
	            }

	            return _get(Root.prototype.__proto__ || Object.getPrototypeOf(Root.prototype), 'removeChild', this).call(this, child);
	        }
	    }, {
	        key: 'normalize',
	        value: function normalize(child, sample, type) {
	            var nodes = _get(Root.prototype.__proto__ || Object.getPrototypeOf(Root.prototype), 'normalize', this).call(this, child);

	            if (sample) {
	                if (type === 'prepend') {
	                    if (this.nodes.length > 1) {
	                        sample.raws.before = this.nodes[1].raws.before;
	                    } else {
	                        delete sample.raws.before;
	                    }
	                } else if (this.first !== sample) {
	                    nodes.forEach(function (node) {
	                        node.raws.before = sample.raws.before;
	                    });
	                }
	            }

	            return nodes;
	        }

	        /**
	         * Returns a {@link Result} instance representing the root’s CSS.
	         *
	         * @param {processOptions} [opts] - options with only `to` and `map` keys
	         *
	         * @return {Result} result with current root’s CSS
	         *
	         * @example
	         * const root1 = postcss.parse(css1, { from: 'a.css' });
	         * const root2 = postcss.parse(css2, { from: 'b.css' });
	         * root1.append(root2);
	         * const result = root1.toResult({ to: 'all.css', map: true });
	         */

	    }, {
	        key: 'toResult',
	        value: function toResult() {
	            var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	            var lazy = new _lazyResult2.default(new _processor2.default(), this, opts);
	            return lazy.stringify();
	        }
	    }, {
	        key: 'remove',
	        value: function remove(child) {
	            (0, _warnOnce2.default)('Root#remove is deprecated. Use Root#removeChild');
	            this.removeChild(child);
	        }
	    }, {
	        key: 'prevMap',
	        value: function prevMap() {
	            (0, _warnOnce2.default)('Root#prevMap is deprecated. Use Root#source.input.map');
	            return this.source.input.map;
	        }

	        /**
	         * @memberof Root#
	         * @member {object} raws - Information to generate byte-to-byte equal
	         *                         node string as it was in the origin input.
	         *
	         * Every parser saves its own properties,
	         * but the default CSS parser uses:
	         *
	         * * `after`: the space symbols after the last child to the end of file.
	         * * `semicolon`: is the last child has an (optional) semicolon.
	         *
	         * @example
	         * postcss.parse('a {}\n').raws //=> { after: '\n' }
	         * postcss.parse('a {}').raws   //=> { after: '' }
	         */

	    }]);

	    return Root;
	}(_container2.default);

	exports.default = Root;
	module.exports = exports['default'];

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	}();

	__webpack_require__(30);

	var _container = __webpack_require__(31);

	var _container2 = _interopRequireDefault(_container);

	var _warnOnce = __webpack_require__(35);

	var _warnOnce2 = _interopRequireDefault(_warnOnce);

	var _list = __webpack_require__(44);

	var _list2 = _interopRequireDefault(_list);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}

	function _possibleConstructorReturn(self, call) {
	    if (!self) {
	        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	} // break cyclical dependency deadlock – #87

	/**
	 * Represents a CSS rule: a selector followed by a declaration block.
	 *
	 * @extends Container
	 *
	 * @example
	 * const root = postcss.parse('a{}');
	 * const rule = root.first;
	 * rule.type       //=> 'rule'
	 * rule.toString() //=> 'a{}'
	 */
	var Rule = function (_Container) {
	    _inherits(Rule, _Container);

	    function Rule(defaults) {
	        _classCallCheck(this, Rule);

	        var _this = _possibleConstructorReturn(this, (Rule.__proto__ || Object.getPrototypeOf(Rule)).call(this, defaults));

	        _this.type = 'rule';
	        if (!_this.nodes) _this.nodes = [];
	        return _this;
	    }

	    /**
	     * An array containing the rule’s individual selectors.
	     * Groups of selectors are split at commas.
	     *
	     * @type {string[]}
	     *
	     * @example
	     * const root = postcss.parse('a, b { }');
	     * const rule = root.first;
	     *
	     * rule.selector  //=> 'a, b'
	     * rule.selectors //=> ['a', 'b']
	     *
	     * rule.selectors = ['a', 'strong'];
	     * rule.selector //=> 'a, strong'
	     */

	    _createClass(Rule, [{
	        key: 'selectors',
	        get: function get() {
	            return _list2.default.comma(this.selector);
	        },
	        set: function set(values) {
	            var match = this.selector ? this.selector.match(/,\s*/) : null;
	            var sep = match ? match[0] : ',' + this.raw('between', 'beforeOpen');
	            this.selector = values.join(sep);
	        }
	    }, {
	        key: '_selector',
	        get: function get() {
	            (0, _warnOnce2.default)('Rule#_selector is deprecated. Use Rule#raws.selector');
	            return this.raws.selector;
	        },
	        set: function set(val) {
	            (0, _warnOnce2.default)('Rule#_selector is deprecated. Use Rule#raws.selector');
	            this.raws.selector = val;
	        }

	        /**
	         * @memberof Rule#
	         * @member {string} selector - the rule’s full selector represented
	         *                             as a string
	         *
	         * @example
	         * const root = postcss.parse('a, b { }');
	         * const rule = root.first;
	         * rule.selector //=> 'a, b'
	         */

	        /**
	         * @memberof Rule#
	         * @member {object} raws - Information to generate byte-to-byte equal
	         *                         node string as it was in the origin input.
	         *
	         * Every parser saves its own properties,
	         * but the default CSS parser uses:
	         *
	         * * `before`: the space symbols before the node. It also stores `*`
	         *   and `_` symbols before the declaration (IE hack).
	         * * `after`: the space symbols after the last child of the node
	         *   to the end of the node.
	         * * `between`: the symbols between the property and value
	         *   for declarations, selector and `{` for rules, or last parameter
	         *   and `{` for at-rules.
	         * * `semicolon`: contains true if the last child has
	         *   an (optional) semicolon.
	         *
	         * PostCSS cleans selectors from comments and extra spaces,
	         * but it stores origin content in raws properties.
	         * As such, if you don’t change a declaration’s value,
	         * PostCSS will use the raw value with comments.
	         *
	         * @example
	         * const root = postcss.parse('a {\n  color:black\n}')
	         * root.first.first.raws //=> { before: '', between: ' ', after: '\n' }
	         */

	    }]);

	    return Rule;
	}(_container2.default);

	exports.default = Rule;
	module.exports = exports['default'];

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	}();

	var _get = function get(object, property, receiver) {
	    if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
	        var parent = Object.getPrototypeOf(object);if (parent === null) {
	            return undefined;
	        } else {
	            return get(parent, property, receiver);
	        }
	    } else if ("value" in desc) {
	        return desc.value;
	    } else {
	        var getter = desc.get;if (getter === undefined) {
	            return undefined;
	        }return getter.call(receiver);
	    }
	};

	var _container = __webpack_require__(31);

	var _container2 = _interopRequireDefault(_container);

	var _warnOnce = __webpack_require__(35);

	var _warnOnce2 = _interopRequireDefault(_warnOnce);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}

	function _possibleConstructorReturn(self, call) {
	    if (!self) {
	        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	/**
	 * Represents an at-rule.
	 *
	 * If it’s followed in the CSS by a {} block, this node will have
	 * a nodes property representing its children.
	 *
	 * @extends Container
	 *
	 * @example
	 * const root = postcss.parse('@charset "UTF-8"; @media print {}');
	 *
	 * const charset = root.first;
	 * charset.type  //=> 'atrule'
	 * charset.nodes //=> undefined
	 *
	 * const media = root.last;
	 * media.nodes   //=> []
	 */
	var AtRule = function (_Container) {
	    _inherits(AtRule, _Container);

	    function AtRule(defaults) {
	        _classCallCheck(this, AtRule);

	        var _this = _possibleConstructorReturn(this, (AtRule.__proto__ || Object.getPrototypeOf(AtRule)).call(this, defaults));

	        _this.type = 'atrule';
	        return _this;
	    }

	    _createClass(AtRule, [{
	        key: 'append',
	        value: function append() {
	            var _get2;

	            if (!this.nodes) this.nodes = [];

	            for (var _len = arguments.length, children = Array(_len), _key = 0; _key < _len; _key++) {
	                children[_key] = arguments[_key];
	            }

	            return (_get2 = _get(AtRule.prototype.__proto__ || Object.getPrototypeOf(AtRule.prototype), 'append', this)).call.apply(_get2, [this].concat(children));
	        }
	    }, {
	        key: 'prepend',
	        value: function prepend() {
	            var _get3;

	            if (!this.nodes) this.nodes = [];

	            for (var _len2 = arguments.length, children = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	                children[_key2] = arguments[_key2];
	            }

	            return (_get3 = _get(AtRule.prototype.__proto__ || Object.getPrototypeOf(AtRule.prototype), 'prepend', this)).call.apply(_get3, [this].concat(children));
	        }
	    }, {
	        key: 'afterName',
	        get: function get() {
	            (0, _warnOnce2.default)('AtRule#afterName was deprecated. Use AtRule#raws.afterName');
	            return this.raws.afterName;
	        },
	        set: function set(val) {
	            (0, _warnOnce2.default)('AtRule#afterName was deprecated. Use AtRule#raws.afterName');
	            this.raws.afterName = val;
	        }
	    }, {
	        key: '_params',
	        get: function get() {
	            (0, _warnOnce2.default)('AtRule#_params was deprecated. Use AtRule#raws.params');
	            return this.raws.params;
	        },
	        set: function set(val) {
	            (0, _warnOnce2.default)('AtRule#_params was deprecated. Use AtRule#raws.params');
	            this.raws.params = val;
	        }

	        /**
	         * @memberof AtRule#
	         * @member {string} name - the at-rule’s name immediately follows the `@`
	         *
	         * @example
	         * const root  = postcss.parse('@media print {}');
	         * media.name //=> 'media'
	         * const media = root.first;
	         */

	        /**
	         * @memberof AtRule#
	         * @member {string} params - the at-rule’s parameters, the values
	         *                           that follow the at-rule’s name but precede
	         *                           any {} block
	         *
	         * @example
	         * const root  = postcss.parse('@media print, screen {}');
	         * const media = root.first;
	         * media.params //=> 'print, screen'
	         */

	        /**
	         * @memberof AtRule#
	         * @member {object} raws - Information to generate byte-to-byte equal
	         *                         node string as it was in the origin input.
	         *
	         * Every parser saves its own properties,
	         * but the default CSS parser uses:
	         *
	         * * `before`: the space symbols before the node. It also stores `*`
	         *   and `_` symbols before the declaration (IE hack).
	         * * `after`: the space symbols after the last child of the node
	         *   to the end of the node.
	         * * `between`: the symbols between the property and value
	         *   for declarations, selector and `{` for rules, or last parameter
	         *   and `{` for at-rules.
	         * * `semicolon`: contains true if the last child has
	         *   an (optional) semicolon.
	         * * `afterName`: the space between the at-rule name and its parameters.
	         *
	         * PostCSS cleans at-rule parameters from comments and extra spaces,
	         * but it stores origin content in raws properties.
	         * As such, if you don’t change a declaration’s value,
	         * PostCSS will use the raw value with comments.
	         *
	         * @example
	         * const root = postcss.parse('  @media\nprint {\n}')
	         * root.first.first.raws //=> { before: '  ',
	         *                       //     between: ' ',
	         *                       //     afterName: '\n',
	         *                       //     after: '\n' }
	         */

	    }]);

	    return AtRule;
	}(_container2.default);

	exports.default = AtRule;
	module.exports = exports['default'];

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	}();

	var _get = function get(object, property, receiver) {
	    if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
	        var parent = Object.getPrototypeOf(object);if (parent === null) {
	            return undefined;
	        } else {
	            return get(parent, property, receiver);
	        }
	    } else if ("value" in desc) {
	        return desc.value;
	    } else {
	        var getter = desc.get;if (getter === undefined) {
	            return undefined;
	        }return getter.call(receiver);
	    }
	};

	var _parse = __webpack_require__(32);

	var _parse2 = _interopRequireDefault(_parse);

	var _root = __webpack_require__(28);

	var _root2 = _interopRequireDefault(_root);

	var _rule = __webpack_require__(29);

	var _rule2 = _interopRequireDefault(_rule);

	var _atRule = __webpack_require__(30);

	var _atRule2 = _interopRequireDefault(_atRule);

	var _declaration = __webpack_require__(34);

	var _declaration2 = _interopRequireDefault(_declaration);

	var _warnOnce = __webpack_require__(35);

	var _warnOnce2 = _interopRequireDefault(_warnOnce);

	var _comment = __webpack_require__(43);

	var _comment2 = _interopRequireDefault(_comment);

	var _node = __webpack_require__(36);

	var _node2 = _interopRequireDefault(_node);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}

	function _possibleConstructorReturn(self, call) {
	    if (!self) {
	        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	function cleanSource(nodes) {
	    return nodes.map(function (i) {
	        if (i.nodes) i.nodes = cleanSource(i.nodes);
	        delete i.source;
	        return i;
	    });
	}

	/**
	 * @callback childCondition
	 * @param {Node} node    - container child
	 * @param {number} index - child index
	 * @param {Node[]} nodes - all container children
	 * @return {boolean}
	 */

	/**
	 * @callback childIterator
	 * @param {Node} node    - container child
	 * @param {number} index - child index
	 * @return {false|undefined} returning `false` will break iteration
	 */

	/**
	 * The {@link Root}, {@link AtRule}, and {@link Rule} container nodes
	 * inherit some common methods to help work with their children.
	 *
	 * Note that all containers can store any content. If you write a rule inside
	 * a rule, PostCSS will parse it.
	 *
	 * @extends Node
	 * @abstract
	 */

	var Container = function (_Node) {
	    _inherits(Container, _Node);

	    function Container() {
	        _classCallCheck(this, Container);

	        return _possibleConstructorReturn(this, (Container.__proto__ || Object.getPrototypeOf(Container)).apply(this, arguments));
	    }

	    _createClass(Container, [{
	        key: 'push',
	        value: function push(child) {
	            child.parent = this;
	            this.nodes.push(child);
	            return this;
	        }

	        /**
	         * Iterates through the container’s immediate children,
	         * calling `callback` for each child.
	         *
	         * Returning `false` in the callback will break iteration.
	         *
	         * This method only iterates through the container’s immediate children.
	         * If you need to recursively iterate through all the container’s descendant
	         * nodes, use {@link Container#walk}.
	         *
	         * Unlike the for `{}`-cycle or `Array#forEach` this iterator is safe
	         * if you are mutating the array of child nodes during iteration.
	         * PostCSS will adjust the current index to match the mutations.
	         *
	         * @param {childIterator} callback - iterator receives each node and index
	         *
	         * @return {false|undefined} returns `false` if iteration was broke
	         *
	         * @example
	         * const root = postcss.parse('a { color: black; z-index: 1 }');
	         * const rule = root.first;
	         *
	         * for ( let decl of rule.nodes ) {
	         *     decl.cloneBefore({ prop: '-webkit-' + decl.prop });
	         *     // Cycle will be infinite, because cloneBefore moves the current node
	         *     // to the next index
	         * }
	         *
	         * rule.each(decl => {
	         *     decl.cloneBefore({ prop: '-webkit-' + decl.prop });
	         *     // Will be executed only for color and z-index
	         * });
	         */

	    }, {
	        key: 'each',
	        value: function each(callback) {
	            if (!this.lastEach) this.lastEach = 0;
	            if (!this.indexes) this.indexes = {};

	            this.lastEach += 1;
	            var id = this.lastEach;
	            this.indexes[id] = 0;

	            if (!this.nodes) return undefined;

	            var index = void 0,
	                result = void 0;
	            while (this.indexes[id] < this.nodes.length) {
	                index = this.indexes[id];
	                result = callback(this.nodes[index], index);
	                if (result === false) break;

	                this.indexes[id] += 1;
	            }

	            delete this.indexes[id];

	            return result;
	        }

	        /**
	         * Traverses the container’s descendant nodes, calling callback
	         * for each node.
	         *
	         * Like container.each(), this method is safe to use
	         * if you are mutating arrays during iteration.
	         *
	         * If you only need to iterate through the container’s immediate children,
	         * use {@link Container#each}.
	         *
	         * @param {childIterator} callback - iterator receives each node and index
	         *
	         * @return {false|undefined} returns `false` if iteration was broke
	         *
	         * @example
	         * root.walk(node => {
	         *   // Traverses all descendant nodes.
	         * });
	         */

	    }, {
	        key: 'walk',
	        value: function walk(callback) {
	            return this.each(function (child, i) {
	                var result = callback(child, i);
	                if (result !== false && child.walk) {
	                    result = child.walk(callback);
	                }
	                return result;
	            });
	        }

	        /**
	         * Traverses the container’s descendant nodes, calling callback
	         * for each declaration node.
	         *
	         * If you pass a filter, iteration will only happen over declarations
	         * with matching properties.
	         *
	         * Like {@link Container#each}, this method is safe
	         * to use if you are mutating arrays during iteration.
	         *
	         * @param {string|RegExp} [prop]   - string or regular expression
	         *                                   to filter declarations by property name
	         * @param {childIterator} callback - iterator receives each node and index
	         *
	         * @return {false|undefined} returns `false` if iteration was broke
	         *
	         * @example
	         * root.walkDecls(decl => {
	         *   checkPropertySupport(decl.prop);
	         * });
	         *
	         * root.walkDecls('border-radius', decl => {
	         *   decl.remove();
	         * });
	         *
	         * root.walkDecls(/^background/, decl => {
	         *   decl.value = takeFirstColorFromGradient(decl.value);
	         * });
	         */

	    }, {
	        key: 'walkDecls',
	        value: function walkDecls(prop, callback) {
	            if (!callback) {
	                callback = prop;
	                return this.walk(function (child, i) {
	                    if (child.type === 'decl') {
	                        return callback(child, i);
	                    }
	                });
	            } else if (prop instanceof RegExp) {
	                return this.walk(function (child, i) {
	                    if (child.type === 'decl' && prop.test(child.prop)) {
	                        return callback(child, i);
	                    }
	                });
	            } else {
	                return this.walk(function (child, i) {
	                    if (child.type === 'decl' && child.prop === prop) {
	                        return callback(child, i);
	                    }
	                });
	            }
	        }

	        /**
	         * Traverses the container’s descendant nodes, calling callback
	         * for each rule node.
	         *
	         * If you pass a filter, iteration will only happen over rules
	         * with matching selectors.
	         *
	         * Like {@link Container#each}, this method is safe
	         * to use if you are mutating arrays during iteration.
	         *
	         * @param {string|RegExp} [selector] - string or regular expression
	         *                                     to filter rules by selector
	         * @param {childIterator} callback   - iterator receives each node and index
	         *
	         * @return {false|undefined} returns `false` if iteration was broke
	         *
	         * @example
	         * const selectors = [];
	         * root.walkRules(rule => {
	         *   selectors.push(rule.selector);
	         * });
	         * console.log(`Your CSS uses ${selectors.length} selectors`);
	         */

	    }, {
	        key: 'walkRules',
	        value: function walkRules(selector, callback) {
	            if (!callback) {
	                callback = selector;

	                return this.walk(function (child, i) {
	                    if (child.type === 'rule') {
	                        return callback(child, i);
	                    }
	                });
	            } else if (selector instanceof RegExp) {
	                return this.walk(function (child, i) {
	                    if (child.type === 'rule' && selector.test(child.selector)) {
	                        return callback(child, i);
	                    }
	                });
	            } else {
	                return this.walk(function (child, i) {
	                    if (child.type === 'rule' && child.selector === selector) {
	                        return callback(child, i);
	                    }
	                });
	            }
	        }

	        /**
	         * Traverses the container’s descendant nodes, calling callback
	         * for each at-rule node.
	         *
	         * If you pass a filter, iteration will only happen over at-rules
	         * that have matching names.
	         *
	         * Like {@link Container#each}, this method is safe
	         * to use if you are mutating arrays during iteration.
	         *
	         * @param {string|RegExp} [name]   - string or regular expression
	         *                                   to filter at-rules by name
	         * @param {childIterator} callback - iterator receives each node and index
	         *
	         * @return {false|undefined} returns `false` if iteration was broke
	         *
	         * @example
	         * root.walkAtRules(rule => {
	         *   if ( isOld(rule.name) ) rule.remove();
	         * });
	         *
	         * let first = false;
	         * root.walkAtRules('charset', rule => {
	         *   if ( !first ) {
	         *     first = true;
	         *   } else {
	         *     rule.remove();
	         *   }
	         * });
	         */

	    }, {
	        key: 'walkAtRules',
	        value: function walkAtRules(name, callback) {
	            if (!callback) {
	                callback = name;
	                return this.walk(function (child, i) {
	                    if (child.type === 'atrule') {
	                        return callback(child, i);
	                    }
	                });
	            } else if (name instanceof RegExp) {
	                return this.walk(function (child, i) {
	                    if (child.type === 'atrule' && name.test(child.name)) {
	                        return callback(child, i);
	                    }
	                });
	            } else {
	                return this.walk(function (child, i) {
	                    if (child.type === 'atrule' && child.name === name) {
	                        return callback(child, i);
	                    }
	                });
	            }
	        }

	        /**
	         * Traverses the container’s descendant nodes, calling callback
	         * for each comment node.
	         *
	         * Like {@link Container#each}, this method is safe
	         * to use if you are mutating arrays during iteration.
	         *
	         * @param {childIterator} callback - iterator receives each node and index
	         *
	         * @return {false|undefined} returns `false` if iteration was broke
	         *
	         * @example
	         * root.walkComments(comment => {
	         *   comment.remove();
	         * });
	         */

	    }, {
	        key: 'walkComments',
	        value: function walkComments(callback) {
	            return this.walk(function (child, i) {
	                if (child.type === 'comment') {
	                    return callback(child, i);
	                }
	            });
	        }

	        /**
	         * Inserts new nodes to the start of the container.
	         *
	         * @param {...(Node|object|string|Node[])} children - new nodes
	         *
	         * @return {Node} this node for methods chain
	         *
	         * @example
	         * const decl1 = postcss.decl({ prop: 'color', value: 'black' });
	         * const decl2 = postcss.decl({ prop: 'background-color', value: 'white' });
	         * rule.append(decl1, decl2);
	         *
	         * root.append({ name: 'charset', params: '"UTF-8"' });  // at-rule
	         * root.append({ selector: 'a' });                       // rule
	         * rule.append({ prop: 'color', value: 'black' });       // declaration
	         * rule.append({ text: 'Comment' })                      // comment
	         *
	         * root.append('a {}');
	         * root.first.append('color: black; z-index: 1');
	         */

	    }, {
	        key: 'append',
	        value: function append() {
	            var _this2 = this;

	            for (var _len = arguments.length, children = Array(_len), _key = 0; _key < _len; _key++) {
	                children[_key] = arguments[_key];
	            }

	            children.forEach(function (child) {
	                var nodes = _this2.normalize(child, _this2.last);
	                nodes.forEach(function (node) {
	                    return _this2.nodes.push(node);
	                });
	            });
	            return this;
	        }

	        /**
	         * Inserts new nodes to the end of the container.
	         *
	         * @param {...(Node|object|string|Node[])} children - new nodes
	         *
	         * @return {Node} this node for methods chain
	         *
	         * @example
	         * const decl1 = postcss.decl({ prop: 'color', value: 'black' });
	         * const decl2 = postcss.decl({ prop: 'background-color', value: 'white' });
	         * rule.prepend(decl1, decl2);
	         *
	         * root.append({ name: 'charset', params: '"UTF-8"' });  // at-rule
	         * root.append({ selector: 'a' });                       // rule
	         * rule.append({ prop: 'color', value: 'black' });       // declaration
	         * rule.append({ text: 'Comment' })                      // comment
	         *
	         * root.append('a {}');
	         * root.first.append('color: black; z-index: 1');
	         */

	    }, {
	        key: 'prepend',
	        value: function prepend() {
	            var _this3 = this;

	            for (var _len2 = arguments.length, children = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	                children[_key2] = arguments[_key2];
	            }

	            children = children.reverse();
	            children.forEach(function (child) {
	                var nodes = _this3.normalize(child, _this3.first, 'prepend').reverse();
	                nodes.forEach(function (node) {
	                    return _this3.nodes.unshift(node);
	                });
	                for (var id in _this3.indexes) {
	                    _this3.indexes[id] = _this3.indexes[id] + nodes.length;
	                }
	            });
	            return this;
	        }
	    }, {
	        key: 'cleanRaws',
	        value: function cleanRaws(keepBetween) {
	            _get(Container.prototype.__proto__ || Object.getPrototypeOf(Container.prototype), 'cleanRaws', this).call(this, keepBetween);
	            if (this.nodes) {
	                this.nodes.forEach(function (node) {
	                    return node.cleanRaws(keepBetween);
	                });
	            }
	        }

	        /**
	         * Insert new node before old node within the container.
	         *
	         * @param {Node|number} exist             - child or child’s index.
	         * @param {Node|object|string|Node[]} add - new node
	         *
	         * @return {Node} this node for methods chain
	         *
	         * @example
	         * rule.insertBefore(decl, decl.clone({ prop: '-webkit-' + decl.prop }));
	         */

	    }, {
	        key: 'insertBefore',
	        value: function insertBefore(exist, add) {
	            var _this4 = this;

	            exist = this.index(exist);

	            var type = exist === 0 ? 'prepend' : false;
	            var nodes = this.normalize(add, this.nodes[exist], type).reverse();
	            nodes.forEach(function (node) {
	                return _this4.nodes.splice(exist, 0, node);
	            });

	            var index = void 0;
	            for (var id in this.indexes) {
	                index = this.indexes[id];
	                if (exist <= index) {
	                    this.indexes[id] = index + nodes.length;
	                }
	            }

	            return this;
	        }

	        /**
	         * Insert new node after old node within the container.
	         *
	         * @param {Node|number} exist             - child or child’s index
	         * @param {Node|object|string|Node[]} add - new node
	         *
	         * @return {Node} this node for methods chain
	         */

	    }, {
	        key: 'insertAfter',
	        value: function insertAfter(exist, add) {
	            var _this5 = this;

	            exist = this.index(exist);

	            var nodes = this.normalize(add, this.nodes[exist]).reverse();
	            nodes.forEach(function (node) {
	                return _this5.nodes.splice(exist + 1, 0, node);
	            });

	            var index = void 0;
	            for (var id in this.indexes) {
	                index = this.indexes[id];
	                if (exist < index) {
	                    this.indexes[id] = index + nodes.length;
	                }
	            }

	            return this;
	        }
	    }, {
	        key: 'remove',
	        value: function remove(child) {
	            if (typeof child !== 'undefined') {
	                (0, _warnOnce2.default)('Container#remove is deprecated. ' + 'Use Container#removeChild');
	                this.removeChild(child);
	            } else {
	                _get(Container.prototype.__proto__ || Object.getPrototypeOf(Container.prototype), 'remove', this).call(this);
	            }
	            return this;
	        }

	        /**
	         * Removes node from the container and cleans the parent properties
	         * from the node and its children.
	         *
	         * @param {Node|number} child - child or child’s index
	         *
	         * @return {Node} this node for methods chain
	         *
	         * @example
	         * rule.nodes.length  //=> 5
	         * rule.removeChild(decl);
	         * rule.nodes.length  //=> 4
	         * decl.parent        //=> undefined
	         */

	    }, {
	        key: 'removeChild',
	        value: function removeChild(child) {
	            child = this.index(child);
	            this.nodes[child].parent = undefined;
	            this.nodes.splice(child, 1);

	            var index = void 0;
	            for (var id in this.indexes) {
	                index = this.indexes[id];
	                if (index >= child) {
	                    this.indexes[id] = index - 1;
	                }
	            }

	            return this;
	        }

	        /**
	         * Removes all children from the container
	         * and cleans their parent properties.
	         *
	         * @return {Node} this node for methods chain
	         *
	         * @example
	         * rule.removeAll();
	         * rule.nodes.length //=> 0
	         */

	    }, {
	        key: 'removeAll',
	        value: function removeAll() {
	            this.nodes.forEach(function (node) {
	                return node.parent = undefined;
	            });
	            this.nodes = [];
	            return this;
	        }

	        /**
	         * Passes all declaration values within the container that match pattern
	         * through callback, replacing those values with the returned result
	         * of callback.
	         *
	         * This method is useful if you are using a custom unit or function
	         * and need to iterate through all values.
	         *
	         * @param {string|RegExp} pattern      - replace pattern
	         * @param {object} opts                - options to speed up the search
	         * @param {string|string[]} opts.props - an array of property names
	         * @param {string} opts.fast           - string that’s used
	         *                                       to narrow down values and speed up
	                                                 the regexp search
	         * @param {function|string} callback   - string to replace pattern
	         *                                       or callback that returns a new
	         *                                       value.
	         *                                       The callback will receive
	         *                                       the same arguments as those
	         *                                       passed to a function parameter
	         *                                       of `String#replace`.
	         *
	         * @return {Node} this node for methods chain
	         *
	         * @example
	         * root.replaceValues(/\d+rem/, { fast: 'rem' }, string => {
	         *   return 15 * parseInt(string) + 'px';
	         * });
	         */

	    }, {
	        key: 'replaceValues',
	        value: function replaceValues(pattern, opts, callback) {
	            if (!callback) {
	                callback = opts;
	                opts = {};
	            }

	            this.walkDecls(function (decl) {
	                if (opts.props && opts.props.indexOf(decl.prop) === -1) return;
	                if (opts.fast && decl.value.indexOf(opts.fast) === -1) return;

	                decl.value = decl.value.replace(pattern, callback);
	            });

	            return this;
	        }

	        /**
	         * Returns `true` if callback returns `true`
	         * for all of the container’s children.
	         *
	         * @param {childCondition} condition - iterator returns true or false.
	         *
	         * @return {boolean} is every child pass condition
	         *
	         * @example
	         * const noPrefixes = rule.every(i => i.prop[0] !== '-');
	         */

	    }, {
	        key: 'every',
	        value: function every(condition) {
	            return this.nodes.every(condition);
	        }

	        /**
	         * Returns `true` if callback returns `true` for (at least) one
	         * of the container’s children.
	         *
	         * @param {childCondition} condition - iterator returns true or false.
	         *
	         * @return {boolean} is some child pass condition
	         *
	         * @example
	         * const hasPrefix = rule.some(i => i.prop[0] === '-');
	         */

	    }, {
	        key: 'some',
	        value: function some(condition) {
	            return this.nodes.some(condition);
	        }

	        /**
	         * Returns a `child`’s index within the {@link Container#nodes} array.
	         *
	         * @param {Node} child - child of the current container.
	         *
	         * @return {number} child index
	         *
	         * @example
	         * rule.index( rule.nodes[2] ) //=> 2
	         */

	    }, {
	        key: 'index',
	        value: function index(child) {
	            if (typeof child === 'number') {
	                return child;
	            } else {
	                return this.nodes.indexOf(child);
	            }
	        }

	        /**
	         * The container’s first child.
	         *
	         * @type {Node}
	         *
	         * @example
	         * rule.first == rules.nodes[0];
	         */

	    }, {
	        key: 'normalize',
	        value: function normalize(nodes, sample) {
	            var _this6 = this;

	            if (typeof nodes === 'string') {
	                nodes = cleanSource((0, _parse2.default)(nodes).nodes);
	            } else if (!Array.isArray(nodes)) {
	                if (nodes.type === 'root') {
	                    nodes = nodes.nodes;
	                } else if (nodes.type) {
	                    nodes = [nodes];
	                } else if (nodes.prop) {
	                    if (typeof nodes.value === 'undefined') {
	                        throw new Error('Value field is missed in node creation');
	                    } else if (typeof nodes.value !== 'string') {
	                        nodes.value = String(nodes.value);
	                    }
	                    nodes = [new _declaration2.default(nodes)];
	                } else if (nodes.selector) {
	                    nodes = [new _rule2.default(nodes)];
	                } else if (nodes.name) {
	                    nodes = [new _atRule2.default(nodes)];
	                } else if (nodes.text) {
	                    nodes = [new _comment2.default(nodes)];
	                } else {
	                    throw new Error('Unknown node type in node creation');
	                }
	            }

	            var processed = nodes.map(function (i) {
	                if (typeof i.raws === 'undefined') i = _this6.rebuild(i);

	                if (i.parent) i = i.clone();
	                if (typeof i.raws.before === 'undefined') {
	                    if (sample && typeof sample.raws.before !== 'undefined') {
	                        i.raws.before = sample.raws.before.replace(/[^\s]/g, '');
	                    }
	                }
	                i.parent = _this6;
	                return i;
	            });

	            return processed;
	        }
	    }, {
	        key: 'rebuild',
	        value: function rebuild(node, parent) {
	            var _this7 = this;

	            var fix = void 0;
	            if (node.type === 'root') {
	                fix = new _root2.default();
	            } else if (node.type === 'atrule') {
	                fix = new _atRule2.default();
	            } else if (node.type === 'rule') {
	                fix = new _rule2.default();
	            } else if (node.type === 'decl') {
	                fix = new _declaration2.default();
	            } else if (node.type === 'comment') {
	                fix = new _comment2.default();
	            }

	            for (var i in node) {
	                if (i === 'nodes') {
	                    fix.nodes = node.nodes.map(function (j) {
	                        return _this7.rebuild(j, fix);
	                    });
	                } else if (i === 'parent' && parent) {
	                    fix.parent = parent;
	                } else if (node.hasOwnProperty(i)) {
	                    fix[i] = node[i];
	                }
	            }

	            return fix;
	        }
	    }, {
	        key: 'eachInside',
	        value: function eachInside(callback) {
	            (0, _warnOnce2.default)('Container#eachInside is deprecated. ' + 'Use Container#walk instead.');
	            return this.walk(callback);
	        }
	    }, {
	        key: 'eachDecl',
	        value: function eachDecl(prop, callback) {
	            (0, _warnOnce2.default)('Container#eachDecl is deprecated. ' + 'Use Container#walkDecls instead.');
	            return this.walkDecls(prop, callback);
	        }
	    }, {
	        key: 'eachRule',
	        value: function eachRule(selector, callback) {
	            (0, _warnOnce2.default)('Container#eachRule is deprecated. ' + 'Use Container#walkRules instead.');
	            return this.walkRules(selector, callback);
	        }
	    }, {
	        key: 'eachAtRule',
	        value: function eachAtRule(name, callback) {
	            (0, _warnOnce2.default)('Container#eachAtRule is deprecated. ' + 'Use Container#walkAtRules instead.');
	            return this.walkAtRules(name, callback);
	        }
	    }, {
	        key: 'eachComment',
	        value: function eachComment(callback) {
	            (0, _warnOnce2.default)('Container#eachComment is deprecated. ' + 'Use Container#walkComments instead.');
	            return this.walkComments(callback);
	        }
	    }, {
	        key: 'first',
	        get: function get() {
	            if (!this.nodes) return undefined;
	            return this.nodes[0];
	        }

	        /**
	         * The container’s last child.
	         *
	         * @type {Node}
	         *
	         * @example
	         * rule.last == rule.nodes[rule.nodes.length - 1];
	         */

	    }, {
	        key: 'last',
	        get: function get() {
	            if (!this.nodes) return undefined;
	            return this.nodes[this.nodes.length - 1];
	        }
	    }, {
	        key: 'semicolon',
	        get: function get() {
	            (0, _warnOnce2.default)('Node#semicolon is deprecated. Use Node#raws.semicolon');
	            return this.raws.semicolon;
	        },
	        set: function set(val) {
	            (0, _warnOnce2.default)('Node#semicolon is deprecated. Use Node#raws.semicolon');
	            this.raws.semicolon = val;
	        }
	    }, {
	        key: 'after',
	        get: function get() {
	            (0, _warnOnce2.default)('Node#after is deprecated. Use Node#raws.after');
	            return this.raws.after;
	        },
	        set: function set(val) {
	            (0, _warnOnce2.default)('Node#after is deprecated. Use Node#raws.after');
	            this.raws.after = val;
	        }

	        /**
	         * @memberof Container#
	         * @member {Node[]} nodes - an array containing the container’s children
	         *
	         * @example
	         * const root = postcss.parse('a { color: black }');
	         * root.nodes.length           //=> 1
	         * root.nodes[0].selector      //=> 'a'
	         * root.nodes[0].nodes[0].prop //=> 'color'
	         */

	    }]);

	    return Container;
	}(_node2.default);

	exports.default = Container;
	module.exports = exports['default'];

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = parse;

	var _parser = __webpack_require__(33);

	var _parser2 = _interopRequireDefault(_parser);

	var _input = __webpack_require__(27);

	var _input2 = _interopRequireDefault(_input);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	function parse(css, opts) {
	    if (opts && opts.safe) {
	        throw new Error('Option safe was removed. ' + 'Use parser: require("postcss-safe-parser")');
	    }

	    var input = new _input2.default(css, opts);

	    var parser = new _parser2.default(input);
	    try {
	        parser.tokenize();
	        parser.loop();
	    } catch (e) {
	        if (e.name === 'CssSyntaxError' && opts && opts.from) {
	            if (/\.scss$/i.test(opts.from)) {
	                e.message += '\nYou tried to parse SCSS with ' + 'the standard CSS parser; ' + 'try again with the postcss-scss parser';
	            } else if (/\.less$/i.test(opts.from)) {
	                e.message += '\nYou tried to parse Less with ' + 'the standard CSS parser; ' + 'try again with the postcss-less parser';
	            }
	        }
	        throw e;
	    }

	    return parser.root;
	}
	module.exports = exports['default'];

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	}();

	var _declaration = __webpack_require__(34);

	var _declaration2 = _interopRequireDefault(_declaration);

	var _tokenize = __webpack_require__(40);

	var _tokenize2 = _interopRequireDefault(_tokenize);

	var _comment = __webpack_require__(43);

	var _comment2 = _interopRequireDefault(_comment);

	var _atRule = __webpack_require__(30);

	var _atRule2 = _interopRequireDefault(_atRule);

	var _root = __webpack_require__(28);

	var _root2 = _interopRequireDefault(_root);

	var _rule = __webpack_require__(29);

	var _rule2 = _interopRequireDefault(_rule);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}

	var Parser = function () {
	    function Parser(input) {
	        _classCallCheck(this, Parser);

	        this.input = input;

	        this.pos = 0;
	        this.root = new _root2.default();
	        this.current = this.root;
	        this.spaces = '';
	        this.semicolon = false;

	        this.root.source = { input: input, start: { line: 1, column: 1 } };
	    }

	    _createClass(Parser, [{
	        key: 'tokenize',
	        value: function tokenize() {
	            this.tokens = (0, _tokenize2.default)(this.input);
	        }
	    }, {
	        key: 'loop',
	        value: function loop() {
	            var token = void 0;
	            while (this.pos < this.tokens.length) {
	                token = this.tokens[this.pos];

	                switch (token[0]) {

	                    case 'space':
	                    case ';':
	                        this.spaces += token[1];
	                        break;

	                    case '}':
	                        this.end(token);
	                        break;

	                    case 'comment':
	                        this.comment(token);
	                        break;

	                    case 'at-word':
	                        this.atrule(token);
	                        break;

	                    case '{':
	                        this.emptyRule(token);
	                        break;

	                    default:
	                        this.other();
	                        break;
	                }

	                this.pos += 1;
	            }
	            this.endFile();
	        }
	    }, {
	        key: 'comment',
	        value: function comment(token) {
	            var node = new _comment2.default();
	            this.init(node, token[2], token[3]);
	            node.source.end = { line: token[4], column: token[5] };

	            var text = token[1].slice(2, -2);
	            if (/^\s*$/.test(text)) {
	                node.text = '';
	                node.raws.left = text;
	                node.raws.right = '';
	            } else {
	                var match = text.match(/^(\s*)([^]*[^\s])(\s*)$/);
	                node.text = match[2];
	                node.raws.left = match[1];
	                node.raws.right = match[3];
	            }
	        }
	    }, {
	        key: 'emptyRule',
	        value: function emptyRule(token) {
	            var node = new _rule2.default();
	            this.init(node, token[2], token[3]);
	            node.selector = '';
	            node.raws.between = '';
	            this.current = node;
	        }
	    }, {
	        key: 'other',
	        value: function other() {
	            var token = void 0;
	            var end = false;
	            var type = null;
	            var colon = false;
	            var bracket = null;
	            var brackets = [];

	            var start = this.pos;
	            while (this.pos < this.tokens.length) {
	                token = this.tokens[this.pos];
	                type = token[0];

	                if (type === '(' || type === '[') {
	                    if (!bracket) bracket = token;
	                    brackets.push(type === '(' ? ')' : ']');
	                } else if (brackets.length === 0) {
	                    if (type === ';') {
	                        if (colon) {
	                            this.decl(this.tokens.slice(start, this.pos + 1));
	                            return;
	                        } else {
	                            break;
	                        }
	                    } else if (type === '{') {
	                        this.rule(this.tokens.slice(start, this.pos + 1));
	                        return;
	                    } else if (type === '}') {
	                        this.pos -= 1;
	                        end = true;
	                        break;
	                    } else if (type === ':') {
	                        colon = true;
	                    }
	                } else if (type === brackets[brackets.length - 1]) {
	                    brackets.pop();
	                    if (brackets.length === 0) bracket = null;
	                }

	                this.pos += 1;
	            }
	            if (this.pos === this.tokens.length) {
	                this.pos -= 1;
	                end = true;
	            }

	            if (brackets.length > 0) this.unclosedBracket(bracket);

	            if (end && colon) {
	                while (this.pos > start) {
	                    token = this.tokens[this.pos][0];
	                    if (token !== 'space' && token !== 'comment') break;
	                    this.pos -= 1;
	                }
	                this.decl(this.tokens.slice(start, this.pos + 1));
	                return;
	            }

	            this.unknownWord(start);
	        }
	    }, {
	        key: 'rule',
	        value: function rule(tokens) {
	            tokens.pop();

	            var node = new _rule2.default();
	            this.init(node, tokens[0][2], tokens[0][3]);

	            node.raws.between = this.spacesFromEnd(tokens);
	            this.raw(node, 'selector', tokens);
	            this.current = node;
	        }
	    }, {
	        key: 'decl',
	        value: function decl(tokens) {
	            var node = new _declaration2.default();
	            this.init(node);

	            var last = tokens[tokens.length - 1];
	            if (last[0] === ';') {
	                this.semicolon = true;
	                tokens.pop();
	            }
	            if (last[4]) {
	                node.source.end = { line: last[4], column: last[5] };
	            } else {
	                node.source.end = { line: last[2], column: last[3] };
	            }

	            while (tokens[0][0] !== 'word') {
	                node.raws.before += tokens.shift()[1];
	            }
	            node.source.start = { line: tokens[0][2], column: tokens[0][3] };

	            node.prop = '';
	            while (tokens.length) {
	                var type = tokens[0][0];
	                if (type === ':' || type === 'space' || type === 'comment') {
	                    break;
	                }
	                node.prop += tokens.shift()[1];
	            }

	            node.raws.between = '';

	            var token = void 0;
	            while (tokens.length) {
	                token = tokens.shift();

	                if (token[0] === ':') {
	                    node.raws.between += token[1];
	                    break;
	                } else {
	                    node.raws.between += token[1];
	                }
	            }

	            if (node.prop[0] === '_' || node.prop[0] === '*') {
	                node.raws.before += node.prop[0];
	                node.prop = node.prop.slice(1);
	            }
	            node.raws.between += this.spacesFromStart(tokens);
	            this.precheckMissedSemicolon(tokens);

	            for (var i = tokens.length - 1; i > 0; i--) {
	                token = tokens[i];
	                if (token[1] === '!important') {
	                    node.important = true;
	                    var string = this.stringFrom(tokens, i);
	                    string = this.spacesFromEnd(tokens) + string;
	                    if (string !== ' !important') node.raws.important = string;
	                    break;
	                } else if (token[1] === 'important') {
	                    var cache = tokens.slice(0);
	                    var str = '';
	                    for (var j = i; j > 0; j--) {
	                        var _type = cache[j][0];
	                        if (str.trim().indexOf('!') === 0 && _type !== 'space') {
	                            break;
	                        }
	                        str = cache.pop()[1] + str;
	                    }
	                    if (str.trim().indexOf('!') === 0) {
	                        node.important = true;
	                        node.raws.important = str;
	                        tokens = cache;
	                    }
	                }

	                if (token[0] !== 'space' && token[0] !== 'comment') {
	                    break;
	                }
	            }

	            this.raw(node, 'value', tokens);

	            if (node.value.indexOf(':') !== -1) this.checkMissedSemicolon(tokens);
	        }
	    }, {
	        key: 'atrule',
	        value: function atrule(token) {
	            var node = new _atRule2.default();
	            node.name = token[1].slice(1);
	            if (node.name === '') {
	                this.unnamedAtrule(node, token);
	            }
	            this.init(node, token[2], token[3]);

	            var last = false;
	            var open = false;
	            var params = [];

	            this.pos += 1;
	            while (this.pos < this.tokens.length) {
	                token = this.tokens[this.pos];

	                if (token[0] === ';') {
	                    node.source.end = { line: token[2], column: token[3] };
	                    this.semicolon = true;
	                    break;
	                } else if (token[0] === '{') {
	                    open = true;
	                    break;
	                } else if (token[0] === '}') {
	                    this.end(token);
	                    break;
	                } else {
	                    params.push(token);
	                }

	                this.pos += 1;
	            }
	            if (this.pos === this.tokens.length) {
	                last = true;
	            }

	            node.raws.between = this.spacesFromEnd(params);
	            if (params.length) {
	                node.raws.afterName = this.spacesFromStart(params);
	                this.raw(node, 'params', params);
	                if (last) {
	                    token = params[params.length - 1];
	                    node.source.end = { line: token[4], column: token[5] };
	                    this.spaces = node.raws.between;
	                    node.raws.between = '';
	                }
	            } else {
	                node.raws.afterName = '';
	                node.params = '';
	            }

	            if (open) {
	                node.nodes = [];
	                this.current = node;
	            }
	        }
	    }, {
	        key: 'end',
	        value: function end(token) {
	            if (this.current.nodes && this.current.nodes.length) {
	                this.current.raws.semicolon = this.semicolon;
	            }
	            this.semicolon = false;

	            this.current.raws.after = (this.current.raws.after || '') + this.spaces;
	            this.spaces = '';

	            if (this.current.parent) {
	                this.current.source.end = { line: token[2], column: token[3] };
	                this.current = this.current.parent;
	            } else {
	                this.unexpectedClose(token);
	            }
	        }
	    }, {
	        key: 'endFile',
	        value: function endFile() {
	            if (this.current.parent) this.unclosedBlock();
	            if (this.current.nodes && this.current.nodes.length) {
	                this.current.raws.semicolon = this.semicolon;
	            }
	            this.current.raws.after = (this.current.raws.after || '') + this.spaces;
	        }

	        // Helpers

	    }, {
	        key: 'init',
	        value: function init(node, line, column) {
	            this.current.push(node);

	            node.source = { start: { line: line, column: column }, input: this.input };
	            node.raws.before = this.spaces;
	            this.spaces = '';
	            if (node.type !== 'comment') this.semicolon = false;
	        }
	    }, {
	        key: 'raw',
	        value: function raw(node, prop, tokens) {
	            var token = void 0,
	                type = void 0;
	            var length = tokens.length;
	            var value = '';
	            var clean = true;
	            for (var i = 0; i < length; i += 1) {
	                token = tokens[i];
	                type = token[0];
	                if (type === 'comment' || type === 'space' && i === length - 1) {
	                    clean = false;
	                } else {
	                    value += token[1];
	                }
	            }
	            if (!clean) {
	                var raw = tokens.reduce(function (all, i) {
	                    return all + i[1];
	                }, '');
	                node.raws[prop] = { value: value, raw: raw };
	            }
	            node[prop] = value;
	        }
	    }, {
	        key: 'spacesFromEnd',
	        value: function spacesFromEnd(tokens) {
	            var lastTokenType = void 0;
	            var spaces = '';
	            while (tokens.length) {
	                lastTokenType = tokens[tokens.length - 1][0];
	                if (lastTokenType !== 'space' && lastTokenType !== 'comment') break;
	                spaces = tokens.pop()[1] + spaces;
	            }
	            return spaces;
	        }
	    }, {
	        key: 'spacesFromStart',
	        value: function spacesFromStart(tokens) {
	            var next = void 0;
	            var spaces = '';
	            while (tokens.length) {
	                next = tokens[0][0];
	                if (next !== 'space' && next !== 'comment') break;
	                spaces += tokens.shift()[1];
	            }
	            return spaces;
	        }
	    }, {
	        key: 'stringFrom',
	        value: function stringFrom(tokens, from) {
	            var result = '';
	            for (var i = from; i < tokens.length; i++) {
	                result += tokens[i][1];
	            }
	            tokens.splice(from, tokens.length - from);
	            return result;
	        }
	    }, {
	        key: 'colon',
	        value: function colon(tokens) {
	            var brackets = 0;
	            var token = void 0,
	                type = void 0,
	                prev = void 0;
	            for (var i = 0; i < tokens.length; i++) {
	                token = tokens[i];
	                type = token[0];

	                if (type === '(') {
	                    brackets += 1;
	                } else if (type === ')') {
	                    brackets -= 1;
	                } else if (brackets === 0 && type === ':') {
	                    if (!prev) {
	                        this.doubleColon(token);
	                    } else if (prev[0] === 'word' && prev[1] === 'progid') {
	                        continue;
	                    } else {
	                        return i;
	                    }
	                }

	                prev = token;
	            }
	            return false;
	        }

	        // Errors

	    }, {
	        key: 'unclosedBracket',
	        value: function unclosedBracket(bracket) {
	            throw this.input.error('Unclosed bracket', bracket[2], bracket[3]);
	        }
	    }, {
	        key: 'unknownWord',
	        value: function unknownWord(start) {
	            var token = this.tokens[start];
	            throw this.input.error('Unknown word', token[2], token[3]);
	        }
	    }, {
	        key: 'unexpectedClose',
	        value: function unexpectedClose(token) {
	            throw this.input.error('Unexpected }', token[2], token[3]);
	        }
	    }, {
	        key: 'unclosedBlock',
	        value: function unclosedBlock() {
	            var pos = this.current.source.start;
	            throw this.input.error('Unclosed block', pos.line, pos.column);
	        }
	    }, {
	        key: 'doubleColon',
	        value: function doubleColon(token) {
	            throw this.input.error('Double colon', token[2], token[3]);
	        }
	    }, {
	        key: 'unnamedAtrule',
	        value: function unnamedAtrule(node, token) {
	            throw this.input.error('At-rule without name', token[2], token[3]);
	        }
	    }, {
	        key: 'precheckMissedSemicolon',
	        value: function precheckMissedSemicolon(tokens) {
	            // Hook for Safe Parser
	            tokens;
	        }
	    }, {
	        key: 'checkMissedSemicolon',
	        value: function checkMissedSemicolon(tokens) {
	            var colon = this.colon(tokens);
	            if (colon === false) return;

	            var founded = 0;
	            var token = void 0;
	            for (var j = colon - 1; j >= 0; j--) {
	                token = tokens[j];
	                if (token[0] !== 'space') {
	                    founded += 1;
	                    if (founded === 2) break;
	                }
	            }
	            throw this.input.error('Missed semicolon', token[2], token[3]);
	        }
	    }]);

	    return Parser;
	}();

	exports.default = Parser;
	module.exports = exports['default'];

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	}();

	var _warnOnce = __webpack_require__(35);

	var _warnOnce2 = _interopRequireDefault(_warnOnce);

	var _node = __webpack_require__(36);

	var _node2 = _interopRequireDefault(_node);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}

	function _possibleConstructorReturn(self, call) {
	    if (!self) {
	        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	/**
	 * Represents a CSS declaration.
	 *
	 * @extends Node
	 *
	 * @example
	 * const root = postcss.parse('a { color: black }');
	 * const decl = root.first.first;
	 * decl.type       //=> 'decl'
	 * decl.toString() //=> ' color: black'
	 */
	var Declaration = function (_Node) {
	    _inherits(Declaration, _Node);

	    function Declaration(defaults) {
	        _classCallCheck(this, Declaration);

	        var _this = _possibleConstructorReturn(this, (Declaration.__proto__ || Object.getPrototypeOf(Declaration)).call(this, defaults));

	        _this.type = 'decl';
	        return _this;
	    }

	    _createClass(Declaration, [{
	        key: '_value',
	        get: function get() {
	            (0, _warnOnce2.default)('Node#_value was deprecated. Use Node#raws.value');
	            return this.raws.value;
	        },
	        set: function set(val) {
	            (0, _warnOnce2.default)('Node#_value was deprecated. Use Node#raws.value');
	            this.raws.value = val;
	        }
	    }, {
	        key: '_important',
	        get: function get() {
	            (0, _warnOnce2.default)('Node#_important was deprecated. Use Node#raws.important');
	            return this.raws.important;
	        },
	        set: function set(val) {
	            (0, _warnOnce2.default)('Node#_important was deprecated. Use Node#raws.important');
	            this.raws.important = val;
	        }

	        /**
	         * @memberof Declaration#
	         * @member {string} prop - the declaration’s property name
	         *
	         * @example
	         * const root = postcss.parse('a { color: black }');
	         * const decl = root.first.first;
	         * decl.prop //=> 'color'
	         */

	        /**
	         * @memberof Declaration#
	         * @member {string} value - the declaration’s value
	         *
	         * @example
	         * const root = postcss.parse('a { color: black }');
	         * const decl = root.first.first;
	         * decl.value //=> 'black'
	         */

	        /**
	         * @memberof Declaration#
	         * @member {boolean} important - `true` if the declaration
	         *                               has an !important annotation.
	         *
	         * @example
	         * const root = postcss.parse('a { color: black !important; color: red }');
	         * root.first.first.important //=> true
	         * root.first.last.important  //=> undefined
	         */

	        /**
	         * @memberof Declaration#
	         * @member {object} raws - Information to generate byte-to-byte equal
	         *                         node string as it was in the origin input.
	         *
	         * Every parser saves its own properties,
	         * but the default CSS parser uses:
	         *
	         * * `before`: the space symbols before the node. It also stores `*`
	         *   and `_` symbols before the declaration (IE hack).
	         * * `between`: the symbols between the property and value
	         *   for declarations, selector and `{` for rules, or last parameter
	         *   and `{` for at-rules.
	         * * `important`: the content of the important statement,
	         *   if it is not just `!important`.
	         *
	         * PostCSS cleans declaration from comments and extra spaces,
	         * but it stores origin content in raws properties.
	         * As such, if you don’t change a declaration’s value,
	         * PostCSS will use the raw value with comments.
	         *
	         * @example
	         * const root = postcss.parse('a {\n  color:black\n}')
	         * root.first.first.raws //=> { before: '\n  ', between: ':' }
	         */

	    }]);

	    return Declaration;
	}(_node2.default);

	exports.default = Declaration;
	module.exports = exports['default'];

/***/ }),
/* 35 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = warnOnce;
	var printed = {};

	function warnOnce(message) {
	    if (printed[message]) return;
	    printed[message] = true;

	    if (typeof console !== 'undefined' && console.warn) console.warn(message);
	}
	module.exports = exports['default'];

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	}();

	var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
	    return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	} : function (obj) {
	    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	};

	var _cssSyntaxError = __webpack_require__(37);

	var _cssSyntaxError2 = _interopRequireDefault(_cssSyntaxError);

	var _stringifier = __webpack_require__(41);

	var _stringifier2 = _interopRequireDefault(_stringifier);

	var _stringify = __webpack_require__(42);

	var _stringify2 = _interopRequireDefault(_stringify);

	var _warnOnce = __webpack_require__(35);

	var _warnOnce2 = _interopRequireDefault(_warnOnce);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}

	/**
	 * @typedef {object} position
	 * @property {number} line   - source line in file
	 * @property {number} column - source column in file
	 */

	/**
	 * @typedef {object} source
	 * @property {Input} input    - {@link Input} with input file
	 * @property {position} start - The starting position of the node’s source
	 * @property {position} end   - The ending position of the node’s source
	 */

	var cloneNode = function cloneNode(obj, parent) {
	    var cloned = new obj.constructor();

	    for (var i in obj) {
	        if (!obj.hasOwnProperty(i)) continue;
	        var value = obj[i];
	        var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);

	        if (i === 'parent' && type === 'object') {
	            if (parent) cloned[i] = parent;
	        } else if (i === 'source') {
	            cloned[i] = value;
	        } else if (value instanceof Array) {
	            cloned[i] = value.map(function (j) {
	                return cloneNode(j, cloned);
	            });
	        } else if (i !== 'before' && i !== 'after' && i !== 'between' && i !== 'semicolon') {
	            if (type === 'object' && value !== null) value = cloneNode(value);
	            cloned[i] = value;
	        }
	    }

	    return cloned;
	};

	/**
	 * All node classes inherit the following common methods.
	 *
	 * @abstract
	 */

	var Node = function () {

	    /**
	     * @param {object} [defaults] - value for node properties
	     */
	    function Node() {
	        var defaults = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	        _classCallCheck(this, Node);

	        this.raws = {};
	        for (var name in defaults) {
	            this[name] = defaults[name];
	        }
	    }

	    /**
	     * Returns a CssSyntaxError instance containing the original position
	     * of the node in the source, showing line and column numbers and also
	     * a small excerpt to facilitate debugging.
	     *
	     * If present, an input source map will be used to get the original position
	     * of the source, even from a previous compilation step
	     * (e.g., from Sass compilation).
	     *
	     * This method produces very useful error messages.
	     *
	     * @param {string} message     - error description
	     * @param {object} [opts]      - options
	     * @param {string} opts.plugin - plugin name that created this error.
	     *                               PostCSS will set it automatically.
	     * @param {string} opts.word   - a word inside a node’s string that should
	     *                               be highlighted as the source of the error
	     * @param {number} opts.index  - an index inside a node’s string that should
	     *                               be highlighted as the source of the error
	     *
	     * @return {CssSyntaxError} error object to throw it
	     *
	     * @example
	     * if ( !variables[name] ) {
	     *   throw decl.error('Unknown variable ' + name, { word: name });
	     *   // CssSyntaxError: postcss-vars:a.sass:4:3: Unknown variable $black
	     *   //   color: $black
	     *   // a
	     *   //          ^
	     *   //   background: white
	     * }
	     */

	    _createClass(Node, [{
	        key: 'error',
	        value: function error(message) {
	            var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	            if (this.source) {
	                var pos = this.positionBy(opts);
	                return this.source.input.error(message, pos.line, pos.column, opts);
	            } else {
	                return new _cssSyntaxError2.default(message);
	            }
	        }

	        /**
	         * This method is provided as a convenience wrapper for {@link Result#warn}.
	         *
	         * @param {Result} result      - the {@link Result} instance
	         *                               that will receive the warning
	         * @param {string} text        - warning message
	         * @param {object} [opts]      - options
	         * @param {string} opts.plugin - plugin name that created this warning.
	         *                               PostCSS will set it automatically.
	         * @param {string} opts.word   - a word inside a node’s string that should
	         *                               be highlighted as the source of the warning
	         * @param {number} opts.index  - an index inside a node’s string that should
	         *                               be highlighted as the source of the warning
	         *
	         * @return {Warning} created warning object
	         *
	         * @example
	         * const plugin = postcss.plugin('postcss-deprecated', () => {
	         *   return (root, result) => {
	         *     root.walkDecls('bad', decl => {
	         *       decl.warn(result, 'Deprecated property bad');
	         *     });
	         *   };
	         * });
	         */

	    }, {
	        key: 'warn',
	        value: function warn(result, text, opts) {
	            var data = { node: this };
	            for (var i in opts) {
	                data[i] = opts[i];
	            }return result.warn(text, data);
	        }

	        /**
	         * Removes the node from its parent and cleans the parent properties
	         * from the node and its children.
	         *
	         * @example
	         * if ( decl.prop.match(/^-webkit-/) ) {
	         *   decl.remove();
	         * }
	         *
	         * @return {Node} node to make calls chain
	         */

	    }, {
	        key: 'remove',
	        value: function remove() {
	            if (this.parent) {
	                this.parent.removeChild(this);
	            }
	            this.parent = undefined;
	            return this;
	        }

	        /**
	         * Returns a CSS string representing the node.
	         *
	         * @param {stringifier|syntax} [stringifier] - a syntax to use
	         *                                             in string generation
	         *
	         * @return {string} CSS string of this node
	         *
	         * @example
	         * postcss.rule({ selector: 'a' }).toString() //=> "a {}"
	         */

	    }, {
	        key: 'toString',
	        value: function toString() {
	            var stringifier = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _stringify2.default;

	            if (stringifier.stringify) stringifier = stringifier.stringify;
	            var result = '';
	            stringifier(this, function (i) {
	                result += i;
	            });
	            return result;
	        }

	        /**
	         * Returns a clone of the node.
	         *
	         * The resulting cloned node and its (cloned) children will have
	         * a clean parent and code style properties.
	         *
	         * @param {object} [overrides] - new properties to override in the clone.
	         *
	         * @example
	         * const cloned = decl.clone({ prop: '-moz-' + decl.prop });
	         * cloned.raws.before  //=> undefined
	         * cloned.parent       //=> undefined
	         * cloned.toString()   //=> -moz-transform: scale(0)
	         *
	         * @return {Node} clone of the node
	         */

	    }, {
	        key: 'clone',
	        value: function clone() {
	            var overrides = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	            var cloned = cloneNode(this);
	            for (var name in overrides) {
	                cloned[name] = overrides[name];
	            }
	            return cloned;
	        }

	        /**
	         * Shortcut to clone the node and insert the resulting cloned node
	         * before the current node.
	         *
	         * @param {object} [overrides] - new properties to override in the clone.
	         *
	         * @example
	         * decl.cloneBefore({ prop: '-moz-' + decl.prop });
	         *
	         * @return {Node} - new node
	         */

	    }, {
	        key: 'cloneBefore',
	        value: function cloneBefore() {
	            var overrides = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	            var cloned = this.clone(overrides);
	            this.parent.insertBefore(this, cloned);
	            return cloned;
	        }

	        /**
	         * Shortcut to clone the node and insert the resulting cloned node
	         * after the current node.
	         *
	         * @param {object} [overrides] - new properties to override in the clone.
	         *
	         * @return {Node} - new node
	         */

	    }, {
	        key: 'cloneAfter',
	        value: function cloneAfter() {
	            var overrides = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	            var cloned = this.clone(overrides);
	            this.parent.insertAfter(this, cloned);
	            return cloned;
	        }

	        /**
	         * Inserts node(s) before the current node and removes the current node.
	         *
	         * @param {...Node} nodes - node(s) to replace current one
	         *
	         * @example
	         * if ( atrule.name == 'mixin' ) {
	         *   atrule.replaceWith(mixinRules[atrule.params]);
	         * }
	         *
	         * @return {Node} current node to methods chain
	         */

	    }, {
	        key: 'replaceWith',
	        value: function replaceWith() {
	            var _this = this;

	            if (this.parent) {
	                for (var _len = arguments.length, nodes = Array(_len), _key = 0; _key < _len; _key++) {
	                    nodes[_key] = arguments[_key];
	                }

	                nodes.forEach(function (node) {
	                    _this.parent.insertBefore(_this, node);
	                });

	                this.remove();
	            }

	            return this;
	        }

	        /**
	         * Removes the node from its current parent and inserts it
	         * at the end of `newParent`.
	         *
	         * This will clean the `before` and `after` code {@link Node#raws} data
	         * from the node and replace them with the indentation style of `newParent`.
	         * It will also clean the `between` property
	         * if `newParent` is in another {@link Root}.
	         *
	         * @param {Container} newParent - container node where the current node
	         *                                will be moved
	         *
	         * @example
	         * atrule.moveTo(atrule.root());
	         *
	         * @return {Node} current node to methods chain
	         */

	    }, {
	        key: 'moveTo',
	        value: function moveTo(newParent) {
	            this.cleanRaws(this.root() === newParent.root());
	            this.remove();
	            newParent.append(this);
	            return this;
	        }

	        /**
	         * Removes the node from its current parent and inserts it into
	         * a new parent before `otherNode`.
	         *
	         * This will also clean the node’s code style properties just as it would
	         * in {@link Node#moveTo}.
	         *
	         * @param {Node} otherNode - node that will be before current node
	         *
	         * @return {Node} current node to methods chain
	         */

	    }, {
	        key: 'moveBefore',
	        value: function moveBefore(otherNode) {
	            this.cleanRaws(this.root() === otherNode.root());
	            this.remove();
	            otherNode.parent.insertBefore(otherNode, this);
	            return this;
	        }

	        /**
	         * Removes the node from its current parent and inserts it into
	         * a new parent after `otherNode`.
	         *
	         * This will also clean the node’s code style properties just as it would
	         * in {@link Node#moveTo}.
	         *
	         * @param {Node} otherNode - node that will be after current node
	         *
	         * @return {Node} current node to methods chain
	         */

	    }, {
	        key: 'moveAfter',
	        value: function moveAfter(otherNode) {
	            this.cleanRaws(this.root() === otherNode.root());
	            this.remove();
	            otherNode.parent.insertAfter(otherNode, this);
	            return this;
	        }

	        /**
	         * Returns the next child of the node’s parent.
	         * Returns `undefined` if the current node is the last child.
	         *
	         * @return {Node|undefined} next node
	         *
	         * @example
	         * if ( comment.text === 'delete next' ) {
	         *   const next = comment.next();
	         *   if ( next ) {
	         *     next.remove();
	         *   }
	         * }
	         */

	    }, {
	        key: 'next',
	        value: function next() {
	            var index = this.parent.index(this);
	            return this.parent.nodes[index + 1];
	        }

	        /**
	         * Returns the previous child of the node’s parent.
	         * Returns `undefined` if the current node is the first child.
	         *
	         * @return {Node|undefined} previous node
	         *
	         * @example
	         * const annotation = decl.prev();
	         * if ( annotation.type == 'comment' ) {
	         *  readAnnotation(annotation.text);
	         * }
	         */

	    }, {
	        key: 'prev',
	        value: function prev() {
	            var index = this.parent.index(this);
	            return this.parent.nodes[index - 1];
	        }
	    }, {
	        key: 'toJSON',
	        value: function toJSON() {
	            var fixed = {};

	            for (var name in this) {
	                if (!this.hasOwnProperty(name)) continue;
	                if (name === 'parent') continue;
	                var value = this[name];

	                if (value instanceof Array) {
	                    fixed[name] = value.map(function (i) {
	                        if ((typeof i === 'undefined' ? 'undefined' : _typeof(i)) === 'object' && i.toJSON) {
	                            return i.toJSON();
	                        } else {
	                            return i;
	                        }
	                    });
	                } else if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && value.toJSON) {
	                    fixed[name] = value.toJSON();
	                } else {
	                    fixed[name] = value;
	                }
	            }

	            return fixed;
	        }

	        /**
	         * Returns a {@link Node#raws} value. If the node is missing
	         * the code style property (because the node was manually built or cloned),
	         * PostCSS will try to autodetect the code style property by looking
	         * at other nodes in the tree.
	         *
	         * @param {string} prop          - name of code style property
	         * @param {string} [defaultType] - name of default value, it can be missed
	         *                                 if the value is the same as prop
	         *
	         * @example
	         * const root = postcss.parse('a { background: white }');
	         * root.nodes[0].append({ prop: 'color', value: 'black' });
	         * root.nodes[0].nodes[1].raws.before   //=> undefined
	         * root.nodes[0].nodes[1].raw('before') //=> ' '
	         *
	         * @return {string} code style value
	         */

	    }, {
	        key: 'raw',
	        value: function raw(prop, defaultType) {
	            var str = new _stringifier2.default();
	            return str.raw(this, prop, defaultType);
	        }

	        /**
	         * Finds the Root instance of the node’s tree.
	         *
	         * @example
	         * root.nodes[0].nodes[0].root() === root
	         *
	         * @return {Root} root parent
	         */

	    }, {
	        key: 'root',
	        value: function root() {
	            var result = this;
	            while (result.parent) {
	                result = result.parent;
	            }return result;
	        }
	    }, {
	        key: 'cleanRaws',
	        value: function cleanRaws(keepBetween) {
	            delete this.raws.before;
	            delete this.raws.after;
	            if (!keepBetween) delete this.raws.between;
	        }
	    }, {
	        key: 'positionInside',
	        value: function positionInside(index) {
	            var string = this.toString();
	            var column = this.source.start.column;
	            var line = this.source.start.line;

	            for (var i = 0; i < index; i++) {
	                if (string[i] === '\n') {
	                    column = 1;
	                    line += 1;
	                } else {
	                    column += 1;
	                }
	            }

	            return { line: line, column: column };
	        }
	    }, {
	        key: 'positionBy',
	        value: function positionBy(opts) {
	            var pos = this.source.start;
	            if (opts.index) {
	                pos = this.positionInside(opts.index);
	            } else if (opts.word) {
	                var index = this.toString().indexOf(opts.word);
	                if (index !== -1) pos = this.positionInside(index);
	            }
	            return pos;
	        }
	    }, {
	        key: 'removeSelf',
	        value: function removeSelf() {
	            (0, _warnOnce2.default)('Node#removeSelf is deprecated. Use Node#remove.');
	            return this.remove();
	        }
	    }, {
	        key: 'replace',
	        value: function replace(nodes) {
	            (0, _warnOnce2.default)('Node#replace is deprecated. Use Node#replaceWith');
	            return this.replaceWith(nodes);
	        }
	    }, {
	        key: 'style',
	        value: function style(own, detect) {
	            (0, _warnOnce2.default)('Node#style() is deprecated. Use Node#raw()');
	            return this.raw(own, detect);
	        }
	    }, {
	        key: 'cleanStyles',
	        value: function cleanStyles(keepBetween) {
	            (0, _warnOnce2.default)('Node#cleanStyles() is deprecated. Use Node#cleanRaws()');
	            return this.cleanRaws(keepBetween);
	        }
	    }, {
	        key: 'before',
	        get: function get() {
	            (0, _warnOnce2.default)('Node#before is deprecated. Use Node#raws.before');
	            return this.raws.before;
	        },
	        set: function set(val) {
	            (0, _warnOnce2.default)('Node#before is deprecated. Use Node#raws.before');
	            this.raws.before = val;
	        }
	    }, {
	        key: 'between',
	        get: function get() {
	            (0, _warnOnce2.default)('Node#between is deprecated. Use Node#raws.between');
	            return this.raws.between;
	        },
	        set: function set(val) {
	            (0, _warnOnce2.default)('Node#between is deprecated. Use Node#raws.between');
	            this.raws.between = val;
	        }

	        /**
	         * @memberof Node#
	         * @member {string} type - String representing the node’s type.
	         *                         Possible values are `root`, `atrule`, `rule`,
	         *                         `decl`, or `comment`.
	         *
	         * @example
	         * postcss.decl({ prop: 'color', value: 'black' }).type //=> 'decl'
	         */

	        /**
	         * @memberof Node#
	         * @member {Container} parent - the node’s parent node.
	         *
	         * @example
	         * root.nodes[0].parent == root;
	         */

	        /**
	         * @memberof Node#
	         * @member {source} source - the input source of the node
	         *
	         * The property is used in source map generation.
	         *
	         * If you create a node manually (e.g., with `postcss.decl()`),
	         * that node will not have a `source` property and will be absent
	         * from the source map. For this reason, the plugin developer should
	         * consider cloning nodes to create new ones (in which case the new node’s
	         * source will reference the original, cloned node) or setting
	         * the `source` property manually.
	         *
	         * ```js
	         * // Bad
	         * const prefixed = postcss.decl({
	         *   prop: '-moz-' + decl.prop,
	         *   value: decl.value
	         * });
	         *
	         * // Good
	         * const prefixed = decl.clone({ prop: '-moz-' + decl.prop });
	         * ```
	         *
	         * ```js
	         * if ( atrule.name == 'add-link' ) {
	         *   const rule = postcss.rule({ selector: 'a', source: atrule.source });
	         *   atrule.parent.insertBefore(atrule, rule);
	         * }
	         * ```
	         *
	         * @example
	         * decl.source.input.from //=> '/home/ai/a.sass'
	         * decl.source.start      //=> { line: 10, column: 2 }
	         * decl.source.end        //=> { line: 10, column: 12 }
	         */

	        /**
	         * @memberof Node#
	         * @member {object} raws - Information to generate byte-to-byte equal
	         *                         node string as it was in the origin input.
	         *
	         * Every parser saves its own properties,
	         * but the default CSS parser uses:
	         *
	         * * `before`: the space symbols before the node. It also stores `*`
	         *   and `_` symbols before the declaration (IE hack).
	         * * `after`: the space symbols after the last child of the node
	         *   to the end of the node.
	         * * `between`: the symbols between the property and value
	         *   for declarations, selector and `{` for rules, or last parameter
	         *   and `{` for at-rules.
	         * * `semicolon`: contains true if the last child has
	         *   an (optional) semicolon.
	         * * `afterName`: the space between the at-rule name and its parameters.
	         * * `left`: the space symbols between `/*` and the comment’s text.
	         * * `right`: the space symbols between the comment’s text
	         *   and <code>*&#47;</code>.
	         * * `important`: the content of the important statement,
	         *   if it is not just `!important`.
	         *
	         * PostCSS cleans selectors, declaration values and at-rule parameters
	         * from comments and extra spaces, but it stores origin content in raws
	         * properties. As such, if you don’t change a declaration’s value,
	         * PostCSS will use the raw value with comments.
	         *
	         * @example
	         * const root = postcss.parse('a {\n  color:black\n}')
	         * root.first.first.raws //=> { before: '\n  ', between: ':' }
	         */

	    }]);

	    return Node;
	}();

	exports.default = Node;
	module.exports = exports['default'];

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	}();

	var _supportsColor = __webpack_require__(38);

	var _supportsColor2 = _interopRequireDefault(_supportsColor);

	var _terminalHighlight = __webpack_require__(39);

	var _terminalHighlight2 = _interopRequireDefault(_terminalHighlight);

	var _warnOnce = __webpack_require__(35);

	var _warnOnce2 = _interopRequireDefault(_warnOnce);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}

	/**
	 * The CSS parser throws this error for broken CSS.
	 *
	 * Custom parsers can throw this error for broken custom syntax using
	 * the {@link Node#error} method.
	 *
	 * PostCSS will use the input source map to detect the original error location.
	 * If you wrote a Sass file, compiled it to CSS and then parsed it with PostCSS,
	 * PostCSS will show the original position in the Sass file.
	 *
	 * If you need the position in the PostCSS input
	 * (e.g., to debug the previous compiler), use `error.input.file`.
	 *
	 * @example
	 * // Catching and checking syntax error
	 * try {
	 *   postcss.parse('a{')
	 * } catch (error) {
	 *   if ( error.name === 'CssSyntaxError' ) {
	 *     error //=> CssSyntaxError
	 *   }
	 * }
	 *
	 * @example
	 * // Raising error from plugin
	 * throw node.error('Unknown variable', { plugin: 'postcss-vars' });
	 */
	var CssSyntaxError = function () {

	    /**
	     * @param {string} message  - error message
	     * @param {number} [line]   - source line of the error
	     * @param {number} [column] - source column of the error
	     * @param {string} [source] - source code of the broken file
	     * @param {string} [file]   - absolute path to the broken file
	     * @param {string} [plugin] - PostCSS plugin name, if error came from plugin
	     */
	    function CssSyntaxError(message, line, column, source, file, plugin) {
	        _classCallCheck(this, CssSyntaxError);

	        /**
	         * @member {string} - Always equal to `'CssSyntaxError'`. You should
	         *                    always check error type
	         *                    by `error.name === 'CssSyntaxError'` instead of
	         *                    `error instanceof CssSyntaxError`, because
	         *                    npm could have several PostCSS versions.
	         *
	         * @example
	         * if ( error.name === 'CssSyntaxError' ) {
	         *   error //=> CssSyntaxError
	         * }
	         */
	        this.name = 'CssSyntaxError';
	        /**
	         * @member {string} - Error message.
	         *
	         * @example
	         * error.message //=> 'Unclosed block'
	         */
	        this.reason = message;

	        if (file) {
	            /**
	             * @member {string} - Absolute path to the broken file.
	             *
	             * @example
	             * error.file       //=> 'a.sass'
	             * error.input.file //=> 'a.css'
	             */
	            this.file = file;
	        }
	        if (source) {
	            /**
	             * @member {string} - Source code of the broken file.
	             *
	             * @example
	             * error.source       //=> 'a { b {} }'
	             * error.input.column //=> 'a b { }'
	             */
	            this.source = source;
	        }
	        if (plugin) {
	            /**
	             * @member {string} - Plugin name, if error came from plugin.
	             *
	             * @example
	             * error.plugin //=> 'postcss-vars'
	             */
	            this.plugin = plugin;
	        }
	        if (typeof line !== 'undefined' && typeof column !== 'undefined') {
	            /**
	             * @member {number} - Source line of the error.
	             *
	             * @example
	             * error.line       //=> 2
	             * error.input.line //=> 4
	             */
	            this.line = line;
	            /**
	             * @member {number} - Source column of the error.
	             *
	             * @example
	             * error.column       //=> 1
	             * error.input.column //=> 4
	             */
	            this.column = column;
	        }

	        this.setMessage();

	        if (Error.captureStackTrace) {
	            Error.captureStackTrace(this, CssSyntaxError);
	        }
	    }

	    _createClass(CssSyntaxError, [{
	        key: 'setMessage',
	        value: function setMessage() {
	            /**
	             * @member {string} - Full error text in the GNU error format
	             *                    with plugin, file, line and column.
	             *
	             * @example
	             * error.message //=> 'a.css:1:1: Unclosed block'
	             */
	            this.message = this.plugin ? this.plugin + ': ' : '';
	            this.message += this.file ? this.file : '<css input>';
	            if (typeof this.line !== 'undefined') {
	                this.message += ':' + this.line + ':' + this.column;
	            }
	            this.message += ': ' + this.reason;
	        }

	        /**
	         * Returns a few lines of CSS source that caused the error.
	         *
	         * If the CSS has an input source map without `sourceContent`,
	         * this method will return an empty string.
	         *
	         * @param {boolean} [color] whether arrow will be colored red by terminal
	         *                          color codes. By default, PostCSS will detect
	         *                          color support by `process.stdout.isTTY`
	         *                          and `process.env.NODE_DISABLE_COLORS`.
	         *
	         * @example
	         * error.showSourceCode() //=> "  4 | }
	         *                        //      5 | a {
	         *                        //    > 6 |   bad
	         *                        //        |   ^
	         *                        //      7 | }
	         *                        //      8 | b {"
	         *
	         * @return {string} few lines of CSS source that caused the error
	         */

	    }, {
	        key: 'showSourceCode',
	        value: function showSourceCode(color) {
	            var _this = this;

	            if (!this.source) return '';

	            var css = this.source;
	            if (typeof color === 'undefined') color = _supportsColor2.default;
	            if (color) css = (0, _terminalHighlight2.default)(css);

	            var lines = css.split(/\r?\n/);
	            var start = Math.max(this.line - 3, 0);
	            var end = Math.min(this.line + 2, lines.length);

	            var maxWidth = String(end).length;

	            return lines.slice(start, end).map(function (line, index) {
	                var number = start + 1 + index;
	                var padded = (' ' + number).slice(-maxWidth);
	                var gutter = ' ' + padded + ' | ';
	                if (number === _this.line) {
	                    var spacing = gutter.replace(/\d/g, ' ') + line.slice(0, _this.column - 1).replace(/[^\t]/g, ' ');
	                    return '>' + gutter + line + '\n ' + spacing + '^';
	                } else {
	                    return ' ' + gutter + line;
	                }
	            }).join('\n');
	        }

	        /**
	         * Returns error position, message and source code of the broken part.
	         *
	         * @example
	         * error.toString() //=> "CssSyntaxError: app.css:1:1: Unclosed block
	         *                  //    > 1 | a {
	         *                  //        | ^"
	         *
	         * @return {string} error position, message and source code
	         */

	    }, {
	        key: 'toString',
	        value: function toString() {
	            var code = this.showSourceCode();
	            if (code) {
	                code = '\n\n' + code + '\n';
	            }
	            return this.name + ': ' + this.message + code;
	        }
	    }, {
	        key: 'generated',
	        get: function get() {
	            (0, _warnOnce2.default)('CssSyntaxError#generated is depreacted. Use input instead.');
	            return this.input;
	        }

	        /**
	         * @memberof CssSyntaxError#
	         * @member {Input} input - Input object with PostCSS internal information
	         *                         about input file. If input has source map
	         *                         from previous tool, PostCSS will use origin
	         *                         (for example, Sass) source. You can use this
	         *                         object to get PostCSS input source.
	         *
	         * @example
	         * error.input.file //=> 'a.css'
	         * error.file       //=> 'a.sass'
	         */

	    }]);

	    return CssSyntaxError;
	}();

	exports.default = CssSyntaxError;
	module.exports = exports['default'];

/***/ }),
/* 38 */
/***/ (function(module, exports) {

	'use strict';

	module.exports = false;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _tokenize = __webpack_require__(40);

	var _tokenize2 = _interopRequireDefault(_tokenize);

	var _input = __webpack_require__(27);

	var _input2 = _interopRequireDefault(_input);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	var HIGHLIGHT_THEME = {
	    'brackets': [36, 39], // cyan
	    'string': [31, 39], // red
	    'at-word': [31, 39], // red
	    'comment': [90, 39], // gray
	    '{': [32, 39], // green
	    '}': [32, 39], // green
	    ':': [1, 22], // bold
	    ';': [1, 22], // bold
	    '(': [1, 22], // bold
	    ')': [1, 22] // bold
	};

	function code(color) {
	    return '\x1B[' + color + 'm';
	}

	function terminalHighlight(css) {
	    var tokens = (0, _tokenize2.default)(new _input2.default(css), { ignoreErrors: true });
	    var result = [];
	    tokens.forEach(function (token) {
	        var color = HIGHLIGHT_THEME[token[0]];
	        if (color) {
	            result.push(token[1].split(/\r?\n/).map(function (i) {
	                return code(color[0]) + i + code(color[1]);
	            }).join('\n'));
	        } else {
	            result.push(token[1]);
	        }
	    });
	    return result.join('');
	}

	exports.default = terminalHighlight;
	module.exports = exports['default'];

/***/ }),
/* 40 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = tokenize;
	var SINGLE_QUOTE = '\''.charCodeAt(0);
	var DOUBLE_QUOTE = '"'.charCodeAt(0);
	var BACKSLASH = '\\'.charCodeAt(0);
	var SLASH = '/'.charCodeAt(0);
	var NEWLINE = '\n'.charCodeAt(0);
	var SPACE = ' '.charCodeAt(0);
	var FEED = '\f'.charCodeAt(0);
	var TAB = '\t'.charCodeAt(0);
	var CR = '\r'.charCodeAt(0);
	var OPEN_SQUARE = '['.charCodeAt(0);
	var CLOSE_SQUARE = ']'.charCodeAt(0);
	var OPEN_PARENTHESES = '('.charCodeAt(0);
	var CLOSE_PARENTHESES = ')'.charCodeAt(0);
	var OPEN_CURLY = '{'.charCodeAt(0);
	var CLOSE_CURLY = '}'.charCodeAt(0);
	var SEMICOLON = ';'.charCodeAt(0);
	var ASTERISK = '*'.charCodeAt(0);
	var COLON = ':'.charCodeAt(0);
	var AT = '@'.charCodeAt(0);

	var RE_AT_END = /[ \n\t\r\f\{\(\)'"\\;/\[\]#]/g;
	var RE_WORD_END = /[ \n\t\r\f\(\)\{\}:;@!'"\\\]\[#]|\/(?=\*)/g;
	var RE_BAD_BRACKET = /.[\\\/\("'\n]/;

	function tokenize(input) {
	    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	    var tokens = [];
	    var css = input.css.valueOf();

	    var ignore = options.ignoreErrors;

	    var code = void 0,
	        next = void 0,
	        quote = void 0,
	        lines = void 0,
	        last = void 0,
	        content = void 0,
	        escape = void 0,
	        nextLine = void 0,
	        nextOffset = void 0,
	        escaped = void 0,
	        escapePos = void 0,
	        prev = void 0,
	        n = void 0;

	    var length = css.length;
	    var offset = -1;
	    var line = 1;
	    var pos = 0;

	    function unclosed(what) {
	        throw input.error('Unclosed ' + what, line, pos - offset);
	    }

	    while (pos < length) {
	        code = css.charCodeAt(pos);

	        if (code === NEWLINE || code === FEED || code === CR && css.charCodeAt(pos + 1) !== NEWLINE) {
	            offset = pos;
	            line += 1;
	        }

	        switch (code) {
	            case NEWLINE:
	            case SPACE:
	            case TAB:
	            case CR:
	            case FEED:
	                next = pos;
	                do {
	                    next += 1;
	                    code = css.charCodeAt(next);
	                    if (code === NEWLINE) {
	                        offset = next;
	                        line += 1;
	                    }
	                } while (code === SPACE || code === NEWLINE || code === TAB || code === CR || code === FEED);

	                tokens.push(['space', css.slice(pos, next)]);
	                pos = next - 1;
	                break;

	            case OPEN_SQUARE:
	                tokens.push(['[', '[', line, pos - offset]);
	                break;

	            case CLOSE_SQUARE:
	                tokens.push([']', ']', line, pos - offset]);
	                break;

	            case OPEN_CURLY:
	                tokens.push(['{', '{', line, pos - offset]);
	                break;

	            case CLOSE_CURLY:
	                tokens.push(['}', '}', line, pos - offset]);
	                break;

	            case COLON:
	                tokens.push([':', ':', line, pos - offset]);
	                break;

	            case SEMICOLON:
	                tokens.push([';', ';', line, pos - offset]);
	                break;

	            case OPEN_PARENTHESES:
	                prev = tokens.length ? tokens[tokens.length - 1][1] : '';
	                n = css.charCodeAt(pos + 1);
	                if (prev === 'url' && n !== SINGLE_QUOTE && n !== DOUBLE_QUOTE && n !== SPACE && n !== NEWLINE && n !== TAB && n !== FEED && n !== CR) {
	                    next = pos;
	                    do {
	                        escaped = false;
	                        next = css.indexOf(')', next + 1);
	                        if (next === -1) {
	                            if (ignore) {
	                                next = pos;
	                                break;
	                            } else {
	                                unclosed('bracket');
	                            }
	                        }
	                        escapePos = next;
	                        while (css.charCodeAt(escapePos - 1) === BACKSLASH) {
	                            escapePos -= 1;
	                            escaped = !escaped;
	                        }
	                    } while (escaped);

	                    tokens.push(['brackets', css.slice(pos, next + 1), line, pos - offset, line, next - offset]);
	                    pos = next;
	                } else {
	                    next = css.indexOf(')', pos + 1);
	                    content = css.slice(pos, next + 1);

	                    if (next === -1 || RE_BAD_BRACKET.test(content)) {
	                        tokens.push(['(', '(', line, pos - offset]);
	                    } else {
	                        tokens.push(['brackets', content, line, pos - offset, line, next - offset]);
	                        pos = next;
	                    }
	                }

	                break;

	            case CLOSE_PARENTHESES:
	                tokens.push([')', ')', line, pos - offset]);
	                break;

	            case SINGLE_QUOTE:
	            case DOUBLE_QUOTE:
	                quote = code === SINGLE_QUOTE ? '\'' : '"';
	                next = pos;
	                do {
	                    escaped = false;
	                    next = css.indexOf(quote, next + 1);
	                    if (next === -1) {
	                        if (ignore) {
	                            next = pos + 1;
	                            break;
	                        } else {
	                            unclosed('quote');
	                        }
	                    }
	                    escapePos = next;
	                    while (css.charCodeAt(escapePos - 1) === BACKSLASH) {
	                        escapePos -= 1;
	                        escaped = !escaped;
	                    }
	                } while (escaped);

	                content = css.slice(pos, next + 1);
	                lines = content.split('\n');
	                last = lines.length - 1;

	                if (last > 0) {
	                    nextLine = line + last;
	                    nextOffset = next - lines[last].length;
	                } else {
	                    nextLine = line;
	                    nextOffset = offset;
	                }

	                tokens.push(['string', css.slice(pos, next + 1), line, pos - offset, nextLine, next - nextOffset]);

	                offset = nextOffset;
	                line = nextLine;
	                pos = next;
	                break;

	            case AT:
	                RE_AT_END.lastIndex = pos + 1;
	                RE_AT_END.test(css);
	                if (RE_AT_END.lastIndex === 0) {
	                    next = css.length - 1;
	                } else {
	                    next = RE_AT_END.lastIndex - 2;
	                }
	                tokens.push(['at-word', css.slice(pos, next + 1), line, pos - offset, line, next - offset]);
	                pos = next;
	                break;

	            case BACKSLASH:
	                next = pos;
	                escape = true;
	                while (css.charCodeAt(next + 1) === BACKSLASH) {
	                    next += 1;
	                    escape = !escape;
	                }
	                code = css.charCodeAt(next + 1);
	                if (escape && code !== SLASH && code !== SPACE && code !== NEWLINE && code !== TAB && code !== CR && code !== FEED) {
	                    next += 1;
	                }
	                tokens.push(['word', css.slice(pos, next + 1), line, pos - offset, line, next - offset]);
	                pos = next;
	                break;

	            default:
	                if (code === SLASH && css.charCodeAt(pos + 1) === ASTERISK) {
	                    next = css.indexOf('*/', pos + 2) + 1;
	                    if (next === 0) {
	                        if (ignore) {
	                            next = css.length;
	                        } else {
	                            unclosed('comment');
	                        }
	                    }

	                    content = css.slice(pos, next + 1);
	                    lines = content.split('\n');
	                    last = lines.length - 1;

	                    if (last > 0) {
	                        nextLine = line + last;
	                        nextOffset = next - lines[last].length;
	                    } else {
	                        nextLine = line;
	                        nextOffset = offset;
	                    }

	                    tokens.push(['comment', content, line, pos - offset, nextLine, next - nextOffset]);

	                    offset = nextOffset;
	                    line = nextLine;
	                    pos = next;
	                } else {
	                    RE_WORD_END.lastIndex = pos + 1;
	                    RE_WORD_END.test(css);
	                    if (RE_WORD_END.lastIndex === 0) {
	                        next = css.length - 1;
	                    } else {
	                        next = RE_WORD_END.lastIndex - 2;
	                    }

	                    tokens.push(['word', css.slice(pos, next + 1), line, pos - offset, line, next - offset]);
	                    pos = next;
	                }

	                break;
	        }

	        pos++;
	    }

	    return tokens;
	}
	module.exports = exports['default'];

/***/ }),
/* 41 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	}();

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}

	/* eslint-disable valid-jsdoc */

	var defaultRaw = {
	    colon: ': ',
	    indent: '    ',
	    beforeDecl: '\n',
	    beforeRule: '\n',
	    beforeOpen: ' ',
	    beforeClose: '\n',
	    beforeComment: '\n',
	    after: '\n',
	    emptyBody: '',
	    commentLeft: ' ',
	    commentRight: ' '
	};

	function capitalize(str) {
	    return str[0].toUpperCase() + str.slice(1);
	}

	var Stringifier = function () {
	    function Stringifier(builder) {
	        _classCallCheck(this, Stringifier);

	        this.builder = builder;
	    }

	    _createClass(Stringifier, [{
	        key: 'stringify',
	        value: function stringify(node, semicolon) {
	            this[node.type](node, semicolon);
	        }
	    }, {
	        key: 'root',
	        value: function root(node) {
	            this.body(node);
	            if (node.raws.after) this.builder(node.raws.after);
	        }
	    }, {
	        key: 'comment',
	        value: function comment(node) {
	            var left = this.raw(node, 'left', 'commentLeft');
	            var right = this.raw(node, 'right', 'commentRight');
	            this.builder('/*' + left + node.text + right + '*/', node);
	        }
	    }, {
	        key: 'decl',
	        value: function decl(node, semicolon) {
	            var between = this.raw(node, 'between', 'colon');
	            var string = node.prop + between + this.rawValue(node, 'value');

	            if (node.important) {
	                string += node.raws.important || ' !important';
	            }

	            if (semicolon) string += ';';
	            this.builder(string, node);
	        }
	    }, {
	        key: 'rule',
	        value: function rule(node) {
	            this.block(node, this.rawValue(node, 'selector'));
	        }
	    }, {
	        key: 'atrule',
	        value: function atrule(node, semicolon) {
	            var name = '@' + node.name;
	            var params = node.params ? this.rawValue(node, 'params') : '';

	            if (typeof node.raws.afterName !== 'undefined') {
	                name += node.raws.afterName;
	            } else if (params) {
	                name += ' ';
	            }

	            if (node.nodes) {
	                this.block(node, name + params);
	            } else {
	                var end = (node.raws.between || '') + (semicolon ? ';' : '');
	                this.builder(name + params + end, node);
	            }
	        }
	    }, {
	        key: 'body',
	        value: function body(node) {
	            var last = node.nodes.length - 1;
	            while (last > 0) {
	                if (node.nodes[last].type !== 'comment') break;
	                last -= 1;
	            }

	            var semicolon = this.raw(node, 'semicolon');
	            for (var i = 0; i < node.nodes.length; i++) {
	                var child = node.nodes[i];
	                var before = this.raw(child, 'before');
	                if (before) this.builder(before);
	                this.stringify(child, last !== i || semicolon);
	            }
	        }
	    }, {
	        key: 'block',
	        value: function block(node, start) {
	            var between = this.raw(node, 'between', 'beforeOpen');
	            this.builder(start + between + '{', node, 'start');

	            var after = void 0;
	            if (node.nodes && node.nodes.length) {
	                this.body(node);
	                after = this.raw(node, 'after');
	            } else {
	                after = this.raw(node, 'after', 'emptyBody');
	            }

	            if (after) this.builder(after);
	            this.builder('}', node, 'end');
	        }
	    }, {
	        key: 'raw',
	        value: function raw(node, own, detect) {
	            var value = void 0;
	            if (!detect) detect = own;

	            // Already had
	            if (own) {
	                value = node.raws[own];
	                if (typeof value !== 'undefined') return value;
	            }

	            var parent = node.parent;

	            // Hack for first rule in CSS
	            if (detect === 'before') {
	                if (!parent || parent.type === 'root' && parent.first === node) {
	                    return '';
	                }
	            }

	            // Floating child without parent
	            if (!parent) return defaultRaw[detect];

	            // Detect style by other nodes
	            var root = node.root();
	            if (!root.rawCache) root.rawCache = {};
	            if (typeof root.rawCache[detect] !== 'undefined') {
	                return root.rawCache[detect];
	            }

	            if (detect === 'before' || detect === 'after') {
	                return this.beforeAfter(node, detect);
	            } else {
	                var method = 'raw' + capitalize(detect);
	                if (this[method]) {
	                    value = this[method](root, node);
	                } else {
	                    root.walk(function (i) {
	                        value = i.raws[own];
	                        if (typeof value !== 'undefined') return false;
	                    });
	                }
	            }

	            if (typeof value === 'undefined') value = defaultRaw[detect];

	            root.rawCache[detect] = value;
	            return value;
	        }
	    }, {
	        key: 'rawSemicolon',
	        value: function rawSemicolon(root) {
	            var value = void 0;
	            root.walk(function (i) {
	                if (i.nodes && i.nodes.length && i.last.type === 'decl') {
	                    value = i.raws.semicolon;
	                    if (typeof value !== 'undefined') return false;
	                }
	            });
	            return value;
	        }
	    }, {
	        key: 'rawEmptyBody',
	        value: function rawEmptyBody(root) {
	            var value = void 0;
	            root.walk(function (i) {
	                if (i.nodes && i.nodes.length === 0) {
	                    value = i.raws.after;
	                    if (typeof value !== 'undefined') return false;
	                }
	            });
	            return value;
	        }
	    }, {
	        key: 'rawIndent',
	        value: function rawIndent(root) {
	            if (root.raws.indent) return root.raws.indent;
	            var value = void 0;
	            root.walk(function (i) {
	                var p = i.parent;
	                if (p && p !== root && p.parent && p.parent === root) {
	                    if (typeof i.raws.before !== 'undefined') {
	                        var parts = i.raws.before.split('\n');
	                        value = parts[parts.length - 1];
	                        value = value.replace(/[^\s]/g, '');
	                        return false;
	                    }
	                }
	            });
	            return value;
	        }
	    }, {
	        key: 'rawBeforeComment',
	        value: function rawBeforeComment(root, node) {
	            var value = void 0;
	            root.walkComments(function (i) {
	                if (typeof i.raws.before !== 'undefined') {
	                    value = i.raws.before;
	                    if (value.indexOf('\n') !== -1) {
	                        value = value.replace(/[^\n]+$/, '');
	                    }
	                    return false;
	                }
	            });
	            if (typeof value === 'undefined') {
	                value = this.raw(node, null, 'beforeDecl');
	            }
	            return value;
	        }
	    }, {
	        key: 'rawBeforeDecl',
	        value: function rawBeforeDecl(root, node) {
	            var value = void 0;
	            root.walkDecls(function (i) {
	                if (typeof i.raws.before !== 'undefined') {
	                    value = i.raws.before;
	                    if (value.indexOf('\n') !== -1) {
	                        value = value.replace(/[^\n]+$/, '');
	                    }
	                    return false;
	                }
	            });
	            if (typeof value === 'undefined') {
	                value = this.raw(node, null, 'beforeRule');
	            }
	            return value;
	        }
	    }, {
	        key: 'rawBeforeRule',
	        value: function rawBeforeRule(root) {
	            var value = void 0;
	            root.walk(function (i) {
	                if (i.nodes && (i.parent !== root || root.first !== i)) {
	                    if (typeof i.raws.before !== 'undefined') {
	                        value = i.raws.before;
	                        if (value.indexOf('\n') !== -1) {
	                            value = value.replace(/[^\n]+$/, '');
	                        }
	                        return false;
	                    }
	                }
	            });
	            return value;
	        }
	    }, {
	        key: 'rawBeforeClose',
	        value: function rawBeforeClose(root) {
	            var value = void 0;
	            root.walk(function (i) {
	                if (i.nodes && i.nodes.length > 0) {
	                    if (typeof i.raws.after !== 'undefined') {
	                        value = i.raws.after;
	                        if (value.indexOf('\n') !== -1) {
	                            value = value.replace(/[^\n]+$/, '');
	                        }
	                        return false;
	                    }
	                }
	            });
	            return value;
	        }
	    }, {
	        key: 'rawBeforeOpen',
	        value: function rawBeforeOpen(root) {
	            var value = void 0;
	            root.walk(function (i) {
	                if (i.type !== 'decl') {
	                    value = i.raws.between;
	                    if (typeof value !== 'undefined') return false;
	                }
	            });
	            return value;
	        }
	    }, {
	        key: 'rawColon',
	        value: function rawColon(root) {
	            var value = void 0;
	            root.walkDecls(function (i) {
	                if (typeof i.raws.between !== 'undefined') {
	                    value = i.raws.between.replace(/[^\s:]/g, '');
	                    return false;
	                }
	            });
	            return value;
	        }
	    }, {
	        key: 'beforeAfter',
	        value: function beforeAfter(node, detect) {
	            var value = void 0;
	            if (node.type === 'decl') {
	                value = this.raw(node, null, 'beforeDecl');
	            } else if (node.type === 'comment') {
	                value = this.raw(node, null, 'beforeComment');
	            } else if (detect === 'before') {
	                value = this.raw(node, null, 'beforeRule');
	            } else {
	                value = this.raw(node, null, 'beforeClose');
	            }

	            var buf = node.parent;
	            var depth = 0;
	            while (buf && buf.type !== 'root') {
	                depth += 1;
	                buf = buf.parent;
	            }

	            if (value.indexOf('\n') !== -1) {
	                var indent = this.raw(node, null, 'indent');
	                if (indent.length) {
	                    for (var step = 0; step < depth; step++) {
	                        value += indent;
	                    }
	                }
	            }

	            return value;
	        }
	    }, {
	        key: 'rawValue',
	        value: function rawValue(node, prop) {
	            var value = node[prop];
	            var raw = node.raws[prop];
	            if (raw && raw.value === value) {
	                return raw.raw;
	            } else {
	                return value;
	            }
	        }
	    }]);

	    return Stringifier;
	}();

	exports.default = Stringifier;
	module.exports = exports['default'];

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = stringify;

	var _stringifier = __webpack_require__(41);

	var _stringifier2 = _interopRequireDefault(_stringifier);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	function stringify(node, builder) {
	    var str = new _stringifier2.default(builder);
	    str.stringify(node);
	}
	module.exports = exports['default'];

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	}();

	var _warnOnce = __webpack_require__(35);

	var _warnOnce2 = _interopRequireDefault(_warnOnce);

	var _node = __webpack_require__(36);

	var _node2 = _interopRequireDefault(_node);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}

	function _possibleConstructorReturn(self, call) {
	    if (!self) {
	        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	/**
	 * Represents a comment between declarations or statements (rule and at-rules).
	 *
	 * Comments inside selectors, at-rule parameters, or declaration values
	 * will be stored in the `raws` properties explained above.
	 *
	 * @extends Node
	 */
	var Comment = function (_Node) {
	    _inherits(Comment, _Node);

	    function Comment(defaults) {
	        _classCallCheck(this, Comment);

	        var _this = _possibleConstructorReturn(this, (Comment.__proto__ || Object.getPrototypeOf(Comment)).call(this, defaults));

	        _this.type = 'comment';
	        return _this;
	    }

	    _createClass(Comment, [{
	        key: 'left',
	        get: function get() {
	            (0, _warnOnce2.default)('Comment#left was deprecated. Use Comment#raws.left');
	            return this.raws.left;
	        },
	        set: function set(val) {
	            (0, _warnOnce2.default)('Comment#left was deprecated. Use Comment#raws.left');
	            this.raws.left = val;
	        }
	    }, {
	        key: 'right',
	        get: function get() {
	            (0, _warnOnce2.default)('Comment#right was deprecated. Use Comment#raws.right');
	            return this.raws.right;
	        },
	        set: function set(val) {
	            (0, _warnOnce2.default)('Comment#right was deprecated. Use Comment#raws.right');
	            this.raws.right = val;
	        }

	        /**
	         * @memberof Comment#
	         * @member {string} text - the comment’s text
	         */

	        /**
	         * @memberof Comment#
	         * @member {object} raws - Information to generate byte-to-byte equal
	         *                         node string as it was in the origin input.
	         *
	         * Every parser saves its own properties,
	         * but the default CSS parser uses:
	         *
	         * * `before`: the space symbols before the node.
	         * * `left`: the space symbols between `/*` and the comment’s text.
	         * * `right`: the space symbols between the comment’s text.
	         */

	    }]);

	    return Comment;
	}(_node2.default);

	exports.default = Comment;
	module.exports = exports['default'];

/***/ }),
/* 44 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	/**
	 * Contains helpers for safely splitting lists of CSS values,
	 * preserving parentheses and quotes.
	 *
	 * @example
	 * const list = postcss.list;
	 *
	 * @namespace list
	 */
	var list = {
	    split: function split(string, separators, last) {
	        var array = [];
	        var current = '';
	        var split = false;

	        var func = 0;
	        var quote = false;
	        var escape = false;

	        for (var i = 0; i < string.length; i++) {
	            var letter = string[i];

	            if (quote) {
	                if (escape) {
	                    escape = false;
	                } else if (letter === '\\') {
	                    escape = true;
	                } else if (letter === quote) {
	                    quote = false;
	                }
	            } else if (letter === '"' || letter === '\'') {
	                quote = letter;
	            } else if (letter === '(') {
	                func += 1;
	            } else if (letter === ')') {
	                if (func > 0) func -= 1;
	            } else if (func === 0) {
	                if (separators.indexOf(letter) !== -1) split = true;
	            }

	            if (split) {
	                if (current !== '') array.push(current.trim());
	                current = '';
	                split = false;
	            } else {
	                current += letter;
	            }
	        }

	        if (last || current !== '') array.push(current.trim());
	        return array;
	    },

	    /**
	     * Safely splits space-separated values (such as those for `background`,
	     * `border-radius`, and other shorthand properties).
	     *
	     * @param {string} string - space-separated values
	     *
	     * @return {string[]} splitted values
	     *
	     * @example
	     * postcss.list.space('1px calc(10% + 1px)') //=> ['1px', 'calc(10% + 1px)']
	     */
	    space: function space(string) {
	        var spaces = [' ', '\n', '\t'];
	        return list.split(string, spaces);
	    },

	    /**
	     * Safely splits comma-separated values (such as those for `transition-*`
	     * and `background` properties).
	     *
	     * @param {string} string - comma-separated values
	     *
	     * @return {string[]} splitted values
	     *
	     * @example
	     * postcss.list.comma('black, linear-gradient(white, black)')
	     * //=> ['black', 'linear-gradient(white, black)']
	     */
	    comma: function comma(string) {
	        var comma = ',';
	        return list.split(string, [comma], true);
	    }
	};

	exports.default = list;
	module.exports = exports['default'];

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	}();

	var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
	    return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	} : function (obj) {
	    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	};

	var _stringify2 = __webpack_require__(42);

	var _stringify3 = _interopRequireDefault(_stringify2);

	var _warnOnce = __webpack_require__(35);

	var _warnOnce2 = _interopRequireDefault(_warnOnce);

	var _result = __webpack_require__(46);

	var _result2 = _interopRequireDefault(_result);

	var _parse = __webpack_require__(32);

	var _parse2 = _interopRequireDefault(_parse);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}

	function isPromise(obj) {
	    return (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object' && typeof obj.then === 'function';
	}

	/**
	 * @callback onFulfilled
	 * @param {Result} result
	 */

	/**
	 * @callback onRejected
	 * @param {Error} error
	 */

	/**
	 * A Promise proxy for the result of PostCSS transformations.
	 *
	 * A `LazyResult` instance is returned by {@link Processor#process}.
	 *
	 * @example
	 * const lazy = postcss([cssnext]).process(css);
	 */

	var LazyResult = function () {
	    function LazyResult(processor, css, opts) {
	        _classCallCheck(this, LazyResult);

	        this.stringified = false;
	        this.processed = false;

	        var root = void 0;
	        if ((typeof css === 'undefined' ? 'undefined' : _typeof(css)) === 'object' && css.type === 'root') {
	            root = css;
	        } else if (css instanceof LazyResult || css instanceof _result2.default) {
	            root = css.root;
	            if (css.map) {
	                if (typeof opts.map === 'undefined') opts.map = {};
	                if (!opts.map.inline) opts.map.inline = false;
	                opts.map.prev = css.map;
	            }
	        } else {
	            var parser = _parse2.default;
	            if (opts.syntax) parser = opts.syntax.parse;
	            if (opts.parser) parser = opts.parser;
	            if (parser.parse) parser = parser.parse;

	            try {
	                root = parser(css, opts);
	            } catch (error) {
	                this.error = error;
	            }
	        }

	        this.result = new _result2.default(processor, root, opts);
	    }

	    /**
	     * Returns a {@link Processor} instance, which will be used
	     * for CSS transformations.
	     * @type {Processor}
	     */

	    _createClass(LazyResult, [{
	        key: 'warnings',

	        /**
	         * Processes input CSS through synchronous plugins
	         * and calls {@link Result#warnings()}.
	         *
	         * @return {Warning[]} warnings from plugins
	         */
	        value: function warnings() {
	            return this.sync().warnings();
	        }

	        /**
	         * Alias for the {@link LazyResult#css} property.
	         *
	         * @example
	         * lazy + '' === lazy.css;
	         *
	         * @return {string} output CSS
	         */

	    }, {
	        key: 'toString',
	        value: function toString() {
	            return this.css;
	        }

	        /**
	         * Processes input CSS through synchronous and asynchronous plugins
	         * and calls `onFulfilled` with a Result instance. If a plugin throws
	         * an error, the `onRejected` callback will be executed.
	         *
	         * It implements standard Promise API.
	         *
	         * @param {onFulfilled} onFulfilled - callback will be executed
	         *                                    when all plugins will finish work
	         * @param {onRejected}  onRejected  - callback will be execited on any error
	         *
	         * @return {Promise} Promise API to make queue
	         *
	         * @example
	         * postcss([cssnext]).process(css).then(result => {
	         *   console.log(result.css);
	         * });
	         */

	    }, {
	        key: 'then',
	        value: function then(onFulfilled, onRejected) {
	            return this.async().then(onFulfilled, onRejected);
	        }

	        /**
	         * Processes input CSS through synchronous and asynchronous plugins
	         * and calls onRejected for each error thrown in any plugin.
	         *
	         * It implements standard Promise API.
	         *
	         * @param {onRejected} onRejected - callback will be execited on any error
	         *
	         * @return {Promise} Promise API to make queue
	         *
	         * @example
	         * postcss([cssnext]).process(css).then(result => {
	         *   console.log(result.css);
	         * }).catch(error => {
	         *   console.error(error);
	         * });
	         */

	    }, {
	        key: 'catch',
	        value: function _catch(onRejected) {
	            return this.async().catch(onRejected);
	        }
	    }, {
	        key: 'handleError',
	        value: function handleError(error, plugin) {
	            try {
	                this.error = error;
	                if (error.name === 'CssSyntaxError' && !error.plugin) {
	                    error.plugin = plugin.postcssPlugin;
	                    error.setMessage();
	                } else if (plugin.postcssVersion) {
	                    var pluginName = plugin.postcssPlugin;
	                    var pluginVer = plugin.postcssVersion;
	                    var runtimeVer = this.result.processor.version;
	                    var a = pluginVer.split('.');
	                    var b = runtimeVer.split('.');

	                    if (a[0] !== b[0] || parseInt(a[1]) > parseInt(b[1])) {
	                        (0, _warnOnce2.default)('Your current PostCSS version ' + 'is ' + runtimeVer + ', but ' + pluginName + ' ' + 'uses ' + pluginVer + '. Perhaps this is ' + 'the source of the error below.');
	                    }
	                }
	            } catch (err) {
	                if (console && console.error) console.error(err);
	            }
	        }
	    }, {
	        key: 'asyncTick',
	        value: function asyncTick(resolve, reject) {
	            var _this = this;

	            if (this.plugin >= this.processor.plugins.length) {
	                this.processed = true;
	                return resolve();
	            }

	            try {
	                var plugin = this.processor.plugins[this.plugin];
	                var promise = this.run(plugin);
	                this.plugin += 1;

	                if (isPromise(promise)) {
	                    promise.then(function () {
	                        _this.asyncTick(resolve, reject);
	                    }).catch(function (error) {
	                        _this.handleError(error, plugin);
	                        _this.processed = true;
	                        reject(error);
	                    });
	                } else {
	                    this.asyncTick(resolve, reject);
	                }
	            } catch (error) {
	                this.processed = true;
	                reject(error);
	            }
	        }
	    }, {
	        key: 'async',
	        value: function async() {
	            var _this2 = this;

	            if (this.processed) {
	                return new Promise(function (resolve, reject) {
	                    if (_this2.error) {
	                        reject(_this2.error);
	                    } else {
	                        resolve(_this2.stringify());
	                    }
	                });
	            }
	            if (this.processing) {
	                return this.processing;
	            }

	            this.processing = new Promise(function (resolve, reject) {
	                if (_this2.error) return reject(_this2.error);
	                _this2.plugin = 0;
	                _this2.asyncTick(resolve, reject);
	            }).then(function () {
	                _this2.processed = true;
	                return _this2.stringify();
	            });

	            return this.processing;
	        }
	    }, {
	        key: 'sync',
	        value: function sync() {
	            var _this3 = this;

	            if (this.processed) return this.result;
	            this.processed = true;

	            if (this.processing) {
	                throw new Error('Use process(css).then(cb) to work with async plugins');
	            }

	            if (this.error) throw this.error;

	            this.result.processor.plugins.forEach(function (plugin) {
	                var promise = _this3.run(plugin);
	                if (isPromise(promise)) {
	                    throw new Error('Use process(css).then(cb) to work with async plugins');
	                }
	            });

	            return this.result;
	        }
	    }, {
	        key: 'run',
	        value: function run(plugin) {
	            this.result.lastPlugin = plugin;

	            try {
	                return plugin(this.result.root, this.result);
	            } catch (error) {
	                this.handleError(error, plugin);
	                throw error;
	            }
	        }
	    }, {
	        key: 'stringify',
	        value: function stringify() {
	            if (this.stringified) return this.result;
	            this.stringified = true;

	            this.sync();

	            var opts = this.result.opts;
	            var str = _stringify3.default;
	            if (opts.syntax) str = opts.syntax.stringify;
	            if (opts.stringifier) str = opts.stringifier;
	            if (str.stringify) str = str.stringify;

	            var result = '';
	            str(this.root, function (i) {
	                result += i;
	            });
	            this.result.css = result;

	            return this.result;
	        }
	    }, {
	        key: 'processor',
	        get: function get() {
	            return this.result.processor;
	        }

	        /**
	         * Options from the {@link Processor#process} call.
	         * @type {processOptions}
	         */

	    }, {
	        key: 'opts',
	        get: function get() {
	            return this.result.opts;
	        }

	        /**
	         * Processes input CSS through synchronous plugins, converts `Root`
	         * to a CSS string and returns {@link Result#css}.
	         *
	         * This property will only work with synchronous plugins.
	         * If the processor contains any asynchronous plugins
	         * it will throw an error. This is why this method is only
	         * for debug purpose, you should always use {@link LazyResult#then}.
	         *
	         * @type {string}
	         * @see Result#css
	         */

	    }, {
	        key: 'css',
	        get: function get() {
	            return this.stringify().css;
	        }

	        /**
	         * An alias for the `css` property. Use it with syntaxes
	         * that generate non-CSS output.
	         *
	         * This property will only work with synchronous plugins.
	         * If the processor contains any asynchronous plugins
	         * it will throw an error. This is why this method is only
	         * for debug purpose, you should always use {@link LazyResult#then}.
	         *
	         * @type {string}
	         * @see Result#content
	         */

	    }, {
	        key: 'content',
	        get: function get() {
	            return this.stringify().content;
	        }

	        /**
	         * Processes input CSS through synchronous plugins
	         * and returns {@link Result#map}.
	         *
	         * This property will only work with synchronous plugins.
	         * If the processor contains any asynchronous plugins
	         * it will throw an error. This is why this method is only
	         * for debug purpose, you should always use {@link LazyResult#then}.
	         *
	         * @type {SourceMapGenerator}
	         * @see Result#map
	         */

	    }, {
	        key: 'map',
	        get: function get() {
	            return this.stringify().map;
	        }

	        /**
	         * Processes input CSS through synchronous plugins
	         * and returns {@link Result#root}.
	         *
	         * This property will only work with synchronous plugins. If the processor
	         * contains any asynchronous plugins it will throw an error.
	         *
	         * This is why this method is only for debug purpose,
	         * you should always use {@link LazyResult#then}.
	         *
	         * @type {Root}
	         * @see Result#root
	         */

	    }, {
	        key: 'root',
	        get: function get() {
	            return this.sync().root;
	        }

	        /**
	         * Processes input CSS through synchronous plugins
	         * and returns {@link Result#messages}.
	         *
	         * This property will only work with synchronous plugins. If the processor
	         * contains any asynchronous plugins it will throw an error.
	         *
	         * This is why this method is only for debug purpose,
	         * you should always use {@link LazyResult#then}.
	         *
	         * @type {Message[]}
	         * @see Result#messages
	         */

	    }, {
	        key: 'messages',
	        get: function get() {
	            return this.sync().messages;
	        }
	    }]);

	    return LazyResult;
	}();

	exports.default = LazyResult;
	module.exports = exports['default'];

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();

	var _warning = __webpack_require__(47);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	/**
	 * @typedef  {object} Message
	 * @property {string} type   - message type
	 * @property {string} plugin - source PostCSS plugin name
	 */

	/**
	 * Provides the result of the PostCSS transformations.
	 *
	 * A Result instance is returned by {@link LazyResult#then}
	 * or {@link Root#toResult} methods.
	 *
	 * @example
	 * postcss([cssnext]).process(css).then(function (result) {
	 *    console.log(result.css);
	 * });
	 *
	 * @example
	 * var result2 = postcss.parse(css).toResult();
	 */
	var Result = function () {

	  /**
	   * @param {Processor} processor - processor used for this transformation.
	   * @param {Root}      root      - Root node after all transformations.
	   * @param {processOptions} opts - options from the {@link Processor#process}
	   *                                or {@link Root#toResult}
	   */
	  function Result(processor, root, opts) {
	    _classCallCheck(this, Result);

	    /**
	     * @member {Processor} - The Processor instance used
	     *                       for this transformation.
	     *
	     * @example
	     * for ( let plugin of result.processor.plugins) {
	     *   if ( plugin.postcssPlugin === 'postcss-bad' ) {
	     *     throw 'postcss-good is incompatible with postcss-bad';
	     *   }
	     * });
	     */
	    this.processor = processor;
	    /**
	     * @member {Message[]} - Contains messages from plugins
	     *                       (e.g., warnings or custom messages).
	     *                       Each message should have type
	     *                       and plugin properties.
	     *
	     * @example
	     * postcss.plugin('postcss-min-browser', () => {
	     *   return (root, result) => {
	     *     var browsers = detectMinBrowsersByCanIUse(root);
	     *     result.messages.push({
	     *       type:    'min-browser',
	     *       plugin:  'postcss-min-browser',
	     *       browsers: browsers
	     *     });
	     *   };
	     * });
	     */
	    this.messages = [];
	    /**
	     * @member {Root} - Root node after all transformations.
	     *
	     * @example
	     * root.toResult().root == root;
	     */
	    this.root = root;
	    /**
	     * @member {processOptions} - Options from the {@link Processor#process}
	     *                            or {@link Root#toResult} call
	     *                            that produced this Result instance.
	     *
	     * @example
	     * root.toResult(opts).opts == opts;
	     */
	    this.opts = opts;
	    /**
	     * @member {string} - A CSS string representing of {@link Result#root}.
	     *
	     * @example
	     * postcss.parse('a{}').toResult().css //=> "a{}"
	     */
	    this.css = undefined;
	    /**
	     * @member {SourceMapGenerator} - An instance of `SourceMapGenerator`
	     *                                class from the `source-map` library,
	     *                                representing changes
	     *                                to the {@link Result#root} instance.
	     *
	     * @example
	     * result.map.toJSON() //=> { version: 3, file: 'a.css', … }
	     *
	     * @example
	     * if ( result.map ) {
	     *   fs.writeFileSync(result.opts.to + '.map', result.map.toString());
	     * }
	     */
	    this.map = undefined;
	  }

	  /**
	   * Returns for @{link Result#css} content.
	   *
	   * @example
	   * result + '' === result.css
	   *
	   * @return {string} string representing of {@link Result#root}
	   */

	  _createClass(Result, [{
	    key: 'toString',
	    value: function toString() {
	      return this.css;
	    }

	    /**
	     * Creates an instance of {@link Warning} and adds it
	     * to {@link Result#messages}.
	     *
	     * @param {string} text        - warning message
	     * @param {Object} [opts]      - warning options
	     * @param {Node}   opts.node   - CSS node that caused the warning
	     * @param {string} opts.word   - word in CSS source that caused the warning
	     * @param {number} opts.index  - index in CSS node string that caused
	     *                               the warning
	     * @param {string} opts.plugin - name of the plugin that created
	     *                               this warning. {@link Result#warn} fills
	     *                               this property automatically.
	     *
	     * @return {Warning} created warning
	     */

	  }, {
	    key: 'warn',
	    value: function warn(text) {
	      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	      if (!opts.plugin) {
	        if (this.lastPlugin && this.lastPlugin.postcssPlugin) {
	          opts.plugin = this.lastPlugin.postcssPlugin;
	        }
	      }

	      var warning = new _warning2.default(text, opts);
	      this.messages.push(warning);

	      return warning;
	    }

	    /**
	     * Returns warnings from plugins. Filters {@link Warning} instances
	     * from {@link Result#messages}.
	     *
	     * @example
	     * result.warnings().forEach(warn => {
	     *   console.warn(warn.toString());
	     * });
	     *
	     * @return {Warning[]} warnings from plugins
	     */

	  }, {
	    key: 'warnings',
	    value: function warnings() {
	      return this.messages.filter(function (i) {
	        return i.type === 'warning';
	      });
	    }

	    /**
	     * An alias for the {@link Result#css} property.
	     * Use it with syntaxes that generate non-CSS output.
	     * @type {string}
	     *
	     * @example
	     * result.css === result.content;
	     */

	  }, {
	    key: 'content',
	    get: function get() {
	      return this.css;
	    }
	  }]);

	  return Result;
	}();

	exports.default = Result;
	module.exports = exports['default'];

/***/ }),
/* 47 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	/**
	 * Represents a plugin’s warning. It can be created using {@link Node#warn}.
	 *
	 * @example
	 * if ( decl.important ) {
	 *     decl.warn(result, 'Avoid !important', { word: '!important' });
	 * }
	 */
	var Warning = function () {

	  /**
	   * @param {string} text        - warning message
	   * @param {Object} [opts]      - warning options
	   * @param {Node}   opts.node   - CSS node that caused the warning
	   * @param {string} opts.word   - word in CSS source that caused the warning
	   * @param {number} opts.index  - index in CSS node string that caused
	   *                               the warning
	   * @param {string} opts.plugin - name of the plugin that created
	   *                               this warning. {@link Result#warn} fills
	   *                               this property automatically.
	   */
	  function Warning(text) {
	    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	    _classCallCheck(this, Warning);

	    /**
	     * @member {string} - Type to filter warnings from
	     *                    {@link Result#messages}. Always equal
	     *                    to `"warning"`.
	     *
	     * @example
	     * const nonWarning = result.messages.filter(i => i.type !== 'warning')
	     */
	    this.type = 'warning';
	    /**
	     * @member {string} - The warning message.
	     *
	     * @example
	     * warning.text //=> 'Try to avoid !important'
	     */
	    this.text = text;

	    if (opts.node && opts.node.source) {
	      var pos = opts.node.positionBy(opts);
	      /**
	       * @member {number} - Line in the input file
	       *                    with this warning’s source
	       *
	       * @example
	       * warning.line //=> 5
	       */
	      this.line = pos.line;
	      /**
	       * @member {number} - Column in the input file
	       *                    with this warning’s source.
	       *
	       * @example
	       * warning.column //=> 6
	       */
	      this.column = pos.column;
	    }

	    for (var opt in opts) {
	      this[opt] = opts[opt];
	    }
	  }

	  /**
	   * Returns a warning position and message.
	   *
	   * @example
	   * warning.toString() //=> 'postcss-lint:a.css:10:14: Avoid !important'
	   *
	   * @return {string} warning position and message
	   */

	  _createClass(Warning, [{
	    key: 'toString',
	    value: function toString() {
	      if (this.node) {
	        return this.node.error(this.text, {
	          plugin: this.plugin,
	          index: this.index,
	          word: this.word
	        }).message;
	      } else if (this.plugin) {
	        return this.plugin + ': ' + this.text;
	      } else {
	        return this.text;
	      }
	    }

	    /**
	     * @memberof Warning#
	     * @member {string} plugin - The name of the plugin that created
	     *                           it will fill this property automatically.
	     *                           this warning. When you call {@link Node#warn}
	     *
	     * @example
	     * warning.plugin //=> 'postcss-important'
	     */

	    /**
	     * @memberof Warning#
	     * @member {Node} node - Contains the CSS node that caused the warning.
	     *
	     * @example
	     * warning.node.toString() //=> 'color: white !important'
	     */

	  }]);

	  return Warning;
	}();

	exports.default = Warning;
	module.exports = exports['default'];

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	} : function (obj) {
	  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	};

	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();

	var _lazyResult = __webpack_require__(45);

	var _lazyResult2 = _interopRequireDefault(_lazyResult);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	/**
	 * @callback builder
	 * @param {string} part          - part of generated CSS connected to this node
	 * @param {Node}   node          - AST node
	 * @param {"start"|"end"} [type] - node’s part type
	 */

	/**
	 * @callback parser
	 *
	 * @param {string|toString} css   - string with input CSS or any object
	 *                                  with toString() method, like a Buffer
	 * @param {processOptions} [opts] - options with only `from` and `map` keys
	 *
	 * @return {Root} PostCSS AST
	 */

	/**
	 * @callback stringifier
	 *
	 * @param {Node} node       - start node for stringifing. Usually {@link Root}.
	 * @param {builder} builder - function to concatenate CSS from node’s parts
	 *                            or generate string and source map
	 *
	 * @return {void}
	 */

	/**
	 * @typedef {object} syntax
	 * @property {parser} parse          - function to generate AST by string
	 * @property {stringifier} stringify - function to generate string by AST
	 */

	/**
	 * @typedef {object} toString
	 * @property {function} toString
	 */

	/**
	 * @callback pluginFunction
	 * @param {Root} root     - parsed input CSS
	 * @param {Result} result - result to set warnings or check other plugins
	 */

	/**
	 * @typedef {object} Plugin
	 * @property {function} postcss - PostCSS plugin function
	 */

	/**
	 * @typedef {object} processOptions
	 * @property {string} from             - the path of the CSS source file.
	 *                                       You should always set `from`,
	 *                                       because it is used in source map
	 *                                       generation and syntax error messages.
	 * @property {string} to               - the path where you’ll put the output
	 *                                       CSS file. You should always set `to`
	 *                                       to generate correct source maps.
	 * @property {parser} parser           - function to generate AST by string
	 * @property {stringifier} stringifier - class to generate string by AST
	 * @property {syntax} syntax           - object with `parse` and `stringify`
	 * @property {object} map              - source map options
	 * @property {boolean} map.inline                    - does source map should
	 *                                                     be embedded in the output
	 *                                                     CSS as a base64-encoded
	 *                                                     comment
	 * @property {string|object|false|function} map.prev - source map content
	 *                                                     from a previous
	 *                                                     processing step
	 *                                                     (for example, Sass).
	 *                                                     PostCSS will try to find
	 *                                                     previous map
	 *                                                     automatically, so you
	 *                                                     could disable it by
	 *                                                     `false` value.
	 * @property {boolean} map.sourcesContent            - does PostCSS should set
	 *                                                     the origin content to map
	 * @property {string|false} map.annotation           - does PostCSS should set
	 *                                                     annotation comment to map
	 * @property {string} map.from                       - override `from` in map’s
	 *                                                     `sources`
	 */

	/**
	 * Contains plugins to process CSS. Create one `Processor` instance,
	 * initialize its plugins, and then use that instance on numerous CSS files.
	 *
	 * @example
	 * const processor = postcss([autoprefixer, precss]);
	 * processor.process(css1).then(result => console.log(result.css));
	 * processor.process(css2).then(result => console.log(result.css));
	 */
	var Processor = function () {

	  /**
	   * @param {Array.<Plugin|pluginFunction>|Processor} plugins - PostCSS
	   *        plugins. See {@link Processor#use} for plugin format.
	   */
	  function Processor() {
	    var plugins = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

	    _classCallCheck(this, Processor);

	    /**
	     * @member {string} - Current PostCSS version.
	     *
	     * @example
	     * if ( result.processor.version.split('.')[0] !== '5' ) {
	     *   throw new Error('This plugin works only with PostCSS 5');
	     * }
	     */
	    this.version = '5.2.0';
	    /**
	     * @member {pluginFunction[]} - Plugins added to this processor.
	     *
	     * @example
	     * const processor = postcss([autoprefixer, precss]);
	     * processor.plugins.length //=> 2
	     */
	    this.plugins = this.normalize(plugins);
	  }

	  /**
	   * Adds a plugin to be used as a CSS processor.
	   *
	   * PostCSS plugin can be in 4 formats:
	   * * A plugin created by {@link postcss.plugin} method.
	   * * A function. PostCSS will pass the function a @{link Root}
	   *   as the first argument and current {@link Result} instance
	   *   as the second.
	   * * An object with a `postcss` method. PostCSS will use that method
	   *   as described in #2.
	   * * Another {@link Processor} instance. PostCSS will copy plugins
	   *   from that instance into this one.
	   *
	   * Plugins can also be added by passing them as arguments when creating
	   * a `postcss` instance (see [`postcss(plugins)`]).
	   *
	   * Asynchronous plugins should return a `Promise` instance.
	   *
	   * @param {Plugin|pluginFunction|Processor} plugin - PostCSS plugin
	   *                                                   or {@link Processor}
	   *                                                   with plugins
	   *
	   * @example
	   * const processor = postcss()
	   *   .use(autoprefixer)
	   *   .use(precss);
	   *
	   * @return {Processes} current processor to make methods chain
	   */

	  _createClass(Processor, [{
	    key: 'use',
	    value: function use(plugin) {
	      this.plugins = this.plugins.concat(this.normalize([plugin]));
	      return this;
	    }

	    /**
	     * Parses source CSS and returns a {@link LazyResult} Promise proxy.
	     * Because some plugins can be asynchronous it doesn’t make
	     * any transformations. Transformations will be applied
	     * in the {@link LazyResult} methods.
	     *
	     * @param {string|toString|Result} css - String with input CSS or
	     *                                       any object with a `toString()`
	     *                                       method, like a Buffer.
	     *                                       Optionally, send a {@link Result}
	     *                                       instance and the processor will
	     *                                       take the {@link Root} from it.
	     * @param {processOptions} [opts]      - options
	     *
	     * @return {LazyResult} Promise proxy
	     *
	     * @example
	     * processor.process(css, { from: 'a.css', to: 'a.out.css' })
	     *   .then(result => {
	     *      console.log(result.css);
	     *   });
	     */

	  }, {
	    key: 'process',
	    value: function process(css) {
	      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	      return new _lazyResult2.default(this, css, opts);
	    }
	  }, {
	    key: 'normalize',
	    value: function normalize(plugins) {
	      var normalized = [];
	      plugins.forEach(function (i) {
	        if (i.postcss) i = i.postcss;

	        if ((typeof i === 'undefined' ? 'undefined' : _typeof(i)) === 'object' && Array.isArray(i.plugins)) {
	          normalized = normalized.concat(i.plugins);
	        } else if (typeof i === 'function') {
	          normalized.push(i);
	        } else {
	          throw new Error(i + ' is not a PostCSS plugin');
	        }
	      });
	      return normalized;
	    }
	  }]);

	  return Processor;
	}();

	exports.default = Processor;
	module.exports = exports['default'];

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	}();

	var _tokenize2 = __webpack_require__(40);

	var _tokenize3 = _interopRequireDefault(_tokenize2);

	var _comment = __webpack_require__(43);

	var _comment2 = _interopRequireDefault(_comment);

	var _parser = __webpack_require__(33);

	var _parser2 = _interopRequireDefault(_parser);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}

	function _possibleConstructorReturn(self, call) {
	    if (!self) {
	        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	var SafeParser = function (_Parser) {
	    _inherits(SafeParser, _Parser);

	    function SafeParser() {
	        _classCallCheck(this, SafeParser);

	        return _possibleConstructorReturn(this, (SafeParser.__proto__ || Object.getPrototypeOf(SafeParser)).apply(this, arguments));
	    }

	    _createClass(SafeParser, [{
	        key: 'tokenize',
	        value: function tokenize() {
	            this.tokens = (0, _tokenize3.default)(this.input, { ignoreErrors: true });
	        }
	    }, {
	        key: 'comment',
	        value: function comment(token) {
	            var node = new _comment2.default();
	            this.init(node, token[2], token[3]);
	            node.source.end = { line: token[4], column: token[5] };

	            var text = token[1].slice(2);
	            if (text.slice(-2) === '*/') text = text.slice(0, -2);

	            if (/^\s*$/.test(text)) {
	                node.text = '';
	                node.raws.left = text;
	                node.raws.right = '';
	            } else {
	                var match = text.match(/^(\s*)([^]*[^\s])(\s*)$/);
	                node.text = match[2];
	                node.raws.left = match[1];
	                node.raws.right = match[3];
	            }
	        }
	    }, {
	        key: 'unclosedBracket',
	        value: function unclosedBracket() {}
	    }, {
	        key: 'unknownWord',
	        value: function unknownWord(start) {
	            var buffer = this.tokens.slice(start, this.pos + 1);
	            this.spaces += buffer.map(function (i) {
	                return i[1];
	            }).join('');
	        }
	    }, {
	        key: 'unexpectedClose',
	        value: function unexpectedClose() {
	            this.current.raws.after += '}';
	        }
	    }, {
	        key: 'doubleColon',
	        value: function doubleColon() {}
	    }, {
	        key: 'unnamedAtrule',
	        value: function unnamedAtrule(node) {
	            node.name = '';
	        }
	    }, {
	        key: 'precheckMissedSemicolon',
	        value: function precheckMissedSemicolon(tokens) {
	            var colon = this.colon(tokens);
	            if (colon === false) return;

	            var split = void 0;
	            for (split = colon - 1; split >= 0; split--) {
	                if (tokens[split][0] === 'word') break;
	            }
	            for (split -= 1; split >= 0; split--) {
	                if (tokens[split][0] !== 'space') {
	                    split += 1;
	                    break;
	                }
	            }
	            var other = tokens.splice(split, tokens.length - split);
	            this.decl(other);
	        }
	    }, {
	        key: 'checkMissedSemicolon',
	        value: function checkMissedSemicolon() {}
	    }, {
	        key: 'endFile',
	        value: function endFile() {
	            if (this.current.nodes && this.current.nodes.length) {
	                this.current.raws.semicolon = this.semicolon;
	            }
	            this.current.raws.after = (this.current.raws.after || '') + this.spaces;

	            while (this.current.parent) {
	                this.current = this.current.parent;
	                this.current.raws.after = '';
	            }
	        }
	    }]);

	    return SafeParser;
	}(_parser2.default);

	exports.default = SafeParser;
	module.exports = exports['default'];

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _camelizeStyleName = __webpack_require__(51);

	var _camelizeStyleName2 = _interopRequireDefault(_camelizeStyleName);

	var _hyphenateStyleName = __webpack_require__(20);

	var _hyphenateStyleName2 = _interopRequireDefault(_hyphenateStyleName);

	var _static = __webpack_require__(53);

	var _static2 = _interopRequireDefault(_static);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	function _defineProperty(obj, key, value) {
	  if (key in obj) {
	    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
	  } else {
	    obj[key] = value;
	  }return obj;
	}

	// eslint-disable-next-line


	var babelPluginFlowReactPropTypes_proptype_Container = __webpack_require__(31).babelPluginFlowReactPropTypes_proptype_Container || __webpack_require__(4).any;

	exports.default = function (root) {
	  root.walkDecls(function (decl) {
	    /* No point even checking custom props */
	    if (/^--/.test(decl.prop)) return;

	    var objStyle = _defineProperty({}, (0, _camelizeStyleName2.default)(decl.prop), decl.value);
	    var prefixed = (0, _static2.default)(objStyle);
	    Object.keys(prefixed).reverse().forEach(function (newProp) {
	      var newVals = prefixed[newProp];
	      var newValArray = Array.isArray(newVals) ? newVals : [newVals];
	      newValArray.forEach(function (newVal) {
	        decl.cloneBefore({
	          prop: (0, _hyphenateStyleName2.default)(newProp),
	          value: newVal
	        });
	      });
	    });
	    decl.remove();
	  });
	};

	module.exports = exports['default'];

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * @typechecks
	 */

	'use strict';

	var camelize = __webpack_require__(52);

	var msPattern = /^-ms-/;

	/**
	 * Camelcases a hyphenated CSS property name, for example:
	 *
	 *   > camelizeStyleName('background-color')
	 *   < "backgroundColor"
	 *   > camelizeStyleName('-moz-transition')
	 *   < "MozTransition"
	 *   > camelizeStyleName('-ms-transition')
	 *   < "msTransition"
	 *
	 * As Andi Smith suggests
	 * (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
	 * is converted to lowercase `ms`.
	 *
	 * @param {string} string
	 * @return {string}
	 */
	function camelizeStyleName(string) {
	  return camelize(string.replace(msPattern, 'ms-'));
	}

	module.exports = camelizeStyleName;

/***/ }),
/* 52 */
/***/ (function(module, exports) {

	"use strict";

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * @typechecks
	 */

	var _hyphenPattern = /-(.)/g;

	/**
	 * Camelcases a hyphenated string, for example:
	 *
	 *   > camelize('background-color')
	 *   < "backgroundColor"
	 *
	 * @param {string} string
	 * @return {string}
	 */
	function camelize(string) {
	  return string.replace(_hyphenPattern, function (_, character) {
	    return character.toUpperCase();
	  });
	}

	module.exports = camelize;

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(54);

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = prefixAll;

	var _prefixProps = __webpack_require__(55);

	var _prefixProps2 = _interopRequireDefault(_prefixProps);

	var _capitalizeString = __webpack_require__(56);

	var _capitalizeString2 = _interopRequireDefault(_capitalizeString);

	var _sortPrefixedStyle = __webpack_require__(57);

	var _sortPrefixedStyle2 = _interopRequireDefault(_sortPrefixedStyle);

	var _position = __webpack_require__(59);

	var _position2 = _interopRequireDefault(_position);

	var _calc = __webpack_require__(60);

	var _calc2 = _interopRequireDefault(_calc);

	var _cursor = __webpack_require__(63);

	var _cursor2 = _interopRequireDefault(_cursor);

	var _flex = __webpack_require__(64);

	var _flex2 = _interopRequireDefault(_flex);

	var _sizing = __webpack_require__(65);

	var _sizing2 = _interopRequireDefault(_sizing);

	var _gradient = __webpack_require__(66);

	var _gradient2 = _interopRequireDefault(_gradient);

	var _transition = __webpack_require__(67);

	var _transition2 = _interopRequireDefault(_transition);

	var _flexboxIE = __webpack_require__(69);

	var _flexboxIE2 = _interopRequireDefault(_flexboxIE);

	var _flexboxOld = __webpack_require__(70);

	var _flexboxOld2 = _interopRequireDefault(_flexboxOld);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	// special flexbox specifications


	var plugins = [_position2.default, _calc2.default, _cursor2.default, _sizing2.default, _gradient2.default, _transition2.default, _flexboxIE2.default, _flexboxOld2.default, _flex2.default];

	/**
	 * Returns a prefixed version of the style object using all vendor prefixes
	 * @param {Object} styles - Style object that gets prefixed properties added
	 * @returns {Object} - Style object with prefixed properties and values
	 */
	function prefixAll(styles) {
	  Object.keys(styles).forEach(function (property) {
	    var value = styles[property];
	    if (value instanceof Object && !Array.isArray(value)) {
	      // recurse through nested style objects
	      styles[property] = prefixAll(value);
	    } else {
	      Object.keys(_prefixProps2.default).forEach(function (prefix) {
	        var properties = _prefixProps2.default[prefix];
	        // add prefixes if needed
	        if (properties[property]) {
	          styles[prefix + (0, _capitalizeString2.default)(property)] = value;
	        }
	      });
	    }
	  });

	  Object.keys(styles).forEach(function (property) {
	    [].concat(styles[property]).forEach(function (value, index) {
	      // resolve every special plugins
	      plugins.forEach(function (plugin) {
	        return assignStyles(styles, plugin(property, value));
	      });
	    });
	  });

	  return (0, _sortPrefixedStyle2.default)(styles);
	}

	function assignStyles(base) {
	  var extend = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	  Object.keys(extend).forEach(function (property) {
	    var baseValue = base[property];
	    if (Array.isArray(baseValue)) {
	      [].concat(extend[property]).forEach(function (value) {
	        var valueIndex = baseValue.indexOf(value);
	        if (valueIndex > -1) {
	          base[property].splice(valueIndex, 1);
	        }
	        base[property].push(value);
	      });
	    } else {
	      base[property] = extend[property];
	    }
	  });
	}
	module.exports = exports['default'];

/***/ }),
/* 55 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = { "Webkit": { "transform": true, "transformOrigin": true, "transformOriginX": true, "transformOriginY": true, "backfaceVisibility": true, "perspective": true, "perspectiveOrigin": true, "transformStyle": true, "transformOriginZ": true, "animation": true, "animationDelay": true, "animationDirection": true, "animationFillMode": true, "animationDuration": true, "animationIterationCount": true, "animationName": true, "animationPlayState": true, "animationTimingFunction": true, "appearance": true, "userSelect": true, "fontKerning": true, "textEmphasisPosition": true, "textEmphasis": true, "textEmphasisStyle": true, "textEmphasisColor": true, "boxDecorationBreak": true, "clipPath": true, "maskImage": true, "maskMode": true, "maskRepeat": true, "maskPosition": true, "maskClip": true, "maskOrigin": true, "maskSize": true, "maskComposite": true, "mask": true, "maskBorderSource": true, "maskBorderMode": true, "maskBorderSlice": true, "maskBorderWidth": true, "maskBorderOutset": true, "maskBorderRepeat": true, "maskBorder": true, "maskType": true, "textDecorationStyle": true, "textDecorationSkip": true, "textDecorationLine": true, "textDecorationColor": true, "filter": true, "fontFeatureSettings": true, "breakAfter": true, "breakBefore": true, "breakInside": true, "columnCount": true, "columnFill": true, "columnGap": true, "columnRule": true, "columnRuleColor": true, "columnRuleStyle": true, "columnRuleWidth": true, "columns": true, "columnSpan": true, "columnWidth": true, "flex": true, "flexBasis": true, "flexDirection": true, "flexGrow": true, "flexFlow": true, "flexShrink": true, "flexWrap": true, "alignContent": true, "alignItems": true, "alignSelf": true, "justifyContent": true, "order": true, "transition": true, "transitionDelay": true, "transitionDuration": true, "transitionProperty": true, "transitionTimingFunction": true, "backdropFilter": true, "scrollSnapType": true, "scrollSnapPointsX": true, "scrollSnapPointsY": true, "scrollSnapDestination": true, "scrollSnapCoordinate": true, "shapeImageThreshold": true, "shapeImageMargin": true, "shapeImageOutside": true, "hyphens": true, "flowInto": true, "flowFrom": true, "regionFragment": true, "textSizeAdjust": true }, "Moz": { "appearance": true, "userSelect": true, "boxSizing": true, "textAlignLast": true, "textDecorationStyle": true, "textDecorationSkip": true, "textDecorationLine": true, "textDecorationColor": true, "tabSize": true, "hyphens": true, "fontFeatureSettings": true, "breakAfter": true, "breakBefore": true, "breakInside": true, "columnCount": true, "columnFill": true, "columnGap": true, "columnRule": true, "columnRuleColor": true, "columnRuleStyle": true, "columnRuleWidth": true, "columns": true, "columnSpan": true, "columnWidth": true }, "ms": { "flex": true, "flexBasis": false, "flexDirection": true, "flexGrow": false, "flexFlow": true, "flexShrink": false, "flexWrap": true, "alignContent": false, "alignItems": false, "alignSelf": false, "justifyContent": false, "order": false, "transform": true, "transformOrigin": true, "transformOriginX": true, "transformOriginY": true, "userSelect": true, "wrapFlow": true, "wrapThrough": true, "wrapMargin": true, "scrollSnapType": true, "scrollSnapPointsX": true, "scrollSnapPointsY": true, "scrollSnapDestination": true, "scrollSnapCoordinate": true, "touchAction": true, "hyphens": true, "flowInto": true, "flowFrom": true, "breakBefore": true, "breakAfter": true, "breakInside": true, "regionFragment": true, "gridTemplateColumns": true, "gridTemplateRows": true, "gridTemplateAreas": true, "gridTemplate": true, "gridAutoColumns": true, "gridAutoRows": true, "gridAutoFlow": true, "grid": true, "gridRowStart": true, "gridColumnStart": true, "gridRowEnd": true, "gridRow": true, "gridColumn": true, "gridColumnEnd": true, "gridColumnGap": true, "gridRowGap": true, "gridArea": true, "gridGap": true, "textSizeAdjust": true } };
	module.exports = exports["default"];

/***/ }),
/* 56 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// helper to capitalize strings

	exports.default = function (str) {
	  return str.charAt(0).toUpperCase() + str.slice(1);
	};

	module.exports = exports["default"];

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = sortPrefixedStyle;

	var _isPrefixedProperty = __webpack_require__(58);

	var _isPrefixedProperty2 = _interopRequireDefault(_isPrefixedProperty);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	function sortPrefixedStyle(style) {
	  return Object.keys(style).sort(function (left, right) {
	    if ((0, _isPrefixedProperty2.default)(left) && !(0, _isPrefixedProperty2.default)(right)) {
	      return -1;
	    } else if (!(0, _isPrefixedProperty2.default)(left) && (0, _isPrefixedProperty2.default)(right)) {
	      return 1;
	    }
	    return 0;
	  }).reduce(function (sortedStyle, prop) {
	    sortedStyle[prop] = style[prop];
	    return sortedStyle;
	  }, {});
	}
	module.exports = exports['default'];

/***/ }),
/* 58 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (property) {
	  return property.match(/^(Webkit|Moz|O|ms)/) !== null;
	};

	module.exports = exports["default"];

/***/ }),
/* 59 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = position;
	function position(property, value) {
	  if (property === 'position' && value === 'sticky') {
	    return { position: ['-webkit-sticky', 'sticky'] };
	  }
	}
	module.exports = exports['default'];

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = calc;

	var _joinPrefixedValue = __webpack_require__(61);

	var _joinPrefixedValue2 = _interopRequireDefault(_joinPrefixedValue);

	var _isPrefixedValue = __webpack_require__(62);

	var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	function calc(property, value) {
	  if (typeof value === 'string' && !(0, _isPrefixedValue2.default)(value) && value.indexOf('calc(') > -1) {
	    return (0, _joinPrefixedValue2.default)(property, value, function (prefix, value) {
	      return value.replace(/calc\(/g, prefix + 'calc(');
	    });
	  }
	}
	module.exports = exports['default'];

/***/ }),
/* 61 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _defineProperty(obj, key, value) {
	  if (key in obj) {
	    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
	  } else {
	    obj[key] = value;
	  }return obj;
	}

	// returns a style object with a single concated prefixed value string

	exports.default = function (property, value) {
	  var replacer = arguments.length <= 2 || arguments[2] === undefined ? function (prefix, value) {
	    return prefix + value;
	  } : arguments[2];
	  return _defineProperty({}, property, ['-webkit-', '-moz-', ''].map(function (prefix) {
	    return replacer(prefix, value);
	  }));
	};

	module.exports = exports['default'];

/***/ }),
/* 62 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (value) {
	  if (Array.isArray(value)) value = value.join(',');

	  return value.match(/-webkit-|-moz-|-ms-/) !== null;
	};

	module.exports = exports['default'];

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = cursor;

	var _joinPrefixedValue = __webpack_require__(61);

	var _joinPrefixedValue2 = _interopRequireDefault(_joinPrefixedValue);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	var values = {
	  'zoom-in': true,
	  'zoom-out': true,
	  grab: true,
	  grabbing: true
	};

	function cursor(property, value) {
	  if (property === 'cursor' && values[value]) {
	    return (0, _joinPrefixedValue2.default)(property, value);
	  }
	}
	module.exports = exports['default'];

/***/ }),
/* 64 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = flex;
	var values = { flex: true, 'inline-flex': true };

	function flex(property, value) {
	  if (property === 'display' && values[value]) {
	    return {
	      display: ['-webkit-box', '-moz-box', '-ms-' + value + 'box', '-webkit-' + value, value]
	    };
	  }
	}
	module.exports = exports['default'];

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = sizing;

	var _joinPrefixedValue = __webpack_require__(61);

	var _joinPrefixedValue2 = _interopRequireDefault(_joinPrefixedValue);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	var properties = {
	  maxHeight: true,
	  maxWidth: true,
	  width: true,
	  height: true,
	  columnWidth: true,
	  minWidth: true,
	  minHeight: true
	};
	var values = {
	  'min-content': true,
	  'max-content': true,
	  'fill-available': true,
	  'fit-content': true,
	  'contain-floats': true
	};

	function sizing(property, value) {
	  if (properties[property] && values[value]) {
	    return (0, _joinPrefixedValue2.default)(property, value);
	  }
	}
	module.exports = exports['default'];

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = gradient;

	var _joinPrefixedValue = __webpack_require__(61);

	var _joinPrefixedValue2 = _interopRequireDefault(_joinPrefixedValue);

	var _isPrefixedValue = __webpack_require__(62);

	var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	var values = /linear-gradient|radial-gradient|repeating-linear-gradient|repeating-radial-gradient/;

	function gradient(property, value) {
	  if (typeof value === 'string' && !(0, _isPrefixedValue2.default)(value) && value.match(values) !== null) {
	    return (0, _joinPrefixedValue2.default)(property, value);
	  }
	}
	module.exports = exports['default'];

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = transition;

	var _hyphenateStyleName = __webpack_require__(68);

	var _hyphenateStyleName2 = _interopRequireDefault(_hyphenateStyleName);

	var _capitalizeString = __webpack_require__(56);

	var _capitalizeString2 = _interopRequireDefault(_capitalizeString);

	var _isPrefixedValue = __webpack_require__(62);

	var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

	var _prefixProps = __webpack_require__(55);

	var _prefixProps2 = _interopRequireDefault(_prefixProps);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	function _defineProperty(obj, key, value) {
	  if (key in obj) {
	    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
	  } else {
	    obj[key] = value;
	  }return obj;
	}

	var properties = {
	  transition: true,
	  transitionProperty: true,
	  WebkitTransition: true,
	  WebkitTransitionProperty: true
	};

	function transition(property, value) {
	  // also check for already prefixed transitions
	  if (typeof value === 'string' && properties[property]) {
	    var _ref2;

	    var outputValue = prefixValue(value);
	    var webkitOutput = outputValue.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter(function (value) {
	      return value.match(/-moz-|-ms-/) === null;
	    }).join(',');

	    // if the property is already prefixed
	    if (property.indexOf('Webkit') > -1) {
	      return _defineProperty({}, property, webkitOutput);
	    }

	    return _ref2 = {}, _defineProperty(_ref2, 'Webkit' + (0, _capitalizeString2.default)(property), webkitOutput), _defineProperty(_ref2, property, outputValue), _ref2;
	  }
	}

	function prefixValue(value) {
	  if ((0, _isPrefixedValue2.default)(value)) {
	    return value;
	  }

	  // only split multi values, not cubic beziers
	  var multipleValues = value.split(/,(?![^()]*(?:\([^()]*\))?\))/g);

	  // iterate each single value and check for transitioned properties
	  // that need to be prefixed as well
	  multipleValues.forEach(function (val, index) {
	    multipleValues[index] = Object.keys(_prefixProps2.default).reduce(function (out, prefix) {
	      var dashCasePrefix = '-' + prefix.toLowerCase() + '-';

	      Object.keys(_prefixProps2.default[prefix]).forEach(function (prop) {
	        var dashCaseProperty = (0, _hyphenateStyleName2.default)(prop);

	        if (val.indexOf(dashCaseProperty) > -1 && dashCaseProperty !== 'order') {
	          // join all prefixes and create a new value
	          out = val.replace(dashCaseProperty, dashCasePrefix + dashCaseProperty) + ',' + out;
	        }
	      });
	      return out;
	    }, val);
	  });

	  return multipleValues.join(',');
	}
	module.exports = exports['default'];

/***/ }),
/* 68 */
/***/ (function(module, exports) {

	'use strict';

	var uppercasePattern = /[A-Z]/g;
	var msPattern = /^ms-/;
	var cache = {};

	function hyphenateStyleName(string) {
	  return string in cache ? cache[string] : cache[string] = string.replace(uppercasePattern, '-$&').toLowerCase().replace(msPattern, '-ms-');
	}

	module.exports = hyphenateStyleName;

/***/ }),
/* 69 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = flexboxIE;

	function _defineProperty(obj, key, value) {
	  if (key in obj) {
	    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
	  } else {
	    obj[key] = value;
	  }return obj;
	}

	var alternativeValues = {
	  'space-around': 'distribute',
	  'space-between': 'justify',
	  'flex-start': 'start',
	  'flex-end': 'end'
	};
	var alternativeProps = {
	  alignContent: 'msFlexLinePack',
	  alignSelf: 'msFlexItemAlign',
	  alignItems: 'msFlexAlign',
	  justifyContent: 'msFlexPack',
	  order: 'msFlexOrder',
	  flexGrow: 'msFlexPositive',
	  flexShrink: 'msFlexNegative',
	  flexBasis: 'msPreferredSize'
	};

	function flexboxIE(property, value) {
	  if (alternativeProps[property]) {
	    return _defineProperty({}, alternativeProps[property], alternativeValues[value] || value);
	  }
	}
	module.exports = exports['default'];

/***/ }),
/* 70 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = flexboxOld;

	function _defineProperty(obj, key, value) {
	  if (key in obj) {
	    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
	  } else {
	    obj[key] = value;
	  }return obj;
	}

	var alternativeValues = {
	  'space-around': 'justify',
	  'space-between': 'justify',
	  'flex-start': 'start',
	  'flex-end': 'end',
	  'wrap-reverse': 'multiple',
	  wrap: 'multiple'
	};

	var alternativeProps = {
	  alignItems: 'WebkitBoxAlign',
	  justifyContent: 'WebkitBoxPack',
	  flexWrap: 'WebkitBoxLines'
	};

	function flexboxOld(property, value) {
	  if (property === 'flexDirection' && typeof value === 'string') {
	    return {
	      WebkitBoxOrient: value.indexOf('column') > -1 ? 'vertical' : 'horizontal',
	      WebkitBoxDirection: value.indexOf('reverse') > -1 ? 'reverse' : 'normal'
	    };
	  }
	  if (alternativeProps[property]) {
	    return _defineProperty({}, alternativeProps[property], alternativeValues[value] || value);
	  }
	}
	module.exports = exports['default'];

/***/ }),
/* 71 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	function selectors(parent, node) {
	  var result = [];
	  parent.selectors.forEach(function (i) {
	    node.selectors.forEach(function (j) {
	      if (j.indexOf('&') === -1) {
	        result.push(i + ' ' + j);
	      } else {
	        result.push(j.replace(/&/g, i));
	      }
	    });
	  });
	  return result;
	}

	function pickComment(comment, after) {
	  if (comment && comment.type === 'comment') {
	    return comment.moveAfter(after);
	  } else {
	    return after;
	  }
	}

	function atruleChilds(rule, atrule) {
	  var children = [];
	  atrule.each(function (child) {
	    if (child.type === 'comment') {
	      children.push(child);
	    }
	    if (child.type === 'decl') {
	      children.push(child);
	    } else if (child.type === 'rule') {
	      child.selectors = selectors(rule, child);
	    } else if (child.type === 'atrule') {
	      atruleChilds(rule, child);
	    }
	  });
	  if (children.length) {
	    var clone = rule.clone({ nodes: [] });
	    for (var i = 0; i < children.length; i++) {
	      children[i].moveTo(clone);
	    }atrule.prepend(clone);
	  }
	}

	function processRule(rule, bubble) {
	  var unwrapped = false;
	  var after = rule;
	  rule.each(function (child) {
	    if (child.type === 'rule') {
	      unwrapped = true;
	      child.selectors = selectors(rule, child);
	      after = pickComment(child.prev(), after);
	      after = child.moveAfter(after);
	    } else if (child.type === 'atrule') {
	      if (bubble.indexOf(child.name) !== -1) {
	        unwrapped = true;
	        atruleChilds(rule, child);
	        after = pickComment(child.prev(), after);
	        after = child.moveAfter(after);
	      }
	    }
	  });
	  if (unwrapped) {
	    rule.raws.semicolon = true;
	    if (rule.nodes.length === 0) rule.remove();
	  }
	}

	var bubble = ['media', 'supports', 'document'];

	var process = function process(node) {
	  node.each(function (child) {
	    if (child.type === 'rule') {
	      processRule(child, bubble);
	    } else if (child.type === 'atrule') {
	      process(child);
	    }
	  });
	};

	exports.default = process;
	module.exports = exports['default'];

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();

	/* Wraps glamor's stylesheet and exports a singleton for styled components
	to use. */

	var _sheet = __webpack_require__(73);

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	var babelPluginFlowReactPropTypes_proptype_GlamorInsertedRule = __webpack_require__(18).babelPluginFlowReactPropTypes_proptype_GlamorInsertedRule || __webpack_require__(4).any;

	var babelPluginFlowReactPropTypes_proptype_GlamorRule = __webpack_require__(18).babelPluginFlowReactPropTypes_proptype_GlamorRule || __webpack_require__(4).any;

	var StyleSheet = function () {
	  function StyleSheet() {
	    _classCallCheck(this, StyleSheet);

	    /* Don't specify a maxLength for the global sheet, since these rules
	     * are defined at initialization and should remain static after that */
	    this.globalStyleSheet = new _sheet.StyleSheet({ speedy: false });
	    this.componentStyleSheet = new _sheet.StyleSheet({ speedy: false, maxLength: 40 });
	  }

	  _createClass(StyleSheet, [{
	    key: 'inject',
	    value: function inject() {
	      this.globalStyleSheet.inject();
	      this.componentStyleSheet.inject();
	    }
	  }, {
	    key: 'flush',
	    value: function flush() {
	      if (this.globalStyleSheet.sheet) this.globalStyleSheet.flush();
	      if (this.componentStyleSheet.sheet) this.componentStyleSheet.flush();
	    }
	  }, {
	    key: 'insert',
	    value: function insert(rule) {
	      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { global: false };

	      var sheet = opts.global ? this.globalStyleSheet : this.componentStyleSheet;
	      return sheet.insert(rule);
	    }
	  }, {
	    key: 'rules',
	    value: function rules() {
	      return this.globalStyleSheet.rules().concat(this.componentStyleSheet.rules());
	    }
	  }, {
	    key: 'injected',
	    get: function get() {
	      return this.globalStyleSheet.injected && this.componentStyleSheet.injected;
	    }
	  }]);

	  return StyleSheet;
	}();

	/* Export stylesheet as a singleton class */

	exports.default = new StyleSheet();
	module.exports = exports['default'];

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();

	function _toConsumableArray(arr) {
	  if (Array.isArray(arr)) {
	    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
	      arr2[i] = arr[i];
	    }return arr2;
	  } else {
	    return Array.from(arr);
	  }
	}

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	/*

	high performance StyleSheet for css-in-js systems

	- uses multiple style tags behind the scenes for millions of rules
	- uses `insertRule` for appending in production for *much* faster performance
	- 'polyfills' on server side


	// usage

	import StyleSheet from 'glamor/lib/sheet'
	let styleSheet = new StyleSheet()

	styleSheet.inject()
	- 'injects' the stylesheet into the page (or into memory if on server)

	styleSheet.insert('#box { border: 1px solid red; }')
	- appends a css rule into the stylesheet

	styleSheet.flush()
	- empties the stylesheet of all its contents


	*/

	function last(arr) {
	  return arr[arr.length - 1];
	}

	function sheetForTag(tag) {
	  if (tag.sheet) {
	    return tag.sheet;
	  }

	  for (var i = 0; i < document.styleSheets.length; i++) {
	    if (document.styleSheets[i].ownerNode === tag) {
	      return document.styleSheets[i];
	    }
	  }
	}

	var isBrowser = typeof document !== 'undefined';
	var isDev = function (x) {
	  return x === 'development' || !x;
	}(process.env.NODE_ENV);
	var isTest = process.env.NODE_ENV === 'test';

	var oldIE = function () {
	  if (isBrowser) {
	    var div = document.createElement('div');
	    div.innerHTML = '<!--[if lt IE 10]><i></i><![endif]-->';
	    return div.getElementsByTagName('i').length === 1;
	  }
	}();

	function makeStyleTag() {
	  var tag = document.createElement('style');
	  tag.type = 'text/css';
	  tag.appendChild(document.createTextNode(''));
	  (document.head || document.getElementsByTagName('head')[0]).appendChild(tag);
	  return tag;
	}

	var StyleSheet = exports.StyleSheet = function () {
	  function StyleSheet() {
	    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
	        _ref$speedy = _ref.speedy,
	        speedy = _ref$speedy === undefined ? !isDev && !isTest : _ref$speedy,
	        _ref$maxLength = _ref.maxLength,
	        maxLength = _ref$maxLength === undefined ? isBrowser && oldIE ? 4000 : 65000 : _ref$maxLength;

	    _classCallCheck(this, StyleSheet);

	    this.isSpeedy = speedy; // the big drawback here is that the css won't be editable in devtools
	    this.sheet = undefined;
	    this.tags = [];
	    this.maxLength = maxLength;
	    this.ctr = 0;
	  }

	  _createClass(StyleSheet, [{
	    key: 'inject',
	    value: function inject() {
	      var _this = this;

	      if (this.injected) {
	        throw new Error('already injected stylesheet!');
	      }
	      if (isBrowser) {
	        // this section is just weird alchemy I found online off many sources
	        this.tags[0] = makeStyleTag();
	        // this weirdness brought to you by firefox
	        this.sheet = sheetForTag(this.tags[0]);
	      } else {
	        // server side 'polyfill'. just enough behavior to be useful.
	        this.sheet = {
	          cssRules: [],
	          insertRule: function insertRule(rule) {
	            // enough 'spec compliance' to be able to extract the rules later
	            // in other words, just the cssText field
	            var serverRule = { cssText: rule };
	            _this.sheet.cssRules.push(serverRule);
	            return { serverRule: serverRule, appendRule: function appendRule(newCss) {
	                return serverRule.cssText += newCss;
	              } };
	          }
	        };
	      }
	      this.injected = true;
	    }
	  }, {
	    key: 'speedy',
	    value: function speedy(bool) {
	      if (this.ctr !== 0) {
	        throw new Error('cannot change speedy mode after inserting any rule to sheet. Either call speedy(' + bool + ') earlier in your app, or call flush() before speedy(' + bool + ')');
	      }
	      this.isSpeedy = !!bool;
	    }
	  }, {
	    key: '_insert',
	    value: function _insert(rule) {
	      // this weirdness for perf, and chrome's weird bug
	      // https://stackoverflow.com/questions/20007992/chrome-suddenly-stopped-accepting-insertrule
	      try {
	        this.sheet.insertRule(rule, this.sheet.cssRules.length); // todo - correct index here
	      } catch (e) {
	        if (isDev) {
	          // might need beter dx for this
	          console.warn('whoops, illegal rule inserted', rule); //eslint-disable-line no-console
	        }
	      }
	    }
	  }, {
	    key: 'insert',
	    value: function insert(rule) {
	      var insertedRule = void 0;

	      if (isBrowser) {
	        // this is the ultrafast version, works across browsers
	        if (this.isSpeedy && this.sheet.insertRule) {
	          this._insert(rule);
	        } else {
	          var textNode = document.createTextNode(rule);
	          last(this.tags).appendChild(textNode);
	          insertedRule = { textNode: textNode, appendRule: function appendRule(newCss) {
	              return textNode.appendData(newCss);
	            } };

	          if (!this.isSpeedy) {
	            // sighhh
	            this.sheet = sheetForTag(last(this.tags));
	          }
	        }
	      } else {
	        // server side is pretty simple
	        insertedRule = this.sheet.insertRule(rule);
	      }

	      this.ctr++;
	      if (isBrowser && this.ctr % this.maxLength === 0) {
	        this.tags.push(makeStyleTag());
	        this.sheet = sheetForTag(last(this.tags));
	      }
	      return insertedRule;
	    }
	  }, {
	    key: 'flush',
	    value: function flush() {
	      if (isBrowser) {
	        this.tags.forEach(function (tag) {
	          return tag.parentNode.removeChild(tag);
	        });
	        this.tags = [];
	        this.sheet = null;
	        this.ctr = 0;
	        // todo - look for remnants in document.styleSheets
	      } else {
	        // simpler on server
	        this.sheet.cssRules = [];
	      }
	      this.injected = false;
	    }
	  }, {
	    key: 'rules',
	    value: function rules() {
	      if (!isBrowser) {
	        return this.sheet.cssRules;
	      }
	      var arr = [];
	      this.tags.forEach(function (tag) {
	        return arr.splice.apply(arr, [arr.length, 0].concat(_toConsumableArray(Array.from(sheetForTag(tag).cssRules))));
	      });
	      return arr;
	    }
	  }]);

	  return StyleSheet;
	}();
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};

	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();

	var _react = __webpack_require__(2);

	var _validAttr = __webpack_require__(75);

	var _validAttr2 = _interopRequireDefault(_validAttr);

	var _isTag = __webpack_require__(76);

	var _isTag2 = _interopRequireDefault(_isTag);

	var _AbstractStyledComponent = __webpack_require__(77);

	var _AbstractStyledComponent2 = _interopRequireDefault(_AbstractStyledComponent);

	var _ThemeProvider = __webpack_require__(78);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	var babelPluginFlowReactPropTypes_proptype_Theme = __webpack_require__(78).babelPluginFlowReactPropTypes_proptype_Theme || __webpack_require__(4).any;

	var babelPluginFlowReactPropTypes_proptype_Target = __webpack_require__(18).babelPluginFlowReactPropTypes_proptype_Target || __webpack_require__(4).any;

	var babelPluginFlowReactPropTypes_proptype_RuleSet = __webpack_require__(18).babelPluginFlowReactPropTypes_proptype_RuleSet || __webpack_require__(4).any;

	exports.default = function (ComponentStyle) {
	  // eslint-disable-next-line no-undef
	  var createStyledComponent = function createStyledComponent(target, rules, parent) {
	    /* Handle styled(OtherStyledComponent) differently */
	    var isStyledComponent = _AbstractStyledComponent2.default.isPrototypeOf(target);
	    if (!(0, _isTag2.default)(target) && isStyledComponent) {
	      return createStyledComponent(target.target, target.rules.concat(rules), target);
	    }

	    var componentStyle = new ComponentStyle(rules);
	    var ParentComponent = parent || _AbstractStyledComponent2.default;

	    var StyledComponent = function (_ParentComponent) {
	      _inherits(StyledComponent, _ParentComponent);

	      function StyledComponent() {
	        var _ref;

	        var _temp, _this, _ret;

	        _classCallCheck(this, StyledComponent);

	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	          args[_key] = arguments[_key];
	        }

	        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = StyledComponent.__proto__ || Object.getPrototypeOf(StyledComponent)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	          theme: null,
	          generatedClassName: ''
	        }, _temp), _possibleConstructorReturn(_this, _ret);
	      }

	      _createClass(StyledComponent, [{
	        key: 'generateAndInjectStyles',
	        value: function generateAndInjectStyles(theme, props) {
	          var executionContext = _extends({}, props, { theme: theme });
	          return componentStyle.generateAndInjectStyles(executionContext);
	        }
	      }, {
	        key: 'componentWillMount',
	        value: function componentWillMount() {
	          var _this2 = this;

	          // If there is a theme in the context, subscribe to the event emitter. This
	          // is necessary due to pure components blocking context updates, this circumvents
	          // that by updating when an event is emitted
	          if (this.context[_ThemeProvider.CHANNEL]) {
	            var subscribe = this.context[_ThemeProvider.CHANNEL];
	            this.unsubscribe = subscribe(function (nextTheme) {
	              // This will be called once immediately

	              // Props should take precedence over ThemeProvider, which should take precedence over
	              // defaultProps, but React automatically puts defaultProps on props.
	              var defaultProps = _this2.constructor.defaultProps;

	              var isDefaultTheme = defaultProps && _this2.props.theme === defaultProps.theme;
	              var theme = _this2.props.theme && !isDefaultTheme ? _this2.props.theme : nextTheme;
	              var generatedClassName = _this2.generateAndInjectStyles(theme, _this2.props);
	              _this2.setState({ theme: theme, generatedClassName: generatedClassName });
	            });
	          } else {
	            var _theme = this.props.theme || {};
	            var generatedClassName = this.generateAndInjectStyles(_theme, this.props);
	            this.setState({ theme: _theme, generatedClassName: generatedClassName });
	          }
	        }
	      }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	          var _this3 = this;

	          this.setState(function (oldState) {
	            // Props should take precedence over ThemeProvider, which should take precedence over
	            // defaultProps, but React automatically puts defaultProps on props.
	            var defaultProps = _this3.constructor.defaultProps;

	            var isDefaultTheme = defaultProps && nextProps.theme === defaultProps.theme;
	            var theme = nextProps.theme && !isDefaultTheme ? nextProps.theme : oldState.theme;
	            var generatedClassName = _this3.generateAndInjectStyles(theme, nextProps);

	            return { theme: theme, generatedClassName: generatedClassName };
	          });
	        }
	      }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	          if (this.unsubscribe) {
	            this.unsubscribe();
	          }
	        }
	      }, {
	        key: 'render',
	        value: function render() {
	          var _this4 = this;

	          var _props = this.props,
	              className = _props.className,
	              children = _props.children,
	              innerRef = _props.innerRef;
	          var generatedClassName = this.state.generatedClassName;

	          var propsForElement = {};
	          /* Don't pass through non HTML tags through to HTML elements */
	          Object.keys(this.props).filter(function (propName) {
	            return !(0, _isTag2.default)(target) || (0, _validAttr2.default)(propName);
	          }).forEach(function (propName) {
	            propsForElement[propName] = _this4.props[propName];
	          });
	          propsForElement.className = [className, generatedClassName].filter(function (x) {
	            return x;
	          }).join(' ');
	          if (innerRef) {
	            propsForElement.ref = innerRef;
	            if ((0, _isTag2.default)(target)) delete propsForElement.innerRef;
	          }

	          return (0, _react.createElement)(target, propsForElement, children);
	        }
	      }]);

	      return StyledComponent;
	    }(ParentComponent);

	    StyledComponent.contextTypes = ParentComponent.contextTypes;

	    StyledComponent.target = target;
	    StyledComponent.rules = rules;

	    StyledComponent.displayName = (0, _isTag2.default)(target) ? 'styled.' + target : 'Styled(' + (target.displayName || target.name || 'Component') + ')';

	    return StyledComponent;
	  };

	  return createStyledComponent;
	};

	module.exports = exports['default'];

/***/ }),
/* 75 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	/* Trying to avoid the unknown-prop errors on styled components
	 by filtering by React's attribute whitelist.
	 */

	/* Logic copied from ReactDOMUnknownPropertyHook */
	var reactProps = {
	  children: true,
	  dangerouslySetInnerHTML: true,
	  key: true,
	  ref: true,
	  autoFocus: true,
	  defaultValue: true,
	  valueLink: true,
	  defaultChecked: true,
	  checkedLink: true,
	  innerHTML: true,
	  suppressContentEditableWarning: true,
	  onFocusIn: true,
	  onFocusOut: true,
	  className: true,

	  /* List copied from https://facebook.github.io/react/docs/events.html */
	  onCopy: true,
	  onCut: true,
	  onPaste: true,
	  onCompositionEnd: true,
	  onCompositionStart: true,
	  onCompositionUpdate: true,
	  onKeyDown: true,
	  onKeyPress: true,
	  onKeyUp: true,
	  onFocus: true,
	  onBlur: true,
	  onChange: true,
	  onInput: true,
	  onSubmit: true,
	  onClick: true,
	  onContextMenu: true,
	  onDoubleClick: true,
	  onDrag: true,
	  onDragEnd: true,
	  onDragEnter: true,
	  onDragExit: true,
	  onDragLeave: true,
	  onDragOver: true,
	  onDragStart: true,
	  onDrop: true,
	  onMouseDown: true,
	  onMouseEnter: true,
	  onMouseLeave: true,
	  onMouseMove: true,
	  onMouseOut: true,
	  onMouseOver: true,
	  onMouseUp: true,
	  onSelect: true,
	  onTouchCancel: true,
	  onTouchEnd: true,
	  onTouchMove: true,
	  onTouchStart: true,
	  onScroll: true,
	  onWheel: true,
	  onAbort: true,
	  onCanPlay: true,
	  onCanPlayThrough: true,
	  onDurationChange: true,
	  onEmptied: true,
	  onEncrypted: true,
	  onEnded: true,
	  onError: true,
	  onLoadedData: true,
	  onLoadedMetadata: true,
	  onLoadStart: true,
	  onPause: true,
	  onPlay: true,
	  onPlaying: true,
	  onProgress: true,
	  onRateChange: true,
	  onSeeked: true,
	  onSeeking: true,
	  onStalled: true,
	  onSuspend: true,
	  onTimeUpdate: true,
	  onVolumeChange: true,
	  onWaiting: true,
	  onLoad: true,
	  onAnimationStart: true,
	  onAnimationEnd: true,
	  onAnimationIteration: true,
	  onTransitionEnd: true,

	  onCopyCapture: true,
	  onCutCapture: true,
	  onPasteCapture: true,
	  onCompositionEndCapture: true,
	  onCompositionStartCapture: true,
	  onCompositionUpdateCapture: true,
	  onKeyDownCapture: true,
	  onKeyPressCapture: true,
	  onKeyUpCapture: true,
	  onFocusCapture: true,
	  onBlurCapture: true,
	  onChangeCapture: true,
	  onInputCapture: true,
	  onSubmitCapture: true,
	  onClickCapture: true,
	  onContextMenuCapture: true,
	  onDoubleClickCapture: true,
	  onDragCapture: true,
	  onDragEndCapture: true,
	  onDragEnterCapture: true,
	  onDragExitCapture: true,
	  onDragLeaveCapture: true,
	  onDragOverCapture: true,
	  onDragStartCapture: true,
	  onDropCapture: true,
	  onMouseDownCapture: true,
	  onMouseEnterCapture: true,
	  onMouseLeaveCapture: true,
	  onMouseMoveCapture: true,
	  onMouseOutCapture: true,
	  onMouseOverCapture: true,
	  onMouseUpCapture: true,
	  onSelectCapture: true,
	  onTouchCancelCapture: true,
	  onTouchEndCapture: true,
	  onTouchMoveCapture: true,
	  onTouchStartCapture: true,
	  onScrollCapture: true,
	  onWheelCapture: true,
	  onAbortCapture: true,
	  onCanPlayCapture: true,
	  onCanPlayThroughCapture: true,
	  onDurationChangeCapture: true,
	  onEmptiedCapture: true,
	  onEncryptedCapture: true,
	  onEndedCapture: true,
	  onErrorCapture: true,
	  onLoadedDataCapture: true,
	  onLoadedMetadataCapture: true,
	  onLoadStartCapture: true,
	  onPauseCapture: true,
	  onPlayCapture: true,
	  onPlayingCapture: true,
	  onProgressCapture: true,
	  onRateChangeCapture: true,
	  onSeekedCapture: true,
	  onSeekingCapture: true,
	  onStalledCapture: true,
	  onSuspendCapture: true,
	  onTimeUpdateCapture: true,
	  onVolumeChangeCapture: true,
	  onWaitingCapture: true,
	  onLoadCapture: true,
	  onAnimationStartCapture: true,
	  onAnimationEndCapture: true,
	  onAnimationIterationCapture: true,
	  onTransitionEndCapture: true
	};

	/* From HTMLDOMPropertyConfig */
	var htmlProps = {
	  /**
	   * Standard Properties
	   */
	  accept: true,
	  acceptCharset: true,
	  accessKey: true,
	  action: true,
	  allowFullScreen: true,
	  allowTransparency: true,
	  alt: true,
	  // specifies target context for links with `preload` type
	  as: true,
	  async: true,
	  autoComplete: true,
	  // autoFocus is polyfilled/normalized by AutoFocusUtils
	  // autoFocus: true,
	  autoPlay: true,
	  capture: true,
	  cellPadding: true,
	  cellSpacing: true,
	  charSet: true,
	  challenge: true,
	  checked: true,
	  cite: true,
	  classID: true,
	  className: true,
	  cols: true,
	  colSpan: true,
	  content: true,
	  contentEditable: true,
	  contextMenu: true,
	  controls: true,
	  coords: true,
	  crossOrigin: true,
	  data: true, // For `<object />` acts as `src`.
	  dateTime: true,
	  default: true,
	  defer: true,
	  dir: true,
	  disabled: true,
	  download: true,
	  draggable: true,
	  encType: true,
	  form: true,
	  formAction: true,
	  formEncType: true,
	  formMethod: true,
	  formNoValidate: true,
	  formTarget: true,
	  frameBorder: true,
	  headers: true,
	  height: true,
	  hidden: true,
	  high: true,
	  href: true,
	  hrefLang: true,
	  htmlFor: true,
	  httpEquiv: true,
	  icon: true,
	  id: true,
	  inputMode: true,
	  integrity: true,
	  is: true,
	  keyParams: true,
	  keyType: true,
	  kind: true,
	  label: true,
	  lang: true,
	  list: true,
	  loop: true,
	  low: true,
	  manifest: true,
	  marginHeight: true,
	  marginWidth: true,
	  max: true,
	  maxLength: true,
	  media: true,
	  mediaGroup: true,
	  method: true,
	  min: true,
	  minLength: true,
	  // Caution; `option.selected` is not updated if `select.multiple` is
	  // disabled with `removeAttribute`.
	  multiple: true,
	  muted: true,
	  name: true,
	  nonce: true,
	  noValidate: true,
	  open: true,
	  optimum: true,
	  pattern: true,
	  placeholder: true,
	  playsInline: true,
	  poster: true,
	  preload: true,
	  profile: true,
	  radioGroup: true,
	  readOnly: true,
	  referrerPolicy: true,
	  rel: true,
	  required: true,
	  reversed: true,
	  role: true,
	  rows: true,
	  rowSpan: true,
	  sandbox: true,
	  scope: true,
	  scoped: true,
	  scrolling: true,
	  seamless: true,
	  selected: true,
	  shape: true,
	  size: true,
	  sizes: true,
	  span: true,
	  spellCheck: true,
	  src: true,
	  srcDoc: true,
	  srcLang: true,
	  srcSet: true,
	  start: true,
	  step: true,
	  style: true,
	  summary: true,
	  tabIndex: true,
	  target: true,
	  title: true,
	  // Setting .type throws on non-<input> tags
	  type: true,
	  useMap: true,
	  value: true,
	  width: true,
	  wmode: true,
	  wrap: true,

	  /**
	   * RDFa Properties
	   */
	  about: true,
	  datatype: true,
	  inlist: true,
	  prefix: true,
	  // property is also supported for OpenGraph in meta tags.
	  property: true,
	  resource: true,
	  typeof: true,
	  vocab: true,

	  /**
	   * Non-standard Properties
	   */
	  // autoCapitalize and autoCorrect are supported in Mobile Safari for
	  // keyboard hints.
	  autoCapitalize: true,
	  autoCorrect: true,
	  // autoSave allows WebKit/Blink to persist values of input fields on page reloads
	  autoSave: true,
	  // color is for Safari mask-icon link
	  color: true,
	  // itemProp, itemScope, itemType are for
	  // Microdata support. See http://schema.org/docs/gs.html
	  itemProp: true,
	  itemScope: true,
	  itemType: true,
	  // itemID and itemRef are for Microdata support as well but
	  // only specified in the WHATWG spec document. See
	  // https://html.spec.whatwg.org/multipage/microdata.html#microdata-dom-api
	  itemID: true,
	  itemRef: true,
	  // results show looking glass icon and recent searches on input
	  // search fields in WebKit/Blink
	  results: true,
	  // IE-only attribute that specifies security restrictions on an iframe
	  // as an alternative to the sandbox attribute on IE<10
	  security: true,
	  // IE-only attribute that controls focus behavior
	  unselectable: 0
	};

	var svgProps = {
	  accentHeight: true,
	  accumulate: true,
	  additive: true,
	  alignmentBaseline: true,
	  allowReorder: true,
	  alphabetic: true,
	  amplitude: true,
	  arabicForm: true,
	  ascent: true,
	  attributeName: true,
	  attributeType: true,
	  autoReverse: true,
	  azimuth: true,
	  baseFrequency: true,
	  baseProfile: true,
	  baselineShift: true,
	  bbox: true,
	  begin: true,
	  bias: true,
	  by: true,
	  calcMode: true,
	  capHeight: true,
	  clip: true,
	  clipPath: true,
	  clipRule: true,
	  clipPathUnits: true,
	  colorInterpolation: true,
	  colorInterpolationFilters: true,
	  colorProfile: true,
	  colorRendering: true,
	  contentScriptType: true,
	  contentStyleType: true,
	  cursor: true,
	  cx: true,
	  cy: true,
	  d: true,
	  decelerate: true,
	  descent: true,
	  diffuseConstant: true,
	  direction: true,
	  display: true,
	  divisor: true,
	  dominantBaseline: true,
	  dur: true,
	  dx: true,
	  dy: true,
	  edgeMode: true,
	  elevation: true,
	  enableBackground: true,
	  end: true,
	  exponent: true,
	  externalResourcesRequired: true,
	  fill: true,
	  fillOpacity: true,
	  fillRule: true,
	  filter: true,
	  filterRes: true,
	  filterUnits: true,
	  floodColor: true,
	  floodOpacity: true,
	  focusable: true,
	  fontFamily: true,
	  fontSize: true,
	  fontSizeAdjust: true,
	  fontStretch: true,
	  fontStyle: true,
	  fontVariant: true,
	  fontWeight: true,
	  format: true,
	  from: true,
	  fx: true,
	  fy: true,
	  g1: true,
	  g2: true,
	  glyphName: true,
	  glyphOrientationHorizontal: true,
	  glyphOrientationVertical: true,
	  glyphRef: true,
	  gradientTransform: true,
	  gradientUnits: true,
	  hanging: true,
	  horizAdvX: true,
	  horizOriginX: true,
	  ideographic: true,
	  imageRendering: true,
	  in: true,
	  in2: true,
	  intercept: true,
	  k: true,
	  k1: true,
	  k2: true,
	  k3: true,
	  k4: true,
	  kernelMatrix: true,
	  kernelUnitLength: true,
	  kerning: true,
	  keyPoints: true,
	  keySplines: true,
	  keyTimes: true,
	  lengthAdjust: true,
	  letterSpacing: true,
	  lightingColor: true,
	  limitingConeAngle: true,
	  local: true,
	  markerEnd: true,
	  markerMid: true,
	  markerStart: true,
	  markerHeight: true,
	  markerUnits: true,
	  markerWidth: true,
	  mask: true,
	  maskContentUnits: true,
	  maskUnits: true,
	  mathematical: true,
	  mode: true,
	  numOctaves: true,
	  offset: true,
	  opacity: true,
	  operator: true,
	  order: true,
	  orient: true,
	  orientation: true,
	  origin: true,
	  overflow: true,
	  overlinePosition: true,
	  overlineThickness: true,
	  paintOrder: true,
	  panose1: true,
	  pathLength: true,
	  patternContentUnits: true,
	  patternTransform: true,
	  patternUnits: true,
	  pointerEvents: true,
	  points: true,
	  pointsAtX: true,
	  pointsAtY: true,
	  pointsAtZ: true,
	  preserveAlpha: true,
	  preserveAspectRatio: true,
	  primitiveUnits: true,
	  r: true,
	  radius: true,
	  refX: true,
	  refY: true,
	  renderingIntent: true,
	  repeatCount: true,
	  repeatDur: true,
	  requiredExtensions: true,
	  requiredFeatures: true,
	  restart: true,
	  result: true,
	  rotate: true,
	  rx: true,
	  ry: true,
	  scale: true,
	  seed: true,
	  shapeRendering: true,
	  slope: true,
	  spacing: true,
	  specularConstant: true,
	  specularExponent: true,
	  speed: true,
	  spreadMethod: true,
	  startOffset: true,
	  stdDeviation: true,
	  stemh: true,
	  stemv: true,
	  stitchTiles: true,
	  stopColor: true,
	  stopOpacity: true,
	  strikethroughPosition: true,
	  strikethroughThickness: true,
	  string: true,
	  stroke: true,
	  strokeDasharray: true,
	  strokeDashoffset: true,
	  strokeLinecap: true,
	  strokeLinejoin: true,
	  strokeMiterlimit: true,
	  strokeOpacity: true,
	  strokeWidth: true,
	  surfaceScale: true,
	  systemLanguage: true,
	  tableValues: true,
	  targetX: true,
	  targetY: true,
	  textAnchor: true,
	  textDecoration: true,
	  textRendering: true,
	  textLength: true,
	  to: true,
	  transform: true,
	  u1: true,
	  u2: true,
	  underlinePosition: true,
	  underlineThickness: true,
	  unicode: true,
	  unicodeBidi: true,
	  unicodeRange: true,
	  unitsPerEm: true,
	  vAlphabetic: true,
	  vHanging: true,
	  vIdeographic: true,
	  vMathematical: true,
	  values: true,
	  vectorEffect: true,
	  version: true,
	  vertAdvY: true,
	  vertOriginX: true,
	  vertOriginY: true,
	  viewBox: true,
	  viewTarget: true,
	  visibility: true,
	  widths: true,
	  wordSpacing: true,
	  writingMode: true,
	  x: true,
	  xHeight: true,
	  x1: true,
	  x2: true,
	  xChannelSelector: true,
	  xlinkActuate: true,
	  xlinkArcrole: true,
	  xlinkHref: true,
	  xlinkRole: true,
	  xlinkShow: true,
	  xlinkTitle: true,
	  xlinkType: true,
	  xmlBase: true,
	  xmlns: true,
	  xmlnsXlink: true,
	  xmlLang: true,
	  xmlSpace: true,
	  y: true,
	  y1: true,
	  y2: true,
	  yChannelSelector: true,
	  z: true,
	  zoomAndPan: true
	};

	/* From DOMProperty */
	var ATTRIBUTE_NAME_START_CHAR = ':A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD';
	var ATTRIBUTE_NAME_CHAR = ATTRIBUTE_NAME_START_CHAR + '\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040';
	var isCustomAttribute = RegExp.prototype.test.bind(new RegExp('^(data|aria)-[' + ATTRIBUTE_NAME_CHAR + ']*$'));

	var hasOwnProperty = {}.hasOwnProperty;

	exports.default = function (name) {
	  return hasOwnProperty.call(htmlProps, name) || hasOwnProperty.call(svgProps, name) || isCustomAttribute(name.toLowerCase()) || hasOwnProperty.call(reactProps, name);
	};

	module.exports = exports['default'];

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isTag;

	var babelPluginFlowReactPropTypes_proptype_Target = __webpack_require__(18).babelPluginFlowReactPropTypes_proptype_Target || __webpack_require__(4).any;

	function isTag(target) /* : %checks */{
	  return typeof target === 'string';
	}
	module.exports = exports['default'];

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(2);

	var _propTypes = __webpack_require__(4);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _ThemeProvider = __webpack_require__(78);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	function _defineProperty(obj, key, value) {
	  if (key in obj) {
	    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
	  } else {
	    obj[key] = value;
	  }return obj;
	}

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	var AbstractStyledComponent = function (_Component) {
	  _inherits(AbstractStyledComponent, _Component);

	  function AbstractStyledComponent() {
	    _classCallCheck(this, AbstractStyledComponent);

	    return _possibleConstructorReturn(this, (AbstractStyledComponent.__proto__ || Object.getPrototypeOf(AbstractStyledComponent)).apply(this, arguments));
	  }

	  return AbstractStyledComponent;
	}(_react.Component);

	exports.default = AbstractStyledComponent;

	AbstractStyledComponent.contextTypes = _defineProperty({}, _ThemeProvider.CHANNEL, _propTypes2.default.func);
	module.exports = exports['default'];

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.CHANNEL = undefined;

	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};

	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(4);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _isFunction = __webpack_require__(79);

	var _isFunction2 = _interopRequireDefault(_isFunction);

	var _isPlainObject = __webpack_require__(22);

	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

	var _createBroadcast = __webpack_require__(80);

	var _createBroadcast2 = _interopRequireDefault(_createBroadcast);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	function _defineProperty(obj, key, value) {
	  if (key in obj) {
	    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
	  } else {
	    obj[key] = value;
	  }return obj;
	}

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	/* globals React$Element */

	// NOTE: DO NOT CHANGE, changing this is a semver major change!
	var babelPluginFlowReactPropTypes_proptype_Broadcast = __webpack_require__(80).babelPluginFlowReactPropTypes_proptype_Broadcast || __webpack_require__(4).any;

	var CHANNEL = exports.CHANNEL = '__styled-components__';

	if (true) Object.defineProperty(exports, 'babelPluginFlowReactPropTypes_proptype_Theme', {
	  value: __webpack_require__(4).shape({})
	});

	/**
	 * Provide a theme to an entire react component tree via context and event listeners (have to do
	 * both context and event emitter as pure components block context updates)
	 */
	var ThemeProvider = function (_Component) {
	  _inherits(ThemeProvider, _Component);

	  function ThemeProvider() {
	    _classCallCheck(this, ThemeProvider);

	    var _this = _possibleConstructorReturn(this, (ThemeProvider.__proto__ || Object.getPrototypeOf(ThemeProvider)).call(this));

	    _this.getTheme = _this.getTheme.bind(_this);
	    return _this;
	  }

	  _createClass(ThemeProvider, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      var _this2 = this;

	      // If there is a ThemeProvider wrapper anywhere around this theme provider, merge this theme
	      // with the outer theme
	      if (this.context[CHANNEL]) {
	        var subscribe = this.context[CHANNEL];
	        this.unsubscribeToOuter = subscribe(function (theme) {
	          _this2.outerTheme = theme;
	        });
	      }
	      this.broadcast = (0, _createBroadcast2.default)(this.getTheme());
	    }
	  }, {
	    key: 'getChildContext',
	    value: function getChildContext() {
	      return _extends({}, this.context, _defineProperty({}, CHANNEL, this.broadcast.subscribe));
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      if (this.props.theme !== nextProps.theme) this.broadcast.publish(this.getTheme(nextProps.theme));
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      if (this.context[CHANNEL]) {
	        this.unsubscribeToOuter();
	      }
	    }

	    // Get the theme from the props, supporting both (outerTheme) => {} as well as object notation

	  }, {
	    key: 'getTheme',
	    value: function getTheme(passedTheme) {
	      var theme = passedTheme || this.props.theme;
	      if ((0, _isFunction2.default)(theme)) {
	        var mergedTheme = theme(this.outerTheme);
	        if (!(0, _isPlainObject2.default)(mergedTheme)) {
	          throw new Error('[ThemeProvider] Please return an object from your theme function, i.e. theme={() => ({})}!');
	        }
	        return mergedTheme;
	      }
	      if (!(0, _isPlainObject2.default)(theme)) {
	        throw new Error('[ThemeProvider] Please make your theme prop a plain object');
	      }
	      return _extends({}, this.outerTheme, theme);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      if (!this.props.children) {
	        return null;
	      }
	      return _react2.default.Children.only(this.props.children);
	    }
	  }]);

	  return ThemeProvider;
	}(_react.Component);

	ThemeProvider.propTypes = {
	  children: __webpack_require__(4).any,
	  theme: __webpack_require__(4).oneOfType([__webpack_require__(4).shape({}), __webpack_require__(4).func]).isRequired
	};

	ThemeProvider.childContextTypes = _defineProperty({}, CHANNEL, _propTypes2.default.func.isRequired);
	ThemeProvider.contextTypes = _defineProperty({}, CHANNEL, _propTypes2.default.func);

	exports.default = ThemeProvider;

/***/ }),
/* 79 */
/***/ (function(module, exports) {

	'use strict';

	module.exports = isFunction;

	var toString = Object.prototype.toString;

	function isFunction(fn) {
	  var string = toString.call(fn);
	  return string === '[object Function]' || typeof fn === 'function' && string !== '[object RegExp]' || typeof window !== 'undefined' && (
	  // IE8 and below
	  fn === window.setTimeout || fn === window.alert || fn === window.confirm || fn === window.prompt);
	};

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	if (true) Object.defineProperty(exports, "babelPluginFlowReactPropTypes_proptype_Broadcast", {
	  value: __webpack_require__(4).shape({
	    publish: __webpack_require__(4).func.isRequired,
	    subscribe: __webpack_require__(4).func.isRequired
	  })
	});
	/**
	 * Creates a broadcast that can be listened to, i.e. simple event emitter
	 *
	 * @see https://github.com/ReactTraining/react-broadcast
	 */

	var createBroadcast = function createBroadcast(initialValue) {
	  var listeners = [];
	  var currentValue = initialValue;

	  return {
	    publish: function publish(value) {
	      currentValue = value;
	      listeners.forEach(function (listener) {
	        return listener(currentValue);
	      });
	    },
	    subscribe: function subscribe(listener) {
	      listeners.push(listener);

	      // Publish to this subscriber once immediately.
	      listener(currentValue);

	      return function () {
	        listeners = listeners.filter(function (item) {
	          return item !== listener;
	        });
	      };
	    }
	  };
	};

	exports.default = createBroadcast;
	module.exports = exports["default"];

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _css = __webpack_require__(16);

	var _css2 = _interopRequireDefault(_css);

	var _domElements = __webpack_require__(82);

	var _domElements2 = _interopRequireDefault(_domElements);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	var babelPluginFlowReactPropTypes_proptype_Target = __webpack_require__(18).babelPluginFlowReactPropTypes_proptype_Target || __webpack_require__(4).any;

	var babelPluginFlowReactPropTypes_proptype_Interpolation = __webpack_require__(18).babelPluginFlowReactPropTypes_proptype_Interpolation || __webpack_require__(4).any;

	exports.default = function (styledComponent) {
	  var styled = function styled(tag) {
	    return function (strings) {
	      for (var _len = arguments.length, interpolations = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        interpolations[_key - 1] = arguments[_key];
	      }

	      return styledComponent(tag, _css2.default.apply(undefined, [strings].concat(interpolations)));
	    };
	  };

	  // Shorthands for all valid HTML Elements
	  _domElements2.default.forEach(function (domElement) {
	    styled[domElement] = styled(domElement);
	  });

	  return styled;
	};

	module.exports = exports['default'];

/***/ }),
/* 82 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	// Thanks to ReactDOMFactories for this handy list!

	exports.default = ['a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 'bdi', 'bdo', 'big', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'cite', 'code', 'col', 'colgroup', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'menu', 'menuitem', 'meta', 'meter', 'nav', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul', 'var', 'video', 'wbr',

	// SVG
	'circle', 'clipPath', 'defs', 'ellipse', 'g', 'image', 'line', 'linearGradient', 'mask', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'stop', 'svg', 'text', 'tspan'];
	module.exports = exports['default'];

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _hash = __webpack_require__(84);

	var _hash2 = _interopRequireDefault(_hash);

	var _css = __webpack_require__(16);

	var _css2 = _interopRequireDefault(_css);

	var _GlobalStyle = __webpack_require__(25);

	var _GlobalStyle2 = _interopRequireDefault(_GlobalStyle);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	var babelPluginFlowReactPropTypes_proptype_NameGenerator = __webpack_require__(18).babelPluginFlowReactPropTypes_proptype_NameGenerator || __webpack_require__(4).any;

	var babelPluginFlowReactPropTypes_proptype_Interpolation = __webpack_require__(18).babelPluginFlowReactPropTypes_proptype_Interpolation || __webpack_require__(4).any;

	var replaceWhitespace = function replaceWhitespace(str) {
	  return str.replace(/\s|\\n/g, '');
	};

	exports.default = function (nameGenerator) {
	  return function (strings) {
	    for (var _len = arguments.length, interpolations = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	      interpolations[_key - 1] = arguments[_key];
	    }

	    var rules = _css2.default.apply(undefined, [strings].concat(interpolations));
	    var hash = (0, _hash2.default)(replaceWhitespace(JSON.stringify(rules)));
	    var name = nameGenerator(hash);
	    var keyframes = new _GlobalStyle2.default(rules, '@keyframes ' + name);
	    var keyframesWebkit = new _GlobalStyle2.default(rules, '@-webkit-keyframes ' + name);
	    keyframes.generateAndInject();
	    keyframesWebkit.generateAndInject();
	    return name;
	  };
	};

	module.exports = exports['default'];

/***/ }),
/* 84 */
/***/ (function(module, exports) {

	/**
	 * Stolen directly from glamor, thanks @threepointone!
	 */

	/* eslint-disable */
	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = doHash;
	// murmurhash2 via https://gist.github.com/raycmorgan/588423

	function doHash(str, seed) {
	  var m = 0x5bd1e995;
	  var r = 24;
	  var h = seed ^ str.length;
	  var length = str.length;
	  var currentIndex = 0;

	  while (length >= 4) {
	    var k = UInt32(str, currentIndex);

	    k = Umul32(k, m);
	    k ^= k >>> r;
	    k = Umul32(k, m);

	    h = Umul32(h, m);
	    h ^= k;

	    currentIndex += 4;
	    length -= 4;
	  }

	  switch (length) {
	    case 3:
	      h ^= UInt16(str, currentIndex);
	      h ^= str.charCodeAt(currentIndex + 2) << 16;
	      h = Umul32(h, m);
	      break;

	    case 2:
	      h ^= UInt16(str, currentIndex);
	      h = Umul32(h, m);
	      break;

	    case 1:
	      h ^= str.charCodeAt(currentIndex);
	      h = Umul32(h, m);
	      break;
	  }

	  h ^= h >>> 13;
	  h = Umul32(h, m);
	  h ^= h >>> 15;

	  return h >>> 0;
	}

	function UInt32(str, pos) {
	  return str.charCodeAt(pos++) + (str.charCodeAt(pos++) << 8) + (str.charCodeAt(pos++) << 16) + (str.charCodeAt(pos) << 24);
	}

	function UInt16(str, pos) {
	  return str.charCodeAt(pos++) + (str.charCodeAt(pos++) << 8);
	}

	function Umul32(n, m) {
	  n = n | 0;
	  m = m | 0;
	  var nlo = n & 0xffff;
	  var nhi = n >>> 16;
	  var res = nlo * m + ((nhi * m & 0xffff) << 16) | 0;
	  return res;
	}

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();

	var _hash = __webpack_require__(84);

	var _hash2 = _interopRequireDefault(_hash);

	var _flatten = __webpack_require__(19);

	var _flatten2 = _interopRequireDefault(_flatten);

	var _parse = __webpack_require__(26);

	var _parse2 = _interopRequireDefault(_parse);

	var _postcssNested = __webpack_require__(71);

	var _postcssNested2 = _interopRequireDefault(_postcssNested);

	var _autoprefix = __webpack_require__(50);

	var _autoprefix2 = _interopRequireDefault(_autoprefix);

	var _StyleSheet = __webpack_require__(72);

	var _StyleSheet2 = _interopRequireDefault(_StyleSheet);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	var babelPluginFlowReactPropTypes_proptype_GlamorInsertedRule = __webpack_require__(18).babelPluginFlowReactPropTypes_proptype_GlamorInsertedRule || __webpack_require__(4).any;

	var babelPluginFlowReactPropTypes_proptype_NameGenerator = __webpack_require__(18).babelPluginFlowReactPropTypes_proptype_NameGenerator || __webpack_require__(4).any;

	var babelPluginFlowReactPropTypes_proptype_RuleSet = __webpack_require__(18).babelPluginFlowReactPropTypes_proptype_RuleSet || __webpack_require__(4).any;

	/*
	 ComponentStyle is all the CSS-specific stuff, not
	 the React-specific stuff.
	 */
	exports.default = function (nameGenerator) {
	  var inserted = {};

	  var ComponentStyle = function () {
	    function ComponentStyle(rules) {
	      _classCallCheck(this, ComponentStyle);

	      this.rules = rules;
	      if (!_StyleSheet2.default.injected) _StyleSheet2.default.inject();
	      this.insertedRule = _StyleSheet2.default.insert('');
	    }

	    /*
	     * Flattens a rule set into valid CSS
	     * Hashes it, wraps the whole chunk in a ._hashName {}
	     * Parses that with PostCSS then runs PostCSS-Nested on it
	     * Returns the hash to be injected on render()
	     * */

	    _createClass(ComponentStyle, [{
	      key: 'generateAndInjectStyles',
	      value: function generateAndInjectStyles(executionContext) {
	        var flatCSS = (0, _flatten2.default)(this.rules, executionContext).join('').replace(/^\s*\/\/.*$/gm, ''); // replace JS comments
	        var hash = (0, _hash2.default)(flatCSS);
	        if (!inserted[hash]) {
	          var selector = nameGenerator(hash);
	          inserted[hash] = selector;
	          var root = (0, _parse2.default)('.' + selector + ' { ' + flatCSS + ' }');
	          (0, _postcssNested2.default)(root);
	          (0, _autoprefix2.default)(root);
	          this.insertedRule.appendRule(root.toResult().css);
	        }
	        return inserted[hash];
	      }
	    }]);

	    return ComponentStyle;
	  }();

	  return ComponentStyle;
	};

	module.exports = exports['default'];

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};

	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(4);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _ThemeProvider = __webpack_require__(78);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	function _defineProperty(obj, key, value) {
	  if (key in obj) {
	    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
	  } else {
	    obj[key] = value;
	  }return obj;
	}

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	/* globals ReactClass */

	exports.default = function (Component) {
	  var _class, _temp2;

	  return _temp2 = _class = function (_React$Component) {
	    _inherits(_class, _React$Component);

	    function _class() {
	      var _ref;

	      var _temp, _this, _ret;

	      _classCallCheck(this, _class);

	      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	      }

	      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = _class.__proto__ || Object.getPrototypeOf(_class)).call.apply(_ref, [this].concat(args))), _this), _this.state = {}, _temp), _possibleConstructorReturn(_this, _ret);
	    }

	    _createClass(_class, [{
	      key: 'componentWillMount',
	      value: function componentWillMount() {
	        var _this2 = this;

	        if (!this.context[_ThemeProvider.CHANNEL]) {
	          throw new Error('[withTheme] Please use ThemeProvider to be able to use withTheme');
	        }

	        var subscribe = this.context[_ThemeProvider.CHANNEL];
	        this.unsubscribe = subscribe(function (theme) {
	          _this2.setState({ theme: theme });
	        });
	      }
	    }, {
	      key: 'componentWillUnmount',
	      value: function componentWillUnmount() {
	        if (typeof this.unsubscribe === 'function') this.unsubscribe();
	      }
	    }, {
	      key: 'render',
	      value: function render() {
	        var theme = this.state.theme;

	        return _react2.default.createElement(Component, _extends({ theme: theme }, this.props));
	      }
	    }]);

	    return _class;
	  }(_react2.default.Component), _class.contextTypes = _defineProperty({}, _ThemeProvider.CHANNEL, _propTypes2.default.func), _temp2;
	};

	module.exports = exports['default'];

/***/ })
/******/ ])
});
;