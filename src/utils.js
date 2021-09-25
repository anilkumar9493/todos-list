export const sortTodos = (todos) => {
    if (todos && todos.length > 0) {
        return todos.sort((a, b) =>
            new Date(b.created_at) - new Date(a.created_at)
        )
    }
    return []
}