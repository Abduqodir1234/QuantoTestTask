import { 
    Button, 
    Drawer, 
    DrawerBody, 
    DrawerCloseButton, 
    DrawerContent, 
    DrawerFooter, 
    DrawerHeader, 
    DrawerOverlay, 
    Input,
    MenuButton,
    Menu,
    IconButton,
    Box
} from "@chakra-ui/react";
import image from '../../public/menu.png'
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
    <Box display={{base:'block',md:'block',lg:'none',xl:"none"}} >
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