import { Checkbox,Text } from "@chakra-ui/react"
import { FC } from "react"

interface CustomCheckBoxProps{
    isExist:(text:string)=>boolean;
    handleChange:(text:string)=>void;
    text:string,
    value:string
}


let CustomCheckBox:FC<CustomCheckBoxProps> = ({
    isExist,
    handleChange,
    text,
    value
}) => {
    return(
        <Checkbox 
            py='4px'
            width='100%'
            value={value}
            isChecked={isExist(value)}
            onChange={(v)=>handleChange(value)}  
            size='lg' 
            iconColor='#4299E1' 
            border={isExist(value)  ? '#4299E1' : 'grey.500'}
            colorScheme='white'
        >
            <Text color='blackAlpha.700' fontSize='small' >{text}</Text>
        </Checkbox>
    )
}

export default CustomCheckBox