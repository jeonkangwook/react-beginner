import Button from './Button'
import styles from './App.module.css'
import { useEffect, useState } from 'react';

function Hello(){
  useEffect(() => {
    console.log("create");
  }, [])
  return <h1>Hello</h1>
}
//컴포넌트 및 useEffect
function App(){
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello/> : null}
      <button onClick={onClick}>{showing ? "hide" : "show"}</button>
    </div>
  )
}
// function App() {
//   const [counter, setValue] = useState(0);
//   const [keyword, setKeyword] = useState("");
//   const onChange = (event) => setKeyword(event.target.value);
//   const onClick = () => setValue((prev) => prev+1);
//   useEffect(() => {
//     console.log("gg")
//   },[]);
//   useEffect(() => {
//     if(keyword !== "" && keyword.length > 5){
//       console.log("search for ",keyword);
//     }
//   }, [keyword])
//   useEffect(() => {
//     console.log("I RUN COUNTER");
//   }, [counter])
//   return (
//     <div>
//       <input value={keyword} onChange={onChange} type='text' placeholder='search bar'/>
//       <h1 className={styles.title}>{counter}</h1>
//       <button onClick={onClick}>click here</button>
//       {/* <Button text={'asd'}/> */}
//     </div>
//   );
// }

export default App;
