class Task {
    constructor(desc, status) {
        this.desc = desc
        this.status = status
    }

    html(pos) {
        return `
        <div class="Task">
            <button onclick="removeTask(${pos})" class="Remove">x</button>
            <p>${this.desc}</p>
            <div class="Buttons">
                <button onclick="downTask(${pos})" class="Down">-</button>
                <button onclick="updateTask(${pos})" class="Add">+</button>
            </div>
        </div>
        `
    }
}