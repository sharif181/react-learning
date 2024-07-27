import { useEffect } from "react";

const connect = () => console.log("connecting");
const disconnect = () => console.log("disconnecting");

const UseEffectCleanUp = () => {
  useEffect(() => {
    connect();
    return () => disconnect();
  });
  return <div>UseEffectCleanUp</div>;
};

export default UseEffectCleanUp;
