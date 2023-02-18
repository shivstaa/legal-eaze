import { mutation } from "./_generated/server";

export default mutation(({ db, scheduler }, body, author) => {
  const message = { body, author };
  db.insert("messages", message);
//   await scheduler.runAfter()
});