'use client'

import React, { FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import Loading from '../loading';
import ContactForm from '../components/ContactForm/ContactForm';
import { v4 as uuidv4 } from 'uuid';

export default function Contact() {
  const [ email, setEmail ] = React.useState<string>('');
  const [ name, setName ] = React.useState<string>('');
  const [ message, setMessage ] = React.useState<string>('');
  const [ status, setStatus ] = React.useState<string>('in progress');

  const sendEmail = (event: FormEvent) => {
    event.preventDefault();

    if ( !email || !name || !message ) {
      return
    }

    setStatus('sending');    

    emailjs.send(
      'service_9nqldmw', 
      'contact_form', 
      { user_name: name, user_email: email, message: message, uuid: uuidv4() }, 
      { publicKey: 'Eb618lr4XKEb6T3-F', }
    ).then(
      () => {
        setStatus('success');
      },
      () => {
        setStatus('failure')
      },
    );
  };

  return (
    <div className="grid items-center justify-items-center flex-auto p-8">
      <main className="flex flex-col gap-4 items-center">
        {
          status == 'in progress' ?
            <ContactForm name={name} onNameChange={setName} email={email} onEmailChange={setEmail}
                  message={message} onMessageChange={setMessage} onSubmit={sendEmail} /> : 
            status == 'sending' ?
              <Loading /> :
              status == 'success' ?
                <>
                  <h1 className="font-bold text-4xl sm:text-6xl text-center">message sent!</h1>
                  <p className="text-m sm:text-xl text-[var(--peach)] w-11/12 text-center faded-bg message">i&apos;ll be in touch soon.</p>
                </>
               : 
                <>
                  <h1 className="font-bold text-4xl sm:text-6xl text-center">message failed to send?</h1>
                  <p className="text-m sm:text-xl text-[var(--peach)] w-11/12 text-center faded-bg message">this is probably my fault... try again later.</p>
                </>
        }
      </main>
    </div>
  );
}
