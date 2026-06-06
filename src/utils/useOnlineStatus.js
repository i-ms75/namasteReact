import { useState,useEffect } from "react";

const useOnlineStatus = () =>
{
    const [isOnlineStatus, setisOnlineStatus] = useState(navigator.onLine);
    useEffect(()=>
        {
            const updateOnlineStatus = ()=>
            {
                setisOnlineStatus(navigator.onLine)
            }
            window.addEventListener("online", updateOnlineStatus)
            window.addEventListener("offline",updateOnlineStatus)

            return ()=>
                {
                    window.removeEventListener("online", updateOnlineStatus);
                    window.removeEventListener("offline", updateOnlineStatus);
                }
        },[]
    );
    return isOnlineStatus;
}
 export default useOnlineStatus;