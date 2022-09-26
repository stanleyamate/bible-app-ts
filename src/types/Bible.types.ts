
export interface IBible {
    name: string
    id: string,
    description: string
    abbreviation: string
    language: { name: string }
    dblId: string
}
export interface BiblesProps {
    name: string
    id: string,
    description: string
    abbreviation: string
    language: { name: string }
    dblId: string
}[]
export interface IBook{
    id: string
    bibleId: string
    abbreviation: string
    name: string
    nameLong: string
  }
  
export type ErrProps = {
    statusCode: string
    error: string
    message: string
}

export interface INumProps {
    id: string
    bibleId: string
    bookId: string
    reference: string
    chapterId: string
}
export interface IVerse {
    id: string
    orgId: string
    bibleId: string
    bookId: string
    chapterId: string
    content: string
    reference: string
    verseCount: number
}
export interface IChapProps {
    id: string
    bibleId: string
    bookId: string
    number: string
}
export interface IResults{
    id: string
    orgId: string
    bibleId: string
    bookId: string
    chapterIds: string[]
    reference: string
    content:string
  }
export type ErrStateProps = {
    errorObj: ErrProps | null
    setErrObj: React.Dispatch<React.SetStateAction<ErrProps | null>>
}

