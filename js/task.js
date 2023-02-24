
class Task {

    static ids = 0;

    constructor(task) {
        this.constructor.ids += 1;
        this.id = this.constructor.ids;
        this.task = task;
    }

    getId() {
        return this.id;
    }

    getTarea() {
        return this.task;
    }

    setTarea(task) {
        this.tarea = task;
    }
}

const objeto1 = new Task("Ir de compras");
console.log(objeto1);

const objeto2 = new Task("Ir a la clase de raymundo");
console.log(objeto2);

const objeto3 = new Task("Ir al ITH");
console.log(objeto3);