INSERT INTO department (name)
VALUES
("sales"),
("customer service"),
("hr");

INSERT INTO role (title, salary, department_id)
VALUES
("sales manager", 12, 1),
("customer servic rep", 5, 2),
("hr person", 99, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
("steve", "jobs", 1, NULL),
("bob", "builder", 2, 1),
("dora", "explorer", 3, 1);