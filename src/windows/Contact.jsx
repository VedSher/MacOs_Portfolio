import { WindowControls } from '#components';
import { socials } from '#constants';
import WindowWrapper from '#hoc/WindowWrapper'
import React from 'react'

const Contact = () => {
    
    const email = "vaidikcoolboy@gmail.com";

    const copyEmailFallback = (e) => {
    // If user holds Alt / Option key → copy instead of opening Gmail
    if (e.altKey) {
        e.preventDefault();
        navigator.clipboard.writeText(email);
        alert("Email copied to clipboard!");
    }
    };


  return (
    <>
        <div id="window-header">
            <WindowControls target="contact" />
            <h2>Contact Me</h2>
        </div>
        
        <div className="p-5 space-y-5">
            <img src="/images/vaidik.jpg" alt="Vaidik" className='w-20 rounded-full' />

            <h3>Let's Connect</h3>
            <p>
            Got an idea? Fighting a stubborn bug?
            Or just want to talk tech, code, or life as a developer?
            Drop a message — I'd love to chat.
            </p>
            <a
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=Let's%20Connect&body=Hi%20Vaidik,%0A%0AI%20came%20across%20your%20portfolio...`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={copyEmailFallback}
                className="inline-block text-blue-500 hover:underline select-text"
                title="Click to open Gmail · Alt/Option + Click to copy"
            >
                {email}
            </a>



            <ul>
                {socials.map(({ id, bg, link, icon, text }) => (
                    <li key={id} style={{ backgroundColor: bg }}>
                        <a href={link} target='_blank' rel='noopener noreferrer' title={text}>
                            <img src={icon} alt={text} className='size-5' />
                            <p>{text}</p>
                        </a>
                    </li>
                ))}
            </ul>

        </div>
    </>
  )
}

const ContactWindow = WindowWrapper(Contact, "contact");

export default ContactWindow;