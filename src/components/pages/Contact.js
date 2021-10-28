import '../styles/Style.css';

import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  const toastifySuccess = () => {
    toast('Form sent!', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: 'submit-feedback success',
      toastId: 'notifyToast'
    });
  };

  const onSubmit = async (data) => {
    const { name, email, subject, message } = data;

    console.log('Name: ', name);
    console.log('Email: ', email);
    console.log('Subject: ', subject);
    console.log('Message: ', message);
    reset();
    toastifySuccess();
  };

  return (
    <section id="contact" class="contact section-bg">
      <div class="container">

        <div class="section-title">
          <h2>Contact</h2>
          <p>Interested in working together? Let's connect and create something cool! </p>
          <br></br>
          <div class="col-lg-5 col-md-8">
            <form class="php-email-form" id='contact-form' onSubmit={handleSubmit(onSubmit)} noValidate>
              <div className='row formRow'>
                <div className='col'>
                  <input
                    type='text'
                    name='name'
                    {...register('name', {
                      required: { value: true, message: 'Please enter your name' },
                      maxLength: {
                        value: 30,
                        message: 'Please use 30 characters or less'
                      }
                    })}
                    className='form-control formInput'
                    placeholder='Your Name'
                  ></input>
                  {errors.name && <span className='errorMessage'>{errors.name.message}</span>}
                </div>
              </div>
              <div className='row formRow'>
                <div className='col'>
                  <input
                    type='email'
                    name='email'
                    {...register('email', {
                      required: true,
                      pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                    })}
                    className='form-control formInput'
                    placeholder='Your Email'
                  ></input>
                  {errors.email && (
                    <span className='errorMessage'>Please enter a valid email address</span>
                  )}
                </div>
              </div>
              <div className='row formRow'>
                <div className='col'>
                  <input
                    type='text'
                    name='subject'
                    {...register('subject', {
                      required: { value: true, message: 'Please enter a subject' },
                      maxLength: {
                        value: 75,
                        message: 'Subject cannot exceed 75 characters'
                      }
                    })}
                    className='form-control formInput'
                    placeholder='Subject'
                  ></input>
                  {errors.subject && (
                    <span className='errorMessage'>{errors.subject.message}</span>
                  )}
                </div>
              </div>
              <div className='row formRow'>
                <div className='col'>
                  <textarea
                    rows={3}
                    name='message'
                    {...register('message', {
                      required: true
                    })}
                    className='form-control formInput'
                    placeholder='Message'
                  ></textarea>
                  {errors.message && <span className='errorMessage'>Please enter a message</span>}
                </div>
              </div><br></br>
              <div class="text-center"><button className='submit-btn' type='submit'>
                Send Message
              </button></div>
            <ToastContainer />
            </form>
          </div>
        </div>
      </div >
    </section >
  );
}

export default Contact;
