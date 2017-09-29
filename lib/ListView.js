'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  overflow-y: scroll;\n  overflow-x: hidden;\n  opacity: ', ';\n\n  -webkit-overflow-scrolling: touch;\n'], ['\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  overflow-y: scroll;\n  overflow-x: hidden;\n  opacity: ', ';\n\n  -webkit-overflow-scrolling: touch;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n'], ['\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  position: absolute;\n  height: 1px;\n  width: 1px;\n  transform: ', ';\n'], ['\n  position: absolute;\n  height: 1px;\n  width: 1px;\n  transform: ', ';\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

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