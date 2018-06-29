# React Show More Or Less

[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

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
