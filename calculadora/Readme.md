## PRACTICA CALCULADORA
La práctica constará de dos cuadros de texto y de botones, cada uno de ellos con una función matemática asociada
(suma, resta, multiplicación, división...), que al pulsarlos realizara la operación entre los dos números introducidos
en los cuadros de texto y mostrará el resultado.
### Crear la aplicación
- ng new CalculadoraApp

### Pasos
- Importamos el FormsModule, ya que vamos a utilizar elementos de formulario --> app.module.ts
- Cambiamos el title en app.component.ts
- Declaramos 3 variables de clase en app.component.ts para almacenar los 2 números y el resultado.
- Añadimos el método que sumará los dos numeros.
- En la plantilla html añadimos el title interpolando la propiedad.
- Lo siguiente es crear el formulario. Para añadimos dos cuadros de texto y un form de tipo submit.
- Hacemos binding bidireccional entre los cuadros de texto y las variables creadas en la clase. (Banana inBox)
-

