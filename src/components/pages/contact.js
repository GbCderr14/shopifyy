import {useNavigate} from "react-router-dom";
import ContactForm from "./contactform";
function Contact() {
    const history=useNavigate();
  function addMeetUpHandler(meetupdata) {
    fetch("https://customerqueries-2ddeb-default-rtdb.firebaseio.com/cust.json", {
      method: "POST",
      body: JSON.stringify(meetupdata),
      headers: {
        "content-type": "application/json",
      }
    }).then(()=>{
        history('/shopy/',{replace:true});
    });
  }
  return (
    <div>
      <h2 style={{textAlign:"center",marginTop:"50px"}}>Send Your queries by here:--</h2>
      <ContactForm onAddMeetUp={addMeetUpHandler} />
    </div>
  );
}
export default Contact;
