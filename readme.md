# TODO APP

todo app by Prasetyo

## HOW TO RUN dengan DOCKER Registry

- import database di `database\todo4.sql`
- contoh configurasi ada di file .env
- jalankan perintah docker sesuai configurasi mesin anda. Sesuaikan configurasi database MYSQL

  `docker run -e MYSQL_HOST=172.17.0.1 -e MYSQL_USER=xxxx -e MYSQL_PASSWORD=xxxxx -e MYSQL_DBNAME=todo4 -p 3030:3030 userdocker/namaaplikasi`
