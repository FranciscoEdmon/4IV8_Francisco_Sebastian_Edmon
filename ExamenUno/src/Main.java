import java.util.Scanner;

public class Main {

    static String nombre = "";
    static String apellidoPa = "";
    static String apellidoMa = "";
    static String fechaNacimiento = "";
    static boolean datosRegistrados = false;
    static Scanner sc = new Scanner(System.in);

    public static void main(String[] args) {
        int opcion = 0;

        do {
            mostrarMenu();
            opcion = sc.nextInt();
            sc.nextLine(); // Este de aqui limpia el buffer

            switch (opcion) {
                case 1:
                    registrarDatos();
                    break;
                case 2:
                    calcularVolumenes();
                    break;
                case 3:
                    imprimirDatos();
                    break;
                case 4:
                    System.out.println("Saliendo... ¡Mucho éxito!");
                    break;
                default:
                    System.out.println("Opción no válida. Intente de nuevo.");
            }
        } while (opcion != 4);
    }

    // Función para mostrar el menú
    public static void mostrarMenu() {
        System.out.println("\n--- MENÚ PRINCIPAL ---");
        System.out.println("1. Registrar datos personales");
        System.out.println("2. Calcular volúmenes (Cilindro y Cono)");
        System.out.println("3. Imprimir datos personales");
        System.out.println("4. Salir");
        System.out.print("Seleccione una opción: ");
    }

    // Función para registrar los datos
    public static void registrarDatos() {
        System.out.println("\n--- Registro de Datos ---");
        System.out.print("Nombre: ");
        nombre = sc.nextLine();
        System.out.print("Apellido Paterno: ");
        apellidoPa = sc.nextLine();
        System.out.println("Apellido Materno: ");
        apellidoMa = sc.nextLine();
        System.out.print("Fecha de Nacimiento: ");
        fechaNacimiento = sc.nextLine();

        // Validación simple: verificar que no estén vacíos
        if (nombre.isEmpty() || apellidoPa.isEmpty() || apellidoMa.isEmpty() || fechaNacimiento.isEmpty()) {
            System.out.println("Validación: Faltan datos por llenar.");
            datosRegistrados = false;
        } else {
            datosRegistrados = true;
            System.out.println("Datos guardados correctamente.");
        }
    }

    // Función para el calculo de volumenes
    public static void calcularVolumenes() {
        System.out.println("\n--- Cálculo de Volúmenes ---");

        // Cálculo del volumen de un Cilindro
        System.out.println("> Cilindro");
        System.out.print("Radio: ");
        double rCil = sc.nextDouble();
        System.out.print("Altura: ");
        double hCil = sc.nextDouble();

        if (rCil > 0 && hCil > 0) {
            double vCil = Math.PI * Math.pow(rCil, 2) * hCil;
            System.out.printf("Volumen del Cilindro: %.2f\n", vCil);
        } else {
            System.out.println("Error: Las medidas deben ser positivas.");
        }

        // Cálculo del volumen de un cilindro
        System.out.println("\n> Cono");
        System.out.print("Radio: ");
        double rCon = sc.nextDouble();
        System.out.print("Altura: ");
        double hCon = sc.nextDouble();

        if (rCon > 0 && hCon > 0) {
            double vCon = (1.0 / 3.0) * Math.PI * Math.pow(rCon, 2) * hCon;
            System.out.printf("Volumen del Cono: %.2f\n", vCon);
        } else {
            System.out.println("Error: Las medidas deben ser positivas.");
        }
    }

    // Función para la Opción 3
    public static void imprimirDatos() {
        System.out.println("\n--- Datos en Pantalla ---");
        if (datosRegistrados) {
            System.out.println("Usuario: " + nombre + " " + apellidoPa + " " + apellidoMa);
            System.out.println("Nacido el: " + fechaNacimiento);
        } else {
            System.out.println("No hay datos para mostrar. Registre en la opción 1.");
        }
    }
}