import { authModelSchema } from "@/schemas"
import { Form, Input } from "../ui/Form"
import styles from './styles.module.scss'
import { Button } from "../ui/Button"
import { useStores } from "@/contexts"
import { useMediaQuery } from "@/hooks"
import { useRouter } from "next/navigation"

export const AuthForm = () => {
    const { isXS } = useMediaQuery()
    const { appStore } = useStores()
    const router = useRouter()
    return <div className={styles.authForm}>
        <Form
            defaultValues={{}}
            validationSchema={authModelSchema}
        >
            <div className={styles.authFormContainer}>
                <Input label="Email Or Phone" name="login" placeholder="Starting write" />
                <Input
                    label="Password"
                    hint={<div className={styles.authFormForgot}>Forgotten password?</div>}
                    name="password"
                    type="password"
                    placeholder="Starting write"
                />
                <div className={styles.authFormButtons}>
                    <Button
                        variant="tertiary"
                        type="button"
                        onClick={() => {
                            appStore.toggleModal('auth', false)
                            !isXS ? router.push('/registration') : appStore.toggleModal('registration', true)
                        }}
                    >Register</Button>
                    <Button
                        onClick={() => {
                            appStore.setLoggedIn((true))
                            appStore.toggleModal('auth', false)
                        }}
                        type="button"
                    >Log in</Button>
                </div>
            </div>
        </Form>
    </div>
}