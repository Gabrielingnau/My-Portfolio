import { ContatoContainer, Form, InputContainer } from './styles'
import { Link } from '../../components/Link'
import { Title } from '../../components/Title'
import { Reload } from '../../components/Reload'
import { useState } from 'react'

import emailJs from '@emailjs/browser'
import { BaseAlert } from '../../components/Alert'

export function Contato() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [fone, setFone] = useState('')
  const [assunto, setAssunto] = useState('')
  const [message, setMessage] = useState('')
  const [emailSucess, setEmailSucess] = useState(false)

  const insertMaskInFone = (phone: string) => {
    const noMask = phone.replace(/\D/g, '')
    const {length} = noMask

    if(length <= 11) {
      return noMask.replace(/(\d{2})(\d)/, '($1) $2')
      .replace(length === 11 ? /(\d{5})(\d)/ : /(\d{4})(\d)/, '$1-$2')
    }

    return phone
  }

   function sendEmail(e: any) {
    e.preventDefault()

    if( name === '' || email === '' || fone === '' || assunto === '' || message === '') {
      return
    }

    const templateParams = {
      name: name,
      assunto: assunto,
      message: message,
      email: email,
      fone: fone
    }

    emailJs.send("service_hjao7xd", "template_4azoh7l", templateParams, "M8TR0Eh5I7R-1Envx")
    .then(() => {
        setEmailSucess(true)
        setTimeout(() => {
          setEmailSucess(false)
        }, 3000)
        
        setName('')
        setAssunto('')
        setMessage('')
        setEmail('')
        setFone('')
      }, (error) => {
        console.error(error.text)
      })
  }

  return (
    <ContatoContainer>
      {emailSucess &&
        <BaseAlert/>
      }
      <Title text="Entre em" textSpan="Contato" />

      <Form onSubmit={sendEmail}>
        <div className="input-box">
          <Reload variant={2} />

          <InputContainer>
            <input 
            type='text' 
            placeholder='Nome' 
            required
            onChange={(e) => setName(e.target.value)}
            value={name}
            />
            <span className="focus"></span>
          </InputContainer>

          <InputContainer>
            <input 
            type='text' 
            placeholder='E-mail' 
            required
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            />
            <span className="focus"></span>
          </InputContainer>
        </div>

        <div className="input-box">
          <Reload variant={3} />

          <InputContainer>
            <input 
            type='text' 
            placeholder='Numero de telefone' 
            required
            onChange={(e) => setFone(e.target.value)}
            value={insertMaskInFone(fone)}
            />
            <span className="focus"></span>
          </InputContainer>

          <InputContainer>
            <input 
            type='text' 
            placeholder='Assunto' 
            required
            onChange={(e) => setAssunto(e.target.value)}
            value={assunto}
            />
            <span className="focus"></span>
          </InputContainer>
        </div>

        <div className="textarea-field">
          <Reload variant={4} />

          <textarea 
          rows={8} 
          placeholder="Sua Mensagem" 
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          required
          >
          </textarea>

          <span className="focus"></span>
        </div>

        <div className="btn-box">
          <Link>
            <button type="submit" className="btn">
              Enviar
            </button>
          </Link>
        </div>
      </Form>
    </ContatoContainer>
  )
}
