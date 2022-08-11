function HelloDefault({ name, ...otherProps }) {
  return <div {...otherProps}>Hello {name}!</div>;
}

export default HelloDefault;
