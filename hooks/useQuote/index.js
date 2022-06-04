import {useQuery} from 'react-query'
import axios from 'axios';


const fetchRandomQuote = () =>{
    return axios.get('https://code.aldipee.com/api/v1/quotes/random?language=english').then(data => data)
}


export const useQuote  = () => {
    const result = useQuery({
        queryFn: () => fetchRandomQuote(),
        queryKey: 'currentQuote',
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false
    })
    return {...result, quote: result?.data?.data}
}


