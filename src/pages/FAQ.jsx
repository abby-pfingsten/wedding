import * as React from 'react';
import Container from '@mui/material/Container';
import Accordian from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Typography from '@mui/material/Typography';
import faqData from '../data/faq-data.jsx';

export default function FAQ() {
  return (
    <Container id='Q&A'>
      <Typography variant='h2' align='center' sx={{ marginTop: 20 }}>
        Your Burning Questions Answered
      </Typography>
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
