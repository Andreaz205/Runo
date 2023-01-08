import React, {useCallback, useRef, useState} from 'react';
import styles from './Cart.module.scss'
import Price from "../Price/Price";
import {useTypedSelector} from "@/hooks/useTypedSelector";
import CartItem from "@/ui/Cart/CartItem/CartItem";
import {postfix1} from "@/utils/builders/postfix1";
import {SubmitHandler, useForm} from "react-hook-form";
import {IDeliveryType, IOrderInput} from "@/ui/Cart/IOrderInput";
import Field from "@/ui/form-elements/Field";

const Cart = () => {
    const [deliveryType, setDeliveryType] = useState<IDeliveryType>('delivery')
    const onSubmitOrderFunction: SubmitHandler<IOrderInput> = (data) => {
        reset()
    }

    const {register, handleSubmit, formState: {errors}, reset} = useForm<IOrderInput>({
        mode: 'onChange'
    })

    const [userName, setUserName] = useState<string | null>(null)
    const [address, setAddress] = useState<string | null>(null)
    const [phone, setPhone] = useState<string | null>(null)
    const [email, setEmail] = useState<string | null>(null)
    const [comment, setComment] = useState<string | null>(null)

    // При нажатии на кнопку подтвердить заказ чтобы проскролило до оформить заказ
    const confirmRef = useRef<HTMLDivElement | null>(null)

    const {cart, amount, sum} = useTypedSelector(state => state.cart)

    const scroll = () => {
        // let height = calculateComponentHeight()
        confirmRef.current && confirmRef.current?.scrollIntoView({behavior: "smooth", block: "center"})
    }

    return (
        <>
            <div className={styles.cartWrapper}>
                <div className={styles.header}>
                <span>
                  Корзина
                </span>
                </div>
                {cart && cart?.length ? (
                        <>
                            <div className={styles.cart}>
                                <div className={styles.cartItems}>
                                    {cart.map(item => (
                                        <CartItem key={item.id} item={item}/>
                                    ))}
                                </div>
                                <div className={styles.payment}>
                                    <div className={styles.summary}>Итого {amount} {'товар' + postfix1(amount)} на сумму
                                    </div>
                                    <Price price={sum}/>

                                    <div className={styles.delivery}>
                                    <span>
                                        Стоимость доставки
                                    </span>
                                        <div className={styles.deliveryPrice}>
                                            + 700 P
                                        </div>
                                    </div>
                                    <button className={styles.orderButton} onClick={() => scroll()}>
                                        Оформить заказ
                                    </button>
                                </div>
                            </div>

                            <div className={styles.questionnaire} ref={confirmRef}>
                                <div className={styles.blank}>

                                    <div className={styles.forms}>
                                        <span className={styles.blankHeader}>Заполните имя получателя</span>
                                        <div className={styles.flex}>
                                            <div className={styles.formsArea}>
                                                <form onSubmit={handleSubmit(onSubmitOrderFunction)}>
                                                    <div className={styles.additional}>Участник Золотое Руно</div>
                                                    <div className={styles.form}>
                                                        <span>Имя</span>
                                                        <input type="text" className={styles.blankInput}
                                                               onChange={(e) => setUserName(e.target.value)}/>
                                                    </div>
                                                    <div className={styles.form}>
                                                        <span>Телефон</span>
                                                        <input type="text" className={styles.blankInput}
                                                               onChange={(e) => setPhone(e.target.value)}/>
                                                    </div>
                                                    <div className={styles.form}>
                                                        <span>Почта</span>
                                                        <input type="text" className={styles.blankInput}
                                                               onChange={(e) => setEmail(e.target.value)}/>
                                                    </div>
                                                    <div className={styles.deliveryTitle}>Выберите способ доставки</div>
                                                    <div className={styles.radioButtons}>
                                                        <div className={styles.radio}>
                                                            <input type="radio" id='delivery-first' name='delivery'
                                                                   checked={deliveryType === 'delivery'} onChange={() => {
                                                            }}/>
                                                            <label className={styles.radioLabel} form='delivery-first'
                                                                   onClick={(e) => setDeliveryType('delivery')}>Доставка</label>
                                                        </div>
                                                        <div className={styles.radio}>
                                                            <input type="radio" id='delivery-second' name='delivery'
                                                                   checked={deliveryType === 'pickup'} onChange={() => {
                                                            }}/>
                                                            <label form='delivery-second' className={styles.radioLabel}
                                                                   onClick={(e) => setDeliveryType('pickup')}>Самовывоз</label>
                                                        </div>
                                                    </div>
                                                    <div className={styles.form}>
                                                        <span>Адрес</span>
                                                        <Field
                                                            placeholder='Введите адрес'
                                                            error = {errors.address}
                                                            {...register('address', {
                                                                required: 'Поле адрес обязательное'
                                                            })}
                                                        />
                                                        {/*<input type="text" className={styles.blankInput}*/}
                                                        {/*       onChange={(e) => setAddress(e.target.value)}/>*/}
                                                    </div>
                                                    <div className={styles.form}>
                                                        <span>Добавь комментарий</span>
                                                        <input type="text" className={styles.blankInput}
                                                               onChange={(e) => setComment(e.target.value)}/>
                                                    </div>
                                                    <div className={styles.min}>
                                                        Оплата при получении производится после осмотра товаров. Курьер
                                                        принимает только наличные средства. Пожалуйста, подготовьте сумму
                                                        без сдачи.
                                                    </div>
                                                    <button
                                                        type='submit'
                                                        className={styles.confirmedButton}>
                                                        Подтверждаю заказ
                                                    </button>
                                                </form>
                                            </div>

                                            <div className={styles.deliveryArea}>

                                                <div className={styles.deliveryBlock}>
                                                    <div className={styles.title}>Доставка</div>
                                                    <div className={styles.item}>
                                                        <span>по Челябинску</span>
                                                        <span>
                                            700 P
                                        </span>
                                                    </div>
                                                    <div className={styles.item}>
                                                        <span>по России</span>
                                                        <span>
                                           <span className={styles.pre}>от</span>  1000 P
                                        </span>
                                                    </div>
                                                    <div className={styles.item}>
                                                        <span>Самовывоз</span>
                                                        <span className={styles.free}>
                                            Бесплатно
                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </>
                    )
                    : (
                        <div style={{textAlign: "center", padding: '100px 0', fontSize: 30}}>
                            Ваша корзина пуста
                        </div>
                    )}
            </div>
        </>);
};

export default Cart;