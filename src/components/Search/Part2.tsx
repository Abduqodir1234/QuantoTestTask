import { Box } from "@chakra-ui/react"
import { FC } from "react"
import AviaReysItem from "../Part2/AviaReysItem"
import SearchPart2ButtonGroup from "../Part2/ButtonGroup"


interface SearchPart2Props{
    data:any;
    filter:any;
    setfilter:any;
}


let SearchPart2:FC<SearchPart2Props> = ({data,filter,setfilter}) => {
        return(
            <Box>
                <SearchPart2ButtonGroup filter={filter} setfilter={(e:any)=>setfilter(e)}  />
                {data?.map((one:any,ind:number)=>(
                    <AviaReysItem
                        price={one.price}
                        segments={one.segments}
                        carrier={one.carrier}
                        key={one.carrier + ind}
                    />
                ))}
            </Box>
        )
}

export default SearchPart2