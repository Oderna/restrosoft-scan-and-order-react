import { defineStyle, defineStyleConfig } from '@chakra-ui/react'
import { modalAnatomy as parts } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys)

const outline = defineStyle({
    // padding: '0px',
    // border: '2px dashed', // change the appearance of the border
    // borderRadius: 0, // remove the border radius
    // fontWeight: 'semibold', // change the font weight
})
  
export const buttonTheme = defineStyleConfig({
    variants: { outline },
})

const baseStyle = definePartsStyle({
    // define the part you're going to style
    //overlay is the background screen
    overlay: {
        // bg: 'transperant', //change the background
        backdropFilter: 'blur(10px)',
    },
    dialog: {
        maxWidth: ["95%", "95%", "95%"],
        minWidth: "80%",
        bg: "transperant"
      }
})

export const modalTheme = defineMultiStyleConfig({
    baseStyle,
})