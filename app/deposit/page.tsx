'use client'

import { Heading } from "@/components/Heading";
import styles from './styles.module.scss'
import { Input } from "@/components/ui/Form";
import { InfoCard } from "@/components/finance/InfoCard";
import { PaymentMethods } from "@/components/finance/PaymentMethods";
import { FC, useState } from "react";
import Image from 'next/image';
import { Icon } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/finance/Card";
import { useCountDown } from "@reactuses/core";


export default function Page() {
  const [step, setStep] = useState(0)
  return (
    <div className="container">
      <Heading level={1} center>Пополнение счета</Heading>
      {
        step === 0 && <div className={styles.container}>
          <div className={styles.form}>
            <Input label="Введите сумму пополнения" action="мин: $564" actionType="text" />
            <PaymentMethods />
          </div>
          <div className={styles.card}>
            <InfoCard
              items={[
                {
                  title: "Сумма пополнения:",
                  description: "$ 456 874"
                },
                {
                  title: "Комиссия:",
                  description: "5%"
                },
                {
                  title: "Итого к выводу:",
                  description: "$ 456 874"
                }
              ]}
              actionText="Перейти к оплате"
              onSubmit={() => {
                setStep(1)
              }}
            />
          </div>
        </div>
      }
      {
        step === 1 && <div className={styles.depositRequisites}>
          <div className={styles.depositRequisitesRow}>
            <div className={styles.depositRequisitesMethod}>
              <Image
                src={'/images/ethereum.png'}
                alt=''
                width={100}
                height={50}
              />
            </div>
            <Input readOnly action={<Icon name="copy" size={15} />} value={'8746.7841'} actionType="copy" />
          </div>
          <Input readOnly action={<Icon name="copy" size={15} />} value={'TULPUkZtdC2BjnJ6syx6LtjdUdYTHQ7bKj'} actionType="copy" label="Счет" />
          <div className={styles.depositRequisitesQR}>
            <Image
              src={'/images/qr.png'}
              alt=''
              width={150}
              height={150}
            />
            <div className={styles.depositRequisitesQRText}>
              Совершите оплату на указанный счет
              <br />
              <span>до 08.11.2023 13:00.</span>
              <br />
              <br />
              Какой то дополнительный информационный текст
            </div>
          </div>
          <Button onClick={() => setStep(2)}>
            Я оплатил
          </Button>
        </div>
      }
      {
        step === 2 &&
        <Card action="Вернуться назад" title="Ожидает оплаты">
          <Timer onFinish={() => setStep(3)}/>
        </Card>
      }
      {
        step === 3 &&
        <Card variant="success" action="К играм" title="Счет пополнен">
          + $257
        </Card>
      }
    </div>
  );
}


const Timer: FC<{onFinish?: () => void}> = ({onFinish}) => {
  const [hours, minute, second] = useCountDown(5, undefined, onFinish);
  return <div>{`${minute}:${second}`}</div>

}