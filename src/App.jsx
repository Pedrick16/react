import MyButtonComponents from "./components/MyButtonComponents";
function App() {
  const Cities = ["Antipolo City", "Davao City", "Bacolod City"];

  const people = [
    {
      id:0,
      name:"Pedrick",
      age:20
    },
    {
      id:1,
      name:"Pedrick",
      age:21
    },
    {
      id:2,
      name:"Pedrick",
      age:22
    },
  ];
  // const ListPeople = people.map((person, index) => (
  //   <tr key={index}>
  //     <td>{person.id}</td>
  //     <td>{person.name}</td>
  //     <td>{person.age}</td>
  //   </tr>
  // ))

  // const ListPeople = people.map((person, index) => {
  //   return(

  //     <tr key={index}>
  //     <td>{person.id}</td>
  //     <td>{person.name}</td>
  //     <td>{person.age}</td>
  //     </tr>

  // )

  // })

  //  const ListCities = Cities.map((city, index) => {
  //   return <li key={index}> {city}</li>
  //  })
  // if(people.length === 0){
  //   return <h1>....Loading</h1>
  // }

  const handleSubmit = (event) => {
    event.preventDefault();
    const firstName = event.target.elements.fname.value;
    const lastName = event.target.elements.lname.value;
  
    if (firstName.length > 0 && lastName.length > 0) 
    {
      console.log('First Name:', firstName);
      console.log('Last Name:', lastName);
      event.target.reset();
    }
    else
    {
      alert('Please complete');
    }
  };

  return (
    <div className=" container pt-5">
      <MyButtonComponents />
      <h1 className=" text-center">List</h1>
      <ul className=" list-group list-unstyled ">
        {Cities.map((city, index) => (
          <li key={index}>{city}</li>
        ))}
        {/* {ListCities} */}
      </ul>
      {people.length > 0 ? (
        <div>
          <h1 className="text-center">Table</h1>
          <table className="table table-hover mt-3">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Age</th>
              </tr>
            </thead>
            <tbody>
              {/* {ListPeople} */}

              {people.map((person) => (
                <tr key={person.id}>
                  <td>{person.id}</td>
                  <td>{person.name}</td>
                  <td>{person.age > 19 ? "adult" : "Young"}</td>
                </tr>
              ))}

              {/* {people.filter((person) => person.age <= 20).map((person) => (
           <tr key={person.id}>
           <td>{person.id}</td>
           <td>{person.name}</td>
           <td>{person.age}</td>
         </tr>
        ))} */}
            </tbody>
          </table>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}

      {people.length > 0 && (
        <div>
          <h1 className="text-center">Table</h1>
          <table className="table table-hover mt-3">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Age</th>
              </tr>
            </thead>
            <tbody>
              {/* {ListPeople} */}

              {people.map((person) => (
                <tr key={person.id}>
                  <td>{person.id}</td>
                  <td>{person.name}</td>
                  <td>{person.age > 19 ? "adult" : "Young"}</td>
                </tr>
              ))}

              {/* {people.filter((person) => person.age <= 20).map((person) => (
           <tr key={person.id}>
           <td>{person.id}</td>
           <td>{person.name}</td>
           <td>{person.age}</td>
         </tr>
        ))} */}
            </tbody>
          </table>
        </div>
      )}


      

    <form  className=" w-50 form my-5" onSubmit={handleSubmit}>
      <input type="text" name="fname"  className="form-control" placeholder="Enter your Firstname"  />
      <input type="text" name="lname" className="form-control" placeholder="Enter your lastname"  />
      <button className="btn btn-success" type="submit">Submit</button>
    </form>


    </div>
  );
}

export default App;
