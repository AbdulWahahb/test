

import { useEffect, useState } from "react"

const  App = ()=> {
const [data,setdata]=useState([]);
useEffect(function(){
async function getdate(){
const res=await fetch('https://reqres.in/api/users?page=1');
const data=await res.json();
setdata(data.data)
}
getdate();
},[])
return <>
{data.map((data,index)=>(
<div key={index}>{data.first_name+data.last_name}</div>
))}

</>
}

export default App
