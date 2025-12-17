
type Product = {
    id: number;
    name: string;
    price: number;
    stock: number;
    color?:  string;
}

type productSummary = Pick<Product,  'id'| 'color'>

// jegula lagbe na segula bade taype;
type ProductWithoutStock = Omit<Product, 'color' | 'id'>;


// required 
type ProductWithColor = Required<Product>;

const productt: ProductWithColor = {
    id: 10,
    name: 'ajj',
    price: 11,
    stock: 55,
    color: 'red',
}

 type optionalProduct =  Partial<Product>;

 type ProductReadOnly = Readonly<Product>

// declare for empty object

const emptyObj: Record<string, unknown> = {};


 const product1 = {
    id: 10,
    name: 'ajj',
    
    color: 'red',
}