import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import { Box, Stack } from '@mui/system';
import { useState } from "react";
import TagHeader from './TagHeader';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const FAQ = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const data = [
    {
      question: 'What is AKPsi?',
      answer: 'Founded in 1904 at NYU, Alpha Kappa Psi is the largest and oldest professional co-ed business fraternity. Join for the people! We have an extensive network of alumni, and members are able to land opportunities at some of the most profitable companies in the world; the mentorship you will receive is extremely meaningful. We prepare our brothers for a life of success and provide a place to meet new people. A lot of our brothers say that rushing was the best decision they ever made at Hopkins.',
    },
    {
      question: 'Is there a major requirement to rush?',
      answer: 'Nope! However, it is necessary to know how to interview well and behave with professionalism in the workplace because its prevalent no matter what industry you enter. During the new member process in AKPsi, you will learn skills such as crafting your own resume, presenting yourself in networking settings, preparing for interviews, organization skills, and public speaking.',
    },
    {
      question: 'What is the pledge process?',
      answer: 'During the pledging process you will complete an academic project in Finance, Consulting, Entrepreneurship, or Marketing. You will also have the opportunity to develop brotherhood through relationships with fellow new members and with brothers of the fraternity. The time commitment for pledging is around 10 hours a week.',
    },
    {
      question: 'Who do I contact if I cannot make a rush event?',
      answer: 'If you cannot make one of the events, please speak to one of the recruitment chairs in person and by email at jhuakpsirush@gmail.com. We only have a week to meet you, so try your best to attend all events!',
    },
    {
      question: 'What are pledge projects?',
      answer: 'The Pledge Projects give our new members a unique opportunity to gain valuable insight in one of the four areas of business: finance, consulting, entrepreneurship, and marketing. Lead by experienced brothers, the projects teach you necessary professional skills such as time management, public speaking, organizational skills, and communication.',
    },
    {
      question: 'Where are some of our alumni?',
      answer: 'Our alumni network at Hopkins is diverse in both location and field. Our brothers have started their own health care companies, enrolled in graduate schools such as Harvard Medical School and Wharton MBA, and accepted offers at places such as McKinsey & Co, Bain & Co, Deutsche Bank, Bridgewater Associates, Accenture, JP Morgan, Amazon, Capital One, Bloomberg, Booz Allen Hamilton, Morgan Stanley, and Meta.'
    }
  ];

  return (
    <Stack>
        <Box marginBottom={3}>
            <TagHeader text="FAQ"></TagHeader>
        </Box>
            {data.map((item, index) => (
        <Accordion key={index} expanded={expanded === index} onChange={handleChange(index)} sx = {{
            boxShadow: 'none',
            textAlign: 'left'
        }}>
        <AccordionSummary           expandIcon={<ExpandMoreIcon />}
>
        <Typography>{item.question}</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography>{item.answer}</Typography>
        </AccordionDetails>
        </Accordion>
        ))}
</Stack>
)
}

export default FAQ;
