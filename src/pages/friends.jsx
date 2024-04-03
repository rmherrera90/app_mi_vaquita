
import { useEffect, useState } from "react";

const FriendsPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [groupName, setGroup] = useState(null);


  useEffect(() => {
    fetch(process.env.API_URL + 'groups/123')
    .then((response) => response.json())
      .then((group) => {
        setGroup(group.name);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <div className="App">
        <h1>Cargando...</h1>
      </div>
    );
  }

  return (
    <main className="flex justify-center items-center h-screen text-center flex-col gap-y-4 w-11/12 md:w-8/12 lg:w-7/12 mx-auto">
      <h1 className="text-4xl font-bold">{groupName}</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum
        odio eget urna tristique, vel dapibus enim sollicitudin. Quisque ac arcu
        pretium, fermentum urna nec, fermentum ex. Vivamus vel dictum nisi.
        Fusce auctor condimentum dolor, id condimentum tortor mollis sit amet.
        Sed eu metus et ligula volutpat lobortis.
      </p>
    </main>
  );
};

export { FriendsPage };
