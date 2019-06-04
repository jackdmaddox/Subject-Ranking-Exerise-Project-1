CREATE TABLE topics(
    id serial PRIMARY KEY,
    topic_name VARCHAR NOT NULL,
    topic_understanding VARCHAR
);

insert into topics 
(topic_name, topic_understanding)
VALUES
('HTML', 'Great, 4'),
('CSS', 'Okay, 2'),
('Javascript', 'Good, 3'),
('PostgreSQL', 'Good, 3'),
('Node', 'Good, 3'),
('Express', 'Okay, 2');

CREATE TABLE rankings(
    id serial PRIMARY KEY,
    ranking_rating VARCHAR NOT NULL
);

insert into rankings
(ranking_rating)
VALUES
('Awesome, 5'),
('Great, 4'),
('Good, 3'),
('Okay, 2'),
('Poor, 1'),
('Unranked, 0');

-- db name is topic_ranks_exercise

-- `UPDATE topics SET ${topic_understanding} = ${ranking_rating} WHERE topic_name = ${topic_name};` 

UPDATE topics SET topic_understanding = 'Good, 3' WHERE topic_name = 'Express';