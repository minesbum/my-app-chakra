import React from 'react';
import { Box, Center, Image, Text, Button, Stack } from '@chakra-ui/react';

function Header() {
  return (
    <Box bg="white" p={4} color="white" textAlign="center">
      <Center>
        <Image 
          src="https://ca-times.brightspotcdn.com/dims4/default/0ca19fa/2147483647/strip/true/crop/2048x1108+0+0/resize/1200x649!/format/webp/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F12%2Fa5%2F79e097ccf62312d18a025f22ce48%2Fhoyla-recuento-11-cosas-aman-gatos-top-001" 
          alt="cat"
          boxSize="auto" 
          objectFit="cover" 
          filter= 'brightness(0.6)'
          w="70%" 
          h="auto"
        
        />
      </Center>
      <Text fontSize="40px" fontWeight="thin" position="relative" top=" -250px">
        DOMINA EL TERRENO
      </Text>
      <Stack direction="row" spacing={4} justify="center" marginTop="20px" position="absolute" top="27%" left="50%" transform="translateX(-50%)">
        <Button
          colorScheme="teal"
          variant="outline" 
          borderColor="white" 
          color="white" 
          _hover={{ color: 'black', bg: 'white' }} 
        >
          VER DETALLES
        </Button>
        <Button
          colorScheme="teal"
          variant="outline" 
          borderColor="white" 
          color="white" 
          _hover={{ color: 'black', bg: 'white' }} 
        >
          VER VIDEO
        </Button>
      </Stack>
    </Box>
  );
}

export default Header;