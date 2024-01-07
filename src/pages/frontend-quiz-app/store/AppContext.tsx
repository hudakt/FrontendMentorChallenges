import { createContext } from "react"

const AppContext = createContext({
    theme: 'light',
    onThemeToggled: (theme: string) => {}
});

export default AppContext;