import React from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
//import Layout from '../components/layout'


const ContactFormPage = () => (
  //  <Layout>
      <div>
        <h1>Contact</h1>

        <form 
            name="Contact Form" 
            method="POST" 
            data-netlify="true"
            action="/thank-you"
            data-netlify-recaptcha="true"
        >
            <input type="hidden" name="form-name" value="Contact Form" />
            <div>
                <label>Your Email:</label>
                <input type="email" name="email" />
            </div>
            <div>
                <label>Message:</label>
                <textarea name="message" />
            </div>
            <br />
            <ReCAPTCHA sitekey="6LedP1AaAAAAALpGop-3R2KlfgwL69ypbTSugoES" />
            <button type="submit">Send</button>
        </form>
      </div>
  //  </Layout>
)

export default ContactFormPage;