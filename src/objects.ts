
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
