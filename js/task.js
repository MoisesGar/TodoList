class Task {

    static id = 0;

    constructor(tarea) {
        this.id = this.id + 1;
        this.tarea = tarea;
    }

    getId() {
        return this.id;
    }

    getTarea() {
        return this.tarea;
    }

    setId(id) {
        this.id = id;
    }
    setTarea(tarea) {
        this.tarea = tarea;
    }
}