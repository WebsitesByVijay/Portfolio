import "./FormStyles.css"

import React from 'react'

const Form = () => {
  return (
    <div className="form">
      <form>
        <label> Please Provide Your Name</label>
        <input type="text"></input>
        <label> Email</label>
        <input type="email"></input>
        <label>Subject </label>
        <input type="text"></input>
        <label>Message</label>
        <textarea rows="6" placeholder="Type your message here" />
        <button class="btn">Submit</button>
      </form>
    </div>
  );
}

export default Form