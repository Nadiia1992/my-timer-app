interface TimerInputProps {
    value: string;
    onChange: (value: string) => void;
    disabled: boolean;
}

export function TimerInput({value, onChange, disabled}: TimerInputProps) {
    return (
        <input
        type="number"
        placeholder="Введіть секунди"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
        />
    );
}