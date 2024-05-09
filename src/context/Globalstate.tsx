import {useEffect, useState} from 'react'
import GlobalContext from './GlobalContext'


interface loginInterface {
     isLoggedIn:boolean;
     token:string;
}

const Globalstate = (props:any) => {
    const [loginState,setLoginState] = useState<loginInterface>({
        isLoggedIn:false,
        token:""
    })
    useEffect(()=>{
     const localData = localStorage.getItem("isLoggedInObj")
     if(localData !==null){
      const isLoggedInObj = JSON.parse(localData);
       console.log("helll obj",isLoggedInObj)
       setLoginState(isLoggedInObj)
     }
    },[])
    const setIsLoggedIn = (token:string) =>{
      const data:any ={
          isLoggedIn:true,
          token,
      }
      localStorage.setItem("isLoggedInObj",JSON.stringify(data));
      setLoginState(data);
    } 


  return (
    <GlobalContext.Provider value={{loginState,  setIsLoggedIn}}>
        {props.children}
    </GlobalContext.Provider>
  )
}

export default Globalstate