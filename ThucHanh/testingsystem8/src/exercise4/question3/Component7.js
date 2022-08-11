import useOnlineStatus from "@rehooks/online-status";

function Component7() {
  const online = useOnlineStatus();

  return <div>Network {online ? "Online" : "Offline"}</div>;
}
export default Component7;
