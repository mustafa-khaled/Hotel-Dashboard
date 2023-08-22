import supabase from "./supabase";
import { PAGE_SIZE } from "../utils/constants";

export async function getGuests({ page, search }) {
  const from = (page - 1) * PAGE_SIZE;
  const to = from + PAGE_SIZE - 1;

  let query = supabase
    .from("guests")
    .select("*", { count: "exact" })
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

export async function CreateEditGuest(newGuest, id) {
  // 1. Create/edit cabin
  let query = supabase.from("guests");

  // A) CREATE
  if (!id) query = query.insert([{ ...newGuest }]);

  // B) EDIT
  if (id) query = query.update({ ...newGuest }).eq("id", id);

  const { data, error } = await query.select().single();

  if (error) {
    throw new Error("New Guest could not be created");
  }

  return data;
}

export async function deleteGuest(id) {
  const { data, error } = await supabase.from("guests").delete().eq("id", id);

  if (error) {
    console.log(error);
    throw new Error("Cabin Could Not Be Deleted");
  }

  return data;
}
