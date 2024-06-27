import { useFormStatus } from "react-dom";
import { Button } from "./button";

export default function SubmitButton({ ...props }) {
    const { pending } = useFormStatus();

    const handleClick = (event: { preventDefault: () => void; }) => {
        if (pending) {
            event.preventDefault();
        }
    }

    return (
        <Button aria-disabled={pending} type="submit" {...props} onClick={handleClick}>
            {props.children}
        </Button>
    );
}