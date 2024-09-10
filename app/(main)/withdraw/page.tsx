'use client'

import { Heading } from "@/components/Heading";
import styles from './styles.module.scss'
import { Input } from "@/components/ui/Form";
import { InfoCard } from "@/components/finance/InfoCard";
import { PaymentMethods } from "@/components/finance/PaymentMethods";
import { useState } from "react";
import { Card } from "@/components/finance/Card";


export default function Page() {
  const [step, setStep] = useState(0)

  return (
    <div className="container">
      <Heading level={1} center>Вывод средств</Heading>
      {
        step === 0 && (
          <div className={styles.container}>
            <div className={styles.form}>
              <Input label="Введите сумму вывода" action="мин: $564" actionType="text" />
              <PaymentMethods />
              <Input label="Введите номер счета" />
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
                actionText="Запросить вывод"
                onSubmit={() => { setStep(1) }}
              />
            </div>
          </div>
        )
      }
      {
        step === 1 &&
        <Card action="Личный кабинет" title="Ожидает вывода">
          <div className={styles.withdrawNote}>
            Мы отправим средства в течении 2 дней, следите за статусом в личном кабинете
          </div>
        </Card>
      }
    </div>
  );
}
