/*
//Encapsulation
PS: Create a JavaScript class User for managing login credentials.
The class should contain:

username
password
isLoggedIn

Requirements:
Make password and isLoggedIn private.
Provide a login(password) method.
Provide a logout() method.
Provide an isAuthenticated() method.
The password should not be directly accessible from outside the class.
isLoggedIn should only be changed through login() and logout().
*/

class User{

    //Public Data
    username;
    
    //Private Data
    #password;
    #isLoggedIn = false;

    constructor(username, password){
        this.username = username;
        this.#password = password;
    }

    login(password){
        if(password === this.#password){
            this.#isLoggedIn = true;
            console.log("Access granted.");
        } else {
            console.log("Access denied.");    
        }

    }

    logout(){
        this.#isLoggedIn = false;
        console.log("User is logged out.");
    }

    isAuthenticated(){
        
        if(this.#isLoggedIn === false){
            console.log("The user is not logged in.");
        } else {
            console.log("The user is logged in.");
        }
        
        //return this.#isLoggedIn;
    }
}

//Creating object

const u1 = new User("Admin", "admin123");

u1.isAuthenticated();
u1.login("admin123");
u1.isAuthenticated();
u1.logout();
u1.isAuthenticated();

/* Output: -
The user is not logged in.
Access granted.
The user is logged in.
User is logged out.
The user is not logged in.
*/