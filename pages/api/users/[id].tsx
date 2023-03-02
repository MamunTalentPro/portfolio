import { NextApiRequest, NextApiResponse } from "next";
import { Data } from "../../../data";

export default function handler(req:NextApiRequest,res:NextApiResponse){
    const {id }=req.query;
    
    if(req.method==='GET'){
       const user= Data.filter((user)=>(user.id.toString()===id))
       return res.status(200).json(user)
    }
    
}