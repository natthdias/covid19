import React, {useState, useEffect} from 'react'
import api from '../../services/api'
import InputDetails from '../InputDetails'
import  {Wrapper} from '../getCases/getCases.style'
import SelectBox from '../SelectBox/SelectBox'

const GetCases = () => {
    const [response, setResponse] = useState()
    const [selectState, setSelectState] = useState('Todos');
    const [url, setUrl] = useState('')
    useEffect(() => {
        if(selectState !== 'Todos'){ 
            setUrl(`brazil/uf/${selectState}`)
        } else {
            setUrl('')
        }
      api.get(url).then(res => setResponse(Array.isArray(res) ? res.data.data : res.data))
    }, [selectState, url])

    return (
        response ? (
            <Wrapper>
            <SelectBox setResponse={setResponse} selectState={selectState} setSelectState={setSelectState} url={url} />
            {
                Array.isArray(response) ? response.map(item => (
                    <InputDetails info={item}/>   
               ))
                : <InputDetails info={response}/>    
            }
        </Wrapper>
        ) : 'Só lamento'
    )
}

export default GetCases
//FRANKLIN DESCULPA !