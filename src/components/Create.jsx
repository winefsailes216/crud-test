import React, {useState, useEffect} from 'react'

const Create = () => {

    // const [article, setArticle] = useState(useArticle);
    // const {title, content} = article;

    // const onValueChange =(e) =>{
    //     setArticle({...article, [e.target.title] : e.target.value});
    //     console.log(article);
    // }



    return (
        <>
            <div className='w-[600] mx-20'>
                <h1 className='mt-10 font-bold text-2xl'>Create New Article</h1>
                <form>
                    <div class="mb-6">
                        <label for="article" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Article Name</label>
                        <input type="text" id="article" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>

                    <label for="content" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Article Content</label>
                    <textarea  id="content" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your content..."></textarea>

                    <button className='p-2 border-2 mt-6 border-slate-500 text-xl bg-slate-600 text-white rounded-xl'>Post</button>
                </form>

            </div>
        </>

    )
}

export default Create