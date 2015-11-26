import Header from '../index.es6';
import React from 'react';
import TestUtils from 'react-addons-test-utils';

describe(`A header`, () => {
  const shallowRenderer = TestUtils.createRenderer();
  describe(`it's a React component`, () => {
    it('is compatible with React.Component', () => {
      Header.should.be.a('function').and.respondTo('render');
    });
    it(`renders a React element`, () => {
      React.isValidElement(
        <Header
          title="Required"
        />).should.equal(true);
    });
  });
  describe(`it produce required elements`, () => {
    shallowRenderer.render(React.createElement(Header, {
      title: 'Required',
    }));
    const header = shallowRenderer.getRenderOutput();
    it(`has specific attributes on Header tag`, () => {
      header.props.itemScope.should.equal(true);
      header.props.itemProp.should.equal('article');
      header.props.role.should.equal('header');
      header.props.itemType.should.equal('http://schema.org/Article');
    });
    describe('it is composed by 2 main blocks', () => {
      const groupImage = header.props.children.props.children[0];
      const groupText = header.props.children.props.children[1];
      describe(`it has a text group`, () => {
        it(`the text group always renders a title that is mandatory and wrapped on an H1 tag`, () => {
          const title = groupText.props.children[0];
          groupText.props.className.should.equal('header__group-text');
          title.type.should.equal('h1');
          title.props.className.should.equal('header__title');
        });
      });
      describe(`it has a image group`, () => {
        it('the image group is always present to keep layout consistent also if image is not present', () => {
          groupImage.props.className.should.equal('header__group-image');
        });
        it('the image can optionaly be provided and rendered with a className header__img', () => {
          shallowRenderer.render(React.createElement(Header, {
            title: 'Required',
            image: {
              src: `http://cdn.static-economist.com/sites/default/files/external/test-assets/democracy-in-america.svg`,
            },
          }));
          const headerWithImage = shallowRenderer.getRenderOutput();
          const image = headerWithImage.props.children.props.children[0].props.children;
          image.props.className.should.equal('header__img');
          image.type.should.equal('img');
        });
      });
    });
  });
  describe(`Expose a set of not required properties`, () => {
    shallowRenderer.render(React.createElement(Header, {
      title: 'Required',
      flyTitle: 'Flytitle',
      text: 'Text',
    }));
    const header = shallowRenderer.getRenderOutput();
    const groupText = header.props.children.props.children[1];
    it(`it can render a flytitle in a h2 tag with a header__flytitle className`, () => {
      const flyTitle = groupText.props.children[0];
      flyTitle.type.should.equal('h2');
      flyTitle.props.className.should.equal('header__flytitle');
    });
    it(`it can render a text with a header__text className`, () => {
      const text = groupText.props.children[2];
      text.props.className.should.equal('header__text');
    });
  });
});
