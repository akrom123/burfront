'use client'

import { Button } from '@/components/ui/Button';
import { Card } from "@/components/ui/Card";
import { Input } from '@/components/ui/Form';
import { Icon } from '@/components/ui/Icon';
import { useMediaQuery } from '@/hooks';
import { useState } from "react";

export default function Page() {
    return (
        <>
            <Card
                title="История ставок"
                actions={
                    <Input placeholder='Search' 
                    // action={<Icon name="search" size={18} />}
                    />
                }
            >
            </Card>
        </>
    );
}