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
            <h1 className='text-4xl py-5 flex flex-row'><BiBuildings /> Restaurants</h1>
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 2 }}
                className="w-3/4"
            >
                {
                    Object.entries(clusteredData).map((item) => {
                        return <Accordion expanded={expanded === item[0]} onChange={handleChange(item[0])} transitionProps={{ unmountOnExit: true }} className='!mt-0'>
                            <AccordionSummary
                                expandIcon={<MdExpandMore className=' !text-white' />}
                                aria-controls="panel2d-content" id="panel2d-header"
                                className='!bg-yellow-600 !text-white'
                            >
                                <Typography sx={{ width: '33%' }} className='flex flex-row items-center gap-2'>
                                    <BiMap /> {item[0]}
                                </Typography>
                            </AccordionSummary>
                            {
                                item[1].map((value, key) => {
                                    return <AccordionDetails>
                                        <Typography className='text-4xl flex flex-row items-center gap-3'><BiFoodMenu /> {value.restaurant_name}</Typography>
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