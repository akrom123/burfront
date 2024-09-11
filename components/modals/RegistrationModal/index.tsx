'use client'

import { RegistrationForm } from "@/components/RegistrationForm";
import { Modal } from "@/components/ui/Modal"
import { useStores } from "@/contexts";
import { observer } from "mobx-react-lite"

export const RegistrationModal = observer(() => {
    const { appStore } = useStores();

    return <Modal open={appStore.modal.registration} title={'Registration'} onClose={() => appStore.toggleModal('registration', false)}>
        <RegistrationForm />
    </Modal>
})