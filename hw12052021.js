<script>
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
</script>