export const getCurrentYear = () =>{
    return new Date().getFullYear();
} 

export const dateFormatter = (date:string) =>{
   
    return `${new Date(date).getFullYear()}`
}