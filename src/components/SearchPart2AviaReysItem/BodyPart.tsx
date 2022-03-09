import { Grid, GridItem, Image, Text } from "@chakra-ui/react";
import { FC, Fragment } from "react";


interface BodyPartProps{
    mow_hkt_name:string;
    mow_hkt:any;
    times:any;
    change:any;
}


let BodyPart :FC<BodyPartProps>= ({
    mow_hkt,
    times,
    change,
    mow_hkt_name
}) =>{
    return(
        <Grid
            templateColumns='repeat(12, 1fr)'
        >
            <GridItem  colSpan={4} >
                <Text 
                    textTransform='uppercase'
                    color='gray.400'
                >
                    {mow_hkt_name}
                    <Text 
                        width='100%'
                        fontWeight='bold'
                        color='blackAlpha.800'
                        fontSize={{base:'small',md:'normal',lg:'normal',xl:'normal'}}
                    >
                        {mow_hkt}
                    </Text>
                </Text>
            </GridItem>
            <GridItem  colSpan={4} >
                <Text 
                    textTransform='uppercase'
                    color='gray.400'
                >
                    В пyти
                    <Text 
                        width='100%'
                        fontWeight='bold'
                        color='blackAlpha.800'
                        fontSize={{base:'small',md:'normal',lg:'normal',xl:'normal'}}
                    >
                        {times} m
                    </Text>
                </Text>
            </GridItem>
            <GridItem  colSpan={4} >
                <Text 
                    textTransform='uppercase'
                    color='gray.400'
                >
                    {change.length} пересадка
                    <Text 
                        width='100%'
                        fontWeight='bold'
                        color='blackAlpha.800'
                        fontSize={{base:'small',md:'normal',lg:'normal',xl:'normal'}}
                    >
                        {change.map((one:any)=>one+" ")}
                    </Text>
                </Text>
            </GridItem>
        </Grid>
    )
}
export default BodyPart;