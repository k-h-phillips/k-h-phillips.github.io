import React, { Dispatch, FormEventHandler, SetStateAction } from 'react'; 
import { Button, Textarea, Input } from '@nextui-org/react';
import * as Io5Icons from "react-icons/io5";
import './ContactForm.css';

export default function ContactForm(props: {
    onSubmit: FormEventHandler,
    name: string,
    onNameChange: Dispatch<SetStateAction<string>>,
    email: string,
    onEmailChange: Dispatch<SetStateAction<string>>,
    message: string,
    onMessageChange: Dispatch<SetStateAction<string>>,
}) {
    return (
        <>
            <h1 className="font-bold text-4xl sm:text-6xl text-center">send me a message</h1>
            <p className="text-m sm:text-xl text-[var(--peach)] w-11/12 text-center faded-bg message">have a question, constructive criticism, or want to say hi?<br/>i&apos;ll get back to you asap.</p>
            <form className="flex flex-col gap-4 w-4/5 py-5" onSubmit={props.onSubmit}>
                <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                    <Input                                
                        type="text" label="Name" name="user_name"
                        value={props.name} onValueChange={props.onNameChange} size="md" 
                        variant="bordered" color="primary" isRequired={true}
                        validationBehavior="native" errorMessage="Please enter a name" />
                    <Input                                                                                              
                        type="email" label="Email" name="user_email"
                        value={props.email} onValueChange={props.onEmailChange} size="md"
                        variant="bordered" color="primary" isRequired={true}
                        validationBehavior="native" errorMessage="Please enter a valid email" />
                </div>                                                                      
                <Textarea
                    label="Message" color="primary" minRows={6} onValueChange={props.onMessageChange} value={props.message}
                    className="w-full" variant="bordered" name="message" size="md"
                /> 
                <Button className='w-3/5 self-center text-xl' color="primary" type="submit"
                    endContent={<Io5Icons.IoSend color="var(--plum)" size={18}/>} >
                    send
                </Button>
            </form>
        </>
    )
}