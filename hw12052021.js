<script>
    function test(num1, num2) {
        let temp1 = num1
        let temp2 = num2 
        let counter1 = 0
        let counter2 = 0

        while (temp1 > 0) {
            let number = temp1 % 10
            if (number % 2 === 0) {
                counter1++
            }
            temp1 /= 10
        }

        while (temp2 > 0) {
            let number = temp2 % 10
            if (number % 2 === 0) {
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
</script>