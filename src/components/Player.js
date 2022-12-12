import { useCallback } from "react";
import react from react

export default async function Player()
{

    const [isLoading, setIsLoading] = useState(true);

    const fetchData = useCallback(()=>{

        fetch('');

    }, isLoading)

    return (
    <>
    
    </>)
}