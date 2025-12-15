-- changed firstName to FirstName, author to Authors, AuthorID
SELECT FirstName FROM Authors WHERE AuthorID = 3;

-- order by not order with 
SELECT ISBN, Title FROM Titles ORDER BY Title DESC;

-- single quotes and removed author id from values 
INSERT INTO Authors (FirstName, LastName) VALUES ('Jane', 'Doe');
