'use client'

import { Button } from '@/components/ui/Button';
import { Card } from "@/components/ui/Card";
import { Input, Switch } from '@/components/ui/Form';
import { Stack, VStack } from '@/components/ui/Stack';
import { Tabs } from "@/components/ui/Tabs";
import { useMediaQuery } from '@/hooks';
import { useState } from "react";

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
            {
                tab === 0 && <NotificationsCard />
            }
        </>
    );
}


const PersonalInfo = () => {
    const { isXS } = useMediaQuery()

    return <VStack alignItems='stretch' spacing={isXS ? 18 : 30}>
        <Stack direction={isXS ? 'column' : 'row'} spacing={isXS ? 18 : 30} alignItems='stretch'>
            <Stack.Item grow={1} basis={0}>
                <Input label='ID профиля' disabled value={'1233213'} />
            </Stack.Item>
            <Stack.Item grow={1} basis={0}>
                <Input label='Имя' value={'Иван Иванов'} />
            </Stack.Item>
        </Stack>
        <Stack.Item alignSelf='flex-end'>
            <Button>Сохранить</Button>
        </Stack.Item>
    </VStack>
}

const PhoneAndEmail = () => {
    const { isXS } = useMediaQuery()

    return <VStack alignItems='stretch' spacing={isXS ? 18 : 30}>
        <Stack direction={isXS ? 'column' : 'row'} spacing={isXS ? 18 : 30} alignItems='stretch'>
            <Stack.Item grow={1} basis={0}>
                <Input label='Телефон' value={'79600002222'} />
            </Stack.Item>
            <Stack.Item grow={1} basis={0}>
                <Input label='Email' value="test@example.com" />
            </Stack.Item>
        </Stack>
        <Stack.Item alignSelf='flex-end'>
            <Button>Сохранить</Button>
        </Stack.Item>
    </VStack>
}

const Password = () => {
    const { isXS } = useMediaQuery()

    return <VStack alignItems='stretch' spacing={isXS ? 18 : 30}>
        <Stack.Item grow={1} basis={0}>
            <Stack direction={isXS ? 'column' : 'row'} spacing={isXS ? 18 : 30} alignItems='stretch'>
                <Stack.Item grow={1} basis={0}>
                    <Input label='Текущий пароль' type='password' />
                </Stack.Item>
                <Stack.Item grow={1} basis={0}></Stack.Item>
            </Stack>
        </Stack.Item>
        <Stack direction={isXS ? 'column' : 'row'} spacing={isXS ? 18 : 30}>
            <Stack.Item grow={1} basis={0}>
                <Input label='Новый пароль' type='password' />
            </Stack.Item>
            <Stack.Item grow={1} basis={0}>
                <Input label='Повторите новый пароль' type='password' />
            </Stack.Item>
        </Stack>
        <Stack.Item alignSelf='flex-end'>
            <Button>Сохранить</Button>
        </Stack.Item>
    </VStack>
}

const NotificationsCard = () => {
    const { isXS } = useMediaQuery()

    return <Card title="Уведомления" compact bordered>
        <Stack direction={isXS ? 'column' : 'row'} spacing={isXS ? 18 : 30} alignItems="center">
            <Stack.Item grow={1} basis={0}>
                <Input label='Email' disabled action="Сменить" value={'test@example.com'} />
            </Stack.Item>
            <div style={{ paddingTop: !isXS ? 20 : 0 }}>
                <Switch label='Получать уведомления о новостях и рекламных акциях' />
            </div>
        </Stack>
    </Card>
}