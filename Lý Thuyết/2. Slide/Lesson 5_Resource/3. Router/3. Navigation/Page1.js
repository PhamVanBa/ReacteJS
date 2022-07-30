function Page1(props) {

    const goBack = () => {
        props.history.goBack();
    }

    const forward = () => {
        props.history.goForward();
    }

    const go = (n) => {
        props.history.go(n);
    }

    return (
        <div>
            <h2>Page1</h2>

            <button onClick={goBack}>goBack</button>
            <button onClick={forward}>forward</button>
            <button onClick={() => go(-1)}>go -1</button>
            <button onClick={() => go(-2)}>go(-2)</button>
            <button onClick={() => go(1)}>go(1)</button>
            <button onClick={() => go(2)}>go(2)</button>
        </div>


    );
}

export default Page1;


