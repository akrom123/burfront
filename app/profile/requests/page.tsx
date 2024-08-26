'use client'

import { Button } from '@/components/ui/Button';
import { Card } from "@/components/ui/Card";
import { Tabs } from "@/components/ui/Tabs";
import { useMediaQuery } from '@/hooks';
import { useState } from "react";

export default function Page() {
    const tabs = [
        {
            label: 'Self-limitation',
            value: 0,
        },
        {
            label: 'Deposit limits',
            value: 1,
        },
        {
            label: 'Game session limits',
            value: 2,
        },
    ]
    const [tab, setTab] = useState(0)
    return (
        <>
            <Card
                title="Ответственная игра"
                actions={<Tabs
                    items={tabs}
                    value={tab}
                    onChange={(value) => setTab(value as number)}
                />}
            >
            </Card>
        </>
    );
}