import { Outlet } from "react-router-dom"

function AuthLayout() {
  return (
    <div className="flex justify-between">
      <div className="font-black text-primary  text-2xl flex justify-center items-center">
         COINSWAG
      </div>
      <div>
         <Outlet />
      </div>
    </div>
  )
}
export default AuthLayout