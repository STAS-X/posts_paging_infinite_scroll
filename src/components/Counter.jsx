import React, { useState } from 'react';
    
const Counter = ()=> {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    if (count > 0) setCount(count - 1);
  } 
    
    return (
        <div>
            <h3 className="font-bold text-3xl m-5">{count}</h3>
            <button
				className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
				onClick={increment}
			>
				Увеличить
			</button>
			<button
				className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
				onClick={decrement}
			>
				Уменьшить
			</button>
        </div>
    );
};
export default Counter;