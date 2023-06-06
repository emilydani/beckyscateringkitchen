import React from 'react';
import { Helmet } from "react-helmet";

import ContactBanner from './components/ContactBanner';
import ContactInfo from './components/ContactInfo';
import ContactText from './components/ContactText';

export default function Contact() {
  return (
      <div>
        <Helmet>
        <title>Contact Us | Becky's Catering Kitchen</title>
        <meta
          name="description"
          content="Contact Becky's Catering Kitchen today and make your reservation for delicious, unforgetable food, located in Rexburg, Idaho."
        />
        <meta name="keywords" content="contact, Rexburg, Becky's Catering Kitchen, catering, food"/>
      </Helmet>

        <ContactBanner />
        <ContactText />
        <ContactInfo />
      </div>               
  );
}