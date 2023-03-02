
interface data {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
      street: string;
      suite: string;
      city: string;
      zipcode: string;
      geo: {
        lat: string;
        lng: string;
      };
    };
    phone: string;
    website: string;
    company: {
      name: string;
      catchPhrase: string;
      bs: string;
    };
  }

export class UserService {
    
  static getAllUsers = async():Promise<data[]> => {
   const res= await fetch("/api/users")
   return res.json();
      
  };
}
