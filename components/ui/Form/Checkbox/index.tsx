import { FC, InputHTMLAttributes } from 'react';
import styles from './styles.module.scss';
import { useFormContext } from 'react-hook-form';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
    checked?: boolean;
    label?: string;
}


export const Checkbox: FC<IProps> = ({ label = null, onChange, name, ...props }) => {

    const methods = useFormContext();
    const checked = name ? methods?.getValues(name as string) : props.checked;
    const register = name ? methods?.register(name as string) : {};

    return <div className={styles.checkbox}>
        <label className={styles.checkboxLabel}>
            <div className={styles.checkboxControl}>
                <input
                    type="checkbox"
                    className={styles.checkboxInput}
                    onChange={onChange}
                    {...register}
                />
                <div className={styles.checkboxIcon} />
            </div>
            {
                label && <span className={styles.checkboxLabelText}>{label}</span>
            }
        </label>
    </div>
}