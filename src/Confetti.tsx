import React, { useEffect, useState } from 'react'
import ReactConfetti from 'react-confetti'

const Confetti = () => {
    const [windowDimension, setWindowDimension] = useState({width: window.innerWidth, height: window.innerHeight});
    const [Btn, setBtn] = useState(false);
    const detectSize = () => {
        setWindowDimension({width: window.innerWidth, height: window.innerHeight})
    }

    useEffect(() => {
        window.addEventListener('resize', detectSize)
        return ()=>{
            window.removeEventListener('resize', detectSize);
        }
    }, [windowDimension]);

  return (
    <>
        <button onClick={()=> setBtn(!Btn)}>Confetti Run</button>
        {
            Btn && <ReactConfetti
            width={windowDimension.width}
            height={windowDimension.height}
            tweenDuration={1000}
        />
        }
    </>
  )
}

export default Confetti