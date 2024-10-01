import { useState } from 'react'
import { Container, Typography, Accordion, AccordionSummary, AccordionDetails, TextField, Box } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

interface FAQItem {
    question: string
    answer: string
}

const faqData: FAQItem[] = [
    {
        question: 'How do I reset my password?',
        answer:
            'To reset your password, go to the Sign In page and click on "Forgot Password". Follow the instructions sent to your email.',
    },
    {
        question: 'How can I contact support?',
        answer:
            'You can contact our support team by emailing support@myapp.com or calling (123) 456-7890.',
    },
    {
        question: 'Where can I find the API documentation?',
        answer:
            'Our API documentation is available on the Developers page under the "API Docs" section.',
    }
]

const Help = () => {
    const [searchTerm, setSearchTerm] = useState('')

    const filteredFAQs = faqData.filter((faq) =>
        faq.question.toLowerCase().includes(searchTerm.toLowerCase())
    )

    return (
        <Container sx={{ mt: 15, mb: 10 }}>
            <Typography variant="h3" align="center">Help & Support</Typography>
            <Box sx={{ mt: 2, mb: 4 }}>
                <Typography variant="body1" align="center">
                    Find answers to common questions or get in touch with our support team.
                </Typography>
                <Box sx={{ maxWidth: 600, mx: 'auto', mb: 4 }}>
                    <TextField label="Search FAQs" variant="outlined" fullWidth value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
                </Box>
                {filteredFAQs.length > 0 ? (
                    filteredFAQs.map((faq, index) => (
                        <Accordion key={index}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls={`panel${index}-content`} id={`panel${index}-header`}>
                                <Typography variant="h6">{faq.question}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography variant="body1">{faq.answer}</Typography>
                            </AccordionDetails>
                        </Accordion>
                    ))
                ) : (
                    <Typography variant="body1" align="center">
                        No FAQs matched your search.
                    </Typography>
                )}
            </Box>
            <Box sx={{ textAlign: 'center', mt: 4 }}>
                <Typography variant="h5">Still need help?</Typography>
                <Typography variant="body1">
                    Contact our support team at{' '}
                    <a href="mailto:support@myapp.com">support@myapp.com</a> or call us at{' '}
                    <a href="tel:+11234567890">(123) 456-7890</a>.
                </Typography>
            </Box>
        </Container>
    )
}

export default Help