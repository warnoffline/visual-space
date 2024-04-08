import {Heading, Input, Textarea } from "@chakra-ui/react";
import Button from "../../../shared/button/Button";
import { useForm } from "react-hook-form";
import "./SendPersonalForm.scss"
import { personalDataService } from "../api/personalData.service";
    type FieldValues = {
        name: string;
        phone: string;
        comment: string;
    }
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function SendPersonalForm({onCloseFirst, onReadyOpen}:any) {
    const {register, handleSubmit, formState:{errors}} = useForm<FieldValues>()
    const onSubmit = (data: FieldValues) => {
      personalDataService.send(data)
        onCloseFirst()
        onReadyOpen()
    }
    return <form className="send-personal" onSubmit={handleSubmit(onSubmit)}>
        <Heading fontSize="xxx-large" fontWeight={900} fontFamily="Unbounded" className="send-personal__heading">Оставить заявку</Heading>
        <p className="send-personal__text">Заполните форму и наши сотрудники свяжутся с вами для консультации</p>
        <>
            <div className="send-personal__inputs">
                <div className="send-personal__block">
                    <Input type="text" className="send-personal__input send-personal__input--upper" placeholder="Ваше имя" {...register("name", {required: true})} isInvalid={!!errors.name}/>
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
            </>
    </form>
}

