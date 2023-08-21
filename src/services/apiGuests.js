import supabase from "./supabase";
import { PAGE_SIZE } from "../utils/constants";

export async function getGuests({ page, search }) {
  const from = (page - 1) * PAGE_SIZE;
  const to = from + PAGE_SIZE - 1;

  let query = supabase
    .from("guests")
    .select("id, fullName, email, nationality", { count: "exact" })
    .range(from, to);

  // Filter by fullName
  if (search) {
    query = query.ilike("fullName", `%${search}%`);
  }

  const { data, error, count } = await query;

  if (error) {
    throw new Error("Guests could not be loaded");
  }

  return { data, count };
}

export async function CreateGuest({ newGuest }) {
  let query = await supabase.from("guests").insert([{ ...newGuest }]);

  const { data, error } = await query;

  if (error) {
    console.error(error);
    throw new Error("New Guest could not be created");
  }

  return data;
}
