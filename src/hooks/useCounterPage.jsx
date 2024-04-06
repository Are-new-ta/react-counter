import useCounter from './useCounter';

function useCounterPage({ initialPage = 1 }) {
  const {
    count: currentPage,
    increment: nextPage,
    decrement: previousPage,
  } = useCounter({ initialPage, maxCount: 5, minCount: 1 });

  return {
    currentPage,
    nextPage,
    previousPage,
  };
}

export default useCounterPage;


// import { useState } from "react";

// function useCounterPage (initialPage = 1) {
//   const [currentPage, setcurrentPage] = useState(initialPage);

//   //перемещаемся между страницами вперед
//   const nextPage = () => {
//     setcurrentPage((prevPage) => prevPage + 1);
//   };

//   //перемещаемся между страницами назад
//   const previousPage = () => {
//     if (currentPage > 1) {
//       setcurrentPage((prevPage) => prevPage - 1);
//     }
//   };

//   return {
//     currentPage,
//     nextPage,
//     previousPage,
//   };
// }

// export default useCounterPage;
