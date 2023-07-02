// create your App component here
import React, {useState, useEffect} from "react";

function App () {
const [dog, setDog] = useState("");

useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then((res) => res.json())
    .then((image) => setDog(image.message))
}, [])

if(!dog) {
    return <h2>Loading...</h2>
}
return <p>
    <img src={dog} alt="A Random Dog" />
</p>
}

export default App;