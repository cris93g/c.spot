INSERT INTO houses
    (name, description, price, category)
VALUES
    ($1, $2, $3, $4)
returning *;