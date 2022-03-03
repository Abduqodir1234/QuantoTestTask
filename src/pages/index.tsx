import { Box, Container, Grid, GridItem } from "@chakra-ui/react"
import { lazy } from "react"
import Menu from "../components/MobileMenu/menu"
const SearchPart1 = lazy(() => import('../components/Search/Part1'))
const SearchPart2 = lazy(() => import('../components/Search/Part2'))

let IndexPage = () => {
    return (
        <>
            <Menu />
        <Box bg='blue.50' py='40px' minHeight='100vh'>
            <Container maxW='container.xl'  >
                <Grid
                    marginTop=""
                    templateColumns='repeat(5, 1fr)'
                    gap={4}
                >
                    <GridItem display={{base:'none',md:'none',xl:'block',lg:'block'}} rowSpan={2} colSpan={1} >
                        <SearchPart1 />
                    </GridItem>
                    <GridItem colSpan={{base:5,md:5,lg:4,xl:4}} >
                        <SearchPart2 />
                    </GridItem>
                </Grid>
            </Container>
        </Box>
        </>
    )
}

export default IndexPage