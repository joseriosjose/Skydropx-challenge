import { useState, useCallback } from 'react'

const useStep = (steps: number) => {
    const size = steps
    const [currentStep, setcurrentStep] = useState(0);

    const next = useCallback(
        () => {
            if (currentStep + 1 < size) {
                setcurrentStep(currentStep + 1)
            }
        },
        [size, currentStep],
    )
    const previus = useCallback(
        () => {
            if (currentStep - 1 >= 0) {
                setcurrentStep(currentStep - 1)
            }
        },
        [currentStep],
    )

    return {
        next,
        previus,
        currentStep
    }
}

export default useStep