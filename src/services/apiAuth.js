import axios from "./axios";
import supabase, { supabaseUrl } from "./supabase";

export async function signup({ fullName, email, password }) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        fullName,
        avatar: "",
      },
    },
  });
  if (error) throw new Error(error.message);

  return data;
}

export async function login({ email, password }) {
  try {
    const response = await axios.post("auth/v1/login", {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
}

export async function getCurrentUser() {
  try {
    const token = localStorage.getItem("USER_TOKEN");

    const response = await axios.post("USER/v1/verfiyUser", {
      token,
    });

    return response.data;
  } catch (error) {
    console.error("Get current user error:", error);
    throw error;
  }
}

export async function updateCurrentUser({ fullName, password, avatar }) {
  // 1) Update Full Name Or Password
  let updateData;
  if (password) updateData = { password };
  if (fullName) updateData = { data: { fullName } };

  const { data, error } = await supabase.auth.updateUser(updateData);
  if (error) throw new Error(error.message);
  if (!avatar) return data;

  // 2) Upload Avatar Image
  const fileName = `avatar-${data.user.id}-${Math.random()}`;

  const { error: storageError } = await supabase.storage
    .from("avatars")
    .upload(fileName, avatar);
  if (storageError) throw new Error(storageError.message);

  // 3) Update Avatar Image
  const { data: updatedUser, error: updatedError } =
    await supabase.auth.updateUser({
      data: {
        avatar: `${supabaseUrl}/storage/v1/object/public/avatars/${fileName}`,
      },
    });

  if (updatedError) throw new Error(updatedError.message);
  return updatedUser;
}
