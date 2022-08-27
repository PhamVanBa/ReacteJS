function CustomInput(props) {
  const [inputFocus, setInputFocus] = useState(false);

  const _onFocus = () => {
    setInputFocus(true);
  };

  const _onBlur = () => {
    setInputFocus(false);
  };

  return (
    <div className="formcontrol-input">
      <label className={inputFocus ? "active" : ""}>{props.label}</label>
      <div className="input-item">
        <input
          className={inputFocus ? "active" : ""}
          onFocus={_onFocus}
          onBlur={_onBlur}
        />
        <fieldset className={inputFocus ? "active" : ""}>
          <leged>
            <span>{props.label}</span>
          </leged>
        </fieldset>
      </div>
    </div>
  );
}

export default CustomInput;
