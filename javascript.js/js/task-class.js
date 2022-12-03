class Person
{
    id=0;
   firstName;
   lastName;

   getId(id){
    return this.#id;
   }

   setId(id){
    this.#id =id;
   }

   fullName(){
    return this.firstName+''+this.lastName
   }
}



let Person =new person();
person.firstName='lara';
person.lastName='mzyd';
console.log(person.fullName(),person.id)


