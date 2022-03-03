import {Grid, GridItem, Image, Text } from "@chakra-ui/react"
import BodyPart from "../SearchPart2AviaReysItem/BodyPart"
import HeadPart from "../SearchPart2AviaReysItem/HeadPart"


interface AviaReysItemProps{
    price:number;
    carrier?:string;
    segments:[{
        origin:string;
        destination:string;
        date:string;
        stops:string;
        duration:number
    }]
}

const items = [
    {
        title1:'MOW-HKT',
        body1:'10:45-08:00'
    },
    {
        title1:'V puti',
        body1:'21 s 15m'
    },
    {
        title1:'Peresadki',
        body1:'HKG,JNB'
    },
    {
        title1:'MOW-HKT',
        body1:'10:45-08:00'
    },
    {
        title1:'V puti',
        body1:'21 s 15m'
    },
    {
        title1:'Peresadki',
        body1:'HKG,JNB'
    },   
]


let AviaReysItem = () => {
    return(
        <Grid
            templateColumns='repeat(12, 1fr)'
            mt='20px'
            shadow='md'  
            rounded='lg' 
            border='none' 
            bg='white' 
            p='15px' 
            px='20px'
            justifyContent='space-between'
        >
            <HeadPart />
            {items.map(one=>(
                <GridItem py='2px'  colSpan={4}>
                    <BodyPart
                        body={one.body1}
                        title={one.title1}
                    />
                </GridItem>
            ))}
        </Grid>
    )
}
export default AviaReysItem