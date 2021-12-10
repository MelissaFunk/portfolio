import React, { useState } from 'react'
import emailjs from 'emailjs-com'

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [emailSent, setEmailSent] = useState(false);

    const submit = () => {
        if (name && email && message) {
            const serviceId = 'service_dnwkcmg';
            const templateId = 'template_vkzbp6x';
            const userId = 'user_F8JMfiWO4DyCkIjEpvjXi';
            const templateParams = {
                name,
                email,
                message
            };

            emailjs.send(serviceId, templateId, templateParams, userId)
                .then(response => console.log(response))
                .then(error => console.log(error));

            setName('');
            setEmail('');
            setMessage('');
            setEmailSent(true);
        } else {
            alert('Please fill in all fields.');
        }
    }

    return (
      <div className="contact">
        <h1>CONTACT</h1>
        <div className="contact-form">
          <div>
            <input className="input" type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
            <input className="input" type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
          </div>
          <div>
            <textarea className="input-msg" placeholder="Message" value={message} onChange={e => setMessage(e.target.value)}></textarea>
          </div>
          <button className="contact-btn" onClick={submit}>Submit</button>

          {emailSent ? <p>Thank you for your message, I will be in touch shortly!</p> : null}
        </div>
        <div className="links">
        <h3><a href="https://github.com/MelissaFunk" target="_blank" rel="noreferrer">GitHub</a> | <a href="https://www.linkedin.com/in/melissa-funk-35778749/" target="_blank" rel="noreferrer">LinkedIn</a></h3>
        </div>
      </div>
    );
};

export default Contact;
