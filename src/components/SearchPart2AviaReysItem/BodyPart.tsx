import { GridItem, Image, Text } from "@chakra-ui/react";
import { FC, Fragment } from "react";


interface BodyPartProps{
    title:string;
    body:string
}


let BodyPart :FC<BodyPartProps>= ({
    title,
    body
}) =>{
    return(
        <Fragment>
            <GridItem  colSpan={4} >
            <Text 
                textTransform='uppercase'
                color='gray.400'
            >
                {title}
                <Text 
                    width='100%'
                    fontWeight='bold'
                    color='blackAlpha.800'
                    fontSize={{base:'small',md:'normal',lg:'normal',xl:'normal'}}
                >
                    {body}
                </Text>
            </Text>
        </GridItem>
        </Fragment>
    )
}
export default BodyPart;