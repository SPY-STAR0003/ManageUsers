import { useState , useEffect } from "react";

export default function UseDarkMode() {
    const [theme , setTheme] = useState();

    useEffect(() => {
        if (localStorage.getItem("usersManagerTheme") !== undefined ) {
            let localTheme = localStorage.getItem("usersManagerTheme");
            localTheme === "dark" ? darkModeView() : lightModeView()
        }
    } , [])

    const toggleTheme = darkTheme => {
        if(darkTheme) {
            darkModeView();
            localStorage.setItem("usersManagerTheme" , "dark");
            setTheme(darkTheme);
        } else {
            lightModeView();
            localStorage.setItem("usersManagerTheme" , "light");
            setTheme(darkTheme);
        }
    }

    const darkModeView = () => {
        document.body.classList.add("darkMode");
        document.body.classList.remove("lightMode");
    }

    const lightModeView = () => {
        document.body.classList.remove("darkMode");
        document.body.classList.add("lightMode");
    }

    return [theme , toggleTheme]
}