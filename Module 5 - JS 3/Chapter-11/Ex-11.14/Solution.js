
const form = document.getElementById("form");

form.addEventListener("submit", function (event) 
{
    event.preventDefault();

    const text = document.getElementById("text").value.toLowerCase();

    const letterCounts = new Array(26).fill(0);

    for (let c = 97; c <= 122; c++) 
    {
        const letter = String.fromCharCode(c);

        let count = 0;
        let index = text.indexOf(letter);

        while (index !== -1) 
        {
            count++;
            index = text.indexOf(letter, index + 1);
        }

        letterCounts[c - 97] = count;
    }

    let table = "letter\tcount\n";
    table;

    for (let i = 0; i < 26; i++) 
    {
        const letter = String.fromCharCode(65 + i);
        table += `${letter}\t${letterCounts[i]}\n`;
    }

    document.getElementById("output").value = table;
});
