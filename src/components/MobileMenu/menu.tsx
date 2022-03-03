import { 
    Button, 
    Drawer, 
    DrawerBody, 
    DrawerCloseButton, 
    DrawerContent, 
    DrawerHeader, 
    DrawerOverlay, 
    MenuButton,
    Menu,
    IconButton,
    Box
} from "@chakra-ui/react";
import image from '../../public/hamburger.png'
import { useState } from "react";
import SearchPart1 from "../Search/Part1";

let MobileMenu = () =>{
    const [isOpen,setopen] = useState<boolean>(false)
    const onOpen = () =>{
        setopen(true)
    }
    const onClose = () =>{
        setopen(false)
    }
    return(
    <Box display={{base:'flex',md:'flex',lg:'none',xl:"none"}} alignItems='center' padding='10px' height='60px' shadow='md'  >
      <Menu>
        <MenuButton
          onClick={onOpen}
          as={IconButton}
          aria-label='Options'
          icon={<img src={image} width={30} height={30} />}
          variant='outline'
        />
      </Menu>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader></DrawerHeader>

          <DrawerBody>
            <SearchPart1 />
          </DrawerBody>

        </DrawerContent>
      </Drawer>
    </Box>
    )
}
export default MobileMenu;