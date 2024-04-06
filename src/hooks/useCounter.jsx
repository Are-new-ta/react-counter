import { useState } from "react";

function useCounter({ initialtCount = 0, maxCount = 5, minCount = -5 }) {
  const [count, setCount] = useState(
    Math.min(Math.max(initialtCount, minCount), maxCount)
  );

  // увеличиваем значение счетчика на 1
  const increment = () => {
    setCount((prevCount) => Math.min(prevCount + 1, maxCount));
  };

  // уменьшаем значение счетчика на 1
  const decrement = () => {
    if (minCount || count > 0) {
      setCount((prevCount) => Math.max(prevCount - 1, minCount));
    }
  };

  return {
    count,
    increment,
    decrement,
  };
}

export default useCounter;


// счетчик без минимов, учитывает только факт того, что страницы не могут быть меньше 1
// import { useState } from "react";

// function useCounter(initialtCount = 0, negativeCounter = true) {
//   const [count, setCount] = useState(initialtCount);

//   // увеличиваем значение счетчика на 1
//   const increment = () => {
//     setCount((prevCount) => prevCount + 1);
//   };

//   // уменьшаем значение счетчика на 1
//   const decrement = () => {
//     if (negativeCounter || count > 0) {
//       setCount((prevCount) => prevCount - 1);
//     }
//   };

//   return {
//     count,
//     increment,
//     decrement,
//   };
// }

// export default useCounter;
