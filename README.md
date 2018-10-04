# React Show More Or Less

[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
[![npm version](https://badge.fury.io/js/react-show-more-or-less.svg)](https://badge.fury.io/js/react-show-more-or-less)
[![Build Status](https://travis-ci.org/pikselpalette/react-show-more-or-less.svg?branch=master)](https://travis-ci.org/pikselpalette/react-show-more-or-less)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/d4cee746ac5f43798afe8ae40e4d36d7)](https://www.codacy.com/app/samboylett/react-show-more-or-less?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=pikselpalette/react-show-more-or-less&amp;utm_campaign=Badge_Grade)
[![dependencies Status](https://david-dm.org/pikselpalette/react-show-more-or-less/status.svg)](https://david-dm.org/pikselpalette/react-show-more-or-less)
[![devDependencies Status](https://david-dm.org/pikselpalette/react-show-more-or-less/dev-status.svg)](https://david-dm.org/pikselpalette/react-show-more-or-less?type=dev)
[![peerDependencies Status](https://david-dm.org/pikselpalette/react-show-more-or-less/peer-status.svg)](https://david-dm.org/pikselpalette/react-show-more-or-less?type=peer)
[![codecov](https://codecov.io/gh/pikselpalette/react-show-more-or-less/branch/master/graph/badge.svg)](https://codecov.io/gh/pikselpalette/react-show-more-or-less)
[![Mutation testing badge](https://badge.stryker-mutator.io/github.com/pikselpalette/react-show-more-or-less/master)](https://stryker-mutator.github.io) [![Greenkeeper badge](https://badges.greenkeeper.io/pikselpalette/react-show-more-or-less.svg)](https://greenkeeper.io/)

This component truncates its children if they're are more than the limit, and shows a `Show more` link. Clicking this expands it then shows `Show less` link.

It is for use with list type views, rather than on paragraphs.

## Installation

```sh
npm i --save react-show-more-or-less
```

## Usage

### Basic usage

```jsx
import ShowMore from 'react-show-more-or-less';

return (
  <ShowMore limit={3}>
    <div>Foo</div>
    <div>Bar</div>
    <div>Wham</div>
    <div>Bam</div>
    <div>Betty</div>
  </ShowMore>
);
```

### Changing the link text

```jsx
import ShowMore from 'react-show-more-or-less';

return (
  <ShowMore showMore="More" showLess={(<p>Less</p>)}>
    {content}
  </ShowMore>
);
```

### Changing the anchor element

```jsx
import ShowMore from 'react-show-more-or-less';

const Anchor = ({ children }) => (
  <div className="my-class">
    {children}
  </div>
);

return (
  <ShowMore as={Anchor}>
    {content}
  </ShowMore>
);
```

### Changing the anchor props

```jsx
import ShowMore from 'react-show-more-or-less';

return (
  <ShowMore as={<a className="my-class" />}>
    {content}
  </ShowMore>
);
```
