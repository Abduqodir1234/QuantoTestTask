import { Box, Container, Grid, GridItem } from "@chakra-ui/react"
import { lazy } from "react"
const SearchPart1 = lazy(() => import('../components/Search/Part1'))
const SearchPart2 = lazy(() => import('../components/Search/Part2'))

let IndexPage = () => {
    return (
        <Box bg='blue.50' py='100px' minHeight='100vh'>
            <Container maxW='container.xl'  >
                <Grid
                    marginTop=""
                    templateRows='repeat(0, 1fr)'
                    templateColumns='repeat(5, 1fr)'
                    gap={4}
                >
                    <GridItem rowSpan={2} colSpan={1} >
                        <SearchPart1 />
                    </GridItem>
                    <GridItem colSpan={4} >
                        <SearchPart2 />
                    </GridItem>
                </Grid>
            </Container>
        </Box>
    )
}

export default IndexPage