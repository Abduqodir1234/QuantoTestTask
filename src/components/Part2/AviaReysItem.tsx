import {Grid, GridItem, Image, Text } from "@chakra-ui/react"
import { FC } from "react";
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

// const items = [
//     {
//         title1:'MOW-HKT',
//         body1:'10:45-08:00'
//     },
//     {
//         title1:'V puti',
//         body1:'21 s 15m'
//     },
//     {
//         title1:'Peresadki',
//         body1:'HKG,JNB'
//     },
//     {
//         title1:'MOW-HKT',
//         body1:'10:45-08:00'
//     },
//     {
//         title1:'V puti',
//         body1:'21 s 15m'
//     },
//     {
//         title1:'Peresadki',
//         body1:'HKG,JNB'
//     },   
// ]


let AviaReysItem:FC<AviaReysItemProps> = ({
    price,
    carrier,
    segments
}) => {
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
            <HeadPart price={price} />
            {segments?.map((one:any)=>{
                let date = new Date(one?.date)
                let start_time = `${date.getUTCHours()}:${date.getUTCMinutes()}`
                let end_date = new Date(date.getTime() + 60000*one.duration)
                let end_time = `${end_date.getUTCHours()}:${end_date.getUTCMinutes()}`
                return(
                    <GridItem py='2px'  colSpan={12} key={one.date}>
                            <BodyPart
                                mow_hkt_name={`${one.origin} - ${one.destination}`} 
                                mow_hkt={`${start_time}-${end_time}`}
                                change={one.stops}
                                times={one.duration}
                                key={one}
                            
                            />
                    </GridItem>
                )
            })}
        </Grid>
    )
}
export default AviaReysItem