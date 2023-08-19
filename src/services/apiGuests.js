import supabase from "./supabase";

export async function getGuests() {
  const { data: guests, error } = await supabase.from("guests").select("*");

  if (error) {
    throw new Error("Guests could not be loaded");
  }

  return guests;
}
