import { toast } from "react-toastify"

const toastConifigtoast:any= {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: true,
    theme: "light",
    }
export const successToast = (message:string) =>{
    toast.success(message,toastConifigtoast)
}
export const errorToast = (message:string) =>{
    toast.error(message,toastConifigtoast)
}
export const warningToast = (message:string) =>{
    toast.warning(message,toastConifigtoast)
}
export const infoToast = (message:string) =>{
    toast.info(message)
}
export const loader = (message:string) =>{
    toast.loading(message,toastConifigtoast)
}