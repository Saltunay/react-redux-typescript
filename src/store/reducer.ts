import * as actionTypes from './actionTypes'

const initialState: ArticleState = {
    articles: [
        {
            id: 1,
            title: "Sebahattin Altunay",
            body: "Sebahattin Altunay was born in Mersin at 21.03.1993"
        },
        {
            id: 2,
            title: "Canan Taraç",
            body: "Canan Taraç was born in Bingöl at 01.01.1990"
        }
    ]
}

const reducer = (
    state: ArticleState = initialState,
    action: ArticleAction
): ArticleState => {
    switch (action.type){
        case actionTypes.ADD_ARTICLE:
            const newArticle: IArticle = {
                id: Math.random(),
                title: action.article.title,
                body: action.article.body
            }
            return {
                ...state,
                articles: state.articles.concat(newArticle)
            }
        case actionTypes.REMOVE_ARTICLE:
            const updatedArticle: IArticle[] = state.articles.filter(article => article.id !== action.article.id)
            return{
                ...state,
                articles: updatedArticle
            }
    }
    return state
}

export default reducer
