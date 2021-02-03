import React, { useState  , useEffect} from 'react'
import axios from 'axios';


export default function Filter() {
    const [data ,setData] = useState([]);
    const [filtered ,setFilterd] = useState([]);
    const [result , setResult] = useState("");

    useEffect(()=>{
        const fetchData = async ()=> {
                try{
                    const res = await axios.get('https://restcountries.eu/rest/v2/all');
                    setData(res.data);
                    setFilterd(res.data);
                }catch(err){
                    throw new Error(err);
                }
                 };
              fetchData(); 
    },[]);
    useEffect(()=> {
        const results = filtered.filter(res=> res.name.includes(result)

        ); 
        setData(results)
    } ,[result])
    const onChange =(e)=> {
        setResult(e.target.value);
    }

return (
    <div>
    <input 
        type="text"
        placeholder="serch here .."
        value={result}
        onChange={onChange}
    />
    {data.map((r,i)=> (   
            <ul key={i}>
            <li>{r.name}</li>
            </ul>)
        )
    }
</div>
)  
}

