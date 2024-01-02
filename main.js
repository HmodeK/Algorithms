console.log("****************************************************************** Exercise 1 ***************************************************************************")


printStarSeries(5, 3)

function printStarSeries(num , count){

    for(let i=0 ; i < count ; i++){
        for(let j =1 ;j <= num ; j++){
            let stars = '*'.repeat(j);
            console.log(stars)
        }

        for(let k=num-1 ; k>0 ; k--)
        {
            let stars = '*'.repeat(k);
            console.log(stars)
        }
        console.log("")
    }
}


console.log("****************************************************************** Exercise 2 ***************************************************************************")


const reverse = function(str){
        
    let reversed = ""   
    for(let i=str.length-1 ; i >=0 ; i-- ){
        reversed += str[i]
       
        
    }

    return reversed
  }
      
  console.log(reverse("dog")) //should return "god"
  console.log(reverse("race car")) //should return "rac ecar"


  console.log("****************************************************************** Exercise 3 ***************************************************************************")

  function firstNonRepeatingCharacter(str) {
    const charCount = {};
  
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      charCount[char] = (charCount[char] || 0) + 1;
    }
  

    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      if (charCount[char] === 1) {
        return char;
      }
    }
  
    return null; 
  }
  
  
  console.log(firstNonRepeatingCharacter("aabbccdee")); // Output: "d"
  console.log(firstNonRepeatingCharacter("abca"));      // Output: "b"
  
  console.log("****************************************************************** Exercise 4 ***************************************************************************")

  function encrypt(str){
    let encryptedString = "";
    for(i=0;i<str.length;i++){
        if(str[i]=="z"){
            encryptedString += "a"
        }else if(str[i] == "Z"){
            encryptedString += "A"
        }else{
            encryptedString+=String.fromCharCode(str[i].charCodeAt(0)+1)
        }
    }
    return encryptedString
}
console.log(encrypt("cat"))
      
      
      console.log("****************************************************************** Exercise 5 ***************************************************************************")
      
      
      
      const colors = ["red", "indigo", "white", "teal", "yellow"];
      const foods = ["bread", "cheese", "cucumber"];
      
      const jumble = function (arr1, arr2) {
        let jumbledArr = [];
      
       
        const combinedArr = arr1.concat(arr2);
      
        
        for (let i = combinedArr.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [combinedArr[i], combinedArr[j]] = [combinedArr[j], combinedArr[i]];
        }
      
        return combinedArr;
      }
      
      const result = jumble(colors, foods);
      console.log(result);
      

      console.log("****************************************************************** Exercise 6 ***************************************************************************")

      const rawDist = {
        A: 25,
        B: 25,
        C: 25,
        D: 25
      };
      
      function getLetter() {
        const randomNumber = Math.random() * 100;
        let cumulativeProbability = 0;
      
        for (const letter in rawDist) {
          cumulativeProbability += rawDist[letter];
      
          if (randomNumber <= cumulativeProbability) {
            return letter;
          }
        }
      
        
        return null;
      }
      
      
      const result1 = getLetter();
      console.log(result1);
      

      console.log("****************************************************************** Exercise 7 ***************************************************************************")



      class Node {
        constructor(data) {
          this.data = data;
          this.next = null;
        }
      }
      
      class LinkedList {
        constructor() {
          this.head = null;
        }
      
        insert(data) {
          const newNode = new Node(data);
          if (!this.head) {
            this.head = newNode;
          } else {
            let current = this.head;
            while (current.next) {
              current = current.next;
            }
            current.next = newNode;
          }
        }
      
        print() {
          let current = this.head;
          while (current) {
            console.log(current.data);
            current = current.next;
          }
        }
      
        removeDuplicates() {
          const seen = new Set();
          let current = this.head;
          let prev = null;
      
          while (current) {
            if (seen.has(current.data)) {
              // Remove the current node
              prev.next = current.next;
            } else {
              seen.add(current.data);
              prev = current;
            }
            current = current.next;
          }
        }
      }
      
      // Example usage:
      const linkedList = new LinkedList();
      linkedList.insert(1);
      linkedList.insert(2);
      linkedList.insert(3);
      linkedList.insert(2);
      linkedList.insert(4);
      linkedList.insert(1);
      
      console.log("Original Linked List:");
      linkedList.print();
      
      linkedList.removeDuplicates();
      
      console.log("\nLinked List after removing duplicates:");
      linkedList.print();
      