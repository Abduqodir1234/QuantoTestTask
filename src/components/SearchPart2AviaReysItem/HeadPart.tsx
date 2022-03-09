import { GridItem, Image, Text } from "@chakra-ui/react"
import { FC, Fragment } from "react"


interface HeadPartProps{
    price:number
}


let HeadPart:FC<HeadPartProps> = ({price}) => {
    return(
        <Fragment>
        <GridItem  colSpan={9} mb='20px' >
            <Text 
                fontSize='3xl'
                color='blue.500'
                fontWeight='bold'
                letterSpacing='3px'
            >
                {price} ₽
            </Text>
        </GridItem>
        <GridItem   colSpan={3} >
            <Image width='178px' height='45px' objectFit='contain' objectPosition='center' src='https://portal.s7cdn.online/images/icons-svg/S7_logo.svg' />
        </GridItem>
        </Fragment>
    )
}
export default HeadPart