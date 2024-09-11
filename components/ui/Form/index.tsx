import { FC, HTMLAttributes, useEffect } from 'react';
import { DefaultValues, FieldValues, FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

export * from './Checkbox'
export * from './Switch'
export * from './Input'



interface IProps extends HTMLAttributes<HTMLFormElement> {
    validationSchema: z.Schema
    defaultValues?: DefaultValues<FieldValues>;
    children: React.ReactNode;
    onSubmit?: SubmitHandler<any>; // specify generic type
    onChange?: (values: any) => void; // specify generic type
}

export const Form: FC<IProps> = ({
    defaultValues,
    validationSchema,
    children,
    onSubmit,
    onChange,
    ...formProps
}) => {
    const methods = useForm({
        resolver: zodResolver(validationSchema),
        defaultValues,

    });

    if (onChange) {
        methods.watch((values) => onChange(values));
    }

    useEffect(() => {
        methods.reset(defaultValues);
    }, [defaultValues]);


    return (<FormProvider {...methods} >
        <form
            onSubmit={onSubmit && methods.handleSubmit(onSubmit)}
            {...formProps}>
            {children}
        </form>
    </FormProvider>
    );
};
