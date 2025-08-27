import React from 'react'

const Header = () => {
  return (
     <div className="w-full  flex justify-between items-center">
        <h1 className="font-bold text-4xl ">Recommended Movies</h1>
        <div className="w-1/4 flex justify-center items-center gap-x-4 ">
          <LInk>Login</LInk>
          <LInk>SignUp</LInk>
        </div>
      </div>
  )
}

export default Header