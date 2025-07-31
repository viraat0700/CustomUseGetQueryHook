import useGetQuery from "./hooks/useGetQuery";
import type { User } from "./hooks/useGetQuery";

const App = () => {
  const { data, isLoading, error } = useGetQuery(
    "https://cors-anywhere.herokuapp.com/https://jsonplaceholder.org/users"
  );
  console.log("data : ", data);

  if (isLoading) {
    return <>Loading... </>;
  }

  if (error) {
    return <>Error : {error}</>;
  }

  return (
    <>
      <ul>
        {data.map((user: User) => {
          console.log("User:", user);
          return (
            <li key={user.id}>
              {user.firstname} {user.lastname}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default App;
