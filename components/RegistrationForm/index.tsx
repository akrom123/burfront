import { registrationModelSchema } from "@/schemas"
import { Checkbox, Form, Input, PhoneInput } from "../ui/Form"
import styles from './styles.module.scss'
import { Button } from "../ui/Button"

export const RegistrationForm = () => {
    return <div className={styles.registrationForm}>
        <Form
            defaultValues={{}}
            validationSchema={registrationModelSchema}
        >
            <div className={styles.registrationFormContainer}>
                <PhoneInput label="Phone" name="phone" />
                <Input label="Email" type={'email'} name="email" />
                <Input
                    label="Password"
                    hint={'Min. 8 symbols: numbers and Latin letters'}
                    name="password"
                    type="password"
                />
                <div className={styles.registrationFormCheckboxes}>
                    <Checkbox
                        label={'Receive beneficial offers.'}
                        name={'offers'}
                    />
                    <Checkbox
                        label={'I hereby confirm that I am over 18 years of age and have read and accept all applicable rules and regulations.'}
                        name={'ageConfirm'}

                    />
                </div>
                <div className={styles.registrationFormButtons}>
                    <Button variant="tertiary">Register</Button>
                    <Button>Log in</Button>
                </div>
            </div>
        </Form>
    </div>
}