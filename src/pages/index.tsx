import { Box, Container, Grid, GridItem } from "@chakra-ui/react"
import { lazy, useEffect, useState } from "react"
import Loading from "../components/Loading"
import Menu from "../components/MobileMenu/menu"
import useSearchPart1 from "../reactQueryHooks/useSearchPart1"
import useSearchPart2 from "../reactQueryHooks/useSearchPart2"
const SearchPart1 = lazy(() => import('../components/Search/Part1'))
const SearchPart2 = lazy(() => import('../components/Search/Part2'))

let IndexPage = () => {
    let [filter,setfilter] = useState([''])
    let [mainData,setmaindata] = useState([])
    const part1:any = useSearchPart1()
    const searchId = part1?.data?.data?.searchId
    const part2:any = useSearchPart2(searchId,{enabled:!!searchId,refetchOnWindowFocus: false,})
    useEffect(()=>{
        let maindata=[]
        const array = filter.filter(one=>one!=='')
        console.log(array)
        if(array.length ===0 && Array.isArray(array)){
            maindata = part2?.data?.data?.tickets
        }
        else{
            maindata = part2?.data?.data?.tickets?.filter((one:any)=>{
                const res =  one?.segments?.map((segment:any)=>{
                    return array?.includes(segment.stops.length.toString())
                })
                return res.includes(false) ? false : true;
            })
        }
        
        setmaindata(maindata?.reverse().slice(0,5))
    },[filter,part2?.data?.data])
    if(searchId && part2?.data){
        return (
            <>
            <Menu  filter={filter} setfilter={(e:any)=>setfilter(e)}/>
            <Box bg='cyan.50' py='40px' minHeight='100vh'>
                <Container maxW='container.xl'  >
                    <Grid
                        marginTop=""
                        templateColumns='repeat(5, 1fr)'
                        gap={4}
                    >
                        <GridItem display={{base:'none',md:'none',xl:'block',lg:'block'}} rowSpan={2} colSpan={1} >
                            <SearchPart1 filter={filter} setfilter={(e:any)=>setfilter(e)} />
                        </GridItem>
                        <GridItem colSpan={{base:5,md:5,lg:4,xl:4}} >
                            <SearchPart2 data={mainData} />
                        </GridItem>
                    </Grid>
                </Container>
            </Box>
            </>
        )
    }
    else{
        return <Loading />
    }
}

export default IndexPage