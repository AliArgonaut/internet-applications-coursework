
document.getElementById('form').addEventListener('submit', function(event) 
{
    event.preventDefault();

    const text = document.getElementById('text').value;
    const searchChar = document.getElementById('char').value;

    if (!searchChar) 
    {
        alert("Please enter a character to search for.");
        return;
    }

    let count = 0;
    let position = text.indexOf(searchChar);

    while (position !== -1) 
    {
        count++;
        position = text.indexOf(searchChar, position + 1);
    }

    document.getElementById('results').innerHTML = 
        `"${searchChar}" occurs ${count} times!`;
});
