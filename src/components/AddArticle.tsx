import * as React from 'react'

type Props = {
    saveArticle: (article: IArticle | any) => void
}

export const AddArticle: React.FC<Props> = ({saveArticle}) => {
    const[article, setArticle] = React.useState<IArticle | {}>()

    const handleArticleData = (e: React.FormEvent<HTMLInputElement>) => {
        setArticle({
            ...article,
            [e.currentTarget.id]: e.currentTarget.value
        })
    }

    const addNewArticle = (e: React.FormEvent) => {
        e.preventDefault()
        saveArticle(article)
    }

    return (
        <form onSubmit={addNewArticle} className="Add-article">
            <input onChange={handleArticleData} type="text" name="title" id="title" placeholder="title" />
            <input onChange={handleArticleData} type="text" name="body" id="body" placeholder="Description" />
            <button disabled={article === undefined ? true : false}>Add Article</button>
        </form>
    )
}