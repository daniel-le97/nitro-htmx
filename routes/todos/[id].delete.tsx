export default defineEventHandler(async(event) => {
    const id = Number(event.context.params.id)
    await db.delete(todos).where(eq(todos.id, id)).run()
    // we need to send an empty string back to replace the deleted todo
    return ''
})