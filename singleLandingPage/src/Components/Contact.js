import React, { useState } from "react";

const Contact = () => {
  const [value, setValue] = useState('');
  const onChange = (event) => {
    setValue(event.target.value);
  };

  const [str, setStr] = useState(true);
  const clearPlaceHolder = () => {
    setStr(!str);
  };

  return (
    <div className="contact-page-wrapper">
      <h1 className="primary-heading">Есть вопросы?</h1>
      <h1 className="primary-text">Отправьте нам адресс своей электронной почты </h1>
      <div className="contact-form-container">
        <input type="text" placeholder='ваша_почта@gmail.com' value={value} onChange={onChange}/>
        <button className="secondary-button" onClick={clearPlaceHolder}>Отправить</button>
      </div>
      <span className="primary-text">
        {str ? 'С радось ответим на все ваши вопросы' :
                'На почту ' + value + ' было отправлено письмо с дальнейшими инструкциями'}
      </span>
    </div>
  );
};

export default Contact;
