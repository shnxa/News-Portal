export interface NewsData  {
    status: string,
    totalResults: number,
    articles: object | Articles
}
 export interface Articles {
     source: {
         id: null,
         name: string
     },
    readonly author: string,
    readonly title: string,
    readonly description: Text,
    readonly url: string,
    readonly urlToImage: string,
    readonly publishedAt: string,
    readonly content: string
 }

 