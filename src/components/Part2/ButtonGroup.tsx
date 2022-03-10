import { Button, ButtonGroup } from "@chakra-ui/react"
import { FC } from "react";


interface SearchPart2ButtonGroupProps{
    filter:any;
    setfilter:any;
}


let SearchPart2ButtonGroup:FC<SearchPart2ButtonGroupProps> = ({filter,setfilter}) => {
    const handleClick = (val:Array<string>) =>{
        let main = [...filter]
        let index = main.indexOf(val[0])
        let index2 = main.indexOf(val[1])
        if(index === -1){
            main.push(val[0])
        }
        else{
            main.splice(index,1)
        }
        index2 !== -1 && main.splice(index2,1)
        setfilter(main)
    }
    return (
        <ButtonGroup width='100%' size='lg' isAttached>
            <Button onClick={()=>handleClick(['cheap','fast'])} isFullWidth  colorScheme='blue'>Cамый дешевый</Button>
            <Button onClick={()=>handleClick(['fast','cheap'])} isFullWidth bg='white' variant='outline'>Cамый быстрый</Button>
        </ButtonGroup>
    )
}
export default SearchPart2ButtonGroup