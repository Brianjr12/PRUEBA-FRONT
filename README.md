# PRUEBA-FRONT
Es una aplicación que creada para guardar y mostrar datos en un formato de card como, el nombre, fecha de nacimiento y comentarios.

Se utilizaron tecnologías como react js, jest, tailwind

# ESTRUCTURA

# Components

### Form

Componente encargado de renderizar un formulario para ingresar información de usuario.

#### Props:

- `saveUser`: Función que recibe y guarda la información del usuario.

#### Uso:

```jsx
<Form saveUser={saveUserFunction} />
```

#### Descripción:

Este componente renderiza un formulario que permite al usuario ingresar su nombre completo, fecha de nacimiento y comentarios. Cuando el formulario es enviado, la función `saveUser` es llamada para guardar la información del usuario.

---

### Cards

Componente encargado de renderizar una lista de tarjetas de usuario.

#### Props:

- `users`: Un arreglo de objetos que representan a los usuarios.
- `setUsers`: Función para actualizar la lista de usuarios.

#### Uso:

```jsx
<Cards users={usersArray} setUsers={setUsersFunction} />
```

#### Descripción:

Este componente recibe una lista de usuarios y renderiza una tarjeta para cada uno de ellos. Cada tarjeta muestra el nombre completo, fecha de nacimiento y comentarios del usuario. También proporciona la opción de eliminar el usuario de la lista.

---

### Card

Componente encargado de renderizar una tarjeta individual de usuario.

#### Props:

- `fullName`: El nombre completo del usuario.
- `birthDate`: La fecha de nacimiento del usuario.
- `comments`: Los comentarios del usuario.
- `users`: Un arreglo de objetos que representan a los usuarios.
- `setUsers`: Función para actualizar la lista de usuarios.

#### Uso:

```jsx
<Card
  fullName={userFullName}
  birthDate={userBirthDate}
  comments={userComments}
  users={usersArray}
  setUsers={setUsersFunction}
/>
```

#### Descripción:

Este componente muestra la información de un usuario en una tarjeta. Permite eliminar el usuario de la lista cuando se presiona el botón "X". La fecha de nacimiento se muestra en el formato `dd/mm/aaaa` y se calcula la edad en años.

---

# Estilos
Se uso el framework tailwind que permite dar estilo a la aplicación
---
# Flujo de Funcionamiento:
Cuando se carga la aplicación, verifica si hay usuarios almacenados en el almacenamiento local y los carga si existen.

Cuando se agrega un usuario a través del formulario, verifica si el nombre completo ya existe en la lista de usuarios y lo agrega si no.

Cuando se cambia el tema, actualiza el estado y aplica la clase dark al elemento HTML si el tema es "dark", o la remueve si el tema es "light".

Cada vez que el estado de los usuarios cambia, se actualiza el almacenamiento local para reflejar los cambios.


# Despligue 
Para desplegar la app se utilizo github pages.
1. Se creo un repositorio en Github con el nombre "PRUEBA-FRONT" y se clonó este repo.
2. Se añadio la propiedad home page en el json para indicar donde se encuenra el repositorio
"homepage": "https://Brianjr12.github.io/PRUEBA-FRONT"

3. Se creo el script para desplegar
"deploy":"gh-pages -d build"

# Referencias
Tutorial de como realizar el modo oscuro
https://youtu.be/_8FTL-xNz9Q?si=KzB8C1Eggjd8cm6o