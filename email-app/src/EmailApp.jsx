import { Button } from 'head_wrapper/shared-components';


const EmailApp = () => {
  return (
    <div>
      <h2>Email Micro-Frontend</h2>
      <p>Welcome to the email application!</p>
      <Button onClick={() => alert('Chat Button Clicked!')}>Email Button</Button>
    </div>
  );
};

export default EmailApp;
