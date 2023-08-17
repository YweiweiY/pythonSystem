## Prerequisite
+ Node.js
+ Django

## vscode extensions
install SQLite
## Setup Locally

```bash
cd Ecommerce
python manage.py makemigrations
python manage.py migrate

pip install -r requirements.txt
```
```python
python manage.py runserver
```

```bash
cd client
yarn install
yarn start
```

ctrl+shift+p input 
sqlite: open database
```bash
 --> choose db.sqlite3
 ```
you wile see SQLITE EXPLORER in explorer(left)
choose auth_user and right click
choose New QUERY[INSERT]

```sql
-- SQLite
INSERT INTO auth_user (id, password, last_login, is_superuser, username, last_name, email, is_staff, is_active, date_joined, first_name)
VALUES(2, 'hashed_password', '2023-08-16 13:26:57', 0, 'john_doe', 'Doe', 'john@example.com', 0, 1, '2023-08-16 13:26:57', 'John');
```
save the file and right click ,run query


🎉 And that's it! You will now be able to visit <a href="http://localhost:3000/">http://localhost:3000/</a> URL and see your application up and running.



