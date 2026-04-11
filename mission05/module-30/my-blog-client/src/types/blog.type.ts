

export enum Poststatus {
    DRAFT = "DRAFT",
  PUBLISHED = "PUBLISHED",
  ARCHIVED =  "ARCHIVED"
}



export interface Blogpost {
  
    id: string;
    title: string;
    content: string;
    Thumbnail?: string | null;
    isFeatured?: boolean;
    status: Poststatus;
    tags: string[];
    views: number;
    _count?:{
        comments: number
    }


     

};