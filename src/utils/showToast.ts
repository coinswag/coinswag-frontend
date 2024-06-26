import toast, { ToastOptions } from "react-hot-toast";


const showToast = {
   message: (message: string, opt?: ToastOptions)=> {
      toast.remove()
      toast(message, opt);
   },
   success: (message: string, opt?: ToastOptions)=> {
      toast.remove()
      toast.success(message, opt);
   },
   error: (message: string, opt?: ToastOptions)=> {
      toast.remove()
      toast.error(message, opt);
   },
   loading: (message: string, opt?: ToastOptions)=> {
      toast.remove()
      toast.loading(message, opt);
   }
}

export default showToast;