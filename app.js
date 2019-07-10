const romanInput = document.getElementById('romanInput');

romanInput.addEventListener("input", (e) => {
    intOutput.value = romanToInt(e.target.value);
})

function charToInt(c) {
    switch(c) {
        case 'I': return 1;
        case 'V': return 5;
        case 'X': return 10;
        case 'L': return 50;
        case 'C': return 100;
        default: return -1;
    }
}

function romanToInt(s) {
    let result = 0;
    if(s != null) {
        let n = s.length;
        let i = 0;
        while(i <= n-1) {
            if (i == (n-1)) {
                result += charToInt(s.toUpperCase().charAt(i));
            } else {
                let n1 = charToInt(s.toUpperCase().charAt(i));
                let n2 = charToInt(s.toUpperCase().charAt(i+1));
                if (n1 < n2) {
                    result = result - n1;
                } else {
                    result = result + n1;
                }
            }
            i++;
        }
        return result;
    }
}