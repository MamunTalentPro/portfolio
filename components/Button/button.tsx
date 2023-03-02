// import NextPage generic type
import { NextPage } from "next";
interface Props{
    value:number
    
}
 const  Button:NextPage<Props>=(props)=>{
    const {value}=props;
    return <>
    <button value={value} className="bg-blue-800">Check Button Text</button>
    </>
}
export default Button;