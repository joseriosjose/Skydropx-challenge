import React, { useState, useCallback } from 'react'


interface DefaultValidators {
    [key: string]: (name: string) => boolean
}

const useForm = <T extends Object>(defaultValues: T, defaultValidators?: DefaultValidators) => {
    const [fields, setfields] = useState({ ...defaultValues });

    const handleInput = useCallback(
        (name: keyof typeof fields) => ({ target }: React.ChangeEvent<HTMLInputElement>) => {
            const { value, name } = target;
            const validator = defaultValidators && defaultValidators[name as keyof typeof defaultValidators]
            if (!validator || (validator && validator(value))) //si no existe validator aplica directo || si existe validator necesita validarse 
                setfields((oldFields) => ({ ...oldFields, [name]: value }))
        },
        [defaultValidators],
    )


    const reset = useCallback(
        () => {
            const clear = Object.entries(fields).reduce((acc, current) => {
                const [name] = current;
                return { ...acc, [name]: "" };
            }, { ...fields });
            setfields({ ...clear })
        },
        [fields],
    )


    const register = useCallback(
        (name: keyof typeof fields) => {
            return {
                name,
                onChange: handleInput(name),
                value: fields[name as keyof typeof fields]
            }
        },
        [handleInput, fields],
    )
    return {
        fields,
        register,
        reset
    }

}

export default useForm;