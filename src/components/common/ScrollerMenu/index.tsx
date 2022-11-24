/* eslint-disable @typescript-eslint/no-unused-vars */
import {Box, Text, HStack} from "@chakra-ui/react";
import React, { useState }  from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';

const getItems = () =>
  Array(20)
    .fill(0)
    .map((_, ind) => ({ id: `element-${ind}` }));

interface CardProps {
    itemId: string;
    selected: boolean;
    onClick: Function;
    title: string;
}

function noscroll() {
    window.scrollTo(0,0);
}

export function ScrollerMenu(){
    const [items, setItems] = React.useState(getItems);
    const [selected, setSelected] = React.useState([]);
    const [position, setPosition] = React.useState(0);

    const isItemSelected = ({id}:{id: string}) => !!selected.find((el) => el === id);

    const handleClick =({id}:{id: string}) => ({ getItemById, scrollToItem } : {getItemById: Function, scrollToItem: Function}) => {
        const itemSelected = isItemSelected({id});
        window.addEventListener("scroll", noscroll);
        window.removeEventListener("scroll", noscroll);

        setSelected((currentSelected) =>
            itemSelected
            ? currentSelected.filter((el) => el !== id)
            : currentSelected
        );
    };
    return (
        // <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
        <Box h="44px" backgroundColor={'rgba(255, 167, 0, 0.1)'} boxShadow='0px 1px 9px rgba(0, 0, 0, 0.3)'>
        <ScrollMenu
            
        >
            {items.map(({ id }) => (
                <Card
                itemId={id} // NOTE: itemId is required for track items
                title={id}
                key={id}
                onClick={handleClick({id})}
                selected={isItemSelected({id})}
                />
            ))}
        </ScrollMenu>
        </Box>
    )
}

function Arrow({
    children,
    disabled,
    onClick
  }: {
    children: React.ReactNode;
    disabled: boolean;
    onClick: VoidFunction;
  }) {
    return (
      <button
        disabled={disabled}
        onClick={onClick}
        style={{
          cursor: "pointer",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          right: "1%",
          opacity: disabled ? "0" : "1",
          userSelect: "none"
        }}
      >
        {children}
      </button>
    );
  }

function LeftArrow() {
    const { isFirstItemVisible, scrollPrev } =
      React.useContext(VisibilityContext);
  
    return (
      <Arrow disabled={isFirstItemVisible} onClick={() => scrollPrev()}>
        Left
      </Arrow>
    );
  }
  
function RightArrow() {
    const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext);

    return (
        <Arrow disabled={isLastItemVisible} onClick={() => scrollNext()}>
        Right
        </Arrow>
    );
}

function Card(props: CardProps) {
    const visibility = React.useContext(VisibilityContext);
  
    return (
        <Box bg={'#FFA700'} borderRadius='6px' mixBlendMode={'normal'} filter='drop-shadow(1px 1px 3px rgba(0, 0, 0, 0.4))' px={'9px'} py={'5px'} >
            <Text color={'white'} fontSize={'10px'}>{props.itemId}</Text>
        </Box>
    //   <div
    //     onClick={() => props.onClick(visibility)}
    //     style={{
    //       width: '160px',
    //     }}
    //     tabIndex={0}
    //   >
    //     <div className="card">
    //       <div>{props.title}</div>
    //       <div>visible: {JSON.stringify(!!visibility.isItemVisible(props.itemId))}</div>
    //       <div>selected: {JSON.stringify(!!props.selected)}</div>
    //     </div>
    //     <div
    //       style={{
    //         height: '200px',
    //       }}
    //     />
    //   </div>
    );
  }


function ScrollerMenu1() {
    return (
        // Need to remove the  scroller line 
        // POC Requirement for Carousel
        <Box h="44px" backgroundColor={'rgba(255, 167, 0, 0.1)'} boxShadow='0px 1px 9px rgba(0, 0, 0, 0.3)'>
            <HStack align={'center'} justifyContent='center' pt={'0.6em'} overflowX='scroll' overflowY={'hidden'} whiteSpace='nowrap'>
                <Box bg={'#FFA700'} borderRadius='6px' mixBlendMode={'normal'} filter='drop-shadow(1px 1px 3px rgba(0, 0, 0, 0.4))' px={'9px'} py={'5px'} >
                    <Text color={'white'} fontSize={'10px'}>Starter</Text>
                </Box>
                <Box bg={'white'} borderRadius='6px' border={'0.5px solid #FFA700'} mixBlendMode={'normal'} px={'9px'} py={'5px'}>
                    <Text color={'#FFA700'} fontSize={'10px'}>Breverages</Text>
                </Box>
                <Box bg={'white'} borderRadius='6px' border={'0.5px solid #FFA700'} mixBlendMode={'normal'} px={'9px'} py={'5px'}>
                    <Text color={'#FFA700'} fontSize={'10px'}>Main Course</Text>
                </Box>
                <Box bg={'white'} borderRadius='6px' border={'0.5px solid #FFA700'} mixBlendMode={'normal'} px={'9px'} py={'5px'}>
                    <Text color={'#FFA700'} fontSize={'10px'}>Desserts</Text>
                </Box>
                <Box bg={'white'} borderRadius='6px' border={'0.5px solid #FFA700'} mixBlendMode={'normal'} px={'9px'} py={'5px'}>
                    <Text color={'#FFA700'} fontSize={'10px'}>Desserts</Text>
                </Box>
            </HStack>
        </Box>
    )
}