'use client'

import { AuthForm } from '@/components/AuthForm';
import { Button } from '@/components/ui/Button';
import { Card } from "@/components/ui/Card";
import { Form, Input, PhoneInput, Switch } from '@/components/ui/Form';
import { Modal } from '@/components/ui/Modal';
import { Stack, VStack } from '@/components/ui/Stack';
import { Tabs } from "@/components/ui/Tabs";
import { VIPBlock } from '@/components/vip/VIPBlock';
import { useMediaQuery } from '@/hooks';
import { useState } from "react";
import { z } from 'zod';

export default function Page() {
    const tabs = [
        {
            label: 'Персональная информация',
            value: 0,
        },
        {
            label: 'Телефон и Email',
            value: 1,
        },
        {
            label: 'Пароль и безопасность',
            value: 2,
        },
    ]
    const [tab, setTab] = useState(0)
    const { isXS } = useMediaQuery()

    return (
        <>
            <Card
                compact
                bordered
                title={!isXS && "Мой профиль"}
                actions={<Tabs
                    items={tabs}
                    value={tab}
                    onChange={(value) => setTab(value as number)}
                />}
            >
                {
                    tab === 0 && <PersonalInfo />
                }
                {
                    tab === 1 && <PhoneAndEmail />
                }
                {
                    tab === 2 && <Password />
                }
            </Card>
            <VIPCard />
            <NotificationsCard />
            <PromocodeCard />
        </>
    );
}


const PersonalInfo = () => {
    const { isXS } = useMediaQuery()

    return <Form validationSchema={z.object({})} defaultValues={{ name: "Иван Иванов" }}><VStack alignItems='stretch' spacing={isXS ? 18 : 30}>
        <Stack direction={isXS ? 'column' : 'row'} spacing={isXS ? 18 : 30} alignItems='stretch'>
            <Stack.Item grow={1} basis={0}>
                <Input label='ID профиля' disabled value={'1233213'} />
            </Stack.Item>
            <Stack.Item grow={1} basis={0}>
                <Input label='Имя' name="name" />
            </Stack.Item>
        </Stack>
        <Stack.Item alignSelf='flex-end'>
            <Button>Сохранить</Button>
        </Stack.Item>
    </VStack>
    </Form>
}

const PhoneAndEmail = () => {
    const { isXS } = useMediaQuery()

    return <Form validationSchema={z.object({})} defaultValues={{ phone: '+79504939812', email: 'test@example.com' }}>
        <VStack alignItems='stretch' spacing={isXS ? 18 : 30}>
            <Stack direction={isXS ? 'column' : 'row'} spacing={isXS ? 18 : 30} alignItems='stretch'>
                <Stack.Item grow={1} basis={0}>
                    <PhoneInput label='Телефон' name="phone" />
                </Stack.Item>
                <Stack.Item grow={1} basis={0}>
                    <Input label='Email' name="email" />
                </Stack.Item>
            </Stack>
            <Stack.Item alignSelf='flex-end'>
                <Button>Сохранить</Button>
            </Stack.Item>
        </VStack>
    </Form>
}

const Password = () => {
    const { isXS } = useMediaQuery()

    return <Form validationSchema={z.object({})} defaultValues={{}}>
        <VStack alignItems='stretch' spacing={isXS ? 18 : 30}>
            <Stack.Item grow={1} basis={0}>
                <Stack direction={isXS ? 'column' : 'row'} spacing={isXS ? 18 : 30} alignItems='stretch'>
                    <Stack.Item grow={1} basis={0}>
                        <Input label='Текущий пароль' type='password' name="password" />
                    </Stack.Item>
                    {
                        !isXS && <Stack.Item grow={1} basis={0} />
                    }
                </Stack>
            </Stack.Item>
            <Stack direction={isXS ? 'column' : 'row'} spacing={isXS ? 18 : 30} alignItems={isXS ? 'stretch' : 'center'}>
                <Stack.Item grow={1} basis={0}>
                    <Input label='Новый пароль' type='password' name='new_password' />
                </Stack.Item>
                <Stack.Item grow={1} basis={0}>
                    <Input label='Повторите новый пароль' type='password' name='confirm_new_password' />
                </Stack.Item>
            </Stack>
            <Stack.Item alignSelf='flex-end'>
                <Button>Сохранить</Button>
            </Stack.Item>
        </VStack>
    </Form>
}

const NotificationsCard = () => {
    const { isXS } = useMediaQuery()
    const [notifications, setNotifications] = useState(false)

    return <Card title="Уведомления" compact bordered>
        <Stack direction={isXS ? 'column' : 'row'} spacing={isXS ? 18 : 30} alignItems={isXS ? 'stretch' : 'center'}>
            <Stack.Item grow={1} basis={0}>
                <Input label='Email' disabled action="Сменить" value={'test@example.com'} />
            </Stack.Item>
            <div style={{ paddingTop: !isXS ? 20 : 0 }}>
                <Switch
                    checked={notifications}
                    onChange={() => setNotifications(!notifications)}
                    label='Получать уведомления о новостях и рекламных акциях'

                />
            </div>
        </Stack>
    </Card>
}

const PromocodeCard = () => {
    const { isXS } = useMediaQuery()

    return <Card title="Промокод" compact bordered>
        <Stack direction={isXS ? 'column' : 'row'} spacing={isXS ? 18 : 30} alignItems={isXS ? 'stretch' : 'center'}>
            <Input label='Введите промокод' action="Применить" />
        </Stack>
    </Card>
}

const VIPCard = () => {
    return <Card title="VIP" compact bordered>
        <VIPBlock />
    </Card>
}