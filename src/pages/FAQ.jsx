import * as React from 'react';
import Container from '@mui/material/Container';
import Accordian from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Typography from '@mui/material/Typography';
import faqData from '../data/faq-data.jsx';
import Divider from '@mui/material/Divider';
import { FaPagelines } from 'react-icons/fa';

export default function FAQ() {
  return (
    <Container id='Q&A' maxWidth={false}>
      <br></br>
      <Divider>
        <FaPagelines style={{ color: '#bca0d3' }}></FaPagelines>
      </Divider>
      <br></br>
      <Typography variant='h2' align='center'>
        Your Burning Questions Answered
      </Typography>
      <br></br>
      {faqData.map((faq) => (
        <Accordian key={faq.key}>
          <AccordionSummary expandIcon={<ArrowDropDownIcon />}>
            {faq.faqTitle}
          </AccordionSummary>
          <AccordionDetails> {faq.faqAnswer}</AccordionDetails>
        </Accordian>
      ))}
    </Container>
  );
}
