"use client"
import { ThemeProvider, useTheme } from "next-themes"

export default function Provider({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider>
            {children}
        </ThemeProvider>
    )
}