import React, { useState } from 'react'


const DarkThemeProps = {
    toolbarColor:'dark',
    headerMenuColor:'dark',
    menuColor:'dark',
    primaryButtonColor: 'dark',
    secondaryButtonColor:'medium',
    defButtonColor:'white'
}

const WhiteThemeProps  = {
    toolbarColor:'primary',
    headerMenuColor:'white',
    menuColor:'primary',
    primaryButtonColor: 'primary',
    secondaryButtonColor:'secondary',
    defButtonColor:'medium'

}

const ThemesProps = (theme:string) => {
    if(theme==='dark'){
        return DarkThemeProps
    }
    else{
        return WhiteThemeProps
    }
}


export default ThemesProps("def")
