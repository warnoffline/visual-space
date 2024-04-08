import {Heading, Input, Textarea } from "@chakra-ui/react";
import Button from "../../../shared/button/Button";
import { useForm } from "react-hook-form";
import "./SendPersonalForm.scss"

export function SendPersonalForm() {
    const {register, handleSubmit, formState:{errors, isSubmitted}} = useForm()
    const onSubmit = (data: unknown) => {
        console.log(data);
    }
    return <form className="send-personal" onSubmit={handleSubmit(onSubmit)}>
        <Heading fontSize="xxx-large" fontWeight={900} fontFamily="Unbounded" className="send-personal__heading">{isSubmitted ? "Заявка отправлена" : "Оставить заявку"}</Heading>
        <p className="send-personal__text">{isSubmitted ? "Свяжемся с вами в ближайшее время для предоставления консультации" : "Заполните форму и наши сотрудники свяжутся с вами для консультации"}</p>
        {isSubmitted ? "" : <>
            <div className="send-personal__inputs">
                <div className="send-personal__block">
<                   Input type="text" className="send-personal__input send-personal__input--upper" placeholder="Ваше имя" {...register("name", {required: true})} isInvalid={!!errors.name}/>
                    {errors.name && (
                    <p className="send-personal__error">Введите имя</p>
                    )}
                </div>
            
                <div className="send-personal__block">
                    <Input type="phone" className="send-personal__input send-personal__input--lower" placeholder="Номер телефона"  {...register("phone", {required: true, pattern: /^\+?\d{11}$/})} isInvalid={!!errors.phone}/>
                    {errors.phone && (
                    <p className="send-personal__error">Введите корректный телефон</p>
                    )}
                </div>

                <Textarea resize="none" className="send-personal__textarea" placeholder="Комментарий к проекту"  {...register("comment")} />
            </div>

            <div className="send-personal__submit">
                <Button fz={20}>Отправить заявку</Button>
                <p className="send-personal__agreement">Я даю согласие, что студия Visual Space собирает и хранит личные данные, указанные в этой контактной форме.</p>
            </div>
            </>}
    </form>
}

