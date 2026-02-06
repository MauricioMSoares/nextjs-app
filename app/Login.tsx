import { useMemo, useState } from "react";

const Login = () => {
  const [count, setCount] = useState(20);
  const [data, setData] = useState(20);
  const countMemo = useMemo(() => {
    return count * 5
  }, [count])

  return (
    <>
      <h1>Count: {count}</h1>
      <h1>Data: {data}</h1>
      <h2>{countMemo}</h2>
      <button onClick={() => setCount(count + 20)}>Update Count</button>
      <button onClick={() => setCount(data + 20)}>Update Data</button>
    </>
  );
};

export default Login;
