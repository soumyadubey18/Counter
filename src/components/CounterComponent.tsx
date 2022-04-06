import { useState } from "react";

const CounterComponent = () => {
  const [count, setCount] = useState(0);

  const Decrement = () => {
    if (count > 0)
    {      
      setCount(count - 1);
    }
  };


  const Increment = () => {
    if(count<10)
   {
         setCount(Number(count)+1);
  }
  else{
     
      setCount(10);
  }
    
  };

  const resert = (val: number) => {
    setCount(val);
    console.log("Resert-> " + val);
  };

  return (
    <>
      <div style={{}}>
      <h1><u> Counter Component</u></h1>
        <br></br> <br></br>
      
        <button onClick={() => Decrement()}>-</button>
        <h1>{count}</h1>
        <button onClick={() => Increment()}>+</button> 

        <br></br>
        {
          (count==10)? <label> You have achieved the Target.</label>: null

        }
        <br></br> <br></br>
        <button onClick={() => resert(0)}>Reset</button>
      </div>
    </>
  );
};

export default CounterComponent;