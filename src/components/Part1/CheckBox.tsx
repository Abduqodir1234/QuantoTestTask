import { Checkbox,Text } from "@chakra-ui/react"
import { FC } from "react"

interface CustomCheckBoxProps{
    isExist:(text:string)=>boolean;
    handleChange:(text:string)=>void;
    text:string
}


let CustomCheckBox:FC<CustomCheckBoxProps> = ({
    isExist,
    handleChange,
    text
}) => {
    return(
        <Checkbox 
            py='4px'
            width='100%'
            value='all'
            isChecked={isExist('all')}
            onChange={(v)=>handleChange('all')}  
            size='lg' 
            iconColor='#4299E1' 
            border={isExist('all')  ? '#4299E1' : 'grey.500'}
            colorScheme='white'
        >
            <Text color='blackAlpha.700' fontSize='small' >{text}</Text>
        </Checkbox>
    )
}

export default CustomCheckBox