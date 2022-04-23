//import { MyDatabaseClassic as MyDatabase } from "./db/my-database-classic";
//import { MyDatabaseModule as MyDatabase } from "./db/my-database-module";
import { MyDatabaseFunction as MyDatabase } from "./db/my-database-function";
import './module_a';

//const myDatabaseClassic = MyDatabase.instance;
const myDatabaseClassic = MyDatabase;
myDatabaseClassic.add({ name: 'Cicera', age: 63 });
myDatabaseClassic.add({ name: 'Maria', age: 62 });
myDatabaseClassic.add({ name: 'Antonio', age: 61 });
myDatabaseClassic.show();