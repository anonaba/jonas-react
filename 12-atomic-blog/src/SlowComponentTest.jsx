import { useState } from 'react'

function SlowComponent() {
  const words = Array.from({ length: 100_000 }, () => 'WORD')
  return (
    <ul>
      {words.map((word, i) => (
        <li key={i}>
          {i}: {word}
        </li>
      ))}
    </ul>
  )
}

function Counter({ children }) { // Solution SlowComponent Rerendering 👉 Optimization Trick With children
  const [count, setCount] = useState(0)
  return (
    <div>
      <h1>Slow counter?!?</h1>
      <button onClick={() => setCount((c) => c + 1)}>Increase: {count}</button>
      {children}
    </div>
  )
}

export default function SlowComponentTest() { // call it in List component in App.jsx to test
  return (
    <Counter>
      <SlowComponent />
    </Counter>
  )
}




// the approach above Optimization Trick with children prop can be done also with react memo
const SlowComponent = memo(function SlowComponent() {
  const words = Array.from({ length: 100_000 }, () => 'WORD')
  return (
    <ul>
      {words.map((word, i) => (
        <li key={i}>
          {i}: {word}
        </li>
      ))}
    </ul>
  )
})

export default function SlowComponentTest() { //call it in List component in App.jsx to test
  const [count, setCount] = useState(0)
  return (
    <div>
      <h1>Slow counter?!?</h1>
      <button onClick={() => setCount((c) => c + 1)}>Increase: {count}</button>
      <SlowComponent />
    </div>
  )
}

//Orignal text code SlowComponent Rerendering

// function SlowComponent() {
//   const words = Array.from({ length: 100_000 }, () => 'WORD')
//   return (
//     <ul>
//       {words.map((word, i) => (
//         <li key={i}>
//           {i}: {word}
//         </li>
//       ))}
//     </ul>
//   )
// }

// export default function SlowComponentTest() {
//   const [count, setCount] = useState(0)
//   return (
//     <div>
//       <h1>Slow counter?!?</h1>
//       <button onClick={() => setCount((c) => c + 1)}>Increase: {count}</button>
//       <SlowComponent />
//     </div>
//   )
// }
