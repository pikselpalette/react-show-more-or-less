/* globals jest */
import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-enzyme';

import ShowMore, { Anchor } from '../../lib/index';

Enzyme.configure({ adapter: new Adapter() });

describe('ShowMore', () => {
  let component;
  let mockProps;

  const getRequiredProps = () => ({
    children: [<b key="foo">Foo</b>, <i key="bar">Bar</i>],
    limit: 1
  });

  const setupComponent = (overrides = {}) => {
    mockProps = {
      ...getRequiredProps(),
      ...overrides
    };

    component = mount((
      <ShowMore {...mockProps} />
    ));
  };

  it('renders without crashing', () => {
    setupComponent();
  });

  describe('when showMore prop set', () => {
    beforeEach(() => setupComponent({
      showMore: 'wibble'
    }));

    it('renders Anchor with showMore text', () => {
      expect(component.find(Anchor)).toHaveLength(1);
      expect(component.find(Anchor)).toHaveText('wibble');
    });
  });

  describe('when as set to string', () => {
    beforeEach(() => setupComponent({
      as: 'p'
    }));

    it('renders Anchor as that element', () => {
      expect(component.find(Anchor).find('p')).toHaveLength(1);
    });
  });

  describe('when as set to JSX', () => {
    beforeEach(() => setupComponent({
      as: (<p className="test" />)
    }));

    it('renders Anchor as that element', () => {
      expect(component.find(Anchor).find('p')).toHaveLength(1);
    });

    it('renders Anchor with matching props', () => {
      expect(component.find(Anchor).find('p')).toHaveProp('className', 'test');
    });
  });

  describe('when showLess prop set', () => {
    beforeEach(() => setupComponent({
      showLess: 'wobble'
    }));

    describe('when Anchor is clicked', () => {
      beforeEach(() => {
        component.find(Anchor).simulate('click');
        component.update();
      });

      it('renders Anchor with showLess text', () => {
        expect(component.find(Anchor)).toHaveLength(1);
        expect(component.find(Anchor)).toHaveText('wobble');
      });
    });
  });

  describe('when there is no extra content', () => {
    beforeEach(() => setupComponent({
      limit: 2
    }));

    it('does not render the Anchor', () => {
      expect(component.find(Anchor)).toHaveLength(0);
    });
  });

  describe('with happy path props', () => {
    beforeEach(setupComponent);

    it('renders first limit children', () => {
      expect(component.find('b')).toHaveLength(1);
      expect(component.find('b')).toHaveText('Foo');
    });

    it('does not render extra prop', () => {
      expect(component.find('i')).toHaveLength(0);
    });

    it('renders Anchor with show more label', () => {
      expect(component.find(Anchor)).toHaveLength(1);
      expect(component.find(Anchor)).toHaveText('Show more');
    });

    describe('when Anchor is clicked', () => {
      beforeEach(() => {
        component.find(Anchor).simulate('click');
        component.update();
      });

      it('renders extra children', () => {
        expect(component.find('i')).toHaveLength(1);
        expect(component.find('i')).toHaveText('Bar');
      });

      it('renders a show less anchor', () => {
        expect(component.find(Anchor)).toHaveLength(1);
        expect(component.find(Anchor)).toHaveText('Show less');
      });

      describe('when Anchor is clicked', () => {
        beforeEach(() => {
          component.find(Anchor).simulate('click');
          component.update();
        });

        it('does not renders extra children', () => {
          expect(component.find('i')).toHaveLength(0);
        });

        it('renders a show more anchor', () => {
          expect(component.find(Anchor)).toHaveLength(1);
          expect(component.find(Anchor)).toHaveText('Show more');
        });
      });
    });
  });
});
