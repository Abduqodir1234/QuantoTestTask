import { Button, ButtonGroup } from "@chakra-ui/react"

let SearchPart2ButtonGroup = () => {
    return (
        <ButtonGroup width='100%' size='lg' isAttached>
            <Button isFullWidth  colorScheme='blue'>Cамый дешевый</Button>
            <Button isFullWidth bg='white' variant='outline'>Cамый быстрый</Button>
        </ButtonGroup>
    )
}
export default SearchPart2ButtonGroup