import { Container, Grid, GridItem, Skeleton, SkeletonText, Stack ,} from "@chakra-ui/react"

let Loading = () =>{
    return(
        <Stack>
            <Container maxW='container.xl'>
                <Grid 
                    marginTop="20" 
                    h='200px'
                    templateRows='repeat(2, 1fr)'
                    templateColumns='repeat(5, 1fr)'
                    
                    gap={4}
                >
                    <GridItem rowSpan={2} colSpan={1} display={{base:'none',md:'none',lg:'block',xl:'block'}}>
                        <Skeleton height='20px' noOfLines={12} width='100%' />
                        <Skeleton mt='4' height='20px' noOfLines={12} width='100%' />
                        <Skeleton mt='4' height='20px' noOfLines={12} width='100%' />
                        <Skeleton mt='4' height='20px' noOfLines={12} width='100%' />
                        <Skeleton mt='4' height='20px' noOfLines={12} width='100%' />
                    </GridItem>
                    <GridItem colSpan={{base:5,md:5,lg:4,xl:4}}>
                        <Skeleton width='100%' height='200px' />
                        <Skeleton mt='4' width='100%' height='200px' />
                        <Skeleton mt='4' width='100%' height='200px' />
                        <Skeleton mt='4' width='100%' height='200px' />
                    </GridItem>
                </Grid>
            </Container>
            {/* <Skeleton width="20%" height='200px' />
            <Skeleton width='79%' height='200px' />
            <Skeleton width='80%' height='200px' /> */}
        </Stack>
    )
}

export default Loading