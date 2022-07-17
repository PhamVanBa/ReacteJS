import { connect } from "react-redux";
import { incremented, decremented } from "../../redux/reducers/counterSlide";
import { selectCounter } from "../../redux/selectors/counterSelector";

function Counter(props) {

    return (
        <div>
            <p>Value: {props.counter}</p>
            <button onClick={() => props.incremented()}>Increase</button>
            <button onClick={() => props.decremented()}>Decrease</button>
        </div>
    )
}

const mapGlobalStateToProps = state => {
    return {
        counter: selectCounter(state)
    };
};

export default connect(mapGlobalStateToProps, { incremented, decremented })(Counter);