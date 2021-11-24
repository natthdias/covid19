import React, {useState, useEffect} from 'react'
import api from '../../services/api'
import InputDetails from '../InputDetails'
import  {Wrapper} from '../getCases/getCases.style'

const GetCases = () => {
    const [response, setResponse] = useState([])
    console.log("response depois da declaração", response)
    let url = window.location.href.split("/")
    url = url[url.length-1]
    useEffect(() => {
      api.get(url).then(res => setResponse(res.data.data))
    }, [])
    console.log("response depois da resposta da api", response)
    return (
        <Wrapper>
            {
                response.map(item => (
                    <>
                    {console.log("acessando dentro do array", item)}
                    <InputDetails key={item.uid} info={item}/>
                    </>
                ))
            }
        </Wrapper>
       
    )
}

export default GetCases