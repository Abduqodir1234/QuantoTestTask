import { Box } from "@chakra-ui/react"
import AviaReysItem from "../Part2/AviaReysItem"
import SearchPart2ButtonGroup from "../Part2/ButtonGroup"


const items = [
    {},
    {},
    {},
    {},
    {},
]


let SearchPart2 = () => {
    return(
        <Box>
            <SearchPart2ButtonGroup />
            {items.map(one=>(
                <AviaReysItem />
            ))}
        </Box>
    )
}

export default SearchPart2