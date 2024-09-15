
import { Button } from 'shared/ui/Button/Button';
import { useEffect, useState } from 'react';

interface BugButtonProps {
  className?: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const BugButton = ({ className }: BugButtonProps) => {

    const [error,setError] = useState(false);

    const onThrow = () => setError(true)

    useEffect(()=>{
        if (error) {
            throw new Error;
        }
        
    }, [error])
    
    return (
        // eslint-disable-next-line i18next/no-literal-string
        <Button onClick={onThrow}>
            Error 
        </Button>
    );
};
