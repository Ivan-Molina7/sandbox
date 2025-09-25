
export const FaqItem = ({ isOpen, onToggle, pregunta, respuesta, type }) => {
  return (
     <li className={"faq-section__item " + (type === 'faq' ? 'faq-section__item--why-choose' : '')}>
      <div className="faq-section__item-pregunta" onClick={onToggle} >
         <i className={`fa-solid fa-angle-down faq-section__item-icon ${isOpen ? 'faq-section__item-icon--abierta' : ''}`}></i>
                   
             <p className={isOpen ? 'faq-section__item-pregunta--abierta' : ''}>{pregunta}</p>
      </div>
      <div className={`faq-section__item-respuesta ${isOpen ? 'faq-section__item-respuesta--abierta' : ''}`}>
        <p>{respuesta}</p>
      </div>
    </li>
  )
}

