import React, { useState } from 'react';
import { Accordion } from 'react-bootstrap';

const faqData = [
  { number: '01', question: 'What types of tours do you offer?' },
  { number: '02', question: 'What are your destinations?' },
  { number: '03', question: 'How does tour booking work?' },
  { number: '04', question: 'What safety measures do you have in place?' },
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
              This is a placeholder answer for: <strong>{item.question}</strong>
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
};

export default FaqAccordion;
