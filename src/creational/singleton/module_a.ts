//import { MyDatabaseClassic as MyDatabase } from "./db/my-database-classic";
//import { MyDatabaseModule as MyDatabase } from "./db/my-database-module";
import { MyDatabaseFunction as MyDatabase } from "./db/my-database-function";

//const myDatabaseClassic = MyDatabase.instance;
const myDatabaseClassic = MyDatabase;
myDatabaseClassic.add({ name: 'Bianca', age: 18 });
myDatabaseClassic.add({ name: 'Henrique', age: 11 });
myDatabaseClassic.add({ name: 'Luiza', age: 9 });
myDatabaseClassic.add({ name: 'Manuela', age: 6 });

export default myDatabaseClassic;