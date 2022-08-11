import useClippy from "use-clippy";

function Component1() {
  const [clipboard, setClipboard] = useClippy();

  return (
    <div>
      <div>Clipboard</div>
      <div>{clipboard}</div>

      <button onClick={() => setClipboard("nnamdi")}>Set Clipboard</button>
    </div>
  );
}

export default Component1;
