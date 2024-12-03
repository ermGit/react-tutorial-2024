import {useEffect} from "react";

export function useDocumentClick(element) {
    useEffect(() => {
        const handleDocumentClick = (element) => {
            console.log("Clicked Document", element);
        };

        document.addEventListener("click", handleDocumentClick);

        return () => {
            document.removeEventListener("click", handleDocumentClick);
        }
    }, []);
}