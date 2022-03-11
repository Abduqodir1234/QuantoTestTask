import { useQuery } from "react-query"
import axios from "axios"

const fetcherSearch = ()=>axios('/search');


let useSearchPart1 = () =>{
    return useQuery('search-part1',fetcherSearch,{cacheTime:2*1000*60})
}
export default useSearchPart1