import { useLocalStorage } from "@rehooks/local-storage";

function Component4() {
  const [name, setName, deleteName] = useLocalStorage("name");

  return (
    <div>
      <div>Key: "name" | Value: "{name}"</div>
      <div>
        <button onClick={() => setName("nnamdi")}>Set Name</button>
        <button onClick={deleteName}>Delete Value</button>
      </div>
    </div>
  );
}

export default Component4;
