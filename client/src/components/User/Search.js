import React, { useState } from 'react'
import Axios from 'axios'

const Search = () => {

    const [pid, setPid] = useState(0);

    const getit = () => {
        if(pid<=0) window.alert("property ids start with 1");
        
        else 
        {
            Axios.get(`https://online-rental-website.onrender.com/enquireproperty/${pid}`).then(response => {
                if(response.data.available) window.alert("property is available")
                else window.alert("property is occupied")
             })
            
       
    }
    }

    return (
       <>
       <br/>
       <input type = "number" onChange={e => setPid(e.target.value)} /> <br/> <br/><button className='button-s'onClick={getit} > Search</button>
       </>
    )
}

export default Search ;