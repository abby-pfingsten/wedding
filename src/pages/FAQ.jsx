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
      faqTitle: 'Can We Bring Kids?',
      faqAnswer: 'hell naw',
    },
    {
      key: 2,
      faqTitle: 'Open Bar?',
      faqAnswer: 'hell ya',
    },
    {
      key: 3,
      faqTitle: 'will mister meelo be at the wedding',
      faqAnswer: 'yes and he will be looking extra dapper',
    },
    {
      key: 4,
      faqTitle: 'Question 4',
      faqAnswer: 'Answer 1',
    },
    {
      key: 5,
      faqTitle: 'Question 5',
      faqAnswer: 'Answer 1',
    },
  ];
  return (
    <Container id='FAQ'>
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
