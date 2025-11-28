
document.getElementById('salesForm').addEventListener('submit', function(event) 
{
    event.preventDefault();

    const salesInput = document.getElementById('sales').value;
    const salesArray = salesInput.split(',').map(s => parseFloat(s.trim()));
    console.log(salesArray)
    const counters = new Array(9).fill(0);

    salesArray.forEach(sale => 
    {
        const salary = Math.floor(200 + 0.09 * sale);

        if (salary >= 200 && salary <= 299) counters[0]++;
        else if (salary >= 300 && salary <= 399) counters[1]++;
        else if (salary >= 400 && salary <= 499) counters[2]++;
        else if (salary >= 500 && salary <= 599) counters[3]++;
        else if (salary >= 600 && salary <= 699) counters[4]++;
        else if (salary >= 700 && salary <= 799) counters[5]++;
        else if (salary >= 800 && salary <= 899) counters[6]++;
        else if (salary >= 900 && salary <= 999) counters[7]++;
        else if (salary >= 1000) counters[8]++;
    });

    // Display results
    const ranges = 
      [
        "$200–299", "$300–399", "$400–499", "$500–599", 
        "$600–699", "$700–799", "$800–899", "$900–999", "$1000 and over"
      ];

    let output = "<p>Salary Ranges:</p>";
    for (let i = 0; i < counters.length; i++) 
      {
        output += `<li>${ranges[i]}: ${counters[i]}</li>`;
      }
    output += "</ul>";

    document.getElementById('results').innerHTML = output;
});
