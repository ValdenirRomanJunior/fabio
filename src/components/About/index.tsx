import { useState } from "react";
import { AnswerWrapper, ModalLinkQuestion, QuestionContainer, QuestionWrapper } from "./styles"
import {BsPlus} from 'react-icons/bs';
import {GrFormClose} from 'react-icons/gr';
import { SlSocialInstagram } from "react-icons/sl";

const About = () => {

    const [openAnswer,setOpenAnswer]= useState(false);
    const handleOpenAnswer = () => {
        setOpenAnswer(openAnswer => !openAnswer);
    }

    const [openModalLink,setOpenModalLink]= useState(false);
    const handleOpenModalLink = () => {
        setOpenModalLink(openModalLink => !openModalLink);
    }

    return(
        <QuestionContainer>
            <QuestionWrapper onClick={handleOpenAnswer}>
             <span>Sobre nós</span>
             <BsPlus className="icon-plus-question"/>
            </QuestionWrapper>
            <AnswerWrapper open={openAnswer} onClick={handleOpenModalLink}>
                <h2> Transparência e verdade são os princípios norteadores que fundamentam os 
                      negócios da Especialista Imóveis!</h2>
                <p>A Especialista Imóveis começou a ser pensada em 2006 quando seu atual CEO, o 
                    jornalista Fabio Arantes começou a produzir o primeiro programa de TV especializado 
                    no ramo imobiliário. O programa Painel Imobiliário apresentava todas as novidades do 
                    ramo. </p>
                    <p>Em 2022, o jornalista Fabio Arantes, decide constituir a Especialista Imóveis com o 
                        objetivo de oferecer um serviço que vai além da venda, onde a consultoria e a 
                        transparência estão presentes em todas as etapas do negócio.  </p>
                        <p><strong>Filosofia:</strong> Transparência e verdade são os princípios norteadores que fundamentam os 
                        negócios da Especialista Imóveis. </p>
                        <p><strong>Missão:</strong> Construir relações verdadeiras e profissionais.</p>
                        <p><strong>Valores:</strong>Honestidade, Sinceridade, Transparência e Verdade. </p>
                        <p><strong>Objetivo:</strong> Ter corretores Especialistas Imóveis em todos os Estados brasileiros.  </p>
                        <span>ESPECIALISTA IMÓVEIS - CNPJ 48.537.400/0001-67</span>
                  
                   <span style={{display:'flex',alignItems:'center'}}><a  style={{display:'flex',alignItems:'center'}} href="https://www.instagram.com/especialistaimoveisnet/" target="_blank"><SlSocialInstagram /><p style={{padding:'0', marginLeft:'5px',color:'blue'}}>especialistaimoveisnet</p></a></span>
                   <span style={{display:'flex',alignItems:'center'}}><a  style={{display:'flex',alignItems:'center'}} href="https://www.instagram.com/especialistaimoveis.ro/" target="_blank"><SlSocialInstagram /><p style={{padding:'0', marginLeft:'5px',color:'blue'}}>especialistaimoveis.ro </p></a></span>
                   <span style={{display:'flex',alignItems:'center'}}><a  style={{display:'flex',alignItems:'center'}} href="https://www.instagram.com/especialistaimoveisgo/" target="_blank"><SlSocialInstagram /><p style={{padding:'0', marginLeft:'5px',color:'blue'}}>especialistaimoveisgo</p></a></span>
                   <span>especialistaimoveis.net@gmail.com </span>
                   <span> AV.  Farquar, 3460, SALA B, Pedrinhas, PORTO VELHO, RONDÔNIA </span>
                   <span>CRECI 4058F </span>
                   <span>62 991967206 – Goiás </span>
                   <span>69 999508521  - Rondônia </span>
            </AnswerWrapper>
   
           
        </QuestionContainer>
        
    )

}

export default About;