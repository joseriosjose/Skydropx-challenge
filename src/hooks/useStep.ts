import React, { useState, useCallback } from 'react'

type StepType = () => JSX.Element

const useStep = (steps: StepType[]) => {
    const size = steps.length
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
        Component: steps[currentStep],
        next,
        previus,
        currentStep
    }
}

export default useStep