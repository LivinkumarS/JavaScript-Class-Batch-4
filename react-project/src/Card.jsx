

export default function Card(prop) {

  return (
    <div className="card">
      <img src={prop.img} alt="actor image" />
      <div className="text">
        <h2>Name: {prop.name}</h2>
        <p>Age: {prop.age}</p>
        <p>No Of Movies Acted: {prop.movies}</p>
      </div>
    </div>
  );
}
