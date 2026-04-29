const API_URL = "http://localhost:3000/posts";

const getAllPosts = async () => {
  try {
    const response = await fetch(API_URL);
    return await response.json();
  } catch (err) {
    console.error("Eroooor", err);
  }
};

const getPostById = async (id) => {
  try {
    const response = await fetch(`${API_URL}/${id}`);
    return await response.json();
  } catch (err) {
    console.error("Eroooor", err);
  }
};

const createPost = async (postData) => {
  try {
    await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(postData),
    });
  } catch (err) {
    console.error("Eroooor", err);
  }
};

const updatePost = async (id, postData) => {
  try {
    await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(postData),
    });
  } catch (err) {
    console.error("Eroooor", err);
  }
};

const deletePost = async (id) => {
  try {
    await fetch(`${API_URL}/${id}`, { method: "DELETE" });
  } catch (err) {
    console.error("Eroooor", err);
  }
};
