
interface ButtonProps {
  label: string;
  onClick: () => void;
}

export function TimerButton({label, onClick}: ButtonProps) {
    return(
        <button onClick={onClick}>
            {label}
        </button>
    );
}
