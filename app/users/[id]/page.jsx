import axios from 'axios';

async function getUserId (id) {
  const res = await axios.get(`https://reqres.in/api/users/${id}`)
  return res.data.data;
}

// async function getUser(id) {
//   const res = await fetch(`https://reqres.in/api/users/${id}`);
//   const data = await res.json();
//   return data.data;
// }

async function UsersPage({ params }) {
  const user = await getUserId(params.id);

  return (
    <div className="row">
      <div className="col-md-6 offset-md-3">
        <div className="card">
          <div className="card-header text-center">
            <img src={user.avatar} alt={user.email} />
          </div>
          <div className="card-body text-center">
              <h3>
                {user.id} {user.first_name} {user.last_name}
              </h3>
              <p>{user.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UsersPage;
