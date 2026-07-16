import React, { useEffect, useState } from 'react'

const Homepage = () => {
    // Memberikan nilai awal "" agar aman dari warning uncontrolled component
    const [fName, setFname] = useState("")
    const [lName, setLname] = useState("")
    const [counter, setCounter] = useState(0)

    useEffect(() => {
        console.log("nama sudah diterima :" + fName)
    }, [fName])

  return (
    <div>
        <p>Halo ini adalah homepage</p>
        <h1>Ini adalah header</h1>

        <form>
          <label htmlFor="fname">First name:</label><br />
          {}
          <input 
            type="text" 
            id="fname" 
            name="fname" 
            value={fName} 
            onChange={(e) => {
              const inputan = e.target.value
              if (/^[a-zA-Z\s]*$/.test(inputan)) {
                setFname(inputan)
              }
            }}
          />
          <br />
          
          <label htmlFor="lname">Last name:</label><br />
          <input 
            type="text" 
            id="lname" 
            name="lname" 
            value={lName} 
            onChange={(e) => {
              const inputan = e.target.value
              if (/^[a-zA-Z\s]*$/.test(inputan)) {
                setLname(inputan)
              }
            }}
          />
        </form>
        
        <br />
        <button onClick={() => setCounter(counter + 1)}>
          Current Counter: {counter} 
        </button>
        <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
            <button onClick={() => setCounter(counter - 1)}> - </button>
            <button> Counter: {counter} </button>
            <button onClick={() => setCounter(counter + 1)}> + </button>
        </div>
    </div>
    
  )
}

export default Homepage