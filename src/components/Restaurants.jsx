import axios from 'axios';
import React, { useState } from 'react'
import { data } from '../utils/mockData';
import { flatten, groupBy } from 'lodash';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import { MdExpandMore } from 'react-icons/md'
import { BiBuilding, BiBuildings, BiFoodMenu, BiFork, BiMap, BiMapPin } from 'react-icons/bi';
import { motion } from "framer-motion";

const Restaurants = () => {

    const clusteredData = groupBy(data, "state"); // used the data directly from the API (used postman) - Encountered CORS error
    const [expanded, setExpanded] = React.useState(false);
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (


        <div className='min-h-screen py-40 flex flex-col justify-start items-center lg:px-32 px-5'>
            <h1 className='text-4xl md:text-3xl py-5 flex flex-row'><BiBuildings /> Restaurants</h1>
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 2 }}
                className="md:w-3/4  w-full  "
            >
                {
                    Object.entries(clusteredData).map((item) => {
                        const state = item[0];
                        const restaurant = item[1];

                        return <Accordion key={state} expanded={expanded === state} onChange={handleChange(state)} transitionProps={{ unmountOnExit: true }} className='!mt-0'>
                            <AccordionSummary
                                expandIcon={<MdExpandMore className=' !text-white' />}
                                aria-controls="panel2d-content" id="panel2d-header"
                                className='!bg-yellow-600 !text-white'
                            >
                                <Typography sx={{ width: '33%' }} className='flex flex-row items-center gap-2'>
                                    <BiMap className='md:flex hidden ' /> {state}
                                </Typography>
                            </AccordionSummary>
                            {
                                restaurant.map(({ restaurant_name }, key) => {
                                    return <AccordionDetails key={key}>
                                        <Typography className='text-4xl flex flex-row items-center gap-3'><BiFoodMenu /> {restaurant_name}</Typography>
                                    </AccordionDetails>
                                })
                            }
                        </Accordion>
                    }
                    )
                }
            </motion.div >
        </div>

    )
}

export default Restaurants