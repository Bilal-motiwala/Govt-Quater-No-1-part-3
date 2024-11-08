// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.


// • If the list is empty, print the message We need to find some users!


// • Remove all of the usernames from your array, and make sure the correct message is printed.



let userName :string [] = ["SHAHROZ" , "USAMA" , "NAJAM" , "ADMIN" , "ALI", "AQIB"]

if(userName.length === 6){
    
    
    userName= [];
    
    console.log(`Remove all of the usernames from the array `);
    
    console.log("We need to find some users! "+userName.length );
}

