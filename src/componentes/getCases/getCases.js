import React, {useState, useEffect} from 'react'
import api from '../../services/api'
import InputDetails from '../InputDetails'
import  {Wrapper} from '../getCases/getCases.style'
import SelectBox from '../SelectBox/SelectBox'

const GetCases = () => {
    const [response, setResponse] = useState([])
    useEffect(() => {
      api.get().then(res => setResponse(res.data))
    }, [])
    console.log(response)
    return (
        <Wrapper>
            <SelectBox />
            {
                //response.map(item => (             
                    <InputDetails info={response}/>
                //))
            }
        </Wrapper>
       
    )
}

export default GetCases