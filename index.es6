import React from 'react';

export default class Header extends React.Component {
  static get propTypes() {
    return {
      image: React.PropTypes.shape({
        src: React.PropTypes.string,
      }),
      flyTitle: React.PropTypes.string,
      smallMode: React.PropTypes.bool,
      title: React.PropTypes.string.isRequired,
      text: React.PropTypes.string,
      itemType: React.PropTypes.string,
      itemProp: React.PropTypes.string,
      className: React.PropTypes.string,
      children: React.PropTypes.node,
      link: React.PropTypes.object,
    };
  }
  static get defaultProps() {
    return {
      itemType: 'http://schema.org/Article',
      itemProp: 'article',
    };
  }
  render() {
    const headerContent = [];
    const imageSrc = this.props.image && this.props.image.src;
    let imageAsBackground = {};
    if (imageSrc) {
      imageAsBackground = { backgroundImage: `url(${imageSrc})` };
    }
    if (this.props.flyTitle && !this.props.smallMode) {
      headerContent.push((
        <h2
          className="header__flytitle"
          itemProp="alternativeHeadline"
          key="flytitle"
        >{this.props.flyTitle}</h2>
      ));
    }
    let title = this.props.title;
    if (this.props.link) {
      title = <a {...this.props.link} className="header__title-link">{this.props.title}</a>;
    }
    headerContent.push((
    <h1
      className="header__title"
      itemProp="headline"
      key="title"
    >{title}</h1>));
    if (this.props.text && !this.props.smallMode) {
      headerContent.push((
        <div
          className="header__text"
          itemProp="description"
          key="text"
          /* eslint-disable react/no-danger */
          dangerouslySetInnerHTML={{
            '__html': this.props.text,
          }}
        />));
    }
    if (this.props.children) {
      headerContent.push((
        <div
          className="header__additional-element"
          key="additional"
        >
          {this.props.children}
        </div>));
    }
    const text = (
      <div className="header__content">
        {headerContent}
      </div>
    );

    let className = 'header';
    if (this.props.className) {
      className += ` ${this.props.className}`;
    }
    if (this.props.smallMode) {
      className += ' header--small-mode';
    } else {
      className += ' header--large-mode';
    }

    return (
      <header
        className={className}
        itemScope itemType={this.props.itemType} itemProp={this.props.itemProp}
        role="header"
        style={imageAsBackground}
      >
        <div className="header__wrapper">
          {text}
        </div>
      </header>
    );
  }
}
