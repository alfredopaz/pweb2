#!/usr/bin/python3
import json
import cgi
import sqlite3

form = cgi.FieldStorage() 
name = form.getvalue('name')
name = 'Ford' #only for testing

conn = sqlite3.connect('imdb.db')
cur = conn.cursor()
sql = "SELECT Name FROM Actor WHERE Name like '%" + name + "%'"
print(sql)
for row in cur.execute(sql):
  print(row)
conn.close()
