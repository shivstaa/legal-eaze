import { query } from "./_generated/server";

export default query(async ({ db }) => {
  console.log("list messages");
  return await db.query("messages").collect();
});