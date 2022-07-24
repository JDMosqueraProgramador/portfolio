import React from 'react'
import FormContact from '../contact/Form.contact.component';
import ImageContact from '../contact/Image.contact.component';
import './contact.scss';

import contactLeftImage from '../../../images/contact-1.svg';
import contactRightImage from '../../../images/contact-2.svg';


const Contact: React.FC<{}> = () => {
    return (
        <section className='contact' id='contact'>
            <h2 className='size-bold-xl-three-md-two text-center margin-bottom-16'>CONTACT ME</h2>
            <p className='size-xl-three-md-two text-center contact-text'>Thank you for visit my website. How can I help you today?</p>

            <ImageContact url={contactLeftImage} side="left" />
            <FormContact />
            <ImageContact url={contactRightImage} side="right" />
        </section>
    )
}

export default Contact;