import React from 'react'
import { useState } from 'react'
import './Index.css'

const Index = () => {

    const user = [
        {
            id: 1,
            name: 'Bobojon Matrizayev',
            email: 'matrizayev@gmail.com'
        },
        {
            id: 2,
            name: 'Javohir Samandarov',
            email: 'javohir@gmail.com'
        },
        {
            id: 3,
            name: 'Zafar Ruzmetov',
            email: 'zafar@gmail.com'
        },
        {
            id: 4,
            name: 'Ilyos olimov',
            email: 'Ilyos@gmail.com'
        }
    ]


    /*berda queryga inputdaki harbir harf galib duribdi  */
    const [query, setQuery] = useState('')

    // inputo yozgonimiz chiqodi
    // console.log(query);
    

  return (
    <div className='search'>
        <div className="container">
            <div className="search__filter">
            {/* berda e bizani funcsiya e biza inputo yozgon har bir harf target asa bizani input shu inputni ichinan valuesini olodi don queryni o'zgartiradi kegin tolowercase targetni valuesini kichkina harf atib baradi*/}
                <input type="text" placeholder='Search...' onChange={e => setQuery(e.target.value.toLowerCase())}/>
            </div>
            <ul key={user.id} className='list'>
                {
                    user.filter((users => users.name.toLowerCase().includes(query))).map((elm, index) => (
                        <li key={index} className='list__item'>
                            <span>{elm.name}</span> 
                            <span> {elm.lastName}</span>
                        </li>
                    ))
                }
            </ul>
        </div>
    </div>
  )
}

export default Index