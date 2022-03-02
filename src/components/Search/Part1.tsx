import { Box, Checkbox, Text } from "@chakra-ui/react"
import { useState } from "react"
import CustomCheckBox from "../Part1/CheckBox"

let SearchPart1 = () => {
    let [filter,setfilter] = useState([''])
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
                    text='Все'
                 /> 
                 <CustomCheckBox
                    handleChange={handleChange}
                    isExist={(e)=>isExist(e)}
                    text='Без пeресaдoк'
                 />
                 <CustomCheckBox
                    handleChange={handleChange}
                    isExist={(e)=>isExist(e)}
                    text='1 пересадка'
                 />
                 <CustomCheckBox
                    handleChange={handleChange}
                    isExist={(e)=>isExist(e)}
                    text='2 пересадка'
                 />
                 <CustomCheckBox
                    handleChange={handleChange}
                    isExist={(e)=>isExist(e)}
                    text='3 пересадка'
                 />
                 
            </Box>
        </Box>
    )
}

export default SearchPart1