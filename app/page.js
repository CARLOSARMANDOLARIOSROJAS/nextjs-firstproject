import { Users } from "@/components/Users";
import axios from "axios";

async function fetchUsers() {
  const res = await axios.get('https://reqres.in/api/users');
  return res.data.data
}

async function IndexPage() {
  const users = await fetchUsers();
  return <Users users={users}/>
}
export default IndexPage

