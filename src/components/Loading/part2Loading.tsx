import { Container, Grid, GridItem, Skeleton, SkeletonText, Stack ,} from "@chakra-ui/react"

let Part2Loading = () =>{
    return(
        <Stack>
            <Container maxW='container.xl'>
                <Grid 
                    h='200px'
                    templateRows='repeat(2, 1fr)'
                    templateColumns='repeat(5, 1fr)'
                    gap={4}
                >
                    <GridItem colSpan={5}>
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

export default Part2Loading