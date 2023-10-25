import React from "react"

interface themeProps{
    children: Element
}

export default function ThemeDefault({children}:themeProps){
    return(
        <>
        {children}
        </>
    )
}