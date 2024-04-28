import React from 'react'
import {Route, Routes} from "react-router-dom";
import {PagesRoutes} from './PagesRoutes'

const AppRouter = () => {
    return(
        <Routes>
            {PagesRoutes.map(({path, element}) => {
                return <Route key={path} path={path} element={element}/>
            })}
        </Routes>
    )
}

export default AppRouter