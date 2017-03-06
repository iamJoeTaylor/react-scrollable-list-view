# react-scrollable-list-view

List View component to handle cell recycling, positioning, measuring, and more.

```js
import { ListView, ListViewItem } from 'react-scrollable-list-view';
// In your render...
<ListView
  runwayItems={7}
  runwayItemsOpposite={5}
  aveCellHeight={250}
>
  {
    Array.apply(null, Array(3))
      .forEach((_, i) =>
        <ListViewItem height={250} key={i}><div>Item at Index: {i}</div></ListViewItem>
      )
  }
</ListView>
```

More options and configurations below.

### Install

- Npm: `npm install -S react-scrollable-list-view`

`react` and `react-dom` are external dependencies for this component. This means you need to have
is installed and available in project.

If you build with webpack or similar build system then having them installed as a dependency is
enough. `npm install -S react react-dom`

#### CSS

CSS similar to what is below is included with the Component automatically
with the help of [Styled-Components](https://github.com/styled-components/styled-components).

```sass
.ListView
  position: absolute
  top: 0
  right: 0
  bottom: 0
  left: 0
  overflow-y: scroll
  overflow-x: hidden

  // Smooth momentum scrolling
  -webkit-overflow-scrolling: touch

  .ListView-content
    position: absolute
    top: 0
    right: 0
    bottom: 0
    left: 0

.ListView-runway
  position: absolute
  height: 1px
  width: 1px
```

## What is it used for

This Component was written for [Periscope](https://periscope.tv) so we could asynchronously fetch more broadcasts,
only load images into the DOM when they are ready to be shown, recycle cells, allow sticky cells, and more.

I used [infinite scroller: Google Developers](https://developers.google.com/web/updates/2016/07/infinite-scroller) article
as a basis for methodology and naming conventions. It is a great read and I suggest you check it out.

Most of the cell recycling is handled by React as long as we set everything up correctly.

Here is a nonexhaustive list of what I feel this component does well:
- Cell Recycling
- Fixed height cells
- Sticky headers
- Desktop and Mobile Perf
- Async data calls
- Reflowing

## API

Exports:
- `ListView`
- `ListViewItem`
- `ListViewStickyItem`

---

### &lt;ListView />
#### Usage
```jsx
<ListView aveCellHeight={250}>
  { getListItems( )}
</ListView>
```

#### Props

##### - aveCellHeight: number
Required. The aveCellHeight gives us a number to set the initial render heights of a cell (if the cell doesn't provide one),
and allows us to estimate the runway needed for the current list. READ: less messuring makes everything faster.

##### - children: Array&lt;ReactElement>
Required. This is your list. Ideally this is an Array of `ListViewItem`s or `ListViewStickyItem`s with height prop on them.
Each of these elements should also have a unique key on the root for cell recycling to work correctly.

##### - hasMore?: boolean
Optional. This flag tells the ListView if it needs to call `loadMore` if it reaches the `loadMoreItemOffset` in the scrolled
list.

##### - header?: ReactElement
Optional. This allows you to put a heading in your scrollable list. The benefit of knowing it is a header is it allows us
to render it directly in the flow of the list, so we avoid expensive measuring.

##### - loadingSpinner?: ReactElement
Optional. This element will be rendered at the end of the list when ever `loadMore` returns a Promise and the promise is
still pending resolution.

##### - loadMore?: () => instanceOf Promise
Optional **function**.

- Return: a promise that resolves in a boolean.

##### - loadMoreItemOffset?: number
Optional. Number of items from the end of the list to call loadMore at.

##### - runwayItems?: number
Optional. Number of items to instantiate beyond current view in the scroll direction.

##### - runwayItemsOpposite?: number
Optional. Number of items to instantiate beyond current view in the opposite direction.

##### - initialIndex?: number
Optional. Index to start as anchor item.


### &lt;ListViewItem />
#### Usage
```jsx
<ListView aveCellHeight={250}>
  {
    Array.apply(null, Array(3))
      .forEach((_, i) =>
        <ListViewItem height={250} key={i}><div>Item at Index: {i}</div></ListViewItem>
      )
  }
</ListView>
```

This is a general item and we only count the `height` prop in our flow if we recognize it as one of our Item types.

#### Props
##### - height?: number (pixels)
Optional. This is heighly suggested but not required. If this is set we do not measure this element after render at all.
If this is not set we render using the `aveCellHeight` of the `ListView`, and once it has entered the DOM we measure the
rendered height. We use this height to decide if we need to reflow the items after this one. If there is no height
set, on rezise we remeasure as well.


### &lt;ListViewStickyItem />
#### Usage
```jsx
<ListView aveCellHeight={250}>
  {
    Array.apply(null, Array(3))
      .forEach((_, i) =>
        <ListViewStickyItem height={250} key={i}><div>Item at Index: {i}</div></ListViewStickyItem>
      )
  }
</ListView>
```

This is an extension of `ListViewItem`, but when this item hits the top of the list it will get the className `is-stuck`,
and we apply some inline CSS to position it `fixed`. In addition we make sure a stuck item is always included in the DOM
and not recycled. Subsequent StickyItems will bump the previous stuck item out of position.

#### Props
##### - height?: number (pixels)
Optional. This is heighly suggested but not required. If this is set we do not measure this element after render at all.
If this is not set we render using the `aveCellHeight` of the `ListView`, and once it has entered the DOM we measure the
rendered height. We use this height to decide if we need to reflow the items after this one. If there is no height
set, on rezise we remeasure as well.

---

This Component was built and developed with some specific use cases in mind. If you have suggestions PRs and issues are
welcome.
