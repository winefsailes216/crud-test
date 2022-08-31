import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { getAllArticles } from './api'

const Create = () => {

    // const [article, setArticle] = useState([])

    // const getArticle = async () => {
    //     const response = await getAllArticles();
    //     setArticle(response.data)
    // }

    // useEffect(() => {
    //     getArticle();
    // }, [])

    const article = [
        { id: 1, title: "John Article", content:"From the examples on this page you will find multiple styles and variants of the textarea component coded with the utility classes from Tailwind CSS including a WYSIWYG editor, comment box, chatroom textarea, all available in dark mode as well. " },
        { id: 2, title: "Wayne Article", content:"From the examples on this page you will find multiple styles and variants of the textarea component coded with the utility classes from Tailwind CSS including a WYSIWYG editor, comment box, chatroom textarea, all available in dark mode as well. "  },
        { id: 3, title: "Doe Article", content:"From the examples on this page you will find multiple styles and variants of the textarea component coded with the utility classes from Tailwind CSS including a WYSIWYG editor, comment box, chatroom textarea, all available in dark mode as well." },
        { id: 4, title: "Jane Article", content:"From the examples on this page you will find multiple styles and variants of the textarea component coded with the utility classes from Tailwind CSS including a WYSIWYG editor, comment box, chatroom textarea, all available in dark mode as well." },
        { id: 5, title: "Fred Article", content:"From the examples on this page you will find multiple styles and variants of the textarea component coded with the utility classes from Tailwind CSS including a WYSIWYG editor, comment box, chatroom textarea, all available in dark mode as well." },
      ];

    return (
        <>
        <div className='font-extrabold text-center mb-6'>
            <Link to={'/create'} className='rounded-xl p-2 border-2 mt-16 border-slate-500 text-xl bg-slate-600 text-white'>Create New + </Link>
        </div>
        
        {
            article.map(data => (
                <div key={data.id} className="grid grid-cols-2 border-2 border-slate-300 mx-20 px-2">
                    {/* <p>{data.id}</p> */}
                    <p className='text-xl font-semibold'>{data.title}</p>
                    <p className='text-lg font-base'>{data.content}</p>
                    
                </div>


            ))
        }
        </>
    )
}

export default Create