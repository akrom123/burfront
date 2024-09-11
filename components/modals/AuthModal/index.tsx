'use client'

import { AuthForm } from "@/components/AuthForm";
import { Modal } from "@/components/ui/Modal"
import { useStores } from "@/contexts";
import { observer } from "mobx-react-lite"

export const AuthModal = observer(() => {
    const { appStore } = useStores();

    return <Modal open={appStore.modal.auth} title={'LOG IN'} onClose={() => appStore.toggleModal('auth', false)}>
        <AuthForm />
    </Modal>
})