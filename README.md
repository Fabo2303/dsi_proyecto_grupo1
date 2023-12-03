# Bienvenido

## Instrucciones

1. ### Instalar Node
   En este paso tendremos que descargar node. 
   https://nodejs.org/en
   En este link podrá encontrar el ejecutable.<br>
   No olvidar seleccionar que añada las variables de entorno.
1. ### Instalar JDK
   Procederemos con la instalación del JDK.
   https://www.oracle.com/java/technologies/downloads/<br>
   Debemos añadir la ruta de instalación en las variables.
2. ### Instalar IDE
   Tendremos que descargar un ide capaz de ejecutar los codigos del proyecto. Por ejemplo, Visual Studio Code
   https://code.visualstudio.com/Download
3. ### Instalar la extension Java Pack Extension
   Mediante el apartado extensión hacemos la instalación.
5. ### Instalar MySQL
   Tenemos que tener la base de datos lista.
   https://www.mysql.com/
6. ### Crear un esquema vacío 
   Tenemos que crear un esquema vacío, no es necesario crear tablas ya que el proyecto nos las creará
7. ### Preparar los archivos
   Editar el archivo de la ubicación dsi_springboot\src\main\resources\application.properties
   spring.jpa.hibernate.ddl-auto=update<br>
   spring.datasource.url=jdbc:mysql://localhost:3306/"""""Nombre de su esquema""""<br>
   spring.datasource.username="""" usuario (normalmente root) """"<br>
   spring.datasource.password="""" contraseña """"<br>
   spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver<br>
   spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQLDialect
9. ### Iniciar el BackEnd
    Ejecutar el proyecto SprinBoot desde su ide, normalmente es un icono de start
10. ### Iniciar el FrontEnd
    Ejecutar el proyecto React mediante el comando npm start.
11. ### Pruebas
    En esta parte, solo nos queda probar el código y esperar que no hayan fallas. <br>
    Cualquier bug que se presente puede reportarlo.
