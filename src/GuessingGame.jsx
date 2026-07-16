import React, { useState, useEffect } from 'react'

export const GuessingGame = () => {
    const [password, etPassword] = useState("");
    useEffect(() => {
        
        if (password === "1234") {
            console.log("Password benar!");
            alert("Selamat! Anda berhasil menebak password.");
        } else
        {
            console.log("Password salah, coba lagi.");
        }
    }, [password]);
  return (
    <>
    <h1>Guessing Game</h1>
    <p>can you guess the password?</p>
    <input onChange={(e) => setPassword(e.target.value)} placeholder='Masukkan password' />
   
    </>
  )
}
