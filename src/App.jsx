import {useState} from 'react';
function App()
{
  const[amount,setamount]=useState(0);
  const[discount,setdiscount]=useState(0);
  const[r,setr]=useState(0);
  function calculate(a,d)
  {
    setr(a-(a*d/100));
  }
  return(
    <div>
      <input type="number" placeholder="enter amout" value={amount}  onChange={(e)=>setamount(Number(e.target.value))}/>
      <input type="number" placeholder="enter the discount" value={discount} onChange={(e)=>setdiscount(Number(e.target.value))}/>
      <button onClick={()=>calculate(amount,discount)}>calculate</button>
      <h3>final amount :{r}</h3>

    </div>
  )
}
export default App;