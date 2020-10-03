# pwGenerator
The user is asked 5 questions:
    1- how many characters the user wants the password to be
    2- if user wants an upper case included in the password
    3- if user wants a lower case included in the password
    4- if user wants a number included in the password
    5- if user wants a special character included in the password

Conditions:
    If user inputs a character length between 8-128 for question 1 then
    the other options will be asked.

    If user doesn't input a length or inputs a length thats less than 8 or greater than 128
    question 1 will be asked again and again until condition is met.

    If user does not pick at least one option for the password (uppercase,lowercase,numbers or special characters)
    then the user will have to start over.

Generating random password:
    Once the user has successfully entered length and options, the password will generate 
    to their specific input.