import ProgressBar from 'react-bootstrap/ProgressBar';
import Alert from 'react-bootstrap/Alert';
import { Navbar } from 'react-bootstrap';
function Services() {
  return (
    <div style={{margin:40+'px', width:100+"%",display:"flex"}}>
       <div style={{width:40+'%'}}>
        <h1>Services Page</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta in distinctio iste vel, quis labore tempora minus ullam dicta amet aperiam deleniti at provident vero sed facilis? Est, tempore distinctio.
     
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta in distinctio iste vel, quis labore tempora minus ullam dicta amet aperiam deleniti at provident vero sed facilis? Est, tempore distinctio.
     
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta in distinctio iste vel, quis labore tempora minus ullam dicta amet aperiam deleniti at provident vero sed facilis? Est, tempore distinctio.
     </p>
   
        </div>
     <div style={{width:50+'%'}} >   <Alert variant={"light"}>
         Html
      <ProgressBar variant="success" now={90} />
        </Alert> 
        <Alert variant={"light"}>
         Css
      <ProgressBar variant="info" now={70} />
        </Alert> 
        <Alert variant={"light"}>
        Boostrap
      <ProgressBar variant="warning" now={90} />
        </Alert> 
        <Alert variant={"light"}>
         JavaScript
      <ProgressBar variant="danger" now={75} />
        </Alert> 
        <Alert variant={"light"}>
         React
      <ProgressBar variant="" now={55} />
        </Alert> 
        <Alert variant={"light"}>
         Flutter
      <ProgressBar variant="info" now={65} />
        </Alert> 
        </div>
      
    </div>
  );
}
export default Services