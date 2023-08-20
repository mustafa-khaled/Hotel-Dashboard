import supabase from "./supabase";
import { PAGE_SIZE } from "../utils/constants";

export async function getGuests({ page }) {
  const from = (page - 1) * PAGE_SIZE;
  const to = from + PAGE_SIZE - 1;

  let query = supabase
    .from("guests")
    .select("id, fullName, email, nationality", { count: "exact" })
    .range(from, to);

  const { data, error, count } = await query;

  if (error) {
    throw new Error("Guests could not be loaded");
  }

  return { data, count };
}
