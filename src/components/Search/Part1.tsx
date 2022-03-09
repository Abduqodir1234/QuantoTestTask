import { Box, Text } from "@chakra-ui/react"
import { FC } from "react"
import CustomCheckBox from "../Part1/CheckBox"

interface SearchPart1Props{
    filter:any;
    setfilter:any
}


let SearchPart1:FC<SearchPart1Props> = ({filter,setfilter}) => {
    const handleChange = (text:string) =>{
        let main = [...filter]
        let index = main.indexOf(text)
        if(index === -1){
            main.push(text)
        }
        else{
            main.splice(index,1)
        }
        setfilter(main)
    }

    const isExist = (text:string)=>filter.includes(text)


    return(
        <Box 
            shadow='md'  
            rounded='lg' 
            border='none' 
            bg='white' 
            p='15px' 
            px='20px' 
            
        >
            <Text  
                color='blackAlpha.700' 
                fontSize='small'  
                fontWeight='bold' 
                textTransform='uppercase' 
            >
                количество пересадка
            </Text>
            <Box mt='10px' display='block'>
                <CustomCheckBox
                    handleChange={handleChange}
                    isExist={(e)=>isExist(e)}
                    value=''
                    text='Все'
                 /> 
                 <CustomCheckBox
                    handleChange={handleChange}
                    isExist={(e)=>isExist(e)}
                    value='0'
                    text='Без пeресaдoк'
                 />
                 <CustomCheckBox
                    handleChange={handleChange}
                    isExist={(e)=>isExist(e)}
                    text='1 пересадка'
                    value="1"
                 />
                 <CustomCheckBox
                    handleChange={handleChange}
                    isExist={(e)=>isExist(e)}
                    text='2 пересадка'
                    value="2"
                 />
                 <CustomCheckBox
                    handleChange={handleChange}
                    isExist={(e)=>isExist(e)}
                    text='3 пересадка'
                    value="3"
                 />
                 
            </Box>
        </Box>
    )
}

export default SearchPart1