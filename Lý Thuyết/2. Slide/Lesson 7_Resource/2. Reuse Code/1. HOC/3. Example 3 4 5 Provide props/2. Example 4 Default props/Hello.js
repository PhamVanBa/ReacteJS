function Hello({ name, ...otherProps }) {
    return (
        <div {...otherProps}>Hello {name}!</div>
    );
}

export default Hello;


