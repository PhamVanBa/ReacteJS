import useScript from "react-script-hook";

function Component3() {
  const [loading, error] = useScript({
    src: "analytics.google.com/api/v2/",
    onload: () => console.log("Script loaded"),
  });

  if (loading) return <div>Script loading</div>;
  if (error) return <div>Error occured</div>;

  return <div>...</div>;
}

export default Component3;
