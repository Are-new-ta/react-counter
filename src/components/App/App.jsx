import "./App.css";
import useCounter from "../../hooks/useCounter";
import useCounterPage from "../../hooks/useCounterPage";

function App() {
  const { count, increment, decrement } = useCounter(0);
  const { currentPage, nextPage, previousPage, } = useCounterPage(1);

  return (
    <>
      <h1 className="counter-title">Нажми на кнопку и будет результат</h1>
      <div className="counter">
        <h2>Counter: {count}</h2>
        <div className="counter__wrapper">
          <button onClick={decrement} className="counter__button">
            Click -
          </button>
          <button onClick={increment} className="counter__button">
            Click +
          </button>
        </div>

        <span className="counter__box">Page: {currentPage}</span>
        <div className="counter__wrapper">
          <button onClick={previousPage} className="counter__button-page">
            Previous
          </button>
          <button onClick={nextPage} className="counter__button-page">
            Next
          </button>
        </div>
      </div>
    </>
  );
}
export default App;

// import { useState } from "react";
// import "./App.css";
// import useCounter from "./useCounter";

// function App() {
//   const { count, currentPage, increment, decrement, nextPage, previousPage } =
//     useCounter(0, 1);

//   return (
//     <>
//       <h1 className="counter-title">Нажми на кнопку и будет результат</h1>
//       <div className="counter">
//         <h2>Counter: {count}</h2>
//         <div className="counter__wrapper">
//           <button onClick={decrement} className="counter__button">
//             Click -
//           </button>
//           <button onClick={increment} className="counter__button">
//             Click +
//           </button>
//         </div>

//         <span className="counter__box">Page: {currentPage}</span>
//         <div className="counter__wrapper">
//           <button onClick={previousPage} className="counter__button-page">
//             Previous
//           </button>
//           <button onClick={nextPage} className="counter__button-page">
//             Next
//           </button>
//         </div>
//       </div>
//     </>
//   );
// }
// export default App;
