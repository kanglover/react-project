import { MouseEventHandler } from "react"

interface ActionButtonProps {
    disabled?: boolean;
    handler: MouseEventHandler;
    label: string;
    text: string;
}

export const ActionButton: React.FC<ActionButtonProps> = ({
    disabled = false,
    handler,
    label,
    text,
}) => {
    return (
        <button
            className="action-button"
            onClick={handler}
            aria-label={label}
            title={label}
            disabled={disabled}
        >
            <span>{text}</span>
        </button>
    )
}