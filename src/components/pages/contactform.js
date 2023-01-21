// import Card from "../ui/card";
// import classes from "./newmeetupform.module.css";
import "./contact.css";
import {useRef} from 'react';
function ContactForm(props){
    const titleInputRef=useRef();
    const emailInputRef=useRef();
    const descriptionInputRef=useRef();
    function submitHandler(event){
         event.preventDefault();
         const enteredTitle=titleInputRef.current.value;
         const enteredemail=emailInputRef.current.value;
         const entereddescription=descriptionInputRef.current.value;
         const meetupdata={
            title:enteredTitle,
            email:enteredemail,
            description:entereddescription
         }
        //  console.log(meetupdata);
         props.onAddMeetUp(meetupdata);
    }
     return <div>
        <form  onSubmit={submitHandler} className="hi">
        <div >
            <label htmlFor="name">Name</label>
            <input type="text" required id="name" ref={titleInputRef} />
        </div>
        <div >
            <label htmlFor="email">Email</label>
            <input type="email" required id="email" ref={emailInputRef} />
        </div>
        <div >
            <label htmlFor="message">Message</label>
            <textarea  required id="message" ref={descriptionInputRef}></textarea>
        </div>
        <div >
            <button type="submit">Send</button>
        </div>
        </form></div>
}
export default ContactForm;



