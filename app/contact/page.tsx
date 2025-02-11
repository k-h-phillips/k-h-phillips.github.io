'use client'

import emailjs from '@emailjs/browser';
import { Link } from '@nextui-org/react';
import React, { FormEvent } from 'react';
import * as Io5Icons from "react-icons/io5";
import { v4 as uuidv4 } from 'uuid';
import ContactForm from '../components/ContactForm/ContactForm';
import Loading from '../components/loading';

export default function Contact() {
  // Form state.
  const [email, setEmail] = React.useState<string>('');
  const [name, setName] = React.useState<string>('');
  const [message, setMessage] = React.useState<string>('');
  const [status, setStatus] = React.useState<string>('in progress');

  // Emails are sent using emailJS.
  const sendEmail = (event: FormEvent) => {
    event.preventDefault();

    if (!email || !name || !message) {
      return
    }

    setStatus('sending');

    emailjs.send(
      process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID || '',
      'contact_form',
      { user_name: name, user_email: email, message: message, uuid: uuidv4() },
      { publicKey: process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY, }
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
    <div className="grid items-center justify-items-center flex-auto p-8 mt-[4rem] fade">
      <main className="grid gap-4 justify-items-center">
        {
          // If the form is in progress, display the form.
          status == 'in progress' ?
            <ContactForm name={name} onNameChange={setName} email={email} onEmailChange={setEmail}
              message={message} onMessageChange={setMessage} onSubmit={sendEmail} /> :

            // If the form is sending, display the loading indicator.
            status == 'sending' ?
              <Loading /> :

              // If the email was sent, indicate success.
              status == 'success' ?
                <>
                  <Io5Icons.IoSend color="var(--black-cherry)" size={56} className="-rotate-12" />
                  <h1 className="font-bold sm:text-6xl text-4xl text-center">message sent!</h1>
                  <p className="sm:text-xl text-m text-[var(--sage)] w-11/12 text-center faded-bg message-purpose">i&apos;ll be in touch soon.</p>
                </>
                :

                // If the email failed to send, indicate failure.
                <>
                  <Io5Icons.IoClose color="var(--black-cherry)" size={56} />
                  <h1 className="font-bold sm:text-6xl text-4xl text-center">message failed to send?</h1>
                  <p className="sm:text-xl text-m text-danger w-11/12 text-center faded-bg message-purpose">this is probably my fault... try again later?</p>
                </>
        }
      </main>
      {
        // Give some other options for contacting.
        status == 'in progress' &&
        <div>
          <p className="tracking-wide sm:text-lg text-sm text-center">OR</p>
          <p className="tracking-wide sm:text-lg text-sm text-center">email me directly:&nbsp;
            <Link href="mailto:kirstenphillips210@gmail.com" target="blank" className="text-[var(--dusty-blue)] sm:text-lg text-sm" isExternal showAnchorIcon>
              kirstenphillips210@gmail.com
            </Link>
          </p>
          <p className="tracking-wide sm:text-lg text-sm text-center">
            give me call: <span className="text-[var(--dusty-blue)] sm:text-lg text-sm">(434) 917-0499</span>
          </p>
        </div>
      }
    </div>
  );
}
