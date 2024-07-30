import Container from '@mui/material/Container';
import Accordian from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

export default function FAQ() {
  const faqObject = [
    {
      key: 1,
      faqTitle: 'Question 1',
      faqAnswer: 'Answer 1',
    },
    {
      key: 2,
      faqTitle: 'Question 2',
      faqAnswer: 'Answer 1',
    },
    {
      key: 3,
      faqTitle: 'Question 3',
      faqAnswer: 'Answer 1',
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
      {faqObject.map((faq) => (
        <Accordian key={faq.key}>
          <AccordionSummary>
            <AccordionDetails>{faq.faqTitle}</AccordionDetails>
          </AccordionSummary>
        </Accordian>
      ))}
    </Container>
  );
}
