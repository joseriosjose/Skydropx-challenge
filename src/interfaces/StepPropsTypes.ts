export type StepActionsProps = {
    currentStep: number;
    next: () => void;
    previus: () => void;
    stepSize: number
};