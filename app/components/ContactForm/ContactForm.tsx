import { Button, Input, Textarea } from '@nextui-org/react';
import { Dispatch, FormEventHandler, SetStateAction } from 'react';
import * as Io5Icons from "react-icons/io5";
import './ContactForm.css';

// Contact form for the contact page.
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
            <h1 className="font-bold sm:text-6xl text-4xl text-center">send me a message</h1>
            <p className="sm:text-xl text-md text-[var(--peach)] text-center faded-bg message-purpose">
                have a question, constructive criticism, or want to say hi?<br />i&apos;ll get back to you asap.
            </p>
            <form className="flex flex-col gap-3 w-full sm:w-[40vw] pt-5 pr-5 pl-5 pb-2" onSubmit={props.onSubmit}>
                <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                    <Input
                        type="text"
                        label="name"
                        name="user_name"
                        value={props.name}
                        onValueChange={props.onNameChange}
                        size="md"
                        variant="bordered"
                        color="primary"
                        isRequired={true}
                        validationBehavior="native"
                        errorMessage="please enter a name" />
                    <Input
                        type="email"
                        label="email"
                        name="user_email"
                        value={props.email}
                        onValueChange={props.onEmailChange}
                        size="md"
                        variant="bordered"
                        color="primary"
                        isRequired={true}
                        validationBehavior="native"
                        errorMessage="please enter a valid email" />
                </div>
                <Textarea
                    label="message"
                    color="primary"
                    minRows={6}
                    onValueChange={props.onMessageChange}
                    value={props.message}
                    className="w-full"
                    variant="bordered"
                    name="message"
                    size="md"
                />
                <Button
                    className='w-3/5 self-center sm:text-xl text-sm font-bold'
                    color="primary" type="submit"
                    endContent={<Io5Icons.IoSend color="var(--black-cherry)" size={18} />}>
                    send
                </Button>
            </form>
        </>
    )
}