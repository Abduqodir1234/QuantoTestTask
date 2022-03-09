import { Box } from "@chakra-ui/react"
import { FC } from "react"
import AviaReysItem from "../Part2/AviaReysItem"
import SearchPart2ButtonGroup from "../Part2/ButtonGroup"


interface SearchPart2Props{
    data:any
}


let SearchPart2:FC<SearchPart2Props> = ({data}) => {
    console.log(data)
        return(
            <Box>
                <SearchPart2ButtonGroup />
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