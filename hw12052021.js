<script>
        // task1
        function test(num1, num2) {
        let temp1 = num1
        let temp2 = num2 
        let counter1 = 0
        let counter2 = 0

        while (temp1 > 0) {
            let number = temp1 % 10
            if (number > 5) {
                counter1++
            }
            temp1 /= 10
        }

        while (temp2 > 0) {
            let number = temp2 % 10
            if (number > 5) {
                counter2++  
            }
            temp2 /= 10
        }

        if (counter1 >= counter2) {
            return num1
        } else {
            return num2
        }
    }

    let userInput = [14, 33, 56, 686, 3, 34]
    let res = []

    for (let i = 0; i < userInput.length - 1; i+=2) {
        
        res.push(test(userInput[i], userInput[i+1]))
        
    }

    console.log(res)

    // task 2
    function getOddNums(arr) {
        
        return res        
    }

    mat = [[1, 11, 111], [5, 4, 4444], [3, 33, 123]]

    console.log(getOddNums(mat))

    //task 3
    function reverseNums(str){
        let res = ''
        let temp = ''
        for (let i = 0; i < str.length; i++) {
            if(!isNaN(parseInt(str.charAt(i)))){
                temp += str.charAt(i)
            } else {
                if (temp !== '') {
                    for (let i = temp.length - 1; i >= 0; i--) {
                        res += temp[i]                                              
                    }
                }
                temp = ''
                res += str.charAt(i)
            }
            if (i === str.length - 1) {
                if (temp !== '') {
                    for (let i = temp.length - 1; i >= 0; i--) {
                        res += temp[i]                                              
                    }
                }
            }
            
        }

        return res
    }
    
    word = "Danas123je456lep78dan9"
    
    console.log(reverseNums(word))

    // task4
    function abc(n){
    	let res = []
        let counter = 'A'
        let num = 1
        let row = -1
        for(let i = 0; i < n*n; i++){
        
        	if(i % n === 0){
            	row++
                res.push([])
            }
            
            res[row].push(counter)
            counter = String.fromCharCode(counter.charCodeAt(0) + num)
            if(i % 3 === 2){
            num = 1
            counter = 'A'
            }
            
        
        }
        
        return res
        
        
    }
    
    console.log(abc(5))

    //task5
</script>