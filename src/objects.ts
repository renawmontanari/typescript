
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
  register(): string;
};

const user: User = {
  id: 1,
  firstName: 'Jane',
  age: 40,
  email: 'jane@gmail.com',
  password: '123456',
  orders: [{ productId: "1", price: 200 }],
  register() {
    return "Welcome";
  }
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
  register() {
    return "Welcome";
  }
}

// Interfaces
interface UserInterface {
  readonly firstName: string,
  email: string,
  login(): string
}

const emailUser: UserInterface = {
  email: 'jane@jane.com',
  firstName: 'Jane',
  login() {
      return "Welcome"
  },
}

interface AuthorInterface {
  books: string[];
}

const newAuthor: UserInterface & AuthorInterface = {
  email: 'jane@gmail.com',
  firstName: 'Jane',
  books: ['books', 'books'],
  login() {
    return "Welcome"
  },
}

interface MathFunc {
  (x: number, y: number): number;
}