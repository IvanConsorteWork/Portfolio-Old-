import React from 'react';
import './Form.css';

const Form = () => {
  return (
    <div className='form'>
        <form action="https://public.herotofu.com/v1/44619bd0-b1e8-11ed-aa50-893756e53d16" method="post" accept-charset="UTF-8">
            <label for='name'>Name</label>
            <input name="Name" id="name" type="text" required></input>                        
            <label for="email">Email</label>
            <input name="Email" id="email" type="email" required></input>            
            <label for='subject'>Subject</label>
            <input name='Subject' type='text' id='subject'></input>            
            <label for='message'>Message</label>
            <textarea name='Message' id='message' rows='6' placeholder='Type your message here'/>            
            <button className='btn'>Submit</button>
            <div className='hidden-div' aria-hidden="true">
                <input type="text" name="_gotcha" tabindex="-1" autocomplete="off" />
            </div>
        </form>
    </div>
  )
}

export default Form
