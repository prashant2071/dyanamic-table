export const getCurrentYear = () =>{
    let date = new Date()
    return new Date().getFullYear();
} 

export const dateFormatter = (date:string) =>{
   
    return `${new Date(date).getFullYear()}`
}