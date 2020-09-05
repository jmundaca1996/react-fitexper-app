import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'
//RAFC pra crear un componente automaticamente
export const GifExpertApp = () => {
    const [categorias, setCateogrias] = useState(['One Punch'])

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCateogrias={setCateogrias} />
            <hr/>
            
            <ol>
                {
                    categorias.map( category => (
                        <GifGrid
                            key={category}
                            category={category}
                        />
                    ))
                }
            </ol>
        </>
    )
}
