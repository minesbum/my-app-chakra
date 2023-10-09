import React from 'react';
import { Image, Stack, Text, Button, Box } from '@chakra-ui/react';

function SecondHeader() {
  return (
    <Stack direction="row" alignItems="center">
      <Box position="relative">
        <Image
          boxSize="300px"
          objectFit="cover"
          src="https://ca-times.brightspotcdn.com/dims4/default/0ca19fa/2147483647/strip/true/crop/2048x1108+0+0/resize/1200x649!/format/webp/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F12%2Fa5%2F79e097ccf62312d18a025f22ce48%2Fhoyla-recuento-11-cosas-aman-gatos-top-001"
          alt="cat"
          filter="brightness(0.6)"
          position="relative" 
          left="10px"
        />
        <Text
          fontSize="30px"
          fontWeight="thin"
          position="absolute"
          top="75px"
          left="20px"
          color="white"
        >
          DOMINA EL TERRENO
        </Text>
        <Stack
          direction="column"
          spacing="10px"
          position="absolute"
          bottom="100px"
          left="20px"
        >
        <Button
          colorScheme="teal"
          variant="outline" 
          borderColor="white" 
          color="white" 
          _hover={{ color: 'black', bg: 'white' }}
          w="280px" 
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
    </Stack>
  );
}

export default SecondHeader;