import React, { useState } from "react";
import Button from './Button'


function App(){
    const [a, seta] = useState(0)
    const [b, setb] = useState(0)
    const [c, setc] = useState(0)
    const [d, setd] = useState(0)
  return(
    <div>
      <h3>4 counters</h3>
            <Button state={a} setstate={seta} />
            <Button state={b} setstate={setb} />
            <Button state={c} setstate={setc} />
            <Button state={d} setstate={setd} />
    </div>
  )
}
export default App;