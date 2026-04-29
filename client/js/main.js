const tableBody = document.getElementById("tableBody");
const renderTable = async () => {
  const posts = await getAllPosts();

  tableBody.innerHTML = "";

  posts.forEach((post, index) => {
    tableBody.innerHTML += `
            <tr>
                <td>${index + 1}</td> 
                <td>${post.title}</td>
                <td>${post.views}</td>
                <td>
                    <button class="btn btn-warning btn-sm" onclick="prepareEdit('${post.id}')">Edit</button>
                    <button class="btn btn-danger btn-sm" onclick="prepareDelete('${post.id}')">Delete</button>
                </td>
            </tr>`;
  });
};
const prepareAdd = () => {
  document.getElementById("addForm").reset();
};
const handleAdd = async (event) => {
  event.preventDefault();
  const postData = {
    title: document.getElementById("addTitle").value,
    views: parseInt(document.getElementById("addViews").value),
  };

  await createPost(postData);

  const modalElem = document.getElementById("addModal");
  const modalInstance = bootstrap.Modal.getOrCreateInstance(modalElem);
  modalInstance.hide();

  renderTable();
};

const prepareEdit = async (id) => {
  const post = await getPostById(id);
  document.getElementById("editId").value = post.id;
  document.getElementById("editTitle").value = post.title;
  document.getElementById("editViews").value = post.views;

  const modalElem = document.getElementById("editModal");
  const modalInstance = bootstrap.Modal.getOrCreateInstance(modalElem);
  modalInstance.show();
};

const handleEdit = async () => {
  const id = document.getElementById("editId").value;
  const postData = {
    title: document.getElementById("editTitle").value,
    views: parseInt(document.getElementById("editViews").value),
  };

  await updatePost(id, postData);

  const modalElem = document.getElementById("editModal");
  const modalInstance = bootstrap.Modal.getOrCreateInstance(modalElem);
  modalInstance.hide();

  renderTable();
};
const prepareDelete = (id) => {
  document.getElementById("deleteId").value = id;

  const modalElem = document.getElementById("deleteModal");
  const modalInstance = bootstrap.Modal.getOrCreateInstance(modalElem);
  modalInstance.show();
};

const confirmDelete = async () => {
  const id = document.getElementById("deleteId").value;
  await deletePost(id);

  const modalElem = document.getElementById("deleteModal");
  const modalInstance = bootstrap.Modal.getOrCreateInstance(modalElem);
  modalInstance.hide();

  renderTable();
};
renderTable();
