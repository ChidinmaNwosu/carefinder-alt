import React from 'react'

function SignUp() {
  return (
    <div>
      <div className="container">
            <div className="">
                <div className=" ">
                    <h2>Sign Up</h2>
                      <form>
                        <div className="">
                            <label>Email</label>
                            <input type="email" className="" />
                        </div>
                        <div className="">
                            <label>Password</label>
                            <input type="password" className="form-control" />
                        </div>
                        <div className="">
                            <button className="">Sign Up</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SignUp;