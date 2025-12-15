-- select all authors with cols in order lastName, firstName, and authorID
SELECT LastName, FirstName, AuthorID
FROM Authors;

-- select an author and list books
SELECT Title, Copyright, Titles.ISBN 
FROM Authors 
INNER JOIN AuthorISBN on Authors.AuthorID = AuthorISBN = AuthorISBN.AuthorID
INNER JOIN Titles ON AuthorISBN.ISBN = Titles.ISBN 
WHERE Authors.AuthorID = 3 
ORDER BY Title ASC;

-- add author 
INSERT INTO Authors (FirstName, LastName)
VALUES (Stephen, King);

-- add title for author 
INSERT INTO Titles (ISBN, Title, EditionNumber, Copyright)
VALUES ('2040123', 'Pauls Next Book', 2, '1996');
INSERT INTO AuthorISBN (AuthorID, ISBN)
VALUES (1, '2040123');
