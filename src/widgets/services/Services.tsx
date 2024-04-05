import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from "@chakra-ui/react";
import './Services.scss'
import { useState } from "react";
const Services = () => {

    return (
        <div className="services">
            <div className="services__center">
                <h1 className="services__center__h">Услуги</h1>
                <div className="services__center__blocks">
                    <div className="services__center__block">
                        <div className="services__center__block__h">
                            <h2>Landing Page</h2>
                            <p>Сайт визитка, который помагает компании рассказать о себе в одной странице</p>
                        </div>
                            <MyAccordion />
                    </div>
                    <div className="services__center__block">
                        <div className="services__center__block__h">
                            <h2>Корпоративный сайт</h2>
                            <p>Многостраничный сайт для бизнеса. Передает главную информацию о продукте.</p>
                        </div>
                        <MyAccordion/>
                    </div>
                </div>
            </div>
        </div>
    )
}

function MyAccordion() {
    const [isOpened, setIsOpened] = useState<boolean>(false);
       return <Accordion allowMultiple>
       <AccordionItem className="accordion">
           <AccordionPanel className="services__center__block__accordion">
               <Accordion allowMultiple className="services__center__block__second">
                   <AccordionItem className="services__center__block__second__accordion">
                       <AccordionButton className="accordion__title">
                           01. Брифинг
                           <AccordionIcon />
                       </AccordionButton>
                       <AccordionPanel className="accordion__description">
                           Перед началом работы мы проводим с вами брифинг, чтобы уточнить все нюансы и особенности проекта, не упустить важные детали. Это позволяет нам эффективно использовать время клиентов и сразу переходить к исследованиям.
                       </AccordionPanel>
                   </AccordionItem>
                   <AccordionItem className="services__center__block__second__accordion">
                       <AccordionButton className="accordion__title">
                           02. Исследования
                           <AccordionIcon />
                       </AccordionButton>
                       <AccordionPanel className="accordion__description">
                       Получив от вас необходимую информацию по проекту, мы анализируем конкурентов, удобство пользования сайтом, качество дизайна и потребности ваших клиентов, чтобы определить оптимальные решения. 
                       </AccordionPanel>
                   </AccordionItem>
                   <AccordionItem className="services__center__block__second__accordion">
                       <AccordionButton className="accordion__title">
                           03. Дизайн
                           <AccordionIcon />
                       </AccordionButton>
                       <AccordionPanel className="accordion__description">
                       На этом этапе мы разрабатываем функциональный прототип сайта, отображающий структуру контента и функционала. После утверждения этого прототипа, мы начнем работу над визуальным оформлением сайта, согласовывая с вами его общий вид. 
                       </AccordionPanel>
                   </AccordionItem>
                   <AccordionItem className="services__center__block__second__accordion">
                       <AccordionButton className="accordion__title">
                           04. Разработка
                           <AccordionIcon />
                       </AccordionButton>
                       <AccordionPanel className="accordion__description">
                       Наша команда разработчиков преобразует ваш веб-дизайн и утвержденный функционал в интерактивный веб-сайт с применением передовых web-технологий, таких как Vue.js, Python Django + REST API, контейнеризация c Docker. Наш подход сосредоточен на адаптации каждого элемента к вашим уникальным потребностям, чтобы гарантировать высокое качество и уникальный пользовательский опыт.
                       </AccordionPanel>
                   </AccordionItem>
                   <div className="note">
                       <h3>Примечание:</h3>
                       <p>Сроки обсуждаются индивидуально с клиентом в зависимости от требований. </p>
                   </div>
               </Accordion>
           </AccordionPanel>
           <AccordionButton className={`services__center__block__first__accordion ${isOpened && "opened"}`} onClick={() => setIsOpened(value => !value)}>
                   Этапы работы
           </AccordionButton>
       </AccordionItem>
   </Accordion>
}

export default Services;