import * as React from 'react';
import Container from '@mui/material/Container';
import Accordian from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Typography from '@mui/material/Typography';

export default function FAQ() {
  const faqObject = [
    {
      key: 1,
      faqTitle: 'Accomodations?',
      faqAnswer: 'hell naw',
    },
    {
      key: 2,
      faqTitle: 'Food? ',
      faqAnswer: 'hell ya',
    },
    {
      key: 3,
      faqTitle: 'When to RSVP By?',
      faqAnswer: 'yes and he will be looking extra dapper',
    },
    {
      key: 4,
      faqTitle: 'Can I Bring a Plus One?',
      faqAnswer: 'Answer 1',
    },
    {
      key: 5,
      faqTitle: 'Will Mr Meelo Be Attending?',
      faqAnswer: 'Answer 1',
    },
  ];
  return (
    <Container id='Q&A'>
      <Typography variant='h2' align='center' sx={{ marginTop: 20 }}>
        Your Burning Questions Answered
      </Typography>
      {faqObject.map((faq) => (
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
