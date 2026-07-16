import React, { useState, useEffect } from 'react'; 

export const Auth = () => { // 
  const [toggleForm, setToggleForm] = useState("login");

  useEffect(() => {
    console.log("Form saat ini: " + toggleForm);
  }, [toggleForm]);

  return (
    <>  
      {/* Signup */}
      {toggleForm === "signup" ? (  
        <div>
          <h1>Sign Up Form</h1>
          <p>Nama</p>
          <input type="text" placeholder='Masukkan nama' />
          <p>Email</p>
          <input type="email" placeholder='Masukkan email' />
          <p>Password</p>
          <input type="password" placeholder='Masukkan password' />
        </div>
      ) : (
        // Login
        <div>
          <h1>Login Form</h1>
          <p>Email</p>
          <input type="email" placeholder='Masukkan email' />
          <p>Password</p>
          <input type="password" placeholder='Masukkan password' />
        </div>
      )}

      {/* tombol ganti form */}
      {toggleForm === "signup" ? (
        <button onClick={() => setToggleForm("login")}>
          Sudah punya akun? Login di sini
        </button>
      ) : (
        <button onClick={() => setToggleForm("signup")}>
          Belum punya akun? Sign Up di sini
        </button>
      )}
    </>
  );
};