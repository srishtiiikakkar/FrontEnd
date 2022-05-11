import React, {useEffect} from 'react'

export const About = () => {

    useEffect(() => {
        window.addEventListener("beforeunload", handleBeforeUnload);
        return () => {
          window.removeEventListener("beforeunload", handleBeforeUnload);
        };
      }, []);

      const handleBeforeUnload = (e) => {
        e.preventDefault();
        const message =
          "Are you sure you want to leave? All provided data will be lost.";
        e.returnValue = message;
        return message;
      }

    return(
        <div>
            About Page
        </div>
    )
}