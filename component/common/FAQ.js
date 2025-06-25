import React, { useState } from 'react';
import { Accordion } from 'react-bootstrap';

const faqData = [
  { number: '01', question: 'Can I have a personalized cruise trip?' , answer :"Yes, we offer tailored cruise trips that suit your preferences and budget. Our experts will help you plan your dream trip." },
  { number: '02', question: 'What types of cruise tours do you offer?',answer :"We offer different cruise tours, such as themed tours, group excursions, family-friendly voyages, and luxury cruise trips." },
  { number: '03', question: 'Are there any hidden charges?' , answer:"No, there are no hidden fees. The price you see will be the final price you pay. All taxes, port fees, and other charges are included in the price."},
  { number: '04', question: 'How do I book my cruise?',answer :"The best time to book your cruise depends on the destination. However, you should confirm your booking in advance for great deals." },
];

const FaqAccordion = () => {
  const [activeKey, setActiveKey] = useState(null);

  const toggleKey = (key) => {
    setActiveKey(activeKey === key ? null : key);
  };

  return (
    <div className="faq-wrapper">
      <h5 className="mb-4">FAQ</h5>
      <Accordion activeKey={activeKey}>
        {faqData.map((item, index) => (
          <Accordion.Item eventKey={index.toString()} key={index}>
            <Accordion.Header onClick={() => toggleKey(index.toString())}>
              <span className="faq-number">{item.number}</span>
              <span className="faq-question">{item.question}</span>
              <span className="faq-icon">+</span>
            </Accordion.Header>
            <Accordion.Body>
           <strong>{item.answer}</strong>
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
};

export default FaqAccordion;
