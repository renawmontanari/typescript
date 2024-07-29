
// Type
type Order = {
  productId: string;
  price: number
}

type User = {
  id: number;
  firstName: string;
  age: number;
  email: string;
  password?: string;
  orders: Order[];
};

const user: User = {
  id: 1,
  firstName: 'Jane',
  age: 40,
  email: 'jane@gmail.com',
  password: '123456',
  orders: [{ productId: "1", price: 200 }],
};

const printLog = (message: string) => {}

printLog(user.password!);

// Unions
type Author = {
  bookId: string[];
  books: string[];
  category: string[];
}

const author: Author & User = {
  bookId: ['1'],
  books: ['books', 'books'],
  category: ['Fiction', 'Action'],
  id: 1,
  firstName: 'Jane',
  age: 40,
  email: 'jane@gmail.com',
  password: '123456',
  orders: [{ productId: "1", price: 200 }],
}

// Interfaces
interface UserInterface {
  readonly firstName: string,
  email: string
}

const emailUser: UserInterface = {
  email: 'jane@jane.com',
  firstName: 'Jane'
}

interface AuthorInterface {
  books: string[];
}

const newAuthor: UserInterface & AuthorInterface = {
  email: 'jane@gmail.com',
  firstName: 'Jane',
  books: ['books', 'books'],
}