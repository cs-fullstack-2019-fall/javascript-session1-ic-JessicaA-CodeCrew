//Create a main function for all of your code. Keep asking the user to press 1, 2, or 3 until they press 'q' to quit.
//
// If they press 1, alert "Challenge goes here".
// If they press 2, alert "2".
// If they press 3, alert "Hello World".


function main()
{
    let userInput;
    while(userInput !== 'q')
    {
        userInput = prompt("Press 1, 2, or 3. Press q to quit");

        if (userInput === '1')
        {
            otherPrompt();
            alert("Challenge Goes Here");

        }
        else if (userInput === '2')
        {
            alert("2");
        }
        else if (userInput === '3')
        {
            alert("Hello World");
        }
    }
}

//Challenge
// If they press 1, ask them to press a, b, or c in a different function. If they press a, alert "A", if they press b, alert "B", if they press c, alert "C".

main();
function otherPrompt()
{
    var question = prompt("Press a, b, or c");
    if(question === 'a')
    {
        return  alert("A");
    }
    else if (question === 'b')
    {
        return  alert("B");
    }
    else if (question === 'c')
    {
        return  alert("C");
    }
}


