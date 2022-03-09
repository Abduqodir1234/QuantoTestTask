import axios from "axios"
import { useQuery } from "react-query"

let useSearchPart2 =  (id:string,options:object) =>{
    return useQuery('search-part2',()=>axios(`/tickets?searchId=${id}`),{...options})
}
export default useSearchPart2;