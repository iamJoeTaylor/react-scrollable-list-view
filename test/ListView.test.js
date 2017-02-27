import React from 'react';
import { renderIntoDocument } from 'react-addons-test-utils';
import { findDOMNode, unmountComponentAtNode } from 'react-dom';
import { sanitizeNodes } from 'tests/utils';

import ListView, { ListViewItem } from 'components/presentations/ListView';

function dispatchScroll(target, stub, newScrollTop) {
  stub.returns(newScrollTop);

  const e = document.createEvent('UIEvents');
  // creates a scroll event that bubbles, can be cancelled,
  // and with its view and detail property initialized to window and 1,
  // respectively
  e.initUIEvent('scroll', true, true, window, 1);
  target.dispatchEvent(e);
}

describe('Components Presentations ListView', () => {
  it('should not render items with undefined props.children passed in', () => {
    const output = renderIntoDocument(
      <ListView aveCellHeight={140} />
    );
    const renderedDOM = findDOMNode(output);
    unmountComponentAtNode(renderedDOM.parentNode);

    expect(renderedDOM).to.have.classes(['ListView']);
    // Runway is the only child
    expect(renderedDOM.childNodes.length).to.eq(1);
  });

  describe('container', () => {
    let renderedDOM;
    let childNodes;
    const items = [
      <div key={1}>Item 1</div>,
      <div key={2}>Item 2</div>,
      <div key={3}>Item 3</div>,
    ];
    beforeEach(() => {
      const output = renderIntoDocument(
        <ListView aveCellHeight={140}>
          {items}
        </ListView>
      );
      renderedDOM = findDOMNode(output);
      childNodes = sanitizeNodes(renderedDOM.childNodes[0].childNodes);
      unmountComponentAtNode(renderedDOM.parentNode);
    });

    it('should render ListView container and runway', () => {
      expect(renderedDOM).to.have.classes(['ListView']);
      expect(childNodes.length).to.eq(items.length + 1);

      // RunwayEl
      expect(childNodes[0]).to.have.classes('ListView-runway');
      expect(childNodes[0].style.transform).to.eq('translateY(420px)');
    });
  });

  describe('static cell heights', () => {
    let renderedDOM;
    let childNodes;
    let scrollerScrollTopStub;
    const items = [
      <ListViewItem height={140} key="1"><span>Item 1</span></ListViewItem>,
      <ListViewItem height={140} key="2"><span>Item 2</span></ListViewItem>,
      <ListViewItem height={140} key="3"><span>Item 3</span></ListViewItem>,
      <ListViewItem height={140} key="4"><span>Item 4</span></ListViewItem>,
      <ListViewItem height={140} key="5"><span>Item 5</span></ListViewItem>,
      <ListViewItem height={140} key="6"><span>Item 6</span></ListViewItem>,
      <ListViewItem height={140} key="7"><span>Item 7</span></ListViewItem>,
      <ListViewItem height={140} key="8"><span>Item 8</span></ListViewItem>,
      <ListViewItem height={140} key="9"><span>Item 9</span></ListViewItem>,
      <ListViewItem height={140} key="10"><span>Item 10</span></ListViewItem>,
      <ListViewItem height={140} key="11"><span>Item 11</span></ListViewItem>,
    ];

    const getChildNodes = () => sanitizeNodes(renderedDOM.childNodes[0].childNodes);

    beforeEach(() => {
      scrollerScrollTopStub = sinon.stub();
      ListView.__Rewire__('getScrollTop', scrollerScrollTopStub);
      scrollerScrollTopStub.returns(0);

      const output = renderIntoDocument(
        <ListView
          runwayItems={3}
          runwayItemsOpposite={5}
          aveCellHeight={140}
        >
          {items}
        </ListView>
      );
      renderedDOM = findDOMNode(output);
      childNodes = getChildNodes();
    });
    afterEach(() => unmountComponentAtNode(renderedDOM.parentNode));

    it('should render listItems at the correct translateY', () => {
      expect(childNodes.length).to.eq(9);

      // RunwayEl
      expect(childNodes[0].style.transform).to.eq('translateY(1540px)');

      for (let i = 0; i < 8; i++) {
        // Each element should be offset 140px
        expect(childNodes[i + 1].style.transform).to.eq(`translateY(${i * 140}px)`);
      }
    });

    it('should update onScroll', () => {
      expect(childNodes[1].innerHTML).to.contain('Item 1');
      dispatchScroll(renderedDOM, scrollerScrollTopStub, 600);
      childNodes = getChildNodes();
      expect(childNodes[1].innerHTML).to.contain('Item 2');
    });
  });

  describe('infinite scroll', () => {
    let renderedDOM;
    let scrollerScrollTopStub;
    let loadMoreStub;
    let loadingPromise;
    let resolvePromise;

    const items = [
      <ListViewItem height={140} key="1"><span>Item 1</span></ListViewItem>,
      <ListViewItem height={140} key="2"><span>Item 2</span></ListViewItem>,
      <ListViewItem height={140} key="3"><span>Item 3</span></ListViewItem>,
      <ListViewItem height={140} key="4"><span>Item 4</span></ListViewItem>,
      <ListViewItem height={140} key="5"><span>Item 5</span></ListViewItem>,
      <ListViewItem height={140} key="6"><span>Item 6</span></ListViewItem>,
      <ListViewItem height={140} key="7"><span>Item 7</span></ListViewItem>,
      <ListViewItem height={140} key="8"><span>Item 8</span></ListViewItem>,
      <ListViewItem height={140} key="9"><span>Item 9</span></ListViewItem>,
      <ListViewItem height={140} key="10"><span>Item 10</span></ListViewItem>,
      <ListViewItem height={140} key="11"><span>Item 11</span></ListViewItem>,
    ];
    beforeEach(() => {
      loadingPromise = new Promise(resolve => {
        resolvePromise = resolve;
      });
      scrollerScrollTopStub = sinon.stub();
      loadMoreStub = sinon.stub();
      loadMoreStub.returns(loadingPromise);

      ListView.__Rewire__('getScrollTop', scrollerScrollTopStub);
      scrollerScrollTopStub.returns(0);

      const output = renderIntoDocument(
        <ListView
          runwayItems={3}
          runwayItemsOpposite={5}
          aveCellHeight={140}
          loadMore={loadMoreStub}
          loadingSpinner={(<div className="loading" />)}
          hasMore
        >
          {items}
        </ListView>
      );
      renderedDOM = findDOMNode(output);
    });
    afterEach(() => unmountComponentAtNode(renderedDOM.parentNode));

    it('should call #loadMore', () => {
      dispatchScroll(renderedDOM, scrollerScrollTopStub, 780);
      expect(loadMoreStub.called).to.be.true;
    });

    it('should add the loadingSpinner div while waiting', done => {
      expect(renderedDOM.querySelector('.loading')).to.be.null;
      dispatchScroll(renderedDOM, scrollerScrollTopStub, 780);
      expect(renderedDOM.querySelector('.loading')).to.not.be.null;
      resolvePromise();
      setTimeout(() => {
        expect(renderedDOM.querySelector('.loading')).to.be.null;
        done();
      }, 300);
    });
  });
});

