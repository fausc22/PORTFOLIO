import Button from '../reusable/Button';
import FormInput from '../reusable/FormInput';
import { useState } from 'react';

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionError, setSubmissionError] = useState(null);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionError(null);
    setSubmissionSuccess(false);

    try {
      const response = await fetch('/api/enviar-contacto', { // Nueva API route para el formulario de contacto
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, subject, message }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Mensaje de contacto enviado con éxito!', data);
        setSubmissionSuccess(true);
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
      } else {
        console.error('Error al enviar el mensaje de contacto.', data);
        setSubmissionError(data.error || 'Hubo un error al enviar tu mensaje. Por favor, intenta nuevamente.');
      }
    } catch (error) {
      console.error('Error de red:', error);
      setSubmissionError('Hubo un error de red. Por favor, verifica tu conexión e intenta nuevamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full lg:w-1/2">
      <div className="leading-loose">
        <form
          onSubmit={handleSubmit}
          className="max-w-xl m-4 p-6 sm:p-10 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left"
        >
          <p className="font-general-medium text-primary-dark dark:text-primary-light text-2xl mb-8">
            FORMULARIO
          </p>

          <FormInput
            inputLabel="NOMBRE COMPLETO"
            labelFor="name"
            inputType="text"
            inputId="name"
            inputName="name"
            placeholderText="TU NOMBRE COMPLETO"
            ariaLabelName="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <FormInput
            inputLabel="EMAIL"
            labelFor="email"
            inputType="email"
            inputId="email"
            inputName="email"
            placeholderText="TU EMAIL"
            ariaLabelName="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <FormInput
            inputLabel="ASUNTO"
            labelFor="subject"
            inputType="text"
            inputId="subject"
            inputName="subject"
            placeholderText="ASUNTO"
            ariaLabelName="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />

          <div className="mt-6">
            <label
              className="block text-lg text-primary-dark dark:text-primary-light mb-2"
              htmlFor="message"
            >
              MENSAJE
            </label>
            <textarea
              className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
              id="message"
              name="message"
              cols="14"
              rows="6"
              aria-label="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>

          <div className="mt-6">
            <button
              type="submit"
              className={`font-general-medium px-7 py-4 text-white text-center font-medium tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg mt-6 duration-500 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
              aria-label="Send Message"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'ENVIANDO...' : 'Enviar Mensaje'}
            </button>
            {submissionError && (
              <p className="mt-2 text-red-500 text-sm">{submissionError}</p>
            )}
            {submissionSuccess && (
              <p className="mt-2 text-green-500 text-sm">¡Mensaje enviado con éxito!</p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;